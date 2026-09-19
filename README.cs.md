<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Ikona aplikace Noler">

# Budík bez reklam a internetu

### Lehký offline alarm pro iPhone, iPad a Android

Budík zaměřený na vaše probuzení, bez reklamy, sledování spánku, horoskopů nebo jejich extra zátěže na pozadí.

Poslechněte si, k čemu je váš budík: „Pojďme do školy.“ "Vezmi si léky." "Odejít na letiště."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Stáhněte si Noler z App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Získejte Noler na Google Play"></a>

Zdarma ke stažení. Žádný účet. Žádné předplatné. Žádný nákup v aplikaci.

Majitel zaznamenal asi 3% vybití baterie přes noc u Noler oproti 10% u Alarmy na stejném telefonu. Jednalo se o neformální, nekontrolovaný laboratorní test, a není zárukou.
</div>

<!-- section:focus -->
## Soustředěný budík bez nesouvisejících doplňků

Noler je zaměřený budík postavený s Rustem. Vytváří jednorázové a opakující se alarmy, nahlas vyslovuje štítek každého alarmu a uchovává záznamy o alarmech a nastavení na vašem zařízení.

Aplikace se zaměřuje na alarmy místo toho, aby je kombinovala s širší službou životního stylu.

Po zavření nečekají žádné reklamy, žádné analýzy sledující, jak aplikaci používáte, žádný účet k vytvoření, žádná cloudová služba, kterou je třeba udržovat, a žádné nesouvisející stroje na počasí, zprávy, horoskopy, sledování spánku nebo zaznamenávání chrápání za vaším budíkem.

<!-- section:spoken-purpose -->
## Poslechněte si účel svého alarmu

Zazvoní normální budík, ale v polobdělém stavu si možná nepamatujete, k čemu slouží. Noler mluví štítkem, který jste pro tento alarm napsal:

> "Pojďme do školy."

> "Vezmi si léky."

> "Okamžitě odejděte na letiště."

Zpráva se spustí na zařízení, když se spustí alarm. Okamžitě uslyšíte účel místo otevírání aplikace, čtení malého štítku nebo přemýšlení, proč telefon vydává hluk. Je to užitečné zejména pro školní běhy, léky, schůzky, vaření, práci na směny a připomenutí sdílená s rodinou.

<!-- section:comparison -->
## Proč zvolit budík v Rustu místo Alarmy?

Rust spojuje nativní výkon s paměťovou bezpečností a umožňuje sdílet jádro aplikace mezi iOS a Androidem. Noler tak může zůstat malý a spolehlivý, bez reklamních knihoven, analytického SDK či služeb pro počasí, horoskopy a spánek. Samotné použití Rustu však úsporu baterie nedokazuje. Náš návrh staví na nativním kódu a vynechání nesouvisejících úloh na pozadí; číselná tvrzení o spotřebě musí podložit měření na fyzických zařízeních.

