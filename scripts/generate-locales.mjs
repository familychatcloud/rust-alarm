import { access, writeFile } from "node:fs/promises";

const apple = "https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062";
const play = "https://play.google.com/store/apps/details?id=com.noler.app";
const separator = "XQZFIELDQZX";

const source = [
  "Free Rust Alarm Clock — No Ads, No Tracking, No Bloat",
  "A lightweight offline talking alarm for iPhone, iPad, and Android.",
  "Hear why the alarm is ringing",
  "Do not wake up to a meaningless ring. Noler speaks the label you wrote, such as “Let's go to school,” “Take your medicine,” or “Leave for the airport.” You hear the purpose immediately, even when you are half asleep.",
  "Why choose Noler?",
  "No ads, no subscription, no in-app purchase, no account, no analytics, and no behavioral tracking.",
  "Normal alarm use is fully offline. Alarms, labels, settings, speech, and scheduling stay on your device without Wi-Fi or mobile data.",
  "No weather, horoscope, news, sleep tracking, snore recording, advertising, or cloud-sync workload running behind your alarm.",
  "Small and focused",
  "The current iOS package is 11.5 MB versus Alarmy's 237.5 MB—about 20 times smaller. Noler's current Android App Bundle uploaded to Google Play is 5.6 MB.",
  "Battery saving is a priority",
  "In the owner's same-phone overnight test, Noler used about 3% battery versus Alarmy's 10%—roughly 3 times lower overnight drain. Results vary by device and settings, but Noler avoids the networking and background work those extra features require.",
  "39 interface locales and 24 alarm-voice choices",
  "The app offers 39 UI locale choices across 32 distinct languages. Alarm labels can be spoken using 24 voice-language choices available on the device.",
  "Download the free alarm clock",
  "This repository is a product-information page, not an open-source distribution. The application source code is proprietary.",
  "All 39 locales",
  "Platform",
  "Official download",
  "iPhone and iPad",
  "Full evidence and Alarmy comparison",
  "Privacy policy",
  "Support",
];

const locales = [
  ["ar", "ar", "العربية"], ["ca", "ca", "Català"],
  ["hr", "hr", "Hrvatski"], ["cs", "cs", "Čeština"],
  ["da", "da", "Dansk"], ["nl", "nl", "Nederlands"],
  ["en-AU", "en", "English (Australia)"], ["en-CA", "en", "English (Canada)"],
  ["en-GB", "en", "English (UK)"], ["fi", "fi", "Suomi"],
  ["fr", "fr", "Français"], ["fr-CA", "fr", "Français (Canada)"],
  ["de", "de", "Deutsch"], ["el", "el", "Ελληνικά"],
  ["he", "he", "עברית"], ["hi", "hi", "हिन्दी"],
  ["hu", "hu", "Magyar"], ["id", "id", "Bahasa Indonesia"],
  ["it", "it", "Italiano"], ["ja", "ja", "日本語"],
  ["ko", "ko", "한국어"], ["ms", "ms", "Bahasa Melayu"],
  ["nb", "no", "Norsk bokmål"], ["pl", "pl", "Polski"],
  ["pt-BR", "pt", "Português (Brasil)"], ["pt-PT", "pt", "Português (Portugal)"],
  ["ro", "ro", "Română"], ["ru", "ru", "Русский"],
  ["sk", "sk", "Slovenčina"], ["es", "es", "Español"],
  ["es-419", "es", "Español (Latinoamérica)"], ["sv", "sv", "Svenska"],
  ["th", "th", "ภาษาไทย"], ["tr", "tr", "Türkçe"],
  ["uk", "uk", "Українська"], ["vi", "vi", "Tiếng Việt"],
];

async function translate(target) {
  if (target === "en") return source;
  const protect = (value) => value
    .replaceAll("Rust", "XQZRUSTQZX")
    .replaceAll("Noler", "XQZNOLERQZX")
    .replaceAll("Alarmy", "XQZALARMYQZX");
  const restore = (value) => value.trim()
    .replaceAll("XQZRUSTQZX", "Rust")
    .replaceAll("XQZNOLERQZX", "Noler")
    .replaceAll("XQZALARMYQZX", "Alarmy");
  const protectedSource = source.map(protect);
  const params = new URLSearchParams({
    client: "gtx", sl: "en", tl: target, dt: "t", q: protectedSource.join(separator),
  });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`);
  if (!response.ok) throw new Error(`translation ${target}: HTTP ${response.status}`);
  const payload = await response.json();
  const joined = payload[0].map((part) => part[0]).join("");
  const translated = joined.split("XQZFIELDQZX");
  if (translated.length !== source.length) {
    // Some languages cause the free endpoint to alter or merge a delimiter.
    // Fall back to independent requests so a field can never inherit its
    // neighbour's meaning merely to make generation faster.
    return Promise.all(protectedSource.map(async (value) => {
      const one = new URLSearchParams({ client: "gtx", sl: "en", tl: target, dt: "t", q: value });
      const result = await fetch(`https://translate.googleapis.com/translate_a/single?${one}`);
      if (!result.ok) throw new Error(`translation ${target}: HTTP ${result.status}`);
      const body = await result.json();
      return restore(body[0].map((part) => part[0]).join(""));
    }));
  }
  return translated.map(restore);
}

function page(locale, language, t) {
  return `<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="150" alt="${t[0]}">

# ${t[0]}

### ${t[1]}
</div>

## ${t[2]}

${t[3]}

## ${t[4]}

- ${t[5]}
- ${t[6]}
- ${t[7]}

## ${t[8]}

${t[9]}

## ${t[10]}

${t[11]}

## ${t[12]}

${t[13]}

## ${t[14]}

| ${t[17]} | ${t[18]} |
|---|---|
| ${t[19]} | [Apple App Store](${apple}) |
| Android | [Google Play](${play}) |

[${t[20]}](README.md) · [${t[21]}](https://noler.com/privacy) · [${t[22]}](https://noler.com/support)

---

**${t[15]}**

<!-- Locale: ${locale}. Generated from scripts/generate-locales.mjs. -->
`;
}

// Translate once per language and reuse the result for regional variants.
const cache = new Map();
const startArg = process.argv.find((arg) => arg.startsWith("--start="));
const startLocale = startArg?.slice("--start=".length);
let started = !startLocale;
for (const [locale, target, language] of locales) {
  if (!started) {
    started = locale === startLocale;
    if (!started) continue;
  }
  const output = `README.${locale}.md`;
  if (!process.argv.includes("--force")) {
    try {
      await access(output);
      process.stdout.write(`kept ${output}\n`);
      continue;
    } catch {
      // Missing output: generate it below.
    }
  }
  if (!cache.has(target)) cache.set(target, await translate(target));
  await writeFile(output, page(locale, language, cache.get(target)), "utf8");
  process.stdout.write(`generated ${output}\n`);
}
