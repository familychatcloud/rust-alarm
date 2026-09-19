<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler-App-Symbol">

# Wecker: Ohne Werbung, offline

### Ein leichter Offline-Alarm für iPhone, iPad und Android

Ein Wecker, der sich darauf konzentriert, Sie aufzuwecken, ohne Werbung, Schlafverfolgung, Horoskope oder deren zusätzliche Hintergrundarbeit.

Hören Sie, wozu Ihr Alarm dient: „Lass uns zur Schule gehen.“ „Nehmen Sie Ihre Medizin.“ „Fahren Sie zum Flughafen.“

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Laden Sie Noler im App Store herunter"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Holen Sie sich Noler bei Google Play"></a>

Kostenloser Download. Kein Konto. Kein Abonnement. Kein In-App-Kauf.

Der Besitzer beobachtete bei Noler über Nacht eine Batterieentladung von etwa 3% gegenüber 10% bei Alarmy auf demselben Telefon. Dies war ein informeller, kein kontrollierter Labortest und stellt keine Garantie dar.
</div>

<!-- section:focus -->
## Ein fokussierter Wecker ohne unnötige Extras

Noler ist ein fokussierter Wecker, der mit Rust gebaut wurde. Es erstellt einmalige und wiederkehrende Alarme, spricht die Bezeichnung jedes Alarms laut aus und speichert Alarmaufzeichnungen und -einstellungen auf Ihrem Gerät.

Die App konzentriert sich auf Alarme, anstatt sie mit einem umfassenderen Lifestyle-Service zu kombinieren.

Es gibt keine Werbung, die nach dem Schließen wartet, keine Analyse, die überwacht, wie Sie die App nutzen, kein Konto, das Sie erstellen müssen, keinen Cloud-Dienst, der gewartet werden muss, und keine unabhängigen Wetter-, Nachrichten-, Horoskop-, Schlaf-Tracking- oder Schnarchaufzeichnungsmaschinen, die hinter Ihrem Alarm laufen.

<!-- section:spoken-purpose -->
## Hören Sie den Zweck Ihres Alarms

Ein normaler Wecker klingelt, aber im Halbwach erinnern Sie sich möglicherweise nicht mehr an den Zweck. Noler spricht die Bezeichnung, die Sie für diesen Alarm geschrieben haben:

> „Lass uns zur Schule gehen.“

> „Nehmen Sie Ihre Medizin.“

> „Gehen Sie jetzt zum Flughafen.“

Die Nachricht beginnt auf dem Gerät, wenn der Alarm ausgelöst wird. Sie hören den Zweck sofort, anstatt die App zu öffnen, ein kleines Etikett zu lesen oder sich zu fragen, warum das Telefon Geräusche macht. Es ist besonders nützlich für Schulläufe, Medikamente, Termine, Kochen, Schichtarbeit und Erinnerungen, die mit der Familie geteilt werden.

<!-- section:comparison -->
## Warum diesen Rust-Wecker statt Alarmy wählen?

Rust verbindet native Leistung mit Speichersicherheit und ermöglicht einen gemeinsamen Anwendungskern für iOS und Android. So bleibt Noler klein und zuverlässig, ohne Werbebibliotheken, Analyse-SDK oder Dienste für Wetter, Horoskope und Schlaf. Rust allein belegt jedoch keine Akkuersparnis. Unser Ansatz setzt auf native Implementierung und den Verzicht auf sachfremde Hintergrundaufgaben; konkrete Verbrauchsangaben müssen durch Messungen auf echten Geräten belegt werden.