| Na čem záleží | Budík bez reklam a internetu | Alarmy |
|---|---|---|
| **Základní filozofie** | Soustředěný budík, který dělá základní práci | Širší platforma pro spánek a ranní rutinu |
| **Charakteristický zážitek z probuzení** | Vysloví účel budíku nahlas – například „Pojďme do školy“ místo nevysvětlitelného vyzvánění | Zaměřuje se na hlasité alarmy, budicí mise a funkce spánku |
| **Bezpečnost řeči na zařízení** | Systém na zařízení TTS; Android přidá přibalený open-source Flite, když není k dispozici žádný systémový TTS engine; zvuk alarmu OS je poslední záložní možností | Podívejte se na aktuální výpis Alarmy pro jeho zvukové chování |
| **Zásobník jazyků a uživatelského rozhraní** | Rust + Dioxus – jedno sdílené, lehké aplikační jádro a uživatelské rozhraní s nativními Swift/Kotlin alarm bridge tam, kde to operační systémy vyžadují | Veřejné technické materiály uvádějí [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); úplný seznam technologií používaných v současné verzi není veřejně dostupný. |
| **Velikost balíčku iOS** | 11.5 MB | 237.5 MB |
| **Rozdíl velikosti iOS** | ≈1/20 | ≈20× |
| **Velikost vydání pro Android** | 5.6 MB App Bundle nahráno na Google Play | Google Play nepublikuje jednu velikost balíčku nezávislou na zařízení |
| **Reklama** | žádný | Obsahuje reklamy |
| **Předplatné nebo nákupy v aplikaci** | žádný | Nákupy v aplikaci a prémiové předplatné |
| **Účet je vyžadován** | Ne – neexistuje žádný systém účtů | Nesrovnáno; Záznam v obchodu Alarmy se zaměřuje na širší katalog funkcí |
| **Analytics nebo sledování chování** | žádný | Nesrovnáno; Noler slibuje, že nezahrnuje ani jedno |
| **Cloudová synchronizace** | Žádné – data alarmu zůstávají v zařízení | Nesrovnáno; Noler záměrně nemá žádnou vrstvu mraků |
| **Funkce počasí** | Ne | Ano – v seznamu Android společnosti Alarmy je uvedeno, že polohu lze použít k získání počasí po zavření aplikace |
| **Funkce horoskopu** | Ne | Ano – zdokumentováno v centru nápovědy pro Android společnosti Alarmy |
| **Sledování spánku** | Ne | Ano |
| **Monitorování chrápání** | Ne | Ano |
| **Zvuky spánku / ASMR** | Ne | Ano |
| **Vytížení funkcí na pozadí** | Práce související s alarmem; žádné nesouvisející online zdroje, sledování, reklamy nebo cloudová práce | Další povolené funkce mohou zahrnovat práci na pozadí a na síti; není požadováno žádné řízené srovnání výkonu |
| **Pozorováno vybití baterie přes noc** | Přibližně 3% v testu majitele stejného telefonu přes noc | Asi 10% ve stejném testu |
| **Rozdíl v baterii v tomto pozorování** | Pouze v tomto neformálním pozorování je asi o 70% nižší spotřeba energie | Asi 3.3× Nolerův pozorovaný odtok; není obecným měřítkem |
| **Bateriový přístup** | Úspora baterie je prioritou produktu. Normální provoz budíku je plně offline, takže se vyhnete práci s Wi-Fi/mobilními daty a spotřebě baterie způsobené počasím, horoskopem, analýzou spánku, reklamami, analýzami a synchronizací s cloudem | Jeho větší sada připojených funkcí může provádět síťovou a zpracovatelskou práci nad rámec plánování a vyzvánění alarmů |
| **Normální použití poplachové datové sítě** | Nula – alarmy, štítky, nastavení, přílohy, řeč a plánování zůstávají v zařízení | Připojené funkce vyžadují přístup k síti |
| **jazyky uživatelského rozhraní** | 39 možností národního prostředí v aplikaci | 31 jedinečných kódů jazyků uvedených v aktuálním balíčku iOS |
| **Jazyky hlasových alarmů** | 24 možností pomocí řeči na vašem zařízení | Aktuální hlasové pokrytí najdete v seznamu Alarmy |

Porovnání velikosti používá počty bajtů balíčků hlášené katalogem společnosti Apple pro aktuální verze obchodu App Store v USA k 19. září 2026: Noler 11,506,688 bajtů a Alarmy 237,476,864 bajtů. Balíčky Android App Bundle používají rozdělené doručování, takže velikost stažení a instalace z Google Play se u každého uživatele liší podle zařízení; 5.6 MB je ověřený aktuální balíček pro nahrávání Play od společnosti Noler, nikoli slíbené měření instalované velikosti.

Počty jazyků používají různé veřejné důkazy: Nolerův počet pochází z výběru jazyka v aplikaci, zatímco počet Alarmy je jedinečný počet jazykových kódů hlášený aktuálním balíčkem pro iOS. 39 možností se týká rozhraní v aplikaci, nikoli záruky aktuálního stavu lokalizace obchodu.

Alarmy je vhodná volba pro lidi, kteří aktivně chtějí budicí mise, analýzu spánku, monitorování chrápání, zvuky spánku, počasí, horoskop a katalog prémiových funkcí. Pokud chcete, aby aplikace budíku zůstala aplikací budíku, vyberte možnost Noler.

<!-- section:battery-observation -->
## Naše neformální noční pozorování: 3% oproti 10%

Na telefonu majitele ukázal noční test asi 3% využití baterie u Noler oproti asi 10% u Alarmy. Jinak řečeno, Alarmy spotřeboval při tomto nočním pozorování zhruba 3,3krát více baterie, zatímco Nolerův odběr byl asi o 70% nižší.

