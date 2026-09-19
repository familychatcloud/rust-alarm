<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Ikona aplikácie Noler">

# Budík bez reklám a internetu

### Ľahký offline budík pre iPhone, iPad a Android

Budík zameraný na zobudenie, bez reklamy, sledovania spánku, horoskopov alebo ich extra záťaže na pozadí.

Vypočujte si, na čo je váš budík: „Poďme do školy.“ "Vezmi si liek." "Odíďte na letisko."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Stiahnite si Noler z App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Získajte Noler v službe Google Play"></a>

Zadarmo na stiahnutie. Žiadny účet. Žiadne predplatné. Žiadny nákup v aplikácii.

Majiteľ pozoroval približne 3% nočného vybitia batérie pri Noler oproti 10% pri Alarmy na rovnakom telefóne. Bol to neformálny, nie kontrolovaný laboratórny test a nie je zárukou.
</div>

<!-- section:focus -->
## Sústredený budík bez nesúvisiacich doplnkov

Noler je sústredený budík vyrobený z Rustu. Vytvára jednorazové a opakujúce sa budíky, nahlas vyslovuje štítok každého budíka a uchováva záznamy a nastavenia budíkov vo vašom zariadení.

Aplikácia sa zameriava na budíky namiesto toho, aby ich kombinovala so širšou službou životného štýlu.

Po zrušení nečakajú žiadne reklamy, žiadne analýzy sledujúce, ako používate aplikáciu, žiadny účet na vytvorenie, žiadna cloudová služba, ktorú by ste museli udržiavať, a žiadne nesúvisiace zariadenia o počasí, správach, horoskopoch, sledovaní spánku alebo zaznamenávaní chrápania za vaším budíkom.

<!-- section:spoken-purpose -->
## Vypočujte si účel svojho budíka

Zazvoní normálny budík, ale v polobdelí si možno nepamätáte, na čo slúži. Noler hovorí štítok, ktorý ste napísali pre tento alarm:

> "Poďme do školy."

> "Vezmi si liek."

> "Teraz choďte na letisko."

Správa sa spustí na zariadení, keď sa spustí alarm. Okamžite počujete účel, namiesto toho, aby ste otvorili aplikáciu, prečítali si malý štítok alebo sa čudovali, prečo telefón vydáva hluk. Je to užitočné najmä pri školských behoch, liekoch, stretnutiach, varení, práci na zmeny a pri pripomenutiach zdieľaných s rodinou.

<!-- section:comparison -->
## Prečo si vybrať tento budík v Ruste namiesto Alarmy?

Rust spája natívny výkon s pamäťovou bezpečnosťou a umožňuje spoločné jadro aplikácie pre iOS a Android. Pomáha nám udržať Noler malý a spoľahlivý bez reklamných knižníc, analytického SDK a služieb pre počasie, horoskopy či spánok. Samotný Rust však úsporu batérie nedokazuje. Návrh stavia na natívnej implementácii a vynechaní nesúvisiacich úloh na pozadí; číselné tvrdenia o spotrebe vyžadujú merania na fyzických zariadeniach.

