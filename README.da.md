<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler app-ikon">

# Vækkeur uden reklamer

### En let offline alarm til iPhone, iPad og Android

Et vækkeur fokuseret på at vække dig uden reklamer, søvnregistrering, horoskoper eller deres ekstra baggrundsarbejdsbelastning.

Hør, hvad din alarm er til: "Lad os gå i skole." "Tag din medicin." "Tag til lufthavnen."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Download Noler på App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Få Noler på Google Play"></a>

Gratis at downloade. Ingen konto. Intet abonnement. Intet køb i appen.

Ejeren observerede, at omkring 3% afladte batteriet natten over med Noler mod 10% med Alarmy på den samme telefon. Dette var uformelt, ikke en kontrolleret laboratorietest og er ikke en garanti.
</div>

<!-- section:focus -->
## Et fokuseret vækkeur uden uafhængige ekstrafunktioner

Noler er et fokuseret vækkeur bygget med Rust. Den opretter engangsalarmer og gentagne alarmer, siger hver alarms etiket højt og gemmer alarmregistreringer og -indstillinger på din enhed.

Appen fokuserer på alarmer i stedet for at kombinere dem med en bredere livsstilsservice.

Der er ingen annoncer, der venter efter afvisning, ingen analyser, der ser, hvordan du bruger appen, ingen konto til at oprette, ingen skytjeneste, der skal vedligeholdes, og ingen urelaterede vejr-, nyheder, horoskoper, søvnsporing eller snorkeoptagelsesmaskiner, der kører bag din alarm.

<!-- section:spoken-purpose -->
## Hør formålet med din alarm

En normal alarm ringer, men halvvågen husker du måske ikke, hvad den er til. Noler taler den etiket, du skrev til den alarm:

> "Lad os gå i skole."

> "Tag din medicin."

> "Gå nu til lufthavnen."

Meddelelsen begynder på enheden, når alarmen udløses. Du hører formålet med det samme i stedet for at åbne appen, læse en lille etiket eller undre dig over, hvorfor telefonen larmer. Det er især nyttigt til skoleløb, medicin, aftaler, madlavning, skifteholdsarbejde og påmindelser, der deles med familien.

<!-- section:comparison -->
## Hvorfor vælge et Rust-baseret vækkeur frem for Alarmy?

Rust kombinerer høj ydeevne med hukommelsessikkerhed og gør det muligt at dele én kerne mellem iOS og Android. Det hjælper os med at holde Noler lille og pålidelig uden reklamebiblioteker, analyse-SDK eller tjenester til vejr, horoskoper og søvn. Rust alene dokumenterer dog ikke et lavere batteriforbrug. Designet bygger på native kode og fravalg af uvedkommende baggrundsopgaver; konkrete forbrugstal kræver målinger på fysiske enheder.

