# Alarm: No Ads, Zero Data Usage

## A lightweight offline alarm for early starts

<div align="center">
<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="150" alt="A lightweight offline alarm for early starts">

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Apple App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Google Play"></a>
</div>

Start the day with a reminder you can hear. Noler reads your alarm label aloud, works offline and keeps your alarms on your device. No account or subscription.

An early start, the school run or a flight to catch: give your alarm a message that makes sense. Noler is a lightweight offline alarm clock that speaks the label you enter, using speech on your device.

Set a one-off alarm or repeat it on the days you choose. Check your next alarm at a glance, then snooze or dismiss it with large controls. If speech is unavailable, an alarm sound provides the fallback.

Everyday alarm use works without Wi-Fi or mobile data. Schedules, spoken labels, alarm records, attachments and settings stay on your device. There are no ads, analytics, behavioural tracking, accounts, cloud syncing, subscriptions or in-app purchases.

A battery-conscious approach: leave out unnecessary work. Noler has no weather or horoscope feeds, ads, analytics, cloud syncing or background online feeds. That avoids the network and processing these services need. Battery use varies with your phone, settings and alarms; savings are not guaranteed.

Rust and Dioxus power the shared app core and interface, with 39 interface locales. The app stays focused on alarms, without sleep tracking, snore recording or news feeds.

Android includes the open-source Flite engine as an English speech fallback when there is no usable system text-to-speech engine. Installed languages affect voice availability. Optional keep-alive mode starts switched off and may increase battery use.

Online pages in Settings, including Terms and Privacy, load only when you choose to open them.

## Noler and Alarmy: different priorities

| # | Noler and Alarmy: different priorities | Alarm: No Ads, Zero Data Usage | Alarmy |
|---|---|---|---|
| 1 | Purpose | Focused alarm clock | Broader alarm, sleep and morning-routine features |
| 2 | Spoken alarm labels | Reads your chosen alarm label aloud | See its current listing; not compared here |
| 3 | Application stack | Rust + Dioxus; native Swift/Kotlin bridges | Complete current production stack not publicly disclosed |
| 4 | iOS package size | 11.5 MB (≈1/20) | 237.5 MB |
| 5 | Android upload size | 5.6 MB upload bundle | No single device-independent package size published |
| 6 | Ads | None | Yes |
| 7 | Purchases and subscription | None | In-app purchases and premium subscription |
| 8 | Normal offline use | Normal alarm operation works offline | Online extras need a connection; basic offline alarms not compared |
| 9 | Weather | None | Yes (Android) |
| 10 | Horoscope | None | Yes (Android) |
| 11 | Sleep and snore features | None | Yes |
| 12 | Interface locales | 39 in-app language and region choices | Not compared |
| 13 | Battery approach | Avoids unrelated online service work; no guaranteed saving | No controlled battery comparison is claimed |

2026-09-19 · US App Store · Noler: 11,506,688 B · Alarmy: 237,476,864 B · Alarmy / Noler ≈20:1.

Size evidence dated 2026-09-19 uses the US Apple catalog: Noler 11,506,688 bytes (11.5 MB), Alarmy 237,476,864 bytes (237.5 MB), approximately a 20:1 package-size ratio. These are package sizes, not memory use. The Android 5.6 MB figure is Noler’s uploaded App Bundle; split delivery means download and installed sizes vary by device. It is not an installed-size promise. The 39 interface choices come from Noler’s in-app picker, not an equivalent count for Alarmy. Weather and horoscope evidence concerns Alarmy on Android. Battery use varies by device, settings and enabled features.

[Full evidence and detailed comparison (English)](README.md)

Sources: [Noler · App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) · [Noler · Google Play](https://play.google.com/store/apps/details?id=com.noler.app) · [Alarmy · App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766) · [Alarmy · Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan) · [Alarmy · Android · Horoscope](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Features and package sizes can change. Alarmy belongs to its respective owner; this project is not affiliated with or endorsed by Alarmy or DelightRoom.

[Apple App Store](https://apps.apple.com/app/id6765933062) · [Google Play](https://play.google.com/store/apps/details?id=com.noler.app)

[All languages and regions](LANGUAGES.md) · [noler.com/privacy](https://noler.com/privacy) · [noler.com/support](https://noler.com/support)

This repository provides product information. The app source is proprietary and is not published here. The bundled Flite speech engine is open source.

<!-- Locale: en-AU. Editorial proposal; no auto-translation. -->
