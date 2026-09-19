<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Alarm: No Ads, Zero Data Usage app icon">

# Alarm: No Ads, Zero Data Usage

### A lightweight offline alarm for iPhone, iPad, and Android

**An alarm clock focused on waking you up, without advertising, sleep tracking, horoscopes or their extra background workload.**

**Hear what your alarm is for:** “Let's go to school.” “Take your medicine.” “Leave for the airport.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Download Alarm: No Ads, Zero Data Usage on the App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Get Alarm: No Ads, Zero Data Usage on Google Play"></a>

Free to download. No account. No subscription. No in-app purchase.

**The owner observed about 3% overnight battery drain with Noler versus 10% with Alarmy on the same phone. This was informal, not a controlled laboratory test, and is not a guarantee.**
</div>

<!-- section:focus -->
## A focused alarm clock without unrelated extras

**Alarm: No Ads, Zero Data Usage** is a focused alarm clock built with Rust. It creates one-time and repeating alarms, speaks each alarm's label aloud, and keeps alarm records and settings on your device.

The app focuses on alarms instead of combining them with a broader lifestyle service.

There are no ads waiting after dismiss, no analytics watching how you use the app, no account to create, no cloud service to maintain, and no unrelated weather, news, horoscope, sleep-tracking, or snore-recording machinery running behind your alarm.

<!-- section:spoken-purpose -->
## Hear the purpose of your alarm

A normal alarm rings, but half-awake you may not remember what it is for. Noler speaks the label you wrote for that alarm:

> “Let's go to school.”

> “Take your medicine.”

> “Leave now for the airport.”

The message begins on-device when the alarm fires. You hear the purpose immediately instead of opening the app, reading a small label, or wondering why the phone is making noise. It is especially useful for school runs, medication, appointments, cooking, shift work, and reminders shared with family.

<!-- section:comparison -->
## Why choose this Rust alarm instead of Alarmy?

Rust is a strong fit for an alarm clock: it combines native performance with memory safety and lets Noler share one focused core across iOS and Android. That helps us keep the app small and dependable without bundling an advertising stack, analytics SDK, weather feed, horoscope feed, or sleep platform. Rust alone does not prove battery savings. Its native implementation and the unrelated background tasks Noler omits explain the design approach; measured battery claims still require physical-device evidence.

| What matters | Alarm: No Ads, Zero Data Usage | Alarmy |
|---|---|---|
| **Core philosophy** | A focused alarm clock that does the essential job | A broader sleep and morning-routine platform |
| **Signature wake-up experience** | Speaks the alarm's purpose aloud—for example, “Let's go to school” instead of an unexplained ring | Focuses on loud alarms, wake-up missions, and sleep features |
| **On-device speech safety** | On-device system TTS; Android adds bundled open-source Flite when no system TTS engine is available; the OS alarm sound is the final fallback | See Alarmy's current listing for its sound behaviour |
| **Language and UI stack** | Rust + Dioxus — one shared, lightweight application core and UI, with native Swift/Kotlin alarm bridges where the operating systems require them | Public engineering material points to [Swift on iOS](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) and [Kotlin/Java with Jetpack/Compose on Android](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); its complete current production mix is not publicly disclosed |
| **iOS package size** | 11.5 MB | 237.5 MB |
| **iOS size difference** | ≈1/20 | ≈20× |
| **Android release size** | 5.6 MB App Bundle uploaded to Google Play | Google Play does not publish one device-independent package size |
| **Advertising** | None | Contains ads |
| **Subscription or in-app purchases** | None | In-app purchases and a premium subscription |
| **Account required** | No — there is no account system | Not compared; Alarmy's store listing focuses on its broader feature catalog |
| **Analytics or behavioural tracking** | None | Not compared; Noler's promise is that it does not include either |
| **Cloud sync** | None — alarm data remains on-device | Not compared; Noler deliberately has no cloud layer |
| **Weather feature** | No | Yes — Alarmy's Android listing says location can be used to obtain weather after the app is closed |
| **Horoscope feature** | No | Yes — documented in Alarmy's Android help center |
| **Sleep tracking** | No | Yes |
| **Snore monitoring** | No | Yes |
| **Sleep sounds / ASMR** | No | Yes |
| **Background feature workload** | Alarm-related work; no unrelated online feeds, tracking, ads or cloud work | Additional enabled features can involve background and network work; no controlled power comparison is claimed |
| **Observed overnight battery drain** | About 3% in the owner's same-phone overnight test | About 10% in the same test |
| **Battery difference in that observation** | About 70% less drain in this informal observation only | About 3.3× Noler’s observed drain; not a general benchmark |
| **Battery approach** | Battery saving is a product priority. Normal alarm operation is fully offline, avoiding Wi-Fi/mobile-data work plus the battery use caused by weather, horoscope, sleep analysis, ads, analytics, and cloud sync | Its larger connected feature set can perform network and processing work beyond scheduling and ringing alarms |
| **Normal alarm-data network use** | Zero — alarms, labels, settings, attachments, speech, and scheduling remain on-device | Connected features require network access |
| **UI languages** | 39 in-app locale choices | 31 unique language codes listed by the current iOS package |
| **Alarm voice languages** | 24 choices, using speech on your device | See Alarmy's listing for its current voice coverage |