| Hvad betyder noget | Vækkeur uden reklamer | Alarmy |
|---|---|---|
| **Kernefilosofi** | Et fokuseret vækkeur, der gør det væsentlige arbejde | En bredere platform for søvn og morgenrutine |
| **Signature wake-up oplevelse** | Siger alarmens formål højt - for eksempel "Lad os gå i skole" i stedet for en uforklarlig ring | Fokuserer på høje alarmer, opvågningsmissioner og søvnfunktioner |
| **Talesikkerhed på enheden** | On-device system TTS; Android tilføjer medfølgende open source Flite, når ingen system-TTS-motor er tilgængelig; OS alarmlyden er det sidste tilbagefald | Se Alarmys aktuelle liste for dens lydadfærd |
| **Sprog og UI stak** | Rust + Dioxus — én delt, let applikationskerne og brugergrænseflade med indbyggede Swift/Kotlin alarmbroer, hvor operativsystemerne kræver det | Offentligt teknisk materiale henviser til [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); den fulde teknologisammensætning i den aktuelle app er ikke offentliggjort. |
| **iOS-pakkestørrelse** | 11.5 MB | 237.5 MB |
| **iOS størrelse forskel** | ≈1/20 | ≈20× |
| **Android-udgivelsesstørrelse** | 5.6 MB App Bundle uploadet til Google Play | Google Play udgiver ikke én enhedsuafhængig pakkestørrelse |
| **Annoncering** | Ingen | Indeholder annoncer |
| **Abonnement eller køb i appen** | Ingen | Køb i app og et premium-abonnement |
| **Konto påkrævet** | Nej - der er ikke noget kontosystem | Ikke sammenlignet; Alarmys butiksfortegnelse fokuserer på dets bredere funktionskatalog |
| **Analytics eller adfærdssporing** | Ingen | Ikke sammenlignet; Nolers løfte er, at det heller ikke inkluderer |
| **Skysynkronisering** | Ingen – alarmdata forbliver på enheden | Ikke sammenlignet; Noler har bevidst ikke noget skylag |
| **Vejrfunktion** | Nej | Ja - Alarmys Android-liste siger, at placeringen kan bruges til at få vejret, efter at appen er lukket |
| **Horoskop funktion** | Nej | Ja — dokumenteret i Alarmys Android-hjælpecenter |
| **Søvnsporing** | Nej | Ja |
| **Snorkeovervågning** | Nej | Ja |
| **Søvnlyde / ASMR** | Nej | Ja |
| **Arbejdsbyrde for baggrundsfunktioner** | Alarmrelateret arbejde; ingen urelaterede online-feeds, sporing, annoncer eller cloud-arbejde | Yderligere aktiverede funktioner kan involvere baggrunds- og netværksarbejde; der påstås ingen kontrolleret effektsammenligning |
| **Observeret batteriafladning natten over** | Omkring 3% i ejerens samme-telefon natten over test | Cirka 10% i samme test |
| **Batteriforskel i den observation** | Ca. 70% mindre dræn kun i denne uformelle observation | Ca. 3.3× Nolers observerede dræn; ikke et generelt benchmark |
| **Batteri tilgang** | Batteribesparelse er en produktprioritet. Normal alarmdrift er helt offline, og undgår Wi-Fi/mobildata arbejde plus batteriforbrug forårsaget af vejr, horoskop, søvnanalyse, annoncer, analyser og skysynkronisering | Dens større forbundne funktionssæt kan udføre netværks- og behandlingsarbejde ud over at planlægge og ringe alarmer |
| **Normal brug af alarmdatanetværk** | Nul – alarmer, etiketter, indstillinger, vedhæftede filer, tale og planlægning forbliver på enheden | Tilsluttede funktioner kræver netværksadgang |
| **UI sprog** | 39 lokale valg i appen | 31 unikke sprogkoder angivet af den aktuelle iOS-pakke |
| **Alarm stemme sprog** | 24 valg, ved hjælp af tale på din enhed | Se Alarmys liste for dets aktuelle stemmedækning |

Størrelsessammenligning bruger pakkebyte-antalene rapporteret af Apples katalog for de aktuelle amerikanske App Store-versioner den 19. september 2026: Noler 11,506,688 bytes og Alarmy 237,476,864 bytes. Android App Bundles bruger opdelt levering, så hver persons Google Play-download og installerede størrelse varierer efter enhed; 5.6 MB er Nolers verificerede aktuelle Play-uploadpakke, ikke en lovet måling af installeret størrelse.

Sprogtællinger bruger forskellige offentlige beviser: Nolers tælling kommer fra sprogvælgeren i appen, mens Alarmys tælling er det unikke antal sprogkoder, der rapporteres af dens nuværende iOS-pakke. De 39 valg refererer til grænsefladen i appen, ikke en garanti for den aktuelle butiksfacadelokaliseringstilstand.

Alarmy er et egnet valg for folk, der aktivt ønsker opvågningsmissioner, søvnanalyse, snorkeovervågning, søvnlyde, vejr, horoskop og et premium-funktionskatalog. Vælg Noler, når du ønsker, at din alarmapp skal forblive en alarmapp.

<!-- section:battery-observation -->
## Vores uformelle observation natten over: 3% mod 10%

På ejerens telefon viste en test over natten omkring 3% batteriforbrug med Noler mod omkring 10% med Alarmy. Sagt på en anden måde brugte Alarmy omkring 3.3 gange så meget batteri i den nattens observation, mens Nolers dræning var omkring 70% lavere.

