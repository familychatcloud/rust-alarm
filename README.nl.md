<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler app-pictogram">

# Wekker zonder reclame

### Een lichtgewicht offline alarm voor iPhone, iPad en Android

Een wekker die erop gericht is u wakker te maken, zonder reclame, slaapregistratie, horoscopen of de extra achtergrondwerklast ervan.

Hoor waar je wekker voor is: 'Laten we naar school gaan.' ‘Neem uw medicijn.’ “Vertrek naar het vliegveld.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Download Noler in de App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Verkrijg Noler via Google Play"></a>

Gratis te downloaden. Geen rekening. Geen abonnement. Geen in-app-aankoop.

De eigenaar constateerde dat de batterij 's nachts ongeveer 3% leegliep met Noler versus 10% met Alarmy op dezelfde telefoon. Dit was informeel, geen gecontroleerde laboratoriumtest en is geen garantie.
</div>

<!-- section:focus -->
## Een gerichte wekker zonder ongerelateerde extra's

Noler is een gerichte wekker gebouwd met Rust. Het creëert eenmalige en herhaalde alarmen, spreekt het label van elk alarm hardop uit en bewaart alarmgegevens en instellingen op uw apparaat.

De app richt zich op alarmen in plaats van deze te combineren met een bredere lifestyleservice.

Er zijn geen advertenties die wachten nadat ze zijn verwijderd, geen analyses die kijken hoe u de app gebruikt, geen account om aan te maken, geen cloudservice om te onderhouden, en geen ongerelateerde weer-, nieuws-, horoscoop-, slaapregistratie- of snurkregistratiemachines die achter uw alarm draaien.

<!-- section:spoken-purpose -->
## Hoor het doel van uw alarm

Een normaal alarm gaat af, maar half wakker weet je misschien niet meer waar het voor is. Noler spreekt het etiket uit dat je voor dat alarm schreef:

> “Laten we naar school gaan.”

> ‘Neem uw medicijn.’

> ‘Vertrek nu naar het vliegveld.’

Het bericht begint op het apparaat wanneer het alarm afgaat. Je hoort meteen het doel, in plaats van dat je de app opent, een klein etiket leest of je afvraagt waarom de telefoon geluid maakt. Het is vooral handig voor schoolruns, medicatie, afspraken, koken, ploegendiensten en herinneringen die met familie worden gedeeld.

<!-- section:comparison -->
## Waarom deze Rust-wekker kiezen in plaats van Alarmy?

Rust combineert native prestaties met geheugenveiligheid en maakt één gedeelde appkern voor iOS en Android mogelijk. Zo houden we Noler klein en betrouwbaar, zonder reclamebibliotheken, analyse-SDK of diensten voor weer, horoscopen en slaap. Rust alleen bewijst geen batterijbesparing. Ons ontwerp draait om native code en het weglaten van achtergrondtaken die niets met de wekker te maken hebben; concrete verbruikscijfers vereisen metingen op echte apparaten.

