/**
 * Render the 38 non-US marketing pages from the reviewed full-depth source.
 * README.md remains the canonical, hand-maintained English evidence page.
 *
 * Every generated page must retain the same substantive structure as the
 * canonical page. No translation or network request occurs during generation.
 */
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const source = JSON.parse(await readFile(new URL("../data/localized-seo.json", import.meta.url), "utf8"));
const canonicalUrl = new URL("../README.md", import.meta.url);
const canonical = await readFile(canonicalUrl, "utf8");
const expectedHash = source.github_full_content_parity?.canonical_sha256;
const actualHash = createHash("sha256").update(canonical).digest("hex");
if (actualHash !== expectedHash) {
  throw new Error("README.md changed; review it before regenerating localized pages");
}

const measure = (markdown, locale) => {
  const comparison = markdown.split("<!-- section:comparison -->")[1]?.split("<!-- section:")[0] ?? "";
  const downloads = markdown.split("<!-- section:downloads -->")[1]?.split("<!-- section:")[0] ?? "";
  const tableRows = (markdown.match(/^\|[^\n]+\|$/gm) ?? []).filter((line) => !/^\|[-| ]+\|$/.test(line));
  const downloadRows = (downloads.match(/^\|[^\n]+\|$/gm) ?? []).filter((line) => !/^\|[-| ]+\|$/.test(line)).length - 1;
  const parity = {
    h1: (markdown.match(/^# /gm) ?? []).length,
    h2: (markdown.match(/^## /gm) ?? []).length,
    h3: (markdown.match(/^### /gm) ?? []).length,
    bullets: (markdown.match(/^- /gm) ?? []).length,
    blockquotes: (markdown.match(/^> /gm) ?? []).length,
    table_rows: tableRows.length,
    comparison_rows: (comparison.match(/^\| \*\*[^\n]+\|$/gm) ?? []).length,
    download_rows: downloadRows,
    http_markdown_links: (markdown.match(/\]\(https?:\/\//g) ?? []).length,
    images: (markdown.match(/<img /g) ?? []).length,
    ui_count: source.locales[locale].github.full_content_contract.language_names.ui.length,
    voice_count: source.locales[locale].github.full_content_contract.language_names.voices.length,
  };
  return parity;
};

let generated = 0;
for (const [locale, row] of Object.entries(source.locales)) {
  const page = row.github;
  const expected = page.full_content_contract?.parity;
  if (!expected) throw new Error(`${locale}: missing full-content contract`);

  const actual = measure(page.markdown, locale);
  for (const [field, value] of Object.entries(expected)) {
    if (actual[field] !== value) {
      throw new Error(`${locale}: ${field} ${actual[field]}/${value}`);
    }
  }

  const badges = [...page.markdown.matchAll(/<a [^\n]+?<img [^\n]+?height="(\d+)"/g)].map((match) => match[1]);
  if (badges.length !== 2 || badges.some((height) => height !== "60")) {
    throw new Error(`${locale}: official store badges must both be 60px high`);
  }

  if (page.path === "README.md") continue;
  await writeFile(new URL(`../${page.path}`, import.meta.url), page.markdown, "utf8");
  generated += 1;
}

if (generated !== 38) throw new Error(`expected 38 generated locale pages, found ${generated}`);
process.stdout.write(`generated ${generated} full-depth locale pages; validated all 39\n`);