Dette var en førstehånds sammenligning med samme telefon snarere end en kontrolleret laboratoriecertificering. Batteriresultaterne varierer med telefonen, batteriets tilstand, operativsystem, signalstyrke, alarmindstillinger og aktiverede funktioner. De nøjagtige tal er ikke garanteret på alle enheder - men årsagen til at prioritere batteriet er indbygget i produktet.

<!-- section:battery-workload -->
## Mindre netværk betyder mindre batteriarbejde

Hver ekstra baggrundsfunktion har en omkostning. Vejret skal hentes. Horoskopindhold skal hentes. Søvn- og snorkesporing kræver udvidet overvågning. Annoncer og analyser kræver kode, netværkstrafik og behandling. Cloud-konti kræver synkronisering.

Noler gør intet af det under normal alarmbrug. Det behøver ikke Wi-Fi eller mobildata for at gemme, planlægge, tale eller ringe en alarm. Ved at forblive helt offline til sin kerneopgave undgår den at vække netværksradioen for vejr, horoskop, reklamer, analyser, konto- eller skysynkroniseringstrafik.

Produktet er det mest holdbare batteribesparende valg: start ikke urelateret arbejde i første omgang. Færre baggrundsansvar betyder færre muligheder for at forbruge CPU-tid, Wi-Fi/mobilradiotid, hukommelse og batteri ud over det arbejde, en alarm faktisk har brug for.

### Hvordan en numerisk batterisammenligning vil blive testet

En simulator kan ikke give en gyldig sammenligning mellem telefon og batteri: den kører på computerens processor, radio og strømforsyning. Enhver fremtidig "bruger X gange mindre batteri"-påstand vil komme fra matchede fysiske enhedstests.

Benchmark vil køre begge apps på samme model, OS-version, batteri-sundhedsområde, netværk, lysstyrke, lydstyrke og temperatur. Den vil måle to separat afslørede scenarier: en lignende grundlæggende alarm og hver apps normale standardoplevelse. Testrækkefølgen vil blive vekslet, ikke-relaterede apps vil blive stoppet, enheder starter ved samme opladning og temperatur, og hvert scenarie vil blive gentaget mindst fem gange.

Android-måling vil bruge systembatteristatistik og hardwarestrømdata, når det understøttes. iOS-måling vil bruge Instruments energispor på en fysisk iPhone. Resultaterne rapporterer testvarigheden, nøjagtige indstillinger, medianenergiresultat, run-to-run rækkevidde og rå sporingsfiler. Indtil disse kontrollerede beviser eksisterer, forbliver det offentliggjorte 3%-versus-10%-resultat klart identificeret som ejerens observation fra den virkelige enhed natten over, ikke en garanti for hver telefon.

<!-- section:package-size -->
## En lille pakke med et fokuseret funktionssæt

På iOS er den nuværende Noler-pakke omkring 11.5 MB sammenlignet med Alarmys 237.5 MB - cirka 20× mindre. Den aktuelle Android App Bundle, der er uploadet til Google Play, er 5.6 MB.

Den forskel er ikke et tilfælde. Noler samler ikke en søvnplatform, et reklamesystem, et analyselag, et cloudkontosystem, et nyhedsfeed, en vejrtjeneste eller et horoskopfeed. Du downloader et vækkeur og får et vækkeur.

<!-- section:privacy -->
## Privat af design

Normal brug af alarm sender ingen alarmdata nogen steder.

- Intet reklame-id
- Ingen konto eller login
- Ingen analyse-SDK
- Ingen adfærdssporing
- Ingen cloud backup eller synkronisering
- Ingen fjernalarm-datatjeneste
- Ingen baggrundsanmodning på tværs af oprindelse

Alarmregistreringer, etiketter, indstillinger, vedhæftede filer, tale og underretningsplanlægning forbliver på din enhed. Live vilkår, privatliv og supportsider åbner kun, når du udtrykkeligt vælger dem i Indstillinger.

<!-- section:speech-fallback -->
## En talende alarm, der forklarer, hvorfor den ringer