| Na čom záleží | Budík bez reklám a internetu | Alarmy |
|---|---|---|
| **Základná filozofia** | Sústredený budík, ktorý robí základnú prácu | Širšia platforma spánku a rannej rutiny |
| **Charakteristický zážitok z prebudenia** | Nahlas vysloví účel budíka – napríklad „Poďme do školy“ namiesto nevysvetliteľného zvonenia | Zameriava sa na hlasité budíky, prebúdzacie misie a funkcie spánku |
| **Bezpečnosť reči na zariadení** | Systém TTS na zariadení; Android pridáva pribalený open source Flite, keď nie je k dispozícii žiadny systémový nástroj TTS; zvuk alarmu OS je posledným riešením | Pozrite si aktuálny zoznam Alarmy pre jeho zvukové správanie |
| **Zásobník jazykov a používateľského rozhrania** | Rust + Dioxus — jedno zdieľané, ľahké aplikačné jadro a používateľské rozhranie s natívnymi poplachovými mostíkmi Swift/Kotlin tam, kde to operačné systémy vyžadujú | Verejné technické materiály uvádzajú [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); úplný zoznam technológií súčasnej verzie aplikácie nie je verejne dostupný. |
| **Veľkosť balíka iOS** | 11.5 MB | 237.5 MB |
| **Rozdiel vo veľkosti iOS** | ≈1/20 | ≈20× |
| **Veľkosť vydania pre Android** | 5.6 MB App Bundle nahraný do Google Play | Google Play nezverejňuje jednu veľkosť balíka nezávislú od zariadenia |
| **Reklama** | žiadne | Obsahuje reklamy |
| **Predplatné alebo nákupy v aplikácii** | žiadne | Nákupy v aplikácii a prémiové predplatné |
| **Vyžaduje sa účet** | Nie – neexistuje systém účtov | Neporovnáva sa; Záznam v obchode Alarmy sa zameriava na širší katalóg funkcií |
| **Analytics alebo sledovanie správania** | žiadne | Neporovnáva sa; Noler sľubuje, že nezahŕňa ani jedno |
| **Cloudová synchronizácia** | Žiadne – údaje o alarme zostanú v zariadení | Neporovnáva sa; Noler zámerne nemá vrstvu mrakov |
| **Funkcia počasia** | Nie | Áno – v zozname Alarmy pre Android sa uvádza, že polohu možno použiť na získanie počasia po zatvorení aplikácie |
| **Funkcia horoskopu** | Nie | Áno – zdokumentované v centre pomoci systému Android spoločnosti Alarmy |
| **Sledovanie spánku** | Nie | áno |
| **Monitorovanie chrápania** | Nie | áno |
| **Zvuky spánku / ASMR** | Nie | áno |
| **Pracovné zaťaženie funkcie pozadia** | Práce súvisiace s alarmom; žiadne nesúvisiace online kanály, sledovanie, reklamy alebo cloudová práca | Ďalšie povolené funkcie môžu zahŕňať prácu na pozadí a sieť; nie je nárokované žiadne porovnávanie kontrolovaného výkonu |
| **Pozorované nočné vybitie batérie** | Približne 3% v teste majiteľa rovnakého telefónu cez noc | Asi 10% v rovnakom teste |
| **Rozdiel v batérii v tomto pozorovaní** | Len pri tomto neformálnom pozorovaní je asi o 70% nižší odtok | Asi 3.3× Nolerov pozorovaný odtok; nie je všeobecným štandardom |
| **Batériový prístup** | Úspora batérie je prioritou produktu. Normálna prevádzka budíka je úplne offline, čím sa zabráni práci s Wi-Fi/mobilnými dátami a spotrebe batérie spôsobenej počasím, horoskopom, analýzou spánku, reklamami, analýzami a synchronizáciou s cloudom | Jeho väčšia sada pripojených funkcií môže vykonávať sieťové a spracovateľské práce nad rámec plánovania a zvonenia budíkov |
| **Normálne použitie poplachovej dátovej siete** | Nula – alarmy, štítky, nastavenia, prílohy, reč a plánovanie zostávajú v zariadení | Pripojené funkcie vyžadujú prístup k sieti |
| **jazyky používateľského rozhrania** | 39 možností miestneho nastavenia v aplikácii | 31 jedinečných kódov jazykov uvedených v aktuálnom balíku iOS |
| **Jazyky hlasových alarmov** | 24 možností pomocou reči na vašom zariadení | Aktuálne hlasové pokrytie nájdete v zozname Alarmy |

Porovnanie veľkosti používa počty bajtov balíkov uvedené v katalógu spoločnosti Apple pre aktuálne verzie obchodu App Store v USA 19. septembra 2026: Noler 11,506,688 bajtov a Alarmy 237,476,864 bajtov. Balíky Android App Bundle používajú rozdelené doručovanie, takže veľkosť stiahnutia a nainštalovania zo služby Google Play každej osoby sa líši podľa zariadenia; 5.6 MB je overený aktuálny balík nahrávania Play od spoločnosti Noler, nie sľúbené meranie inštalovanej veľkosti.

Počty jazykov používajú rôzne verejné dôkazy: Nolerov počet pochádza z výberu jazyka v aplikácii, zatiaľ čo počet Alarmy je jedinečný počet jazykových kódov, ktorý uvádza jeho aktuálny balík iOS. 39 možností odkazuje na rozhranie v aplikácii, nie je zárukou aktuálneho stavu lokalizácie obchodu.

Alarmy je vhodná voľba pre ľudí, ktorí aktívne chcú budiace misie, analýzu spánku, monitorovanie chrápania, zvuky spánku, počasie, horoskop a katalóg prémiových funkcií. Vyberte Noler, ak chcete, aby vaša aplikácia budíka zostala aplikáciou budíka.

<!-- section:battery-observation -->
## Naše neformálne nočné pozorovanie: 3% oproti 10%

Nočný test na telefóne majiteľa ukázal asi 3% využitie batérie pri Noler oproti asi 10% pri Alarmy. Inými slovami, Alarmy spotreboval pri tomto nočnom pozorovaní približne 3.3-krát viac batérie, zatiaľ čo Nolerova spotreba bola asi o 70% nižšia.