| Wat er toe doet | Wekker zonder reclame | Alarmy |
|---|---|---|
| **Kernfilosofie** | Een gerichte wekker die het essentiële werk doet | Een breder slaap- en ochtendroutineplatform |
| **Kenmerkende wekervaring** | Spreekt het doel van het alarm hardop uit, bijvoorbeeld: 'Laten we naar school gaan' in plaats van een onverklaarbaar belsignaal | Richt zich op luide alarmen, wekmissies en slaapfuncties |
| **Spraakbeveiliging op het apparaat** | Systeem op het apparaat TTS; Android voegt gebundelde open-source Flite toe als er geen systeem-TTS-engine beschikbaar is; het OS-alarmgeluid is de laatste terugval | Zie de huidige lijst van Alarmy voor het goede gedrag |
| **Taal- en UI-stack** | Rust + Dioxus – één gedeelde, lichtgewicht applicatiekern en gebruikersinterface, met native Swift/Kotlin-alarmbruggen waar de besturingssystemen dit nodig hebben | Openbare technische bronnen verwijzen naar [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); de volledige technologiecombinatie van de huidige app is niet openbaar gemaakt. |
| **iOS-pakketgrootte** | 11.5 MB | 237.5 MB |
| **Verschil in iOS-grootte** | ≈1/20 | ≈20× |
| **Grootte van Android-release** | App-bundel van 5.6 MB geüpload naar Google Play | Google Play publiceert geen apparaatonafhankelijke pakketgrootte |
| **Reclame** | Geen | Bevat advertenties |
| **Abonnement of in-app-aankopen** | Geen | In-app aankopen en een premium abonnement |
| **Account vereist** | Nee – er is geen accountsysteem | Niet vergeleken; De winkelvermelding van Alarmy richt zich op de bredere functiecatalogus |
| **Analytics of gedragsregistratie** | Geen | Niet vergeleken; De belofte van Noler is dat het geen van beide omvat |
| **Cloudsynchronisatie** | Geen: alarmgegevens blijven op het apparaat aanwezig | Niet vergeleken; Noler heeft bewust geen wolkenlaag |
| **Weerfunctie** | Nee | Ja – de Android-lijst van Alarmy zegt dat de locatie kan worden gebruikt om het weer te verkrijgen nadat de app is gesloten |
| **Horoscoopfunctie** | Nee | Ja – gedocumenteerd in het Android-helpcentrum van Alarmy |
| **Slaap volgen** | Nee | Ja |
| **Snurkmonitoring** | Nee | Ja |
| **Slaapgeluiden / ASMR** | Nee | Ja |
| **Werklast voor achtergrondfuncties** | Alarmgerelateerde werkzaamheden; geen ongerelateerde online feeds, tracking, advertenties of cloudwerk | Extra ingeschakelde functies kunnen achtergrond- en netwerkwerk met zich meebrengen; er wordt geen gecontroleerde vermogensvergelijking geclaimd |
| **Waargenomen dat de batterij 's nachts leegliep** | Ongeveer 3% in de nachtelijke test van de eigenaar met dezelfde telefoon | Ongeveer 10% in dezelfde test |
| **Batterijverschil in die observatie** | Alleen al bij deze informele observatie ongeveer 70% minder afvoer | Ongeveer 3.3 x de waargenomen drain van Noler; geen algemene maatstaf |
| **Batterijbenadering** | Batterijbesparing is een productprioriteit. De normale werking van het alarm is volledig offline, waardoor Wi-Fi/mobiel datawerk en het batterijgebruik als gevolg van het weer, de horoscoop, slaapanalyse, advertenties, analyses en cloudsynchronisatie worden vermeden | De grotere verbonden functieset kan netwerk- en verwerkingswerkzaamheden uitvoeren die verder gaan dan het plannen en laten afgaan van alarmen |
| **Normaal alarmdatanetwerkgebruik** | Nul: alarmen, labels, instellingen, bijlagen, spraak en planning blijven op het apparaat staan | Voor verbonden functies is netwerktoegang vereist |
| **UI-talen** | 39 in-app landkeuzes | 31 unieke taalcodes vermeld in het huidige iOS-pakket |
| **Alarmstemtalen** | 24 keuzes, met behulp van spraak op uw apparaat | Zie de lijst van Alarmy voor de huidige spraakdekking |

Om de grootte te vergelijken wordt gebruik gemaakt van het aantal pakketbytes dat door Apple's catalogus wordt gerapporteerd voor de huidige Amerikaanse App Store-versies op 19 september 2026: Noler 11,506,688 bytes en Alarmy 237,476,864 bytes. Android App Bundles maken gebruik van gesplitste levering, dus de download- en installatiegrootte van Google Play verschilt per apparaat; 5.6 MB is de geverifieerde huidige Play-uploadbundel van Noler, geen beloofde maat voor de geïnstalleerde grootte.

Taaltellingen maken gebruik van ander openbaar bewijs: de telling van Noler komt uit de taalkiezer in de app, terwijl de telling van Alarmy de unieke taalcodetelling is die wordt gerapporteerd door het huidige iOS-pakket. De 39 keuzes verwijzen naar de in-app-interface en vormen geen garantie voor de huidige lokalisatiestatus van de winkelpui.

Alarmy is een capabele keuze voor mensen die actief wakker willen worden, slaapanalyse, snurkmonitoring, slaapgeluiden, weer, horoscoop en een catalogus met premiumfuncties. Kies voor Noler als je wilt dat je alarmapp een alarmapp blijft.

<!-- section:battery-observation -->
## Onze informele nachtelijke observatie: 3% versus 10%

Op de telefoon van de eigenaar bleek uit een nachtelijke test dat het batterijgebruik ongeveer 3% was met Noler, tegenover ongeveer 10% met Alarmy. Met andere woorden: Alarmy gebruikte ongeveer 3.3 keer zoveel batterij tijdens die nachtelijke observatie, terwijl het verbruik van Noler ongeveer 70% lager was.

