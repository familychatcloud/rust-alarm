<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler app-ikon">

# Vekkerklokke uten reklame

### En lett frakoblet alarm for iPhone, iPad og Android

En vekkerklokke fokusert på å vekke deg, uten reklame, søvnsporing, horoskoper eller deres ekstra bakgrunnsarbeid.

Hør hva alarmen din er for: «La oss gå til skolen». "Ta medisinen din." "Dra til flyplassen."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Last ned Noler på App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Få Noler på Google Play"></a>

Gratis å laste ned. Ingen konto. Ingen abonnement. Ingen kjøp i appen.

Eieren observerte ca. 3% batteritap over natten med Noler mot 10% med Alarmy på samme telefon. Dette var uformell, ikke en kontrollert laboratorietest, og er ingen garanti.
</div>

<!-- section:focus -->
## En fokusert vekkerklokke uten ikke-relatert ekstrautstyr

Noler er en fokusert vekkerklokke bygget med Rust. Den lager engangsalarmer og gjentatte alarmer, sier hver alarms etikett høyt, og oppbevarer alarmoppføringer og innstillinger på enheten din.

Appen fokuserer på alarmer i stedet for å kombinere dem med en bredere livsstilstjeneste.

Det er ingen annonser som venter etter avvisning, ingen analyser som ser på hvordan du bruker appen, ingen konto å opprette, ingen skytjeneste å vedlikeholde, og ingen urelatert vær, nyheter, horoskop, søvnsporing eller snorkeregistreringsmaskiner som kjører bak alarmen.

<!-- section:spoken-purpose -->
## Hør formålet med alarmen

En vanlig alarm ringer, men halvvåken husker du kanskje ikke hva den er til. Noler sier etiketten du skrev for den alarmen:

> "La oss gå til skolen."

> "Ta medisinen din."

> "Gå nå til flyplassen."

Meldingen starter på enheten når alarmen utløses. Du hører hensikten umiddelbart i stedet for å åpne appen, lese en liten etikett eller lure på hvorfor telefonen lager støy. Det er spesielt nyttig for skoleløp, medisiner, avtaler, matlaging, skiftarbeid og påminnelser som deles med familien.

<!-- section:comparison -->
## Hvorfor velge denne Rust-baserte vekkerklokken fremfor Alarmy?

Rust kombinerer god ytelse med minnesikkerhet og gjør det mulig å dele én appkjerne mellom iOS og Android. Det hjelper oss å holde Noler liten og pålitelig uten reklamebiblioteker, analyse-SDK eller tjenester for vær, horoskoper og søvn. Rust alene dokumenterer ikke lavere batteriforbruk. Utformingen bygger på plattformnær kode og fravalg av uvedkommende bakgrunnsoppgaver; konkrete forbrukstall krever målinger på fysiske enheter.