Jednalo se spíše o srovnání z první ruky se stejným telefonem než o certifikaci kontrolované laboratoře. Výsledky baterie se liší podle telefonu, stavu baterie, operačního systému, síly signálu, nastavení budíku a povolených funkcí. Přesná čísla nejsou zaručena na každém zařízení – ale důvod upřednostnění baterie je zabudován do produktu.

<!-- section:battery-workload -->
## Méně sítí znamená méně práce s baterií

Každá další funkce na pozadí něco stojí. Počasí se musí zjistit. Obsah horoskopu je třeba načíst. Sledování spánku a chrápání vyžaduje rozšířené monitorování. Reklamy a analýzy vyžadují kód, síťový provoz a zpracování. Cloudové účty vyžadují synchronizaci.

Nic z toho Noler při běžném používání alarmu nedělá. K ukládání, plánování, mluvení nebo vyzvánění budíku nepotřebuje Wi-Fi ani mobilní data. Tím, že zůstává při své hlavní práci zcela offline, zabraňuje probouzení síťového rádia kvůli počasí, horoskopu, reklamě, analýze, účtu nebo provozu synchronizace s cloudem.

Produkt představuje nejodolnější volbu pro úsporu baterie: v první řadě nezačínejte nesouvisející práce. Méně povinností na pozadí znamená méně příležitostí ke spotřebě času CPU, času Wi-Fi/mobilního rádia, paměti a baterie nad rámec práce, kterou alarm skutečně potřebuje.

### Jak bude testováno numerické srovnání baterií

Simulátor nemůže poskytnout platné srovnání telefonu a baterie: běží na procesoru počítače, rádiu a napájecím zdroji. Jakékoli budoucí tvrzení „využívá Xkrát méně baterie“ bude pocházet ze shodných testů fyzického zařízení.

Benchmark poběží obě aplikace na stejném modelu, verzi operačního systému, srovnatelném stavu baterie, síti, jasu, hlasitosti a teplotě. Bude měřit dva samostatně zveřejněné scénáře: podobný základní alarm a normální výchozí prostředí každé aplikace. Zkušební pořadí se bude střídat, nesouvisející aplikace budou zastaveny, zařízení začnou se stejným nabitím a teplotou a každý scénář se bude opakovat nejméně pětkrát.

Měření systému Android bude používat statistiky baterie systému a údaje o výkonu hardwaru, pokud je podporováno. Měření iOS bude využívat energetické stopy Instruments na fyzickém iPhonu. Výsledky budou hlásit dobu trvání testu, přesné nastavení, výsledek mediánu energie, rozsah běhu po běhu a nezpracované trasovací soubory. Dokud nebudou existovat tyto kontrolované důkazy, bude zveřejněný výsledek 3% oproti 10% jasně identifikován jako noční pozorování skutečného zařízení majitele, nikoli záruka pro každý telefon.

<!-- section:package-size -->
## Malý balíček se zaměřenou sadou funkcí

Na iOS má aktuální balíček Noler asi 11.5 MB ve srovnání s 237.5 MB od Alarmy – zhruba 20× menší. Aktuální balíček Android App Bundle nahraný na Google Play má 5.6 MB.

Ten rozdíl není náhoda. Noler nesdružuje spánkovou platformu, reklamní systém, analytickou vrstvu, systém cloudových účtů, zpravodajský kanál, meteorologickou službu nebo horoskop. Stáhnete si budík a dostanete budík.

<!-- section:privacy -->
## Soukromé podle návrhu

Normální použití alarmu nikam neodesílá žádná data alarmu.

- Žádné reklamní ID
- Žádný účet ani přihlášení
- Žádná sada SDK pro analýzu
- Žádné sledování chování
- Žádné cloudové zálohování nebo synchronizace
- Žádná vzdálená služba alarmových dat
- Žádný požadavek na síť mezi zdroji na pozadí

Záznamy budíků, štítky, nastavení, přílohy, řeč a plánování oznámení zůstanou na vašem zařízení. Živé stránky podmínek, ochrany osobních údajů a podpory se otevírají pouze tehdy, když je výslovně vyberete v Nastavení.

