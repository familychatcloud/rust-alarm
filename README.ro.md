<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Pictograma aplicației Noler">

# Ceas deșteptător fără reclame

### O alarmă offline ușoară pentru iPhone, iPad și Android

Un ceas cu alarmă axat pe trezirea dvs., fără publicitate, urmărirea somnului, horoscoape sau volumul de lucru suplimentar al acestora.

Auzi pentru ce este alarma ta: „Hai să mergem la școală”. „Ia-ți medicamentul.” „Plecă la aeroport.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Descărcați Noler din App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Obțineți Noler pe Google Play"></a>

Descarcat gratuit. Niciun cont. Fără abonament. Fără achiziție în aplicație.

Proprietarul a observat o descărcare a bateriei de aproximativ 3% peste noapte cu Noler față de 10% cu Alarmy pe același telefon. Acesta a fost informal, nu un test de laborator controlat și nu este o garanție.
</div>

<!-- section:focus -->
## Un ceas deșteptător concentrat, fără suplimente care nu au legătură

Noler este un ceas cu alarmă focalizat construit cu Rust. Creează alarme unice și repetate, rostește eticheta fiecărei alarme cu voce tare și păstrează înregistrările și setările alarmelor pe dispozitiv.

Aplicația se concentrează pe alarme în loc să le combine cu un serviciu mai larg de stil de viață.

Nu există reclame care să aștepte după renunțare, nicio analiză care urmărește modul în care utilizați aplicația, niciun cont de creat, niciun serviciu cloud de întreținut și nicio vreme, știri, horoscop, urmărire a somnului sau mașini de înregistrare a sforăitului care nu funcționează în spatele alarmei.

<!-- section:spoken-purpose -->
## Ascultă scopul alarmei tale

Sună o alarmă normală, dar pe jumătate treaz s-ar putea să nu-ți amintești pentru ce este. Noler rostește eticheta pe care ai scris-o pentru acea alarmă:

> „Hai să mergem la școală.”

> „Ia-ți medicamentul.”

> „Plecă acum spre aeroport.”

Mesajul începe pe dispozitiv când alarma se declanșează. Auzi imediat scopul în loc să deschizi aplicația, să citești o mică etichetă sau să te întrebi de ce face zgomot telefonul. Este util în special pentru cursele școlare, medicamente, întâlniri, gătit, munca în schimburi și mementouri partajate cu familia.

<!-- section:comparison -->
## De ce să alegi acest ceas deșteptător în Rust în loc de Alarmy?

Rust combină performanța nativă cu siguranța memoriei și permite folosirea aceluiași nucleu pe iOS și Android. Astfel, Noler poate rămâne mic și fiabil, fără biblioteci de publicitate, SDK de analiză ori servicii de vreme, horoscop și somn. Rust singur nu dovedește economisirea bateriei. Proiectarea se bazează pe implementarea nativă și evitarea sarcinilor de fundal fără legătură cu alarma; cifrele de consum necesită măsurători pe dispozitive fizice.