Size comparison uses the package byte counts reported by Apple's catalog for the current US App Store versions on September 19, 2026: Noler `11,506,688` bytes and Alarmy `237,476,864` bytes. Android App Bundles use split delivery, so each person's Google Play download and installed size varies by device; `5.6 MB` is Noler's verified current Play upload bundle, not a promised installed-size measurement.

Language counts use different public evidence: Noler's count comes from the in-app language picker, while Alarmy's count is the unique language-code count reported by its current iOS package. The 39 choices refer to the in-app interface, not a guarantee of the current storefront localization state.

Alarmy is a capable choice for people who actively want wake-up missions, sleep analysis, snore monitoring, sleep sounds, weather, horoscope, and a premium feature catalog. **Choose Noler when you want your alarm app to remain an alarm app.**

<!-- section:battery-observation -->
## Our informal overnight observation: 3% versus 10%

On the owner's phone, an overnight test showed **about 3% battery use with Noler versus about 10% with Alarmy**. Put another way, Alarmy used roughly 3.3 times as much battery in that overnight observation, while Noler's drain was about 70% lower.

This was a firsthand, same-phone comparison rather than a controlled laboratory certification. Battery results vary with the phone, battery health, operating system, signal strength, alarm settings, and enabled features. The exact numbers are not guaranteed on every device—but the reason for prioritizing battery is built into the product.

<!-- section:battery-workload -->
## Less networking means less battery work

Every extra background feature has a cost. Weather must be fetched. Horoscope content must be fetched. Sleep and snore tracking require extended monitoring. Ads and analytics require code, network traffic, and processing. Cloud accounts require synchronization.

Noler does none of that during normal alarm use. It does not need Wi-Fi or mobile data to store, schedule, speak, or ring an alarm. By remaining fully offline for its core job, it avoids waking the network radio for weather, horoscope, advertising, analytics, account, or cloud-sync traffic.

The product makes the most durable battery-saving choice: **do not start unrelated work in the first place.** Fewer background responsibilities mean fewer opportunities to consume CPU time, Wi-Fi/mobile radio time, memory, and battery beyond the work an alarm actually needs.

### How a numeric battery comparison will be tested

A simulator cannot provide a valid phone-battery comparison: it runs on the computer's processor, radio, and power supply. Any future “uses X times less battery” claim will come from matched physical-device tests.

The benchmark will run both apps on the same model, OS version, battery-health range, network, brightness, volume, and temperature. It will measure two separately disclosed scenarios: a like-for-like basic alarm, and each app's normal default experience. Test order will be alternated, unrelated apps will be stopped, devices will begin at the same charge and temperature, and each scenario will be repeated at least five times.

Android measurement will use system battery statistics and hardware power data when supported. iOS measurement will use Instruments energy traces on a physical iPhone. Results will report the test duration, exact settings, median energy result, run-to-run range, and raw trace files. Until that controlled evidence exists, the published 3%-versus-10% result remains clearly identified as the owner's real-device overnight observation, not a guarantee for every phone.

<!-- section:package-size -->
## A small package with a focused feature set

