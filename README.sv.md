<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler app-ikon">

# Väckarklocka utan reklam

### Ett lätt offlinelarm för iPhone, iPad och Android

En väckarklocka fokuserad på att väcka dig, utan reklam, sömnspårning, horoskop eller deras extra bakgrundsarbete.

Hör vad ditt larm är till för: "Låt oss gå till skolan." "Ta din medicin." "Gå till flygplatsen."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Ladda ner Noler på App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Skaffa Noler på Google Play"></a>

Gratis att ladda ner. Inget konto. Inget abonnemang. Inget köp i appen.

Ägaren observerade att cirka 3% tömdes på batteriet över natten med Noler mot 10% med Alarmy på samma telefon. Detta var informellt, inte ett kontrollerat laboratorietest, och är ingen garanti.
</div>

<!-- section:focus -->
## En fokuserad väckarklocka utan orelaterade extrafunktioner

Noler är en fokuserad väckarklocka byggd med Rust. Den skapar engångslarm och upprepade larm, säger varje larms etikett högt och sparar larm och inställningar på din enhet.

Appen fokuserar på larm istället för att kombinera dem med en bredare livsstilstjänst.

Det finns inga annonser som väntar efter avvisning, inga analyser som tittar på hur du använder appen, inget konto att skapa, ingen molntjänst att underhålla och inga orelaterade väder-, nyheter-, horoskop-, sömnspårnings- eller snarkningsmaskiner som körs bakom ditt larm.

<!-- section:spoken-purpose -->
## Hör syftet med ditt larm

Ett vanligt larm ringer, men halvvaken kommer du kanske inte ihåg vad det är till för. Noler säger etiketten du skrev för det larmet:

> "Låt oss gå till skolan."

> "Ta din medicin."

> "Gå nu till flygplatsen."

Meddelandet börjar på enheten när larmet utlöses. Du hör syftet direkt istället för att öppna appen, läsa en liten etikett eller undra varför telefonen låter. Det är särskilt användbart för skollopp, medicinering, möten, matlagning, skiftarbete och påminnelser som delas med familjen.

<!-- section:comparison -->
## Varför välja den här Rust-baserade väckarklockan framför Alarmy?

Rust förenar hög prestanda med minnessäkerhet och gör det möjligt att dela en appkärna mellan iOS och Android. Det hjälper oss att hålla Noler liten och pålitlig utan reklambibliotek, analys-SDK eller tjänster för väder, horoskop och sömn. Rust i sig bevisar inte lägre batteriförbrukning. Utformningen bygger på plattformsnära kod och på att undvika ovidkommande bakgrundsuppgifter; konkreta förbrukningssiffror kräver mätningar på fysiska enheter.