| Ce contează | Ceas deșteptător fără reclame | Alarmy |
|---|---|---|
| **Filosofia de bază** | Un ceas cu alarmă concentrat care face treaba esențială | O platformă mai largă de somn și de rutină de dimineață |
| **Experiență de trezire caracteristică** | Spune cu voce tare scopul alarmei, de exemplu, „Hai să mergem la școală” în loc de un sonerie inexplicabilă | Se concentrează pe alarme puternice, misiuni de trezire și funcții de somn |
| **Siguranța vorbirii pe dispozitiv** | Sistem pe dispozitiv TTS; Android adaugă pachet Flite open-source atunci când nu este disponibil niciun motor TTS de sistem; sunetul alarmei OS este soluția finală | Consultați lista curentă a Alarmy pentru comportamentul său sonor |
| **Limbă și stiva de interfață de utilizare** | Rust + Dioxus — un nucleu de aplicație partajat, ușor și interfață de utilizare, cu poduri native de alarmă Swift/Kotlin unde sistemele de operare le solicită | Sursele tehnice publice menționează [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); combinația completă de tehnologii din versiunea actuală nu este publică. |
| **Dimensiunea pachetului iOS** | 11.5 MB | 237.5 MB |
| **Diferență de dimensiune iOS** | ≈1/20 | ≈20× |
| **Dimensiunea lansării Android** | Pachetul de aplicații de 5.6 MB a fost încărcat pe Google Play | Google Play nu publică o dimensiune de pachet independentă de dispozitiv |
| **Publicitate** | Niciuna | Conține reclame |
| **Abonament sau achiziții în aplicație** | Niciuna | Achiziții în aplicație și un abonament premium |
| **Este necesar un cont** | Nu — nu există un sistem de conturi | Necomparat; Lista de magazine Alarmy se concentrează pe catalogul său mai larg de caracteristici |
| **Analiză sau urmărire comportamentală** | Niciuna | Necomparat; Promisiunea lui Noler este că nici nu include |
| **Sincronizare cloud** | Niciuna — datele de alarmă rămân pe dispozitiv | Necomparat; Noler nu are în mod deliberat un strat de nor |
| **Caracteristica meteo** | Nu | Da — Lista Android a lui Alarmy spune că locația poate fi folosită pentru a obține vreme după ce aplicația este închisă |
| **Caracteristica horoscopului** | Nu | Da — documentat în centrul de ajutor Android al Alarmy |
| **Urmărirea somnului** | Nu | Da |
| **Monitorizare sforăit** | Nu | Da |
| **Sunete de somn / ASMR** | Nu | Da |
| **Sarcina de lucru pentru funcții de fundal** | Lucrări legate de alarmă; fără fluxuri online, urmărire, reclame sau lucru în cloud fără legătură | Funcțiile suplimentare activate pot implica lucru în fundal și în rețea; nu se pretinde nicio comparație controlată de putere |
| **S-a observat descărcarea bateriei peste noapte** | Aproximativ 3% în testul de noapte al proprietarului pe același telefon | Aproximativ 10% la același test |
| **Diferența bateriei în această observație** | Cu aproximativ 70% mai puțin scurgere doar în această observație informală | Aproximativ 3.3× scurgerea observată a lui Noler; nu este un reper general |
| **Abordarea bateriei** | Economisirea bateriei este o prioritate a produsului. Funcționarea normală a alarmei este complet offline, evitând funcționarea prin Wi-Fi/datele mobile și utilizarea bateriei cauzată de vreme, horoscop, analiza somnului, reclame, analize și sincronizare în cloud | Setul său mai mare de caracteristici conectate poate efectua lucrări de rețea și procesare dincolo de programarea și sunetul alarmelor |
| **Utilizare normală a rețelei de alarmă-date** | Zero — alarmele, etichetele, setările, atașamentele, vorbirea și programarea rămân pe dispozitiv | Funcțiile conectate necesită acces la rețea |
| **Limbi UI** | 39 de opțiuni locale în aplicație | 31 de coduri unice de limbă enumerate de pachetul iOS actual |
| **Limbi vocale de alarmă** | 24 de opțiuni, folosind vorbirea pe dispozitiv | Consultați lista Alarmy pentru acoperirea vocală curentă |

Compararea dimensiunilor folosește numărul de octeți de pachet raportat de catalogul Apple pentru versiunile actuale din App Store din SUA pe 19 septembrie 2026: Noler 11,506,688 de octeți și Alarmy 237,476,864 de octeți. Android App Bundle utilizează livrare divizată, astfel încât descărcarea Google Play și dimensiunea instalată de fiecare persoană variază în funcție de dispozitiv; 5.6 MB este pachetul actual de încărcare Play verificat de Noler, nu o măsurare promisă a dimensiunii instalate.

Numărările de limbă folosesc dovezi publice diferite: numărul lui Noler provine din selectorul de limbi din aplicație, în timp ce numărul Alarmy este numărul unic de coduri de limbă raportat de pachetul său actual iOS. Cele 39 de opțiuni se referă la interfața în aplicație, nu o garanție a stării actuale de localizare a vitrinei.

Alarmy este o alegere capabilă pentru persoanele care doresc în mod activ misiuni de trezire, analiză a somnului, monitorizare sforăit, sunete de somn, vreme, horoscop și un catalog de funcții premium. Alegeți Noler atunci când doriți ca aplicația dvs. de alarmă să rămână o aplicație de alarmă.

<!-- section:battery-observation -->
## Observația noastră informală peste noapte: 3% față de 10%

Pe telefonul proprietarului, un test peste noapte a arătat o utilizare a bateriei de aproximativ 3% cu Noler față de aproximativ 10% cu Alarmy. Cu alte cuvinte, Alarmy a folosit de aproximativ 3.3 ori mai multă baterie în acea observație peste noapte, în timp ce consumul lui Noler a fost cu aproximativ 70% mai mic.