Dit was een vergelijking uit de eerste hand, via dezelfde telefoon, in plaats van een gecontroleerde laboratoriumcertificering. De batterijresultaten variëren afhankelijk van de telefoon, de batterijstatus, het besturingssysteem, de signaalsterkte, alarminstellingen en ingeschakelde functies. De exacte cijfers zijn niet op elk apparaat gegarandeerd, maar de reden om voorrang te geven aan de batterij is in het product ingebouwd.

<!-- section:battery-workload -->
## Minder netwerken betekent minder batterijwerk

Aan elke extra achtergrondfunctie zijn kosten verbonden. Het weer moet worden opgehaald. Horoscoopinhoud moet worden opgehaald. Het volgen van slaap- en snurken vereist uitgebreide monitoring. Advertenties en analyses vereisen code, netwerkverkeer en verwerking. Cloudaccounts vereisen synchronisatie.

Noler doet dat allemaal niet tijdens normaal alarmgebruik. Er is geen Wi-Fi of mobiele data nodig om een alarm op te slaan, te plannen, uit te spreken of te laten afgaan. Door volledig offline te blijven voor zijn kerntaak, vermijdt het dat de netwerkradio wordt geactiveerd voor weer-, horoscoop-, reclame-, analyse-, account- of cloud-synchronisatieverkeer.

Het product is de meest duurzame batterijbesparende keuze: begin niet meteen met ongerelateerde werkzaamheden. Minder verantwoordelijkheden op de achtergrond betekent minder mogelijkheden om CPU-tijd, Wi-Fi/mobiele radio-tijd, geheugen en batterij te verbruiken naast het werk dat een alarm feitelijk nodig heeft.

### Hoe een numerieke batterijvergelijking wordt getest

Een simulator kan geen geldige vergelijking tussen telefoon en batterij bieden: deze werkt op de processor, radio en voeding van de computer. Elke toekomstige claim dat de batterij X keer minder wordt gebruikt, zal voortkomen uit tests met overeenkomende fysieke apparaten.

De benchmark zal beide apps uitvoeren op hetzelfde model, dezelfde besturingssysteemversie, batterijstatusbereik, netwerk, helderheid, volume en temperatuur. Het meet twee afzonderlijk bekendgemaakte scenario's: een vergelijkbaar basisalarm en de normale standaardervaring van elke app. De testvolgorde wordt afgewisseld, niet-gerelateerde apps worden gestopt, apparaten beginnen met dezelfde lading en temperatuur en elk scenario wordt minstens vijf keer herhaald.

Android-metingen maken gebruik van systeembatterijstatistieken en hardware-energiegegevens, indien ondersteund. Bij iOS-metingen worden de energiesporen van Instruments op een fysieke iPhone gebruikt. De resultaten rapporteren de testduur, exacte instellingen, de mediaan van het energieverbruik, het run-to-run-bereik en onbewerkte traceerbestanden. Totdat dat gecontroleerde bewijs bestaat, blijft het gepubliceerde resultaat van 3% versus 10% duidelijk geïdentificeerd als een nachtelijke observatie van het echte apparaat van de eigenaar, en geen garantie voor elke telefoon.

<!-- section:package-size -->
## Een klein pakket met een gerichte functieset

Op iOS is het huidige Noler-pakket ongeveer 11.5 MB groot, vergeleken met de 237.5 MB van Alarmy, ongeveer 20× kleiner. De huidige Android App Bundle die naar Google Play is geüpload, is 5.6 MB.

Dat verschil is geen toeval. Noler bundelt geen slaapplatform, advertentiesysteem, analyselaag, cloudaccountsysteem, nieuwsfeed, weerservice of horoscoopfeed. Je downloadt een wekker en krijgt een wekker.

<!-- section:privacy -->
## Privé door ontwerp

Bij normaal alarmgebruik worden nergens alarmgegevens verzonden.

- Geen advertentie-ID
- Geen account of login
- Geen analyse-SDK
- Geen gedragsregistratie
- Geen cloudback-up of synchronisatie
- Geen alarmdataservice op afstand
- Geen cross-origin netwerkverzoek op de achtergrond

Alarmgegevens, labels, instellingen, bijlagen, spraak en notificatieplanning blijven op uw apparaat staan. De live voorwaarden-, privacy- en ondersteuningspagina's worden alleen geopend als u deze expliciet selecteert in Instellingen.