| Hva betyr noe | Vekkerklokke uten reklame | Alarmy |
|---|---|---|
| **Kjernefilosofi** | En fokusert vekkerklokke som gjør den essensielle jobben | En bredere søvn- og morgenrutineplattform |
| **Signatur vekkeopplevelse** | Sier alarmens formål høyt – for eksempel «La oss gå til skolen» i stedet for en uforklarlig ring | Fokuserer på høye alarmer, vekkeoppdrag og søvnfunksjoner |
| **Talesikkerhet på enheten** | On-device system TTS; Android legger til medfølgende åpen kildekode Flite når ingen system-TTS-motor er tilgjengelig; OS-alarmlyden er den siste reserven | Se Alarmys nåværende oppføring for lydadferd |
| **Språk og UI-stabel** | Rust + Dioxus — én delt, lett applikasjonskjerne og brukergrensesnitt, med native Swift/Kotlin alarmbroer der operativsystemene krever dem | Offentlige tekniske kilder viser til [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); den komplette teknologisammensetningen i den nåværende appen er ikke offentliggjort. |
| **iOS-pakkestørrelse** | 11.5 MB | 237.5 MB |
| **iOS størrelsesforskjell** | ≈1/20 | ≈20× |
| **Android-utgivelsesstørrelse** | 5.6 MB App Bundle lastet opp til Google Play | Google Play publiserer ikke én enhetsuavhengig pakkestørrelse |
| **Annonsering** | Ingen | Inneholder annonser |
| **Abonnement eller kjøp i appen** | Ingen | Kjøp i appen og et premium-abonnement |
| **Konto kreves** | Nei - det er ikke noe kontosystem | Ikke sammenlignet; Alarmys butikkoppføring fokuserer på sin bredere funksjonskatalog |
| **Analytics eller atferdssporing** | Ingen | Ikke sammenlignet; Nolers løfte er at det heller ikke inkluderer |
| **Skysynkronisering** | Ingen – alarmdata forblir på enheten | Ikke sammenlignet; Noler har bevisst ikke noe skylag |
| **Værfunksjon** | Nei | Ja – Alarmys Android-oppføring sier at posisjon kan brukes til å få vær etter at appen er stengt |
| **Horoskop funksjon** | Nei | Ja – dokumentert i Alarmys Android-hjelpesenter |
| **Søvnsporing** | Nei | Ja |
| **Snorkeovervåking** | Nei | Ja |
| **Søvnlyder / ASMR** | Nei | Ja |
| **Arbeidsmengde for bakgrunnsfunksjoner** | Alarmrelatert arbeid; ingen urelaterte nettstrømmer, sporing, annonser eller skyarbeid | Ytterligere aktiverte funksjoner kan involvere bakgrunns- og nettverksarbeid; ingen kontrollert effektsammenligning hevdes |
| **Observert batteritømming over natten** | Omtrent 3% i eierens samme-telefon over natten test | Ca 10% i samme test |
| **Batteriforskjell i den observasjonen** | Omtrent 70% mindre drenering kun i denne uformelle observasjonen | Ca 3.3× Nolers observerte drenering; ikke en generell målestokk |
| **Batteritilnærming** | Batterisparing er en produktprioritet. Normal alarmdrift er helt offline, og unngår Wi-Fi/mobildataarbeid pluss batteribruk forårsaket av vær, horoskop, søvnanalyse, annonser, analyser og skysynkronisering | Det større tilkoblede funksjonssettet kan utføre nettverks- og prosessarbeid utover å planlegge og ringe alarmer |
| **Normal bruk av alarmdatanettverk** | Null – alarmer, etiketter, innstillinger, vedlegg, tale og planlegging forblir på enheten | Tilkoblede funksjoner krever nettverkstilgang |
| **UI-språk** | 39 lokale valg i appen | 31 unike språkkoder oppført av gjeldende iOS-pakke |
| **Alarmstemmespråk** | 24 valg, ved å bruke tale på enheten din | Se Alarmys liste for gjeldende taledekning |

Størrelsessammenligning bruker antall pakkebyte rapportert av Apples katalog for gjeldende amerikanske App Store-versjoner 19. september 2026: Noler 11,506,688 byte og Alarmy 237,476,864 byte. Android App Bundles bruker delt levering, så hver persons Google Play-nedlasting og installerte størrelse varierer fra enhet til enhet; 5.6 MB er Nolers verifiserte nåværende Play-opplastingspakke, ikke en lovet måling av installert størrelse.

Språktellinger bruker forskjellige offentlige bevis: Nolers telling kommer fra språkvelgeren i appen, mens Alarmys telling er den unike språkkodetellingen som rapporteres av den nåværende iOS-pakken. De 39 valgene refererer til grensesnittet i appen, ikke en garanti for gjeldende lokaliseringsstatus for butikkfronten.

Alarmy er et egnet valg for folk som aktivt ønsker vekkeoppdrag, søvnanalyse, snorkeovervåking, søvnlyder, vær, horoskop og en premium funksjonskatalog. Velg Noler når du vil at alarmappen skal forbli en alarmapp.

<!-- section:battery-observation -->
## Vår uformelle observasjon over natten: 3% mot 10%

På eierens telefon viste en test over natten ca 3% batteribruk med Noler mot ca 10% med Alarmy. Sagt på en annen måte, Alarmy brukte omtrent 3.3 ganger så mye batteri i den nattobservasjonen, mens Nolers drenering var omtrent 70% lavere.