Aceasta a fost o comparație directă, cu același telefon, mai degrabă decât o certificare controlată de laborator. Rezultatele bateriei variază în funcție de telefon, starea bateriei, sistemul de operare, puterea semnalului, setările de alarmă și funcțiile activate. Numerele exacte nu sunt garantate pe fiecare dispozitiv, dar motivul pentru prioritizarea bateriei este încorporat în produs.

<!-- section:battery-workload -->
## Mai puțină conexiune în rețea înseamnă mai puțină funcționare a bateriei

Fiecare funcție suplimentară de fundal are un cost. Vremea trebuie adusă. Conținutul horoscopului trebuie preluat. Urmărirea somnului și a sforăitului necesită o monitorizare extinsă. Reclamele și analizele necesită cod, trafic de rețea și procesare. Conturile cloud necesită sincronizare.

Noler nu face nimic din toate acestea în timpul utilizării normale a alarmei. Nu are nevoie de Wi-Fi sau date mobile pentru a stoca, programa, vorbi sau suna o alarmă. Rămânând complet offline pentru activitatea sa de bază, evită trezirea radioului de rețea pentru traficul meteo, horoscop, publicitate, analiză, cont sau sincronizare în cloud.

Produsul face cea mai durabilă alegere de economisire a bateriei: nu începeți munca fără legătură în primul rând. Mai puține responsabilități de fundal înseamnă mai puține oportunități de a consuma timp CPU, timp Wi-Fi/radio mobil, memorie și baterie dincolo de munca de care are nevoie de fapt o alarmă.

### Cum va fi testată o comparație numerică a bateriei

Un simulator nu poate oferi o comparație validă între telefon și baterie: rulează pe procesorul computerului, radioul și sursa de alimentare. Orice afirmație viitoare „folosește de X ori mai puțină baterie” va proveni din testele pe dispozitive fizice potrivite.

Benchmark-ul va rula ambele aplicații pe același model, versiune de sistem de operare, gamă de sănătate a bateriei, rețea, luminozitate, volum și temperatură. Acesta va măsura două scenarii dezvăluite separat: o alarmă de bază similară și experiența implicită normală a fiecărei aplicații. Ordinea de testare va fi alternată, aplicațiile care nu au legătură vor fi oprite, dispozitivele vor începe la aceeași încărcare și temperatură și fiecare scenariu va fi repetat de cel puțin cinci ori.

Măsurarea Android va folosi statisticile bateriei sistemului și datele de putere hardware atunci când sunt acceptate. Măsurarea iOS va folosi urmele de energie Instruments pe un iPhone fizic. Rezultatele vor raporta durata testului, setările exacte, mediana consumului de energie, intervalul de la rulare și fișierele de urmărire brute. Până la existența acelei dovezi controlate, rezultatul publicat de 3% versus 10% rămâne clar identificat ca fiind observația reală a dispozitivului de către proprietar, nu este o garanție pentru fiecare telefon.

<!-- section:package-size -->
## Un pachet mic cu un set de caracteristici concentrate

Pe iOS, pachetul actual Noler este de aproximativ 11.5 MB, în comparație cu 237.5 MB de la Alarmy — cu aproximativ 20 ori mai mic. Actualul Android App Bundle încărcat pe Google Play este de 5.6 MB.

Această diferență nu este un accident. Noler nu include o platformă de somn, un sistem de publicitate, un strat de analiză, un sistem de cont cloud, un flux de știri, un serviciu meteo sau un feed cu horoscop. Descărcați un ceas cu alarmă și obțineți un ceas cu alarmă.

<!-- section:privacy -->
## Privat prin design

Utilizarea normală a alarmei nu trimite nicăieri date de alarmă.

- Fără ID de publicitate
- Fără cont sau autentificare
- Fără SDK de analiză
- Fără urmărire comportamentală
- Fără backup în cloud sau sincronizare
- Niciun serviciu de alarmă de la distanță
- Nicio solicitare de rețea de origine încrucișată

Înregistrările de alarmă, etichetele, setările, atașamentele, vorbirea și programarea notificărilor rămân pe dispozitiv. Paginile live de Termeni, Confidențialitate și asistență se deschid numai atunci când le selectați în mod explicit în Setări.