Giv en alarm en etiket såsom "Skole", "Medicin", "Lufthavn" eller "Ring til mor". Når den ringer, kan Noler tale denne etiket højt ved hjælp af tale, der er tilgængelig på din enhed.

Dens on-device lydstrategi er platformsspecifik. Begge platforme bruger systemtekst-til-tale til alarmetiketten. På Android tager en medfølgende letvægts open source Flite-stemme over, når en enhed ikke har nogen brugbar system-TTS-motor. Operativsystemets alarmlyd forbliver det sidste sikkerhedsgulv.

Kun på Android giver den indbyggede open source-motor Flite en engelsk reservestemme, hvis systemets tale ikke kan bruges. Stemmer afhænger af installerede sprog. Den valgfrie funktion, der holder appen aktiv, er slået fra som standard og kan øge batteriforbruget.

Fallback-alarmlyden er beregnet til at forhindre en utilgængelig stemme i at producere en lydløs alarm.

<!-- section:features -->
## Hvad du får

- Engangsalarmer og gentagne hverdagsalarmer
- Talte alarmetiketter
- Store knapper til snooze og stop
- Et klart overblik over den næste planlagte alarm
- Lokale vedhæftede filer og indstillinger
- Lagerplads på enheden uden konto
- En mørk, distraktionsfri grænseflade
- iPhone, iPad og Android support
- 39 UI-lokalitetsvalg
- 24 sprogvalg for alarm-stemme

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler alarmliste og næste alarmskærm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler vækkeur skærm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler alarmindstillingsskærm">
</div>

<!-- section:ui-languages -->
## 39 grænsefladevalg

arabisk, catalansk, forenklet kinesisk, traditionelt kinesisk, kroatisk, tjekkisk, dansk, nederlandsk, australsk engelsk, canadisk engelsk, britisk engelsk, amerikansk engelsk, finsk, fransk, canadisk fransk, tysk, græsk, hebraisk, hindi, ungarsk, indonesisk, italiensk, japansk, koreansk, malajisk, bokmål, polsk, brasiliansk portugisisk, europæisk portugisisk, rumænsk, russisk, slovakisk, spansk, latinamerikansk spansk, svensk, thai, tyrkisk, ukrainsk og vietnamesisk.

<!-- section:voice-languages -->
## 24 sprogvalg for alarm-stemme

arabisk (Egypten), bengali (Bangladesh), nederlandsk (Nederlandene), engelsk (Indien), amerikansk engelsk, fransk (Frankrig), tysk (Tyskland), hindi (Indien), indonesisk (Indonesien), italiensk (Italien), japansk (Japan), koreansk (Sydkorea), marathi (Indien), polsk (Polen), brasiliansk portugisisk, rumænsk (Rumænien), russisk (Rusland), spansk (USA), tamil (Indien), telugu (Indien), thai (Thailand), tyrkisk (Tyrkiet), ukrainsk (Ukraine) og vietnamesisk (Vietnam).

Stemmetilgængelighed og udtale afhænger af de tekst-til-tale-stemmer, der er installeret af enhedsproducenten eller operativsystemet. Den medfølgende Flite fallback er kun Android og taler engelsk; begge platforme har en alarm-lyd fallback, når tale ikke kan bruges.

<!-- section:downloads -->
## Download det gratis vækkeur

| Platform | Officiel download |
|---|---|
| iPhone og iPad | [Download på Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Få det på Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Kilder til sammenligningen

- [Noler i App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler på Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy i App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy på Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android-hjælp: opsætning af horoskop](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Butiksfunktioner og pakkestørrelser kan ændres. Sammenligning kontrolleret 19. september 2026. Alarmy er et varemærke tilhørende dets respektive ejere; dette projekt er ikke tilknyttet eller godkendt af Alarmy eller DelightRoom.

---

Dette repository indeholder produktinformation. Appens proprietære kildekode offentliggøres ikke her. Den indbyggede Flite-talemotor er open source.

<div align="center">
  <strong>Vågn op med et fokuseret vækkeur uden annoncer eller sporing.</strong>
</div>
