/**
 * Render the 38 regional/non-US README pages from reviewed editorial copy.
 * README.md remains the hand-maintained, evidence-rich comparison page.
 */
import { readFile, writeFile } from "node:fs/promises";

const source = JSON.parse(await readFile(new URL("../data/localized-seo.json", import.meta.url), "utf8"));
const appStore = "https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062";
const googlePlay = "https://play.google.com/store/apps/details?id=com.noler.app";
let generated = 0;

for (const locale of Object.values(source.locales)) {
  const page = locale.github;
  if (page.path === "README.md") continue;

  const icon = `<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="150" alt="${page.image_alt}">`;
  if (!page.markdown.includes(icon)) {
    throw new Error(`${locale.app_locale}: reviewed page is missing its localized icon description`);
  }

  const downloads = `<div align="center">\n${icon}\n\n<a href="${appStore}"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Apple App Store"></a>\n<a href="${googlePlay}"><img src="assets/google-play-badge.png" height="60" alt="Google Play"></a>\n</div>`;
  await writeFile(
    new URL(`../${page.path}`, import.meta.url),
    page.markdown.replace(icon, downloads),
    "utf8",
  );
  generated += 1;
}

if (generated !== 38) throw new Error(`expected 38 generated locale pages, found ${generated}`);
process.stdout.write(`generated ${generated} reviewed locale pages; kept README.md\n`);