<!-- section:speech-fallback -->
## Mluvící budík, který vysvětluje, proč zvoní

Dejte budíku štítek, například „Škola“, „Lékařství“, „Letiště“ nebo „Zavolejte mámě“. Když zazvoní, může Noler tento štítek vyslovit nahlas pomocí řeči dostupné na vašem zařízení.

Jeho strategie zvuku na zařízení je specifická pro platformu. Obě platformy používají systémový převod textu na řeč pro štítek alarmu. Když zařízení nemá žádný použitelný systémový TTS engine, na Androidu převezme přibalený lehký open-source hlas Flite. Zvuk alarmu operačního systému zůstává poslední úrovní bezpečnosti.

Pouze na Androidu poskytuje přibalený open-source modul Flite anglický záložní hlas, pokud není použitelná systémová syntéza řeči. Hlasy závisejí na nainstalovaných jazycích. Volitelný režim udržování aplikace v chodu je ve výchozím stavu vypnutý a může zvýšit spotřebu baterie.

Zvuk nouzového alarmu má zabránit nedostupnému hlasu, aby vyvolal tichý alarm.

<!-- section:features -->
## Co získáte

- Jednorázové a opakující se budíky v pracovní dny
- Mluvené poplašné štítky
- Velká tlačítka pro odložení a zastavení budíku
- Jasný pohled na další naplánovaný budík
- Místní přílohy a nastavení
- Úložiště v zařízení bez účtu
- Tmavé rozhraní bez rozptylování
- Podpora iPhone, iPad a Android
- 39 Volby národního prostředí uživatelského rozhraní
- 24 možností volby jazyka alarmu

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Seznam alarmů Noler a další obrazovka alarmů">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Obrazovka budíku Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Obrazovka nastavení budíku Noler">
</div>

<!-- section:ui-languages -->
## 39 volby národního prostředí

arabština, katalánština, čínština (zjednodušená), čínština (tradiční), chorvatština, čeština, dánština, nizozemština, angličtina (Austrálie), angličtina (Kanada), angličtina (Velká Británie), angličtina (USA), finština, francouzština, francouzština (Kanada), němčina, řečtina, hebrejština, hindština, maďarština, indonéština, italština, japonština, korejština, malajština, norština (bokmål), polština, portugalština (Brazílie), portugalština (Evropa), rumunština, ruština, slovenština, španělština, španělština (Latinská Amerika), švédština, thajština, turečtina, ukrajinština a vietnamština.

<!-- section:voice-languages -->
## 24 možností volby jazyka alarmu

arabština (Egypt), bengálština (Bangladéš), nizozemština (Nizozemsko), angličtina (Indie), angličtina (USA), francouzština (Francie), němčina (Německo), hindština (Indie), indonéština (Indonésie), italština (Itálie), japonština (Japonsko), korejština (Jižní Korea), maráthština (Indie), polština (Polsko), portugalština (Brazílie), rumunština (Rumunsko), ruština (Rusko), španělština (Spojené státy), tamilština (Indie), telugština (Indie), thajština (Thajsko), turečtina (Turecko), ukrajinština (Ukrajina) a vietnamština (Vietnam).

Dostupnost hlasu a výslovnost závisí na hlasech převodu textu na řeč nainstalovaných výrobcem zařízení nebo operačním systémem. Přiložená záložní verze Flite je pouze pro Android a mluví anglicky; obě platformy mají nouzový zvuk alarmu, když nelze použít řeč.

<!-- section:downloads -->
## Stáhněte si zdarma budík

| Platforma | Oficiální stažení |
|---|---|
| iPhone a iPad | [Stáhnout na Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Získat na Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Zdroje pro srovnání

- [Noler v App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler na Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy v App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy na Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Nápověda Alarmy Android: nastavení horoskopu](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Funkce obchodu a velikosti balíčků se mohou měnit. Srovnání zkontrolováno 19. září 2026. Alarmy je ochranná známka příslušného vlastníka; tento projekt není přidružen ani schválen společností Alarmy nebo DelightRoom.

---

Tento repozitář obsahuje informace o produktu, nikoli proprietární zdrojový kód aplikace. Přibalený hlasový modul Flite má otevřený zdrojový kód.

<div align="center">
  <strong>Vstávejte se soustředěným budíkem, bez reklam nebo sledování.</strong>
</div>