<!-- section:speech-fallback -->
## Een pratend alarm dat uitlegt waarom het afgaat

Geef een alarm een label zoals 'School', 'Geneeskunde', 'Luchthaven' of 'Bel moeder'. Wanneer het overgaat, kan Noler dat label hardop uitspreken met de spraak die beschikbaar is op uw apparaat.

De geluidsstrategie op het apparaat is platformspecifiek. Beide platforms gebruiken systeemtekst-naar-spraak voor het alarmlabel. Op Android neemt een gebundelde, lichtgewicht open-source Flite-stem het over wanneer een apparaat geen bruikbare systeem-TTS-engine heeft. Het alarmgeluid van het besturingssysteem blijft de laatste veiligheidsvloer.

Alleen op Android biedt de meegeleverde opensource-engine Flite een Engelse reservestem als er geen bruikbare systeemspraak beschikbaar is. Stemmen hangen af van geïnstalleerde talen. De optionele modus om de app actief te houden staat standaard uit en kan meer batterij gebruiken.

Het terugvalalarmgeluid is bedoeld om te voorkomen dat een onbeschikbare stem een stil alarm produceert.

<!-- section:features -->
## Wat je krijgt

- Eenmalige en herhaalde alarmen op weekdagen
- Gesproken alarmlabels
- Grote knoppen om te snoozen en te stoppen
- Een duidelijk zicht op het volgende geplande alarm
- Lokale bijlagen en instellingen
- Opslag op het apparaat zonder account
- Een donkere, afleidingsvrije interface
- Ondersteuning voor iPhone, iPad en Android
- 39 UI-landinstellingen
- 24 taalkeuzes voor alarmstem

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler-alarmlijst en volgend alarmscherm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler wekkerscherm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Scherm met Noler-alarminstellingen">
</div>

<!-- section:ui-languages -->
## 39 interface-locale keuzes

Arabisch, Catalaans, Chinees (vereenvoudigd), Chinees (traditioneel), Kroatisch, Tsjechisch, Deens, Nederlands, Engels (Australië), Engels (Canada), Engels (Verenigd Koninkrijk), Engels (Verenigde Staten), Fins, Frans, Frans (Canada), Duits, Grieks, Hebreeuws, Hindi, Hongaars, Indonesisch, Italiaans, Japans, Koreaans, Maleis, Noors - Bokmål, Pools, Portugees (Brazilië), Portugees (Portugal), Roemeens, Russisch, Slowaaks, Spaans, Spaans (Latijns-Amerika), Zweeds, Thai, Turks, Oekraïens en Vietnamees.

<!-- section:voice-languages -->
## 24 taalkeuzes voor alarmstem

Arabisch (Egypte), Bengaals (Bangladesh), Nederlands (Nederland), Engels (India), Engels (Verenigde Staten), Frans (Frankrijk), Duits (Duitsland), Hindi (India), Indonesisch (Indonesië), Italiaans (Italië), Japans (Japan), Koreaans (Zuid-Korea), Marathi (India), Pools (Polen), Portugees (Brazilië), Roemeens (Roemenië), Russisch (Rusland), Spaans (Verenigde Staten), Tamil (India), Telugu (India), Thai (Thailand), Turks (Turkije), Oekraïens (Oekraïne) en Vietnamees (Vietnam).

De beschikbaarheid en uitspraak van stemmen zijn afhankelijk van de tekst-naar-spraak-stemmen die zijn geïnstalleerd door de fabrikant van het apparaat of het besturingssysteem. De gebundelde Flite-fallback is alleen voor Android en spreekt Engels; beide platforms hebben een alarmgeluid als er geen spraak kan worden gebruikt.

<!-- section:downloads -->
## Download de gratis wekker

| Platform | Officieel downloaden |
|---|---|
| iPhone en iPad | [Downloaden in de Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Download het op Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Bronnen voor de vergelijking

- [Noler in de App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler op Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy in de App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy op Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android-hulp: horoscoop instellen](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Winkelfuncties en verpakkingsgroottes kunnen veranderen. Vergelijking gecontroleerd op 19 september 2026. Alarmy is een handelsmerk van de respectieve eigenaar; dit project is niet gelieerd aan of goedgekeurd door Alarmy of DelightRoom.

---

Deze repository bevat productinformatie, niet de gesloten broncode van de app. De meegeleverde Flite-spraakengine is open source.

<div align="center">
  <strong>Word wakker met een gerichte wekker, zonder advertenties of tracking.</strong>
</div>