| Was zählt | Wecker: Ohne Werbung, offline | Alarmy |
|---|---|---|
| **Kernphilosophie** | Ein fokussierter Wecker, der die wesentliche Aufgabe erfüllt | Eine breitere Plattform für Schlaf und Morgenroutine |
| **Einzigartiges Weckerlebnis** | Gibt den Zweck des Alarms laut an, zum Beispiel „Lass uns zur Schule gehen“ anstelle eines unerklärlichen Klingelns | Der Schwerpunkt liegt auf lauten Alarmen, Weckmissionen und Schlaffunktionen |
| **Sprachsicherheit auf dem Gerät** | On-Device-System TTS; Android fügt das gebündelte Open-Source-Flite hinzu, wenn keine System-TTS-Engine verfügbar ist; Der Alarmton des Betriebssystems ist der letzte Ausweg | Informationen zum Klangverhalten finden Sie in der aktuellen Auflistung von Alarmy |
| **Sprach- und UI-Stack** | Rust + Dioxus – ein gemeinsamer, leichter Anwendungskern und eine gemeinsame Benutzeroberfläche mit nativen Swift/Kotlin-Alarmbrücken dort, wo die Betriebssysteme sie erfordern | Öffentliche technische Beiträge verweisen auf [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); die vollständige Technologiekombination der aktuellen App ist nicht öffentlich bekannt. |
| **iOS-Paketgröße** | 11.5 MB | 237.5 MB |
| **iOS-Größenunterschied** | ≈1/20 | ≈20× |
| **Größe der Android-Version** | 5.6 MB großes App-Bundle, hochgeladen auf Google Play | Google Play veröffentlicht keine geräteunabhängige Paketgröße |
| **Werbung** | Keine | Enthält Werbung |
| **Abonnement oder In-App-Käufe** | Keine | In-App-Käufe und ein Premium-Abonnement |
| **Konto erforderlich** | Nein – es gibt kein Kontosystem | Nicht verglichen; Der Store-Eintrag von Alarmy konzentriert sich auf den breiteren Funktionskatalog |
| **Analytics oder Verhaltensverfolgung** | Keine | Nicht verglichen; Nolers Versprechen ist, dass beides nicht enthalten ist |
| **Cloud-Synchronisierung** | Keine – Alarmdaten bleiben auf dem Gerät | Nicht verglichen; Noler verzichtet bewusst auf eine Wolkenschicht |
| **Wetterfunktion** | Nein | Ja – in der Android-Liste von Alarmy heißt es, dass der Standort nach dem Schließen der App zum Abrufen des Wetters verwendet werden kann |
| **Horoskopfunktion** | Nein | Ja – dokumentiert im Android-Hilfecenter von Alarmy |
| **Schlafverfolgung** | Nein | Ja |
| **Schnarchüberwachung** | Nein | Ja |
| **Schlafgeräusche / ASMR** | Nein | Ja |
| **Arbeitslast der Hintergrundfunktionen** | Alarmbezogene Arbeiten; Keine unabhängigen Online-Feeds, Tracking, Anzeigen oder Cloud-Arbeit | Zusätzliche aktivierte Funktionen können Hintergrund- und Netzwerkarbeit erfordern; Es wird kein kontrollierter Leistungsvergleich beansprucht |
| **Batterieentladung über Nacht beobachtet** | Ungefähr 3% im Nachttest des Besitzers mit demselben Telefon | Ungefähr 10% im gleichen Test |
| **Batterieunterschied in dieser Beobachtung** | Etwa 70% weniger Abfluss allein bei dieser informellen Beobachtung | Etwa das 3.3-fache des von Noler beobachteten Abflusses; kein allgemeiner Maßstab |
| **Batterieansatz** | Batteriesparen ist eine Produktpriorität. Der normale Alarmbetrieb erfolgt vollständig offline, wodurch Wi-Fi-/mobile Datenarbeit sowie der durch Wetter, Horoskop, Schlafanalyse, Werbung, Analysen und Cloud-Synchronisierung verursachte Batterieverbrauch vermieden werden | Sein größerer Satz verbundener Funktionen kann Netzwerk- und Verarbeitungsaufgaben erledigen, die über die Planung und das Auslösen von Alarmen hinausgehen |
| **Normale Nutzung des Alarmdatennetzwerks** | Null – Alarme, Beschriftungen, Einstellungen, Anhänge, Sprache und Terminplanung bleiben auf dem Gerät | Verbundene Funktionen erfordern Netzwerkzugriff |
| **UI-Sprachen** | 39 In-App-Gebietsschemaoptionen | 31 einzigartige Sprachcodes, die im aktuellen iOS-Paket aufgeführt sind |
| **Sprachen für Alarmstimmen** | 24 Auswahlmöglichkeiten, mit Sprache auf Ihrem Gerät | Die aktuelle Sprachabdeckung finden Sie in der Auflistung von Alarmy |