<!-- section:speech-fallback -->
## O alarmă vorbitoare care explică de ce sună

Dați unei alarme o etichetă cum ar fi „Școală”, „Medicina”, „Aeroport” sau „Apelați mama”. Când sună, Noler poate rosti acea etichetă cu voce tare folosind vorbirea disponibilă pe dispozitiv.

Strategia sa de sunet pe dispozitiv este specifică platformei. Ambele platforme folosesc text-to-speech de sistem pentru eticheta alarmei. Pe Android, o voce Flite, cu sursă deschisă, inclusă, preia controlul atunci când un dispozitiv nu are un motor TTS de sistem utilizabil. Sunetul de alarmă al sistemului de operare rămâne ultimul nivel de siguranță.

Numai pe Android, motorul open source Flite inclus oferă o voce engleză de rezervă dacă nu există un motor vocal de sistem utilizabil. Vocile depind de limbile instalate. Modul opțional care menține aplicația activă este oprit implicit și poate crește consumul bateriei.

Sunetul alarmei de rezervă este destinat să împiedice o voce indisponibilă să producă o alarmă silențioasă.

<!-- section:features -->
## Ce primești

- Alarme unice și repetate în timpul săptămânii
- Etichete de alarmă rostite
- Butoane mari pentru amânare și oprire
- O vedere clară a următoarei alarme programate
- Atașamente și setări locale
- Stocare pe dispozitiv fără cont
- O interfață întunecată, fără distracție
- Suport pentru iPhone, iPad și Android
- 39 opțiuni de localizare a UI
- 24 de opțiuni de limbă pentru alarmă-voce

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler listă de alarme și următorul ecran de alarmă">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler ecran cu ceas cu alarmă">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler ecran de setări de alarmă">
</div>

<!-- section:ui-languages -->
## 39 de opțiuni locale de interfață

arabă, catalană, chineză simplificată, chineză tradițională, croată, cehă, daneză, neerlandeză, engleză (Australia), engleză (Canada), engleză (Regatul Unit), engleză (Statele Unite ale Americii), finlandeză, franceză, franceză (Canada), germană, greacă, ebraică, hindi, maghiară, indoneziană, italiană, japoneză, coreeană, malaeză, norvegiană bokmål, poloneză, portugheză (Brazilia), portugheză (Europa), română, rusă, slovacă, spaniolă, spaniolă (America Latină), suedeză, thailandeză, turcă, ucraineană și vietnameză.

<!-- section:voice-languages -->
## 24 de opțiuni de limbă pentru alarmă-voce

arabă (Egipt), bengaleză (Bangladesh), neerlandeză (Țările de Jos), engleză (India), engleză (Statele Unite ale Americii), franceză (Franța), germană (Germania), hindi (India), indoneziană (Indonezia), italiană (Italia), japoneză (Japonia), coreeană (Coreea de Sud), marathi (India), poloneză (Polonia), portugheză (Brazilia), română (România), rusă (Rusia), spaniolă (Statele Unite ale Americii), tamilă (India), telugu (India), thailandeză (Thailanda), turcă (Turcia), ucraineană (Ucraina) și vietnameză (Vietnam).

Disponibilitatea vocii și pronunția depind de vocile text-to-speech instalate de producătorul dispozitivului sau de sistemul de operare. Funcția de rezervă Flite inclusă este numai pentru Android și vorbește engleză; ambele platforme au o alarmă de rezervă pentru sunet atunci când vorbirea nu poate fi folosită.

<!-- section:downloads -->
## Descărcați ceasul cu alarmă gratuit

| Platformă | Descărcare oficială |
|---|---|
| iPhone și iPad | [Descărcați din Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Obțineți pe Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Surse pentru comparație

- [Noler în App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler pe Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy în App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy pe Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Ajutor Android Alarmy: configurare horoscop](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Caracteristicile magazinului și dimensiunile pachetelor se pot modifica. Comparație verificată la 19 septembrie 2026. Alarmy este o marcă comercială a proprietarului respectiv; acest proiect nu este afiliat sau susținut de Alarmy sau DelightRoom.

---

Acest depozit prezintă produsul. Codul proprietar al aplicației nu este publicat aici. Motorul vocal Flite inclus are sursă deschisă.

<div align="center">
  <strong>Treziți-vă cu un ceas deșteptător focalizat, fără reclame sau urmărire.</strong>
</div>
