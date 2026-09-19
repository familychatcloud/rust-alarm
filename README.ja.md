# アラーム：広告なし・通信量ゼロ

## 広告なしの音声目覚ましで、起床の用件まで読み上げ

<div align="center">
<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="150" alt="広告なしの音声目覚ましで、起床の用件まで読み上げ">

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Apple App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Google Play"></a>
</div>

「仕事に行く時間」「空港へ出発」など、設定したアラーム名を端末の音声で読み上げます。普段の目覚まし利用はオフライン。データは端末内に保存され、広告・アカウント・サブスクリプションはありません。

音だけでなく、何のためのアラームかも伝える目覚ましです。Noler は「仕事に行く時間」などのアラーム名を端末の音声機能で読み上げます。朝の起床にも、日中の予定を思い出すためにも使える軽量なアラームアプリです。

一度だけ鳴らす設定と、指定した曜日に繰り返す設定に対応。次のアラームをひと目で確認でき、大きなボタンでスヌーズや停止を操作できます。読み上げを利用できない場合は、代わりにアラーム音を使います。

通常のアラーム利用は完全にオフライン。時刻の設定、ラベル、音声、履歴に Wi-Fi やモバイル通信は不要です。アラーム、設定、添付データは端末内に保存します。広告、利用分析、行動追跡、アカウント、クラウド同期、定期購入、アプリ内課金はありません。

電池への配慮は、余分な処理を増やさないことから。天気、占い、広告、利用分析、クラウド同期などのオンライン情報をバックグラウンドで取得しないため、それらに伴う通信や処理を避けられます。実際の電池消費は端末、設定、使い方で異なり、一定の節電効果を保証するものではありません。

共通のアプリ処理と画面は Rust と Dioxus で構築。画面の言語・地域設定は39種類です。睡眠の追跡、いびきの録音、ニュース配信は搭載していません。

Android 版のみ、システムの音声合成が使えない場合に備え、オープンソースの Flite による英語の代替音声を内蔵しています。利用できる音声はインストール済みの言語によって異なります。任意の常駐モードは初期状態でオフで、オンにすると電池消費が増える場合があります。

設定内の利用規約やプライバシーなどのオンラインページは、自分で開いたときだけインターネットに接続します。

## Noler と Alarmy：重視する機能の違い

| # | Noler と Alarmy：重視する機能の違い | アラーム：広告なし・通信量ゼロ | Alarmy |
|---|---|---|---|
| 1 | 目的 | アラームに集中した目覚まし | 起床・睡眠・朝の習慣に関する幅広い機能 |
| 2 | アラーム名の読み上げ | 設定したアラーム名を読み上げ | 現在のストア説明を参照。ここでは比較しません |
| 3 | 技術構成 | Rust + Dioxus、ネイティブの Swift/Kotlin ブリッジ | 現在の製品版の全構成は未公開 |
| 4 | iOS パッケージ | 11.5 MB (≈1/20) | 237.5 MB |
| 5 | Android アップロード | アップロードした App Bundle は 5.6 MB | 全端末共通のパッケージサイズは公開されていません |
| 6 | 広告 | なし | あり |
| 7 | アプリ内課金・定期購入 | なし | アプリ内課金とプレミアム定期購入 |
| 8 | 通常のオフライン利用 | 通常のアラーム利用はオフライン | オンラインの追加機能には接続が必要。基本アラームのオフライン動作は未比較 |
| 9 | 天気 | なし | あり (Android) |
| 10 | 占い | なし | あり (Android) |
| 11 | 睡眠・いびき機能 | なし | あり |
| 12 | 画面の言語設定 | アプリ内で39種類の言語・地域を選択 | 比較していません |
| 13 | 電池への配慮 | 追加のオンラインサービス処理を避ける設計。一定の節電効果は保証しません | 条件を統一した電池比較を実施済みとは主張しません |

2026-09-19 · US App Store · Noler: 11,506,688 B · Alarmy: 237,476,864 B · Alarmy / Noler ≈20:1.

iOS の数値は2026年9月19日の米国 Apple カタログに基づくパッケージサイズで、比率は約1:20です。RAM使用量ではありません。Android の5.6 MBはアップロードした App Bundle を指します。分割配信によりダウンロード・インストールサイズは端末で変わり、固定サイズの保証ではありません。39種類は Noler のアプリ内選択肢で、Alarmy と同じ方法で数えた比較ではありません。天気と占いの根拠は Android 版です。電池消費は端末、設定、有効な機能で異なります。

[詳しい根拠と比較を読む（英語）](README.md)

出典: [Noler · App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) · [Noler · Google Play](https://play.google.com/store/apps/details?id=com.noler.app) · [Alarmy · App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766) · [Alarmy · Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan) · [Alarmy · Android · 占い](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

機能やパッケージサイズは変わる場合があります。Alarmy は各権利者の商標です。本プロジェクトは Alarmy や DelightRoom と提携しておらず、承認も受けていません。

[Apple App Store](https://apps.apple.com/app/id6765933062) · [Google Play](https://play.google.com/store/apps/details?id=com.noler.app)

[すべての言語・地域](LANGUAGES.md) · [noler.com/privacy](https://noler.com/privacy) · [noler.com/support](https://noler.com/support)

このリポジトリは製品情報のページです。アプリ本体のソースコードは非公開です。内蔵の音声エンジン Flite はオープンソースです。

<!-- Locale: ja. Editorial proposal; no auto-translation. -->
