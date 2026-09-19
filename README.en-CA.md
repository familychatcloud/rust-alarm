# Alarm: No Ads, Zero Data Usage

## Private offline alarms with spoken reminders

<div align="center">
<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="150" alt="Private offline alarms with spoken reminders">

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Apple App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Google Play"></a>
</div>

Hear what your alarm is for, even on a sleepy morning. Spoken labels, simple repeating alarms and private on-device storage. No ads, account or cloud sync.

Make your morning alarm mean something. Noler is a lightweight talking alarm clock that reads your own label aloud, whether it says "Time for work" or "Leave for school." Speech runs on your device for normal offline alarm use.

Choose a one-time alarm or repeat it on selected days. See the next alarm at a glance. Large snooze and dismiss controls keep mornings simple, and an alarm sound is available if speech cannot be used.

Scheduling, speech, labels and alarm records work without Wi-Fi or mobile data. Your alarms, settings and attachments stay on your device. No ads, analytics, behavioural tracking, account, cloud sync, subscription or in-app purchase.

Saving battery starts by avoiding extra work. Noler has no weather or horoscope feeds, ads, analytics, cloud syncing or background online feeds. It avoids their network and processing workload. Battery use still depends on your device, settings and alarms; no fixed saving is promised.

A shared Rust and Dioxus app core and interface keeps development focused on local alarms. Choose from 39 interface locales. There is no sleep tracking, snore recording or news feed.

On Android, the bundled open-source Flite engine supplies an English voice if no usable system text-to-speech engine is available. Voices depend on installed languages. Optional keep-alive mode is off by default and may increase battery use.

Live Settings pages, including Terms and Privacy, connect to the internet only when you open them.

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

This repository contains product information, not the proprietary application source code. The bundled Flite speech engine is open source.

<!-- Locale: en-CA. Editorial proposal; no auto-translation. -->