| Vad betyder något | Väckarklocka utan reklam | Alarmy |
|---|---|---|
| **Kärnfilosofi** | En fokuserad väckarklocka som gör det väsentliga jobbet | En bredare sömn- och morgonrutinplattform |
| **Signatur väckningsupplevelse** | Säger upp alarmets syfte högt – till exempel "Vi går till skolan" istället för en oförklarlig ringning | Fokuserar på höga larm, väckningsuppdrag och sömnfunktioner |
| **Talsäkerhet på enheten** | On-device system TTS; Android lägger till medföljande Flite med öppen källkod när ingen TTS-systemmotor är tillgänglig; OS-larmljudet är den sista reserv | Se Alarmys aktuella notering för dess ljudbeteende |
| **Språk och UI stack** | Rust + Dioxus — en delad, lätt applikationskärna och användargränssnitt, med inbyggda Swift/Kotlin-larmbryggor där operativsystemen kräver dem | Offentliga tekniska källor hänvisar till [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); den fullständiga tekniksammansättningen i den nuvarande appen är inte offentlig. |
| **iOS-paketstorlek** | 11.5 MB | 237.5 MB |
| **iOS storleksskillnad** | ≈1/20 | ≈20× |
| **Android-versionsstorlek** | 5.6 MB AAB-paket laddat upp till Google Play | Google Play publicerar inte en enhetsoberoende paketstorlek |
| **Reklam** | Inga | Innehåller annonser |
| **Prenumeration eller köp i appen** | Inga | Inköp i appen och en premiumprenumeration |
| **Konto krävs** | Nej – det finns inget kontosystem | Inte jämfört; Alarmys butikslistning fokuserar på dess bredare funktionskatalog |
| **Analytics eller beteendespårning** | Inga | Inte jämfört; Nolers löfte är att det inte heller ingår |
| **Molnsynkronisering** | Ingen – larmdata finns kvar på enheten | Inte jämfört; Noler har medvetet inget molnlager |
| **Väderfunktion** | Nej | Ja – Alarmys Android-lista säger att platsen kan användas för att få väder efter att appen stängts |
| **Horoskop funktion** | Nej | Ja — dokumenterat i Alarmys hjälpcenter för Android |
| **Sömnspårning** | Nej | Ja |
| **Snarkningsövervakning** | Nej | Ja |
| **Sömnljud / ASMR** | Nej | Ja |
| **Arbetsbelastning för bakgrundsfunktioner** | Larmrelaterat arbete; inga orelaterade onlineflöden, spårning, annonser eller molnarbete | Ytterligare aktiverade funktioner kan involvera bakgrunds- och nätverksarbete; ingen kontrollerad effektjämförelse görs gällande |
| **Observerad batteriladdning över natten** | Cirka 3% i ägarens test med samma telefon över natten | Cirka 10% i samma test |
| **Batteriskillnad i den observationen** | Cirka 70% mindre dränering endast i denna informella observation | Cirka 3.3× Nolers observerade avlopp; inte ett allmänt riktmärke |
| **Batteritillvägagångssätt** | Batteribesparing är en produktprioritet. Normal larmdrift är helt offline och undviker Wi-Fi/mobildataarbete plus batterianvändning orsakad av väder, horoskop, sömnanalys, annonser, analyser och molnsynkronisering | Dess större uppkopplade funktionsuppsättning kan utföra nätverks- och bearbetningsarbete utöver schemaläggning och ringsignaler |
| **Normal användning av larmdatanätverk** | Noll – larm, etiketter, inställningar, bilagor, tal och schemaläggning finns kvar på enheten | Anslutna funktioner kräver nätverksåtkomst |
| **UI-språk** | 39 val av språk i appen | 31 unika språkkoder listade av det aktuella iOS-paketet |
| **Språk för larmröst** | 24 val, med tal på din enhet | Se Alarmys lista för dess nuvarande rösttäckning |

Storleksjämförelse använder antalet paketbyte som rapporterats av Apples katalog för de aktuella amerikanska App Store-versionerna den 19 september 2026: Noler 11,506,688 byte och Alarmy 237,476,864 byte. Android AAB-arkiv använder delad leverans, så varje persons Google Play-nedladdning och installerade storlek varierar beroende på enhet; 5.6 MB är Nolers verifierade aktuella Play-uppladdningspaket, inte ett utlovat mått på installerad storlek.

Språkräkningar använder olika offentliga bevis: Nolers räkning kommer från språkväljaren i appen, medan Alarmys räkning är det unika antalet språkkoder som rapporteras av dess nuvarande iOS-paket. De 39 valen hänvisar till gränssnittet i appen, inte en garanti för det aktuella tillståndet för lokalisering av skyltfönster.

Alarmy är ett kapabelt val för personer som aktivt vill ha väckningsuppdrag, sömnanalys, snarkövervakning, sömnljud, väder, horoskop och en premiumfunktionskatalog. Välj Noler när du vill att din larmapp ska förbli en larmapp.

<!-- section:battery-observation -->
## Vår informella observation över natten: 3% mot 10%

På ägarens telefon visade ett test över natten cirka 3% batterianvändning med Noler mot cirka 10% med Alarmy. Med andra ord, Alarmy använde ungefär 3.3 gånger så mycket batteri i den där nattens observation, medan Nolers dränering var cirka 70% lägre.

