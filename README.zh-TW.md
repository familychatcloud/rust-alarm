# 鬧鐘：無廣告，零流量

## 無廣告的離線語音鬧鐘，起床提醒用說的

<div align="center">
<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="150" alt="無廣告的離線語音鬧鐘，起床提醒用說的">

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Apple App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Google Play"></a>
</div>

早上不只聽見鈴聲，也知道接下來要做什麼。Noler 會唸出鬧鐘名稱，日常使用不需連網，資料留在裝置上。無廣告、無帳號、無訂閱。

把鬧鐘變成聽得懂的提醒。將名稱設為「該出門上班了」或「準備去機場」，Noler 就會使用裝置上的語音功能唸出文字。輕量的語音鬧鐘，陪你安排起床與日常作息。

可設定單次鬧鐘，或指定每週重複的日期。下一個鬧鐘一眼就能看到，大按鈕方便稍後提醒或停止。如果無法使用語音，還有鬧鈴聲作為備援。

一般鬧鐘操作完全離線，排程、名稱、語音和紀錄都不需要 Wi-Fi 或行動數據。鬧鐘、設定及附件保存在裝置上。不含廣告、使用分析、行為追蹤、帳號、雲端同步、訂閱或 App 內購買。

節省電力從減少額外工作開始。Noler 沒有天氣、星座運勢、廣告、使用分析、雲端同步或其他背景線上資訊，因此省去這些服務的網路傳輸和處理負擔。實際耗電量依裝置、設定與使用情況而異，不保證固定的省電幅度。

共用的應用程式核心與介面以 Rust 和 Dioxus 建立，介面提供 39 種語言及地區選項。不附帶睡眠追蹤、鼾聲錄音或新聞動態。

僅 Android 內建開源 Flite 引擎：當系統沒有可用的文字轉語音引擎時，提供英語備援語音。聲音選擇取決於已安裝的語言。選用的持續運作模式預設關閉，開啟後可能增加耗電。

設定中的線上頁面，例如使用條款與隱私權政策，只有在你主動開啟時才會連網載入。

## Noler 與 Alarmy：各自重視的功能

| # | Noler 與 Alarmy：各自重視的功能 | 鬧鐘：無廣告，零流量 | Alarmy |
|---|---|---|---|
| 1 | 定位 | 專注鬧鐘的應用程式 | 較廣泛的起床、睡眠與晨間功能 |
| 2 | 唸出鬧鐘名稱 | 唸出你設定的鬧鐘名稱 | 請見目前商店說明，此處不比較 |
| 3 | 技術組成 | Rust + Dioxus，共用核心與介面，原生 Swift/Kotlin 橋接 | 目前正式版的完整技術組成未公開 |
| 4 | iOS 套件 | 11.5 MB (≈1/20) | 237.5 MB |
| 5 | Android 上傳套件 | 上傳的 App Bundle 為 5.6 MB | 沒有公開適用所有裝置的統一套件大小 |
| 6 | 廣告 | 無 | 有 |
| 7 | 內購與訂閱 | 無 | App 內購買與進階訂閱 |
| 8 | 日常離線操作 | 一般鬧鐘功能離線運作 | 線上附加功能需要連線；不比較基本鬧鐘的離線能力 |
| 9 | 天氣 | 無 | 有 (Android) |
| 10 | 星座運勢 | 無 | 有 (Android) |
| 11 | 睡眠與鼾聲功能 | 無 | 有 |
| 12 | 介面選項 | App 內有 39 種語言及地區選項 | 不比較 |
| 13 | 電池考量 | 避開額外線上服務的工作，不保證固定省電效果 | 不宣稱已有受控電池比較測試 |

2026-09-19 · US App Store · Noler: 11,506,688 B · Alarmy: 237,476,864 B · Alarmy / Noler ≈20:1.

iOS 數據來自 2026 年 9 月 19 日的美國 Apple 目錄，套件大小比例約為 1:20，並非記憶體用量比較。Android 的 5.6 MB 是上傳的 App Bundle；分割交付會讓下載及安裝大小因裝置而異，不是安裝大小保證。39 個選項來自 Noler 的 App 內語言選單，沒有用相同方法統計 Alarmy。天氣及星座運勢的資料僅針對 Android。耗電量取決於裝置、設定與啟用功能。

[完整佐證與詳細比較（英文）](README.md)

資料來源: [Noler · App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) · [Noler · Google Play](https://play.google.com/store/apps/details?id=com.noler.app) · [Alarmy · App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766) · [Alarmy · Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan) · [Alarmy · Android · 星座運勢](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

功能及套件大小可能改變。Alarmy 商標屬於其權利人；本專案與 Alarmy 或 DelightRoom 無關，亦未獲其背書。

[Apple App Store](https://apps.apple.com/app/id6765933062) · [Google Play](https://play.google.com/store/apps/details?id=com.noler.app)

[所有語言與地區](LANGUAGES.md) · [noler.com/privacy](https://noler.com/privacy) · [noler.com/support](https://noler.com/support)

這個儲存庫用於介紹產品，不公開應用程式的專有原始碼。內建的 Flite 語音引擎是開源元件。

<!-- Locale: zh-Hant. Editorial proposal; no auto-translation. -->