Beim Größenvergleich werden die im Apple-Katalog für die aktuellen US-App-Store-Versionen vom 19. September 2026 gemeldeten Paket-Bytezahlen verwendet: Noler 11,506,688 Bytes und Alarmy 237,476,864 Bytes. Android-App-Bundles verwenden eine geteilte Bereitstellung, sodass die Download- und Installationsgröße von Google Play bei jeder Person je nach Gerät unterschiedlich ist. 5.6 MB ist Nolers verifiziertes aktuelles Play-Upload-Bundle, kein versprochenes Maß für die installierte Größe.

Die Anzahl der Sprachen basiert auf unterschiedlichen öffentlichen Beweisen: Die Anzahl von Noler stammt aus der In-App-Sprachauswahl, während die Anzahl von Alarmy die eindeutige Anzahl der Sprachcodes ist, die vom aktuellen iOS-Paket gemeldet wird. Die 39 Auswahlmöglichkeiten beziehen sich auf die In-App-Schnittstelle und sind keine Garantie für den aktuellen Lokalisierungsstatus der Storefront.

Alarmy ist eine kompetente Wahl für Menschen, die aktiv Weckmissionen, Schlafanalyse, Schnarchüberwachung, Schlafgeräusche, Wetter, Horoskop und einen Premium-Funktionskatalog wünschen. Wählen Sie Noler, wenn Ihre Alarm-App eine Alarm-App bleiben soll.

<!-- section:battery-observation -->
## Unsere informelle Beobachtung über Nacht: 3% gegenüber 10%

Auf dem Telefon des Besitzers zeigte ein Nachttest, dass der Akku mit Noler etwa 3% verbraucht wurde, während es mit Alarmy etwa 10% waren. Anders ausgedrückt: Alarmy verbrauchte bei dieser Beobachtung über Nacht etwa 3.3-mal so viel Batterie, während Nolers Verbrauch etwa 70% geringer war.

Dabei handelte es sich eher um einen Vergleich aus erster Hand am selben Telefon als um eine kontrollierte Laborzertifizierung. Die Akkuergebnisse variieren je nach Telefon, Akkuzustand, Betriebssystem, Signalstärke, Alarmeinstellungen und aktivierten Funktionen. Die genauen Zahlen können nicht bei jedem Gerät garantiert werden – der Grund für die Priorisierung des Akkus ist jedoch im Produkt integriert.

<!-- section:battery-workload -->
## Weniger Vernetzung bedeutet weniger Batteriearbeit

Jede zusätzliche Hintergrundfunktion ist mit Kosten verbunden. Wetter muss abgeholt werden. Horoskopinhalte müssen abgerufen werden. Schlaf- und Schnarchverfolgung erfordern eine erweiterte Überwachung. Anzeigen und Analysen erfordern Code, Netzwerkverkehr und Verarbeitung. Cloud-Konten erfordern eine Synchronisierung.

Bei normalem Alarmgebrauch macht Noler nichts davon. Zum Speichern, Planen, Sprechen oder Auslösen eines Alarms sind weder WLAN noch mobile Daten erforderlich. Da es für seine Hauptaufgabe vollständig offline bleibt, vermeidet es, dass der Netzwerkfunk für Wetter-, Horoskop-, Werbe-, Analyse-, Konto- oder Cloud-Synchronisierungsdatenverkehr aktiviert wird.

Das Produkt ist die langlebigste Wahl zum Energiesparen: Beginnen Sie erst gar nicht mit nicht zusammenhängenden Arbeiten. Weniger Hintergrundaufgaben bedeuten weniger Möglichkeiten, CPU-Zeit, Wi-Fi-/Mobilfunkzeit, Speicher und Akku über den eigentlichen Arbeitsaufwand eines Alarms hinaus zu verbrauchen.

### So wird ein numerischer Batterievergleich getestet

