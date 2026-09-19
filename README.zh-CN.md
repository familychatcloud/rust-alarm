# 闹钟：无广告，零流量

## 无广告离线语音闹钟，用自己的文字设置起床提醒

<div align="center">
<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="150" alt="无广告离线语音闹钟，用自己的文字设置起床提醒">

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Apple App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Google Play"></a>
</div>

不只听见铃声，也听懂为什么要起床。Noler 用设备上的语音朗读闹钟名称，日常使用无需联网，记录和设置留在本机。无广告、无账户、无订阅。

给早晨一个清楚的提醒。把闹钟命名为“该去上班了”或“出发去机场”，Noler 就会通过设备上的语音功能读出这段文字。这款轻量语音闹钟适合起床、日常作息和到点提醒。

可以设置一次性闹钟，也可以选择每周重复的日期。下一个闹钟一目了然，大按钮方便稍后提醒或停止响铃。如果语音无法使用，还有闹铃声作为备用。

正常闹钟功能完全离线：定时、文字、语音和记录都不需要 Wi-Fi 或移动数据。闹钟、设置和附件保存在设备上。没有广告、使用分析、行为跟踪、账户、云同步、订阅或应用内购买。

省电从减少额外任务开始。Noler 不提供天气、星座运势、广告、使用分析、云同步或其他后台在线信息流，因此不会产生这些服务对应的网络传输和处理负担。实际耗电取决于设备、设置和使用方式，不承诺固定的省电幅度。

应用的共享核心与界面使用 Rust 和 Dioxus 构建，界面提供 39 种语言及地区选项。不附带睡眠跟踪、鼾声录制或新闻信息流。

仅在 Android 上，内置的开源 Flite 引擎会在没有可用系统语音引擎时提供英语备用语音。可用声音取决于已安装的语言。可选的保活模式默认关闭，开启后可能增加耗电。

设置中的在线页面，例如条款和隐私政策，只有在你主动打开时才会联网加载。

## Noler 与 Alarmy：不同的功能重点

| # | Noler 与 Alarmy：不同的功能重点 | 闹钟：无广告，零流量 | Alarmy |
|---|---|---|---|
| 1 | 定位 | 专注于闹钟 | 更广泛的起床、睡眠与晨间功能 |
| 2 | 朗读闹钟名称 | 朗读你设置的闹钟名称 | 以当前商店说明为准，此处不作比较 |
| 3 | 技术实现 | Rust + Dioxus，共享核心与界面，原生 Swift/Kotlin 桥接 | 未完整公开当前生产版本的技术组成 |
| 4 | iOS 安装包 | 11.5 MB (≈1/20) | 237.5 MB |
| 5 | Android 上传包 | 上传的 App Bundle 为 5.6 MB | 未公开适用于所有设备的统一安装包大小 |
| 6 | 广告 | 无 | 有 |
| 7 | 内购与订阅 | 无 | 应用内购买与高级订阅 |
| 8 | 日常离线使用 | 正常闹钟功能离线运行 | 在线附加功能需要网络；不比较基础闹钟的离线能力 |
| 9 | 天气 | 无 | 有 (Android) |
| 10 | 星座运势 | 无 | 有 (Android) |
| 11 | 睡眠与鼾声功能 | 无 | 有 |
| 12 | 界面选项 | 应用内提供 39 种语言及地区选项 | 不作比较 |
| 13 | 电池设计 | 省去额外在线服务的工作，不保证固定省电幅度 | 不声称已完成受控电池对比测试 |

2026-09-19 · US App Store · Noler: 11,506,688 B · Alarmy: 237,476,864 B · Alarmy / Noler ≈20:1.

iOS 数据来自 2026 年 9 月 19 日的美国 Apple 目录，安装包大小比例约为 1:20，不是运行内存比较。Android 的 5.6 MB 指上传的 App Bundle；分包交付使实际下载和安装大小因设备而异，不是安装大小承诺。39 个选项来自 Noler 的应用内语言选择器，未用相同方法统计 Alarmy。天气与星座运势的证据仅针对 Android。耗电取决于设备、设置和启用的功能。

[完整证据与详细比较（英文）](README.md)

来源: [Noler · App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) · [Noler · Google Play](https://play.google.com/store/apps/details?id=com.noler.app) · [Alarmy · App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766) · [Alarmy · Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan) · [Alarmy · Android · 星座运势](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

功能与安装包大小可能变化。Alarmy 商标属于其权利人；本项目与 Alarmy 或 DelightRoom 无关联，也未获其认可。

[Apple App Store](https://apps.apple.com/app/id6765933062) · [Google Play](https://play.google.com/store/apps/details?id=com.noler.app)

[全部语言与地区](LANGUAGES.md) · [noler.com/privacy](https://noler.com/privacy) · [noler.com/support](https://noler.com/support)

本仓库用于介绍产品，不公开应用的专有源代码。内置 Flite 语音引擎为开源组件。

<!-- Locale: zh-Hans. Editorial proposal; no auto-translation. -->