Dette var en førstehånds sammenligning med samme telefon i stedet for en kontrollert laboratoriestifisering. Batteriresultatene varierer med telefonen, batteritilstand, operativsystem, signalstyrke, alarminnstillinger og aktiverte funksjoner. De nøyaktige tallene er ikke garantert på alle enheter – men grunnen til å prioritere batteri er innebygd i produktet.

<!-- section:battery-workload -->
## Mindre nettverk betyr mindre batteriarbeid

Hver ekstra bakgrunnsfunksjon har en kostnad. Været må hentes. Horoskopinnhold må hentes. Søvn- og snorkesporing krever utvidet overvåking. Annonser og analyser krever kode, nettverkstrafikk og behandling. Skykontoer krever synkronisering.

Noler gjør ingenting av det ved normal alarmbruk. Den trenger ikke Wi-Fi eller mobildata for å lagre, planlegge, snakke eller ringe en alarm. Ved å forbli helt offline for kjernejobben, unngår den å vekke nettverksradioen for vær, horoskop, reklame, analyser, konto eller skysynkronisering.

Produktet gjør det mest holdbare batterisparende valget: ikke start urelatert arbeid med det første. Færre bakgrunnsansvar betyr færre muligheter til å bruke CPU-tid, Wi-Fi/mobilradiotid, minne og batteri utover arbeidet en alarm faktisk trenger.

### Hvordan en numerisk batterisammenligning vil bli testet

En simulator kan ikke gi en gyldig telefon-batteri-sammenligning: den kjører på datamaskinens prosessor, radio og strømforsyning. Eventuelle fremtidige "bruker X ganger mindre batteri"-påstander kommer fra samsvarende fysiske enhetstester.

Benchmark vil kjøre begge appene på samme modell, OS-versjon, batterihelseområde, nettverk, lysstyrke, volum og temperatur. Den vil måle to separat avslørte scenarier: en like-for-like grunnleggende alarm, og hver apps normale standardopplevelse. Testrekkefølgen vil bli vekslet, urelaterte apper vil bli stoppet, enheter vil starte med samme ladning og temperatur, og hvert scenario vil bli gjentatt minst fem ganger.

Android-måling vil bruke systembatteristatistikk og maskinvarestrømdata når det støttes. iOS-måling vil bruke Instruments energispor på en fysisk iPhone. Resultatene vil rapportere testvarighet, eksakte innstillinger, median energiresultat, kjøring til kjøring og ubehandlede sporingsfiler. Inntil de kontrollerte bevisene eksisterer, forblir det publiserte resultatet på 3% versus 10% klart identifisert som eierens observasjon på ekte enhet over natten, ikke en garanti for hver telefon.

<!-- section:package-size -->
## En liten pakke med et fokusert funksjonssett

På iOS er den nåværende Noler-pakken omtrent 11.5 MB, sammenlignet med Alarmys 237.5 MB - omtrent 20× mindre. Den nåværende Android App Bundle som er lastet opp til Google Play er 5.6 MB.

Den forskjellen er ikke en tilfeldighet. Noler pakker ikke en søvnplattform, et reklamesystem, et analyselag, et skykontosystem, en nyhetsfeed, en værtjeneste eller en horoskopfeed. Du laster ned en vekkerklokke og får en vekkerklokke.

<!-- section:privacy -->
## Privat av design

Normal alarmbruk sender ingen alarmdata noe sted.

- Ingen reklame-ID
- Ingen konto eller pålogging
- Ingen analyse-SDK
- Ingen atferdssporing
- Ingen skysikkerhetskopiering eller synkronisering
- Ingen ekstern alarm-datatjeneste
- Ingen bakgrunnsforespørsel om nettverk på tvers av opprinnelse

Alarmoppføringer, etiketter, innstillinger, vedlegg, tale- og varslingsplanlegging forblir på enheten din. De direkte vilkårene, personvernet og støttesidene åpnes bare når du eksplisitt velger dem i Innstillinger.

<!-- section:speech-fallback -->
## En snakkende alarm som forklarer hvorfor den ringer