Ein Simulator kann keinen gültigen Telefon-Akku-Vergleich ermöglichen: Er läuft auf dem Prozessor, dem Radio und der Stromversorgung des Computers. Zukünftige Behauptungen, dass „X-mal weniger Akku verbraucht“ wird, basieren auf entsprechenden Tests physischer Geräte.

Der Benchmark führt beide Apps auf demselben Modell, derselben Betriebssystemversion, demselben Batteriezustand, demselben Netzwerk, derselben Helligkeit, derselben Lautstärke und derselben Temperatur aus. Es werden zwei separat veröffentlichte Szenarien gemessen: ein vergleichbarer Basisalarm und das normale Standarderlebnis jeder App. Die Testreihenfolge wird abgewechselt, nicht verwandte Apps werden gestoppt, Geräte werden mit der gleichen Ladung und Temperatur gestartet und jedes Szenario wird mindestens fünf Mal wiederholt.

Bei der Android-Messung werden Systembatteriestatistiken und Hardware-Leistungsdaten verwendet, sofern dies unterstützt wird. Bei der iOS-Messung werden die Energiespuren von Instruments auf einem physischen iPhone verwendet. In den Ergebnissen werden die Testdauer, die genauen Einstellungen, den Median des Energieverbrauchs, der Lauf-zu-Lauf-Bereich und rohe Trace-Dateien angegeben. Bis diese kontrollierten Beweise vorliegen, bleibt das veröffentlichte Ergebnis von 3% im Vergleich zu 10% eindeutig als die Beobachtung des Besitzers über Nacht am realen Gerät erkennbar und stellt keine Garantie für jedes Telefon dar.

<!-- section:package-size -->
## Ein kleines Paket mit einem fokussierten Funktionsumfang

Unter iOS ist das aktuelle Noler-Paket etwa 11.5 MB groß, verglichen mit 237.5 MB von Alarmy – etwa 20-mal kleiner. Das aktuell auf Google Play hochgeladene Android App Bundle ist 5.6 MB groß.

Dieser Unterschied ist kein Zufall. Noler bündelt keine Schlafplattform, kein Werbesystem, keine Analyseschicht, kein Cloud-Kontosystem, keinen Newsfeed, keinen Wetterdienst oder keinen Horoskop-Feed. Sie laden einen Wecker herunter und erhalten einen Wecker.

<!-- section:privacy -->
## Von Natur aus privat

Bei normaler Alarmverwendung werden nirgendwo Alarmdaten gesendet.

- Keine Werbe-ID
- Kein Konto oder Login
- Kein Analyse-SDK
- Keine Verhaltensverfolgung
- Keine Cloud-Sicherung oder Synchronisierung
- Kein Fernalarmdatendienst
- Keine Hintergrund-Cross-Origin-Netzwerkanfrage

Alarmaufzeichnungen, Beschriftungen, Einstellungen, Anhänge, Sprache und Benachrichtigungsplanung bleiben auf Ihrem Gerät. Die Live-Seiten „Nutzungsbedingungen“, „Datenschutz“ und „Support“ werden nur geöffnet, wenn Sie sie in den Einstellungen explizit auswählen.

<!-- section:speech-fallback -->
## Ein sprechender Alarm, der erklärt, warum er klingelt

Geben Sie einem Alarm eine Bezeichnung wie „Schule“, „Medizin“, „Flughafen“ oder „Mama anrufen“. Wenn es klingelt, kann Noler dieses Etikett mithilfe der auf Ihrem Gerät verfügbaren Sprache laut aussprechen.

Die Soundstrategie auf dem Gerät ist plattformspezifisch. Beide Plattformen nutzen System-Text-to-Speech für die Alarmbeschriftung. Unter Android übernimmt eine gebündelte, leichte Open-Source-Flite-Stimme, wenn ein Gerät über keine nutzbare System-TTS-Engine verfügt. Der Alarmton des Betriebssystems bleibt die letzte Sicherheitsstufe.

Nur unter Android liefert die mitgelieferte Open-Source-Engine Flite eine englische Ersatzstimme, falls keine nutzbare System-Sprachausgabe verfügbar ist. Stimmen hängen von den installierten Sprachen ab. Der optionale Wachhaltemodus ist standardmäßig aus und kann mehr Akku verbrauchen.