Išlo skôr o porovnanie s rovnakým telefónom z prvej ruky než o kontrolovanú laboratórnu certifikáciu. Výsledky batérie sa líšia v závislosti od telefónu, stavu batérie, operačného systému, sily signálu, nastavení budíka a povolených funkcií. Presné čísla nie sú zaručené na každom zariadení – ale dôvod uprednostnenia batérie je zabudovaný v produkte.

<!-- section:battery-workload -->
## Menej siete znamená menej práce s batériou

Každá ďalšia funkcia na pozadí má svoju cenu. Počasie treba zistiť. Obsah horoskopu je potrebné stiahnuť. Sledovanie spánku a chrápania si vyžaduje rozšírené monitorovanie. Reklamy a analýzy vyžadujú kód, sieťový prenos a spracovanie. Cloudové účty vyžadujú synchronizáciu.

Noler nič z toho pri bežnom používaní alarmu nerobí. Na ukladanie, plánovanie, hovorenie alebo zvonenie budíka nepotrebuje Wi-Fi ani mobilné dáta. Tým, že zostane pri svojej hlavnej úlohe úplne offline, zabráni prebúdzaniu sieťového rádia kvôli počasiu, horoskopu, reklame, analýze, účtu alebo prenosu synchronizovaného s cloudom.

Tento produkt je najodolnejšou voľbou pre úsporu batérie: v prvom rade nezačínajte nesúvisiace práce. Menej povinností na pozadí znamená menej príležitostí na spotrebovanie času procesora, času Wi-Fi/mobilného rádia, pamäte a batérie nad rámec práce, ktorú alarm skutočne potrebuje.

### Ako sa bude testovať číselné porovnanie batérií

Simulátor nemôže poskytnúť platné porovnanie batérie telefónu: beží na procesore počítača, rádiu a napájacom zdroji. Akékoľvek budúce tvrdenie „využíva X-krát menej batérie“ bude pochádzať zo zodpovedajúcich testov fyzického zariadenia.

Test bude spúšťať obe aplikácie na rovnakom modeli, verzii operačného systému, rozsahu stavu batérie, sieti, jasu, hlasitosti a teplote. Bude merať dva samostatne zverejnené scenáre: podobný základný alarm a bežné predvolené prostredie každej aplikácie. Testovacie poradie sa bude striedať, nesúvisiace aplikácie sa zastavia, zariadenia sa spustia pri rovnakom nabití a teplote a každý scenár sa bude opakovať najmenej päťkrát.

Meranie systému Android bude používať štatistiku batérie systému a údaje o spotrebe hardvéru, ak je podporované. Meranie iOS bude využívať energetické stopy Instruments na fyzickom iPhone. Výsledky budú uvádzať trvanie testu, presné nastavenia, výsledok mediánu energie, rozsah medzi spustením a nespracované súbory sledovania. Kým nebudú existovať tieto kontrolované dôkazy, zverejnený výsledok 3% verzus 10% zostáva jasne identifikovaný ako nočné pozorovanie skutočného zariadenia majiteľa, nie je zárukou pre každý telefón.

<!-- section:package-size -->
## Malý balík so zameranou sadou funkcií

V systéme iOS má aktuálny balík Noler asi 11.5 MB v porovnaní s 237.5 MB od Alarmy – približne 20× menej. Aktuálny balík Android App Bundle nahraný do Google Play má 5.6 MB.

Ten rozdiel nie je náhoda. Noler nespája platformu spánku, reklamný systém, analytickú vrstvu, systém cloudových účtov, spravodajský kanál, meteorologickú službu ani horoskop. Stiahnete si budík a dostanete budík.

<!-- section:privacy -->
## Súkromné podľa návrhu

Normálne používanie alarmu nikam neposiela žiadne dáta alarmu.

- Žiadne reklamné ID
- Žiadny účet ani prihlásenie
- Žiadna analytická súprava SDK
- Žiadne sledovanie správania
- Žiadne zálohovanie alebo synchronizácia v cloude
- Žiadna vzdialená služba alarmových údajov
- Žiadna požiadavka na sieť z viacerých zdrojov na pozadí

Záznamy budíkov, štítky, nastavenia, prílohy, reč a plánovanie upozornení zostanú na vašom zariadení. Aktívne stránky podmienok, ochrany osobných údajov a podpory sa otvoria iba vtedy, keď ich explicitne vyberiete v nastaveniach.