Gi en alarm en etikett som «Skole», «Medisin», «Flyplass» eller «Ring mamma». Når den ringer, kan Noler snakke den etiketten høyt ved å bruke tale som er tilgjengelig på enheten din.

Lydstrategien på enheten er plattformspesifikk. Begge plattformene bruker systemtekst-til-tale for alarmetiketten. På Android tar en medfølgende, lett Flite-stemme med åpen kildekode over når en enhet ikke har noen brukbar system-TTS-motor. Operativsystemets alarmlyd forblir det siste sikkerhetsgulvet.

Bare på Android gir den innebygde Flite-motoren med åpen kildekode en engelsk reservestemme dersom systemets tale ikke kan brukes. Stemmer avhenger av installerte språk. Den valgfrie modusen som holder appen aktiv, er av som standard og kan bruke mer batteri.

Tilbakeslagsalarmlyden er ment å hindre en utilgjengelig stemme fra å produsere en stille alarm.

<!-- section:features -->
## Hva du får

- Engangs- og gjentatte ukedagsalarmer
- Talte alarmetiketter
- Store knapper for slumring og stopp
- En klar oversikt over neste planlagte alarm
- Lokale vedlegg og innstillinger
- Lagring på enheten uten konto
- Et mørkt, distraksjonsfritt grensesnitt
- Støtte for iPhone, iPad og Android
- 39 UI-lokale valg
- 24 språkvalg for alarm-stemme

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler alarmliste og neste alarmskjerm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler vekkerklokkeskjerm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler skjerm for alarminnstillinger">
</div>

<!-- section:ui-languages -->
## 39 grensesnittlokale valg

arabisk, katalansk, forenklet kinesisk, tradisjonell kinesisk, kroatisk, tsjekkisk, dansk, nederlandsk, engelsk (Australia), engelsk (Canada), engelsk (Storbritannia), engelsk (USA), finsk, fransk, fransk (Canada), tysk, gresk, hebraisk, hindi, ungarsk, indonesisk, italiensk, japansk, koreansk, malayisk, norsk bokmål, polsk, portugisisk (Brasil), portugisisk (Portugal), rumensk, russisk, slovakisk, spansk, spansk (Latin-Amerika), svensk, thai, tyrkisk, ukrainsk og vietnamesisk.

<!-- section:voice-languages -->
## 24 språkvalg for alarm-stemme

arabisk (Egypt), bengali (Bangladesh), nederlandsk (Nederland), engelsk (India), engelsk (USA), fransk (Frankrike), tysk (Tyskland), hindi (India), indonesisk (Indonesia), italiensk (Italia), japansk (Japan), koreansk (Sør-Korea), marathi (India), polsk (Polen), portugisisk (Brasil), rumensk (Romania), russisk (Russland), spansk (USA), tamil (India), telugu (India), thai (Thailand), tyrkisk (Tyrkia), ukrainsk (Ukraina) og vietnamesisk (Vietnam).

Stemmetilgjengelighet og uttale avhenger av tekst-til-tale-stemmene som er installert av enhetsprodusenten eller operativsystemet. Den medfølgende Flite-reserven er kun for Android og snakker engelsk; begge plattformene har en alarm-lyd fallback når tale ikke kan brukes.

<!-- section:downloads -->
## Last ned gratis vekkerklokke

| Plattform | Offisiell nedlasting |
|---|---|
| iPhone og iPad | [Last ned på Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Få det på Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Kilder for sammenligningen

- [Noler på App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler på Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy på App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy på Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android-hjelp: horoskopoppsett](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Butikkfunksjoner og pakkestørrelser kan endres. Sammenligning sjekket 19. september 2026. Alarmy er et varemerke for dens respektive eier; dette prosjektet er ikke tilknyttet eller godkjent av Alarmy eller DelightRoom.

---

Dette kodelageret inneholder produktinformasjon. Appens proprietære kildekode publiseres ikke her. Talemotoren Flite har åpen kildekode.

<div align="center">
  <strong>Våkn opp med en fokusert vekkerklokke, uten annonser eller sporing.</strong>
</div>