Der Fallback-Alarmton soll verhindern, dass eine nicht verfügbare Stimme einen stillen Alarm auslöst.

<!-- section:features -->
## Was Sie bekommen

- Einmalige und sich wiederholende Wochentagsalarme
- Etiketten für gesprochene Alarme
- Große Tasten zum Schlummern und Beenden
- Eine klare Sicht auf den nächsten geplanten Alarm
- Lokale Anhänge und Einstellungen
- Speicherung auf dem Gerät ohne Konto
- Eine dunkle, ablenkungsfreie Benutzeroberfläche
- iPhone-, iPad- und Android-Unterstützung
- 39 Auswahlmöglichkeiten für das UI-Gebietsschema
- 24 Sprachen zur Auswahl der Alarmstimme

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler-Alarmliste und nächster Alarmbildschirm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler-Weckerbildschirm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler-Alarmeinstellungsbildschirm">
</div>

<!-- section:ui-languages -->
## 39 Auswahlmöglichkeiten für das Schnittstellengebietsschema

Arabisch, Katalanisch, Chinesisch (vereinfacht), Chinesisch (traditionell), Kroatisch, Tschechisch, Dänisch, Niederländisch, Englisch (Australien), Englisch (Kanada), Englisch (Vereinigtes Königreich), Englisch (Vereinigte Staaten), Finnisch, Französisch, Französisch (Kanada), Deutsch, Griechisch, Hebräisch, Hindi, Ungarisch, Indonesisch, Italienisch, Japanisch, Koreanisch, Malaiisch, Norwegisch (Bokmål), Polnisch, Portugiesisch (Brasilien), Portugiesisch (Portugal), Rumänisch, Russisch, Slowakisch, Spanisch, Spanisch (Lateinamerika), Schwedisch, Thailändisch, Türkisch, Ukrainisch und Vietnamesisch.

<!-- section:voice-languages -->
## 24 Sprachen zur Auswahl der Alarmstimme

Arabisch (Ägypten), Bengalisch (Bangladesch), Niederländisch (Niederlande), Englisch (Indien), Englisch (Vereinigte Staaten), Französisch (Frankreich), Deutsch (Deutschland), Hindi (Indien), Indonesisch (Indonesien), Italienisch (Italien), Japanisch (Japan), Koreanisch (Südkorea), Marathi (Indien), Polnisch (Polen), Portugiesisch (Brasilien), Rumänisch (Rumänien), Russisch (Russland), Spanisch (Vereinigte Staaten), Tamil (Indien), Telugu (Indien), Thailändisch (Thailand), Türkisch (Türkei), Ukrainisch (Ukraine) und Vietnamesisch (Vietnam).

Sprachverfügbarkeit und Aussprache hängen von den vom Gerätehersteller oder dem Betriebssystem installierten Text-to-Speech-Stimmen ab. Das mitgelieferte Flite-Fallback ist nur für Android verfügbar und spricht Englisch; Beide Plattformen verfügen über einen Alarmton-Fallback, wenn keine Sprache verwendet werden kann.

<!-- section:downloads -->
## Laden Sie den kostenlosen Wecker herunter

| Plattform | Offizieller Download |
|---|---|
| iPhone und iPad | [Im Apple App Store herunterladen](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Bei Google Play herunterladen](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Quellen zum Vergleich

- [Noler im App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler bei Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy im App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy bei Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android-Hilfe: Horoskop-Setup](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Store-Funktionen und Paketgrößen können sich ändern. Vergleich geprüft am 19. September 2026. Alarmy ist eine Marke des jeweiligen Eigentümers; Dieses Projekt ist nicht mit Alarmy oder DelightRoom verbunden oder wird von diesen unterstützt.

---

Dieses Repository enthält Produktinformationen. Der proprietäre Quellcode der App wird hier nicht veröffentlicht. Die mitgelieferte Sprach-Engine Flite ist Open Source.

<div align="center">
  <strong>Wachen Sie mit einem fokussierten Wecker auf, ohne Werbung oder Tracking.</strong>
</div>