<!-- section:speech-fallback -->
## Hovoriaci budík, ktorý vysvetľuje, prečo zvoní

Označte budík ako „Škola“, „Medicína“, „Letisko“ alebo „Zavolajte mame“. Keď zazvoní, Noler môže tento štítok vysloviť nahlas pomocou reči dostupnej na vašom zariadení.

Jeho stratégia zvuku na zariadení je špecifická pre platformu. Obe platformy používajú systémový prevod textu na reč pre označenie alarmu. V systéme Android, keď zariadenie nemá žiadny použiteľný systémový nástroj TTS, prevezme pribalený ľahký hlas Flite s otvoreným zdrojom. Zvuk alarmu operačného systému zostáva poslednou úrovňou bezpečnosti.

Iba v Androide poskytuje pribalený open-source modul Flite anglický náhradný hlas, ak nie je použiteľná systémová syntéza reči. Hlasy závisia od nainštalovaných jazykov. Voliteľný režim udržiavania aplikácie v chode je predvolene vypnutý a môže zvýšiť spotrebu batérie.

Zvuk núdzového alarmu má zabrániť nedostupnému hlasu, aby vyvolal tichý alarm.

<!-- section:features -->
## Čo získate

- Jednorazové a opakujúce sa budíky v pracovné dni
- Hovorené štítky budíkov
- Veľké tlačidlá na odloženie a zastavenie budíka
- Jasný pohľad na ďalší naplánovaný budík
- Miestne prílohy a nastavenia
- Úložisko na zariadení bez účtu
- Tmavé rozhranie bez rozptyľovania
- Podpora pre iPhone, iPad a Android
- 39 Voľby miestneho nastavenia používateľského rozhrania
- 24 možností výberu jazyka budíka

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Zoznam budíkov Noler a ďalšia obrazovka budíka">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Obrazovka budíka Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Obrazovka nastavení budíka Noler">
</div>

<!-- section:ui-languages -->
## 39 voľby miestneho nastavenia rozhrania

arabčina, katalánčina, čínština (zjednodušená), čínština (tradičná), chorvátčina, čeština, dánčina, holandčina, angličtina (austrálska), angličtina (kanadská), angličtina (britská), angličtina (americká), fínčina, francúzština, francúzština (kanadská), nemčina, gréčtina, hebrejčina, hindčina, maďarčina, indonézština, taliančina, japončina, kórejčina, malajčina, nórčina (bokmal), poľština, portugalčina (brazílska), portugalčina (európska), rumunčina, ruština, slovenčina, španielčina, španielčina (latinskoamerická), švédčina, thajčina, turečtina, ukrajinčina a vietnamčina.

<!-- section:voice-languages -->
## 24 možností výberu jazyka budíka

arabčina (Egypt), bengálčina (Bangladéš), holandčina (Holandsko), angličtina (India), angličtina (americká), francúzština (Francúzsko), nemčina (Nemecko), hindčina (India), indonézština (Indonézia), taliančina (Taliansko), japončina (Japonsko), kórejčina (Južná Kórea), maráthčina (India), poľština (Poľsko), portugalčina (brazílska), rumunčina (Rumunsko), ruština (Rusko), španielčina (Spojené štáty), tamilčina (India), telugčina (India), thajčina (Thajsko), turečtina (Turecko), ukrajinčina (Ukrajina) a vietnamčina (Vietnam).

Dostupnosť hlasu a výslovnosť závisia od hlasov prevodu textu na reč nainštalovaných výrobcom zariadenia alebo operačným systémom. Pribalená záloha Flite je len pre Android a hovorí po anglicky; obe platformy majú záložný zvuk alarmu, keď nemožno použiť reč.

<!-- section:downloads -->
## Stiahnite si bezplatný budík

| Platforma | Oficiálne stiahnutie |
|---|---|
| iPhone a iPad | [Stiahnuť v obchode Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Získať na Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Zdroje na porovnanie

- [Noler v obchode App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler na Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy v obchode App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy na Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Pomocník Alarmy Android: nastavenie horoskopu](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Funkcie obchodu a veľkosti balíkov sa môžu meniť. Porovnanie skontrolované 19. septembra 2026. Alarmy je ochranná známka príslušného vlastníka; tento projekt nie je pridružený ani podporovaný spoločnosťou Alarmy alebo DelightRoom.

---

Tento repozitár predstavuje produkt. Proprietárny zdrojový kód aplikácie tu nie je zverejnený. Hlasový modul Flite má otvorený zdrojový kód.

<div align="center">
  <strong>Vstávajte so zaostreným budíkom, bez reklám alebo sledovania.</strong>
</div>