On iOS, the current Noler package is about **11.5 MB**, compared with Alarmy's **237.5 MB**—roughly **20× smaller**. The current Android App Bundle uploaded to Google Play is **5.6 MB**.

That difference is not an accident. Noler does not bundle a sleep platform, advertising system, analytics layer, cloud account system, news feed, weather service, or horoscope feed. You download an alarm clock and get an alarm clock.

<!-- section:privacy -->
## Private by design

Normal alarm use sends no alarm data anywhere.

- No advertising ID
- No account or login
- No analytics SDK
- No behavioural tracking
- No cloud backup or synchronization
- No remote alarm-data service
- No background cross-origin network request

Alarm records, labels, settings, attachments, speech, and notification scheduling stay on your device. The live Terms, Privacy, and support pages open only when you explicitly select them in Settings.

<!-- section:speech-fallback -->
## A talking alarm that explains why it is ringing

Give an alarm a label such as “School,” “Medicine,” “Airport,” or “Call Mum.” When it rings, Noler can speak that label aloud using speech available on your device.

Its on-device sound strategy is platform-specific. Both platforms use system text-to-speech for the alarm label. On Android, a bundled, lightweight open-source Flite voice takes over when a device has no usable system TTS engine. The operating system's alarm sound remains the final safety floor.

On Android, the bundled open-source Flite engine supplies an English voice if no usable system text-to-speech engine is available. Voices depend on installed languages. Optional keep-alive mode is off by default and may increase battery use.

The fallback alarm sound is intended to keep an unavailable voice from producing a silent alarm.

<!-- section:features -->
## What you get

- One-time and repeating weekday alarms
- Spoken alarm labels
- Large snooze and stop buttons that are easy to use when you wake up
- A clear view of the next scheduled alarm
- Local attachments and settings
- On-device storage with no account
- A dark, distraction-free interface
- iPhone, iPad, and Android support
- 39 UI locale choices
- 24 alarm-voice language choices

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler alarm list and next alarm screen">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler alarm clock screen">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler alarm settings screen">
</div>

<!-- section:ui-languages -->
## 39 interface locale choices

Arabic, Catalan, Simplified Chinese, Traditional Chinese, Croatian, Czech, Danish, Dutch, Australian English, Canadian English, British English, American English, Finnish, French, Canadian French, German, Greek, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Malay, Norwegian Bokmål, Polish, Brazilian Portuguese, European Portuguese, Romanian, Russian, Slovak, Spanish, Latin American Spanish, Swedish, Thai, Turkish, Ukrainian and Vietnamese.

<!-- section:voice-languages -->
## 24 alarm-voice language choices

Arabic (Egypt), Bengali (Bangladesh), Dutch (Netherlands), English (India), American English, French (France), German (Germany), Hindi (India), Indonesian (Indonesia), Italian (Italy), Japanese (Japan), Korean (South Korea), Marathi (India), Polish (Poland), Brazilian Portuguese, Romanian (Romania), Russian (Russia), Spanish (United States), Tamil (India), Telugu (India), Thai (Thailand), Turkish (Türkiye), Ukrainian (Ukraine) and Vietnamese (Vietnam).

Voice availability and pronunciation depend on the text-to-speech voices installed by the device manufacturer or operating system. The bundled Flite fallback is Android-only and speaks English; both platforms have an alarm-sound fallback when speech cannot be used.

<!-- section:downloads -->
## Download the free alarm clock

| Platform | Official download |
|---|---|
| iPhone and iPad | [Download on the Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Get it on Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Sources for the comparison

- [Alarm: No Ads, Zero Data Usage on the App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Alarm: No Ads, Zero Data Usage on Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarm: No Ads, Zero Data Usage on the App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarm: No Ads, Zero Data Usage on Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android help: horoscope setup](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Store features and package sizes can change. Comparison checked September 19, 2026. Alarmy is a trademark of its respective owner; this project is not affiliated with or endorsed by Alarmy or DelightRoom.

---

This repository contains product information, not the proprietary application source code. The bundled Flite speech engine is open source.

<div align="center">
  <strong>Wake up with a focused alarm clock, without ads or tracking.</strong>
</div>