Detta var en förstahandsjämförelse med samma telefon snarare än en kontrollerad laboratoriecertifiering. Batteriresultaten varierar med telefonen, batteristatus, operativsystem, signalstyrka, larminställningar och aktiverade funktioner. De exakta siffrorna är inte garanterade på alla enheter – men anledningen till att prioritera batteriet är inbyggt i produkten.

<!-- section:battery-workload -->
## Mindre nätverk innebär mindre batteriarbete

Varje extra bakgrundsfunktion har en kostnad. Vädret måste hämtas. Horoskopinnehåll måste hämtas. Sömn- och snarkningsspårning kräver utökad övervakning. Annonser och analyser kräver kod, nätverkstrafik och bearbetning. Molnkonton kräver synkronisering.

Noler gör inget av det vid normal larmanvändning. Den behöver inte Wi-Fi eller mobildata för att lagra, schemalägga, tala eller ringa ett larm. Genom att förbli helt offline för sitt kärnjobb undviker den att väcka nätverksradion för väder, horoskop, reklam, analys, konto eller molnsynkroniseringstrafik.

Produkten gör det mest hållbara batteribesparande valet: börja inte arbeta utan samband i första hand. Färre bakgrundsansvar innebär färre möjligheter att förbruka CPU-tid, Wi-Fi/mobilradiotid, minne och batteri utöver det arbete som ett larm faktiskt behöver.

### Hur en numerisk batterijämförelse kommer att testas

En simulator kan inte ge en giltig jämförelse mellan telefon och batteri: den körs på datorns processor, radio och strömförsörjning. Alla framtida påståenden om "använder X gånger mindre batteri" kommer från matchade fysiska enhetstester.

Benchmark kommer att köra båda apparna på samma modell, OS-version, batterihälsointervall, nätverk, ljusstyrka, volym och temperatur. Det kommer att mäta två separat avslöjade scenarier: ett liknande grundlarm och varje apps normala standardupplevelse. Testordning kommer att växlas, orelaterade appar kommer att stoppas, enheter kommer att börja med samma laddning och temperatur, och varje scenario kommer att upprepas minst fem gånger.

Android-mätning kommer att använda systembatteristatistik och maskinvaruströmdata när det stöds. iOS-mätning kommer att använda Instruments energispår på en fysisk iPhone. Resultaten kommer att rapportera testets varaktighet, exakta inställningar, medianenergiresultat, kör-till-körning-intervall och obearbetade spårfiler. Tills de kontrollerade bevisen finns förblir det publicerade resultatet på 3% mot 10% tydligt identifierat som ägarens verkliga enhet över natten, inte en garanti för varje telefon.

<!-- section:package-size -->
## Ett litet paket med en fokuserad funktionsuppsättning

På iOS är det nuvarande Noler-paketet cirka 11.5 MB, jämfört med Alarmys 237.5 MB – ungefär 20× mindre. Det aktuella Android App Bundle som laddas upp till Google Play är 5.6 MB.

Den skillnaden är ingen tillfällighet. Noler paketerar inte en sömnplattform, ett reklamsystem, ett analyslager, ett molnkontosystem, ett nyhetsflöde, en vädertjänst eller ett horoskopflöde. Du laddar ner en väckarklocka och får en väckarklocka.

<!-- section:privacy -->
## Privat genom design

Normal larmanvändning skickar inga larmdata någonstans.

- Inget reklam-ID
- Inget konto eller inloggning
- Ingen analys-SDK
- Ingen beteendespårning
- Ingen molnsäkerhetskopiering eller synkronisering
- Ingen fjärrlarm-datatjänst
- Ingen bakgrundsbegäran om nätverksöverskridande ursprung

Larmposter, etiketter, inställningar, bilagor, tal och schemaläggning av meddelanden finns kvar på din enhet. Livevillkoren, sekretess- och supportsidorna öppnas endast när du uttryckligen väljer dem i Inställningar.

<!-- section:speech-fallback -->
## Ett talande larm som förklarar varför det ringer

Ge ett larm en etikett som "Skola", "Medicin", "Flygplats" eller "Ring mamma". När den ringer kan Noler tala den etiketten högt med hjälp av tal som är tillgängligt på din enhet.

Dess ljudstrategi på enheten är plattformsspecifik. Båda plattformarna använder systemtext-till-tal för larmetiketten. På Android tar en medföljande, lätt Flite-röst med öppen källkod över när en enhet inte har någon användbar system-TTS-motor. Operativsystemets larmljud förblir det sista säkerhetsgolvet.

Endast på Android ger den inbyggda Flite-motorn med öppen källkod en engelsk reservröst om systemets talsyntes inte kan användas. Röster beror på installerade språk. Läget som håller appen aktiv är valfritt, avstängt från början och kan dra mer batteri.

Reservlarmljudet är avsett att hindra en otillgänglig röst från att producera ett tyst larm.

<!-- section:features -->
## Vad du får

- Engångs- och upprepade vardagslarm
- Talade larmetiketter
- Stora knappar för snooze och stopp
- En klar bild av nästa schemalagda larm
- Lokala bilagor och inställningar
- Lagring på enheten utan konto
- Ett mörkt, distraktionsfritt gränssnitt
- Stöd för iPhone, iPad och Android
- 39 UI-lokalval
- 24 språkval för larm-röst

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler larmlista och nästa larmskärm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler väckarklocka skärm">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler larminställningar">
</div>

<!-- section:ui-languages -->
## 39 gränssnittslokalval

arabiska, katalanska, förenklad kinesiska, traditionell kinesiska, kroatiska, tjeckiska, danska, nederländska, australisk engelska, kanadensisk engelska, brittisk engelska, amerikansk engelska, finska, franska, kanadensisk franska, tyska, grekiska, hebreiska, hindi, ungerska, indonesiska, italienska, japanska, koreanska, malajiska, norskt bokmål, polska, brasiliansk portugisiska, europeisk portugisiska, rumänska, ryska, slovakiska, spanska, latinamerikansk spanska, svenska, thailändska, turkiska, ukrainska och vietnamesiska.

<!-- section:voice-languages -->
## 24 språkval för larm-röst

arabiska (Egypten), bengali (Bangladesh), nederländska (Nederländerna), engelska (Indien), amerikansk engelska, franska (Frankrike), tyska (Tyskland), hindi (Indien), indonesiska (Indonesien), italienska (Italien), japanska (Japan), koreanska (Sydkorea), marathi (Indien), polska (Polen), brasiliansk portugisiska, rumänska (Rumänien), ryska (Ryssland), spanska (USA), tamil (Indien), telugu (Indien), thailändska (Thailand), turkiska (Turkiet), ukrainska (Ukraina) och vietnamesiska (Vietnam).

Rösttillgänglighet och uttal beror på text-till-tal-röster som installerats av enhetstillverkaren eller operativsystemet. Den medföljande Flite-alternativet är endast för Android och talar engelska; båda plattformarna har ett larm-ljud fallback när tal inte kan användas.

<!-- section:downloads -->
## Ladda ner gratis väckarklocka

| Plattform | Officiell nedladdning |
|---|---|
| iPhone och iPad | [Ladda ner på Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Hämta det på Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Källor för jämförelsen

- [Noler på App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler på Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy på App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy på Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android-hjälp: horoskopinställningar](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Butiksfunktioner och paketstorlekar kan ändras. Jämförelse kontrollerad 19 september 2026. Alarmy är ett varumärke som tillhör respektive ägare; detta projekt är inte anslutet till eller godkänt av Alarmy eller DelightRoom.

---

Det här arkivet presenterar produkten. Appens egen källkod är sluten och publiceras inte här. Talmotorn Flite har öppen källkod.

<div align="center">
  <strong>Vakna med en fokuserad väckarklocka, utan annonser eller spårning.</strong>
</div>
