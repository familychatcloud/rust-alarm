<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler alkalmazás ikonra">

# Ébresztő reklámok nélkül

### Könnyű offline riasztó iPhone, iPad és Android számára

Egy ébresztőóra, amely az Ön felébresztésére összpontosít, reklámok, alváskövetés, horoszkópok vagy extra háttérterhelés nélkül.

Hallgassa meg, mire szól az ébresztő: „Menjünk iskolába.” – Vegye be a gyógyszerét. – Indulás a repülőtérre.

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Töltse le a Noler-t az App Store-ból"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Szerezze be a Nolert a Google Playen"></a>

Ingyenesen letölthető. Nincs fiók. Nincs előfizetés. Nincs alkalmazáson belüli vásárlás.

A tulajdonos körülbelül 3%-os éjszakai akkumulátorlemerülést figyelt meg Noler esetében, szemben a 10%-kal, amikor az Alarmy ugyanazon a telefonon. Ez informális volt, nem egy ellenőrzött laboratóriumi vizsgálat, és nem jelent garanciát.
</div>

<!-- section:focus -->
## Fókuszált ébresztőóra független extrák nélkül

A Noler egy fókuszált ébresztőóra, amely Rustból készült. Egyszeri és ismétlődő riasztásokat hoz létre, hangosan kimondja az egyes riasztások címkéit, és riasztási rekordokat és beállításokat tárol az eszközön.

Az alkalmazás a riasztásokra összpontosít, ahelyett, hogy egy szélesebb életstílus-szolgáltatással kombinálná őket.

Nincsenek hirdetések az elvetés után, nincsenek analitikai adatok, amelyek figyelik az alkalmazás használatát, nincs fiók létrehozása, nincs felhőszolgáltatás, amelyet fenn kell tartani, és nem futnak az ébresztő mögött nem kapcsolódó időjárási, hírek, horoszkóp, alváskövető vagy horkolás rögzítő gépei.

<!-- section:spoken-purpose -->
## Hallgassa meg a riasztás célját

Egy normál ébresztő csörög, de félig ébren lehet, hogy nem emlékszel, mire való. Noler azt a címkét mondja, amit a riasztáshoz írtál:

> – Menjünk iskolába.

> – Vegye be a gyógyszerét.

> – Most menjen a repülőtérre.

Az üzenet az eszközön kezdődik, amikor a riasztás elindul. Azonnal meghallja a célt, ahelyett, hogy megnyitná az alkalmazást, elolvasna egy kis címkét, vagy kíváncsi lenne, miért ad hangot a telefon. Különösen hasznos iskolai futáshoz, gyógyszeres kezeléshez, találkozókhoz, főzéshez, műszakos munkához és a családdal megosztott emlékeztetőkhöz.

<!-- section:comparison -->
## Miért válasszon Rust-alapú ébresztőt az Alarmy helyett?

A Rust natív teljesítményt és memóriabiztonságot kínál, miközben közös alkalmazásmagot tesz lehetővé iOS-en és Androidon. Így a Noler kicsi és megbízható maradhat reklámkönyvtárak, analitikai SDK, időjárás-, horoszkóp- és alvásszolgáltatások nélkül. A Rust használata önmagában nem bizonyít energiamegtakarítást. A tervezés alapja a natív megvalósítás és a nem kapcsolódó háttérfeladatok elhagyása; a fogyasztási számokhoz valódi készülékeken végzett mérések kellenek.

| Ami számít | Ébresztő reklámok nélkül | Alarmy |
|---|---|---|
| **Alapfilozófia** | Fókuszált ébresztőóra, amely elvégzi az alapvető feladatot | Egy szélesebb alvási és reggeli rutin platform |
| **Jellegzetes ébresztési élmény** | Hangosan kimondja a riasztó célját – például: „Menjünk iskolába” megmagyarázhatatlan csengetés helyett | A hangos riasztásokra, az ébresztési küldetésekre és az alvási funkciókra összpontosít |
| **Beszédbiztonság az eszközön** | Készüléken belüli rendszer TTS; Az Android hozzáadja a csomagban található nyílt forráskódú Flite-ot, ha nem áll rendelkezésre rendszer TTS-motor; az operációs rendszer riasztási hangja a végső visszaesés | Tekintse meg az Alarmy aktuális listáját a hangviselkedéséről |
| **Nyelvi és felhasználói felület verem** | Rust + Dioxus – egy megosztott, könnyű alkalmazásmag és felhasználói felület natív Swift/Kotlin riasztóhíddal, ahol az operációs rendszerek megkövetelik | Nyilvános műszaki források ezeket említik: [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); a jelenlegi alkalmazás teljes technológiai összetétele nem nyilvános. |
| **iOS csomag mérete** | 11.5 MB | 237.5 MB |
| **iOS méretbeli különbség** | ≈1/20 | ≈20× |
| **Android kiadás mérete** | 5.6 MB App Bundle feltöltve a Google Playre | A Google Play nem tesz közzé egyetlen, eszközfüggetlen csomagméretet |
| **Reklámozás** | Egyik sem | Hirdetéseket tartalmaz |
| **Előfizetés vagy alkalmazáson belüli vásárlás** | Egyik sem | Alkalmazáson belüli vásárlások és prémium előfizetés |
| **Számla szükséges** | Nem – nincs számlarendszer | Nem hasonlítják össze; Az Alarmy áruházi adatlapja a szélesebb szolgáltatáskatalógusra összpontosít |
| **Analitika vagy viselkedéskövetés** | Egyik sem | Nem hasonlítják össze; Noler ígérete szerint egyiket sem tartalmazza |
| **Felhő szinkronizálás** | Nincs – a riasztási adatok az eszközön maradnak | Nem hasonlítják össze; Nolernek szándékosan nincs felhőrétege |
| **Időjárás funkció** | Nem | Igen – Az Alarmy Android-listája szerint a hely felhasználható időjárási adatok lekérdezésére az alkalmazás bezárása után |
| **Horoszkóp funkció** | Nem | Igen – dokumentálva az Alarmy Android súgójában |
| **Alváskövetés** | Nem | Igen |
| **Horkolás figyelése** | Nem | Igen |
| **Alvó hangok / ASMR** | Nem | Igen |
| **A háttérfunkciók munkaterhelése** | Riasztással kapcsolatos munka; Nincsenek független online hírcsatornák, nyomon követés, hirdetések vagy felhőalapú munka | A további engedélyezett funkciók háttér- és hálózati munkát is magukban foglalhatnak; nem állítják a szabályozott teljesítmény-összehasonlítást |
| **Az akkumulátor éjszakai lemerülését figyelték meg** | Körülbelül 3% a tulajdonos egynapos telefonos tesztjében | Körülbelül 10% ugyanabban a tesztben |
| **Az akkumulátor különbség ebben a megfigyelésben** | Csak ebben az informális megfigyelésben körülbelül 70%-kal kevesebb a víz | Körülbelül 3.3× Noler megfigyelt lefolyása; nem általános benchmark |
| **Akkumulátoros megközelítés** | Az akkumulátor-takarékosság a termék prioritása. A normál riasztási működés teljesen offline, elkerülve a Wi-Fi/mobil adatátvitelt, valamint az időjárás, a horoszkóp, az alváselemzés, a hirdetések, az elemzések és a felhőszinkronizálás okozta akkumulátorhasználatot. | Nagyobb csatlakoztatott funkciókészlete az ütemezésen és a riasztások csengetésén túl hálózati és feldolgozási feladatokat is végezhet |
| **Normál riasztási adathálózat használat** | Nulla – a riasztások, címkék, beállítások, mellékletek, beszéd és ütemezés az eszközön maradnak | A csatlakoztatott funkciókhoz hálózati hozzáférés szükséges |
| **UI nyelvek** | 39 alkalmazáson belüli terület-választás | 31 egyedi nyelvkód szerepel a jelenlegi iOS-csomagban |
| **Riasztási hangnyelvek** | 24 választási lehetőség a készülék beszédével | Tekintse meg az Alarmy listája aktuális hanglefedettségét |

A méret-összehasonlítás az Apple katalógusa által a jelenlegi amerikai App Store-verziók 2026. szeptember 19-i csomagbájt-számait használja: Noler 11,506,688 bájt és 237,476,864 bájt az Alarmy. Az Android App Bundle csomagok osztott kézbesítést használnak, így minden egyes személy Google Play-letöltése és telepített mérete eszközenként változik; Az 5.6 MB a Noler által ellenőrzött jelenlegi Play-feltöltési csomag, nem pedig az ígért telepített méret.

A nyelvi számlálások különböző nyilvános bizonyítékokat használnak: Noler száma az alkalmazáson belüli nyelvválasztóból származik, míg az Alarmy száma a jelenlegi iOS-csomag által jelentett egyedi nyelvi kódok száma. A 39 lehetőség az alkalmazáson belüli felületre vonatkozik, nem garantálja az aktuális kirakat lokalizációs állapotát.

Az Alarmy megfelelő választás azok számára, akik aktívan szeretnének ébresztő küldetéseket, alváselemzést, horkolásfigyelést, alvási hangokat, időjárást, horoszkópot és prémium szolgáltatáskatalógust. Válassza a Noler lehetőséget, ha azt szeretné, hogy riasztóalkalmazása riasztóalkalmazás maradjon.

<!-- section:battery-observation -->
## Nem hivatalos éjszakai megfigyelésünk: 3% versus 10%

A tulajdonos telefonján egy éjszakai teszt körülbelül 3%-os akkumulátorhasználatot mutatott ki Nolernél, szemben 10%-kal az Alarmyval. Más szóval, az Alarmy nagyjából 3.3-szor annyi akkumulátort használt az éjszakai megfigyelés során, míg Noler lemerülése körülbelül 70%-kal alacsonyabb volt.

Ez egy első kézből származó, ugyanazon telefonos összehasonlítás volt, nem pedig egy ellenőrzött laboratóriumi tanúsítás. Az akkumulátor teljesítménye a telefontól, az akkumulátor állapotától, az operációs rendszertől, a jelerősségtől, a riasztási beállításoktól és az engedélyezett funkcióktól függően változik. A pontos számok nem garantáltak minden eszközön – de az akkumulátor előnyben részesítésének oka a termékbe van beépítve.

<!-- section:battery-workload -->
## Kevesebb hálózati kapcsolat kevesebb akkumulátor-üzemet jelent

Minden extra háttérfunkciónak ára van. Az időjárást le kell kérni. A horoszkóp tartalmát le kell tölteni. Az alvás és a horkolás nyomon követése kiterjesztett megfigyelést igényel. A hirdetések és az elemzések kódot, hálózati forgalmat és feldolgozást igényelnek. A felhőfiókok szinkronizálást igényelnek.

Noler ezt nem teszi meg normál riasztóhasználat során. Nincs szüksége Wi-Fi-re vagy mobiladatra a riasztás tárolásához, ütemezéséhez, beszédéhez vagy csengéséhez. Azáltal, hogy alapvető feladatához teljesen offline marad, elkerüli, hogy a hálózati rádió felébredjen az időjárás, a horoszkóp, a hirdetések, az elemzések, a fiók vagy a felhőszinkron forgalom miatt.

A termék a legtartósabb elemkímélő választás: először ne kezdjen hozzá nem kapcsolódó munkába. A kevesebb háttérfeladat kevesebb lehetőséget jelent a processzoridő, a Wi-Fi/mobil rádiós idő, a memória és az akkumulátor fogyasztására azon a munkán túl, amelyre az ébresztőnek ténylegesen szüksége van.

### Hogyan lesz tesztelve a numerikus akkumulátor-összehasonlítás

A szimulátor nem tud érvényes telefon-akkumulátor összehasonlítást adni: a számítógép processzorán, rádióján és tápegységén fut. A jövőbeni „X-szer kevesebb akkumulátort használó” követelések a megfelelő fizikai eszköztesztekből származnak.

A benchmark mindkét alkalmazást ugyanazon a modellen, az operációs rendszer verzióján, az akkumulátor-állapot-tartományon, a hálózaton, a fényerőn, a hangerőn és a hőmérsékleten futtatja. Két külön közzétett forgatókönyvet mér: egy hasonló alapriasztást és az egyes alkalmazások normál alapértelmezett élményét. A teszt sorrendje felváltva lesz, a nem kapcsolódó alkalmazások leállnak, az eszközök ugyanazon a töltésen és hőmérsékleten indulnak el, és minden forgatókönyv legalább ötször megismétlődik.

Az Android-mérés a rendszer akkumulátor-statisztikáit és a hardverteljesítmény-adatokat használja, ha támogatott. Az iOS mérése az Instruments energianyomait fogja használni egy fizikai iPhone-on. Az eredmények a teszt időtartamát, a pontos beállításokat, a medián energiaeredményt, a futástól-futásig terjedő tartományt és a nyers nyomkövetési fájlokat jelentik. Amíg ez az ellenőrzött bizonyíték meg nem áll, a közzétett 3%-10%-os eredmény egyértelműen a tulajdonos valós eszközén végzett éjszakai megfigyelése, nem pedig garancia minden telefonra.

<!-- section:package-size -->
## Egy kis csomag fókuszált funkciókészlettel

iOS rendszeren a jelenlegi Noler-csomag körülbelül 11.5 MB, szemben az Alarmy 237.5 MB-jával – nagyjából 20-szor kisebb. A Google Playre feltöltött jelenlegi Android App Bundle csomag 5.6 MB.

Ez a különbség nem véletlen. A Noler nem köt össze alvási platformot, hirdetési rendszert, elemzési réteget, felhőalapú fiókrendszert, hírfolyamot, időjárás-szolgáltatást vagy horoszkóp hírfolyamot. Letölt egy ébresztőórát, és kap egy ébresztőórát.

<!-- section:privacy -->
## Tervezés szerint privát

A normál riasztási használat nem küld riasztási adatokat sehova.

- Nincs hirdetési azonosító
- Nincs fiók vagy bejelentkezés
- Nincs elemzési SDK
- Nincs viselkedéskövetés
- Nincs felhőalapú biztonsági mentés vagy szinkronizálás
- Nincs távoli riasztási adatszolgáltatás
- Nincs háttérben több származási hálózatra vonatkozó kérés

A riasztási rekordok, címkék, beállítások, mellékletek, beszéd és értesítések ütemezése az eszközön marad. Az élő Feltételek, Adatvédelem és támogatási oldalak csak akkor nyílnak meg, ha kifejezetten kiválasztja őket a Beállításokban.

<!-- section:speech-fallback -->
## Beszélő ébresztő, amely megmagyarázza, miért csörög

Adjon egy riasztást címkével, például „Iskola”, „Orvostudomány”, „Repülőtér” vagy „Hívja anyát”. Ha csörög, Noler hangosan ki tudja mondani a címkét az eszközén elérhető beszéd használatával.

Az eszközön belüli hangstratégia platform-specifikus. Mindkét platform a rendszer szövegfelolvasó funkcióját használja a riasztási címkéhez. Androidon egy csomagban található, könnyű, nyílt forráskódú Flite hang veszi át az irányítást, ha az eszköz nem rendelkezik használható rendszer TTS-motorral. Az operációs rendszer riasztási hangja továbbra is a végső biztonsági szint.

Csak Androidon a beépített, nyílt forrású Flite angol tartalékhangot ad, ha nincs használható rendszerbeszéd. A hangok a telepített nyelvektől függnek. Az alkalmazást aktívan tartó választható mód alapból ki van kapcsolva, és növelheti az akkumulátorfogyasztást.

A tartalék riasztási hang célja, hogy egy elérhetetlen hang ne keltsen néma riasztást.

<!-- section:features -->
## Amit kapsz

- Egyszeri és ismétlődő hétköznapi riasztások
- Kimondott riasztási címkék
- Nagy gombok a szundihoz és a leállításhoz
- A következő ütemezett riasztás tiszta képe
- Helyi mellékletek és beállítások
- Tárhely az eszközön fiók nélkül
- Sötét, zavaró kezelőfelület
- iPhone, iPad és Android támogatás
- 39 UI területi beállítások
- 24 riasztási hang nyelvválasztás

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler riasztások listája és a következő riasztási képernyő">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler ébresztőóra képernyő">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler riasztási beállítások képernyő">
</div>

<!-- section:ui-languages -->
## 39 interfész területi beállítás

arab, katalán, egyszerűsített kínai, hagyományos kínai, horvát, cseh, dán, holland, ausztrál angol, kanadai angol, brit angol, amerikai angol, finn, francia, kanadai francia, német, görög, héber, hindi, magyar, indonéz, olasz, japán, koreai, maláj, norvég (bokmål), lengyel, brazíliai portugál, európai portugál, román, orosz, szlovák, spanyol, latin-amerikai spanyol, svéd, thai, török, ukrán és vietnámi.

<!-- section:voice-languages -->
## 24 riasztási hang nyelvválasztás

arab (Egyiptom), bangla (Banglades), holland (Hollandia), angol (India), amerikai angol, francia (Franciaország), német (Németország), hindi (India), indonéz (Indonézia), olasz (Olaszország), japán (Japán), koreai (Dél-Korea), maráthi (India), lengyel (Lengyelország), brazíliai portugál, román (Románia), orosz (Oroszország), spanyol (Egyesült Államok), tamil (India), telugu (India), thai (Thaiföld), török (Törökország), ukrán (Ukrajna) és vietnámi (Vietnám).

A hang elérhetősége és kiejtése az eszköz gyártója vagy az operációs rendszer által telepített szövegfelolvasó hangoktól függ. A csomagban található Flite tartalék csak Androidon működik, és angolul beszél; mindkét platform rendelkezik riasztási hangvisszaállítással, amikor a beszéd nem használható.

<!-- section:downloads -->
## Töltse le az ingyenes ébresztőórát

| Platform | Hivatalos letöltés |
|---|---|
| iPhone és iPad | [Letöltés az Apple App Store-ból](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Töltsd le a Google Playen](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Az összehasonlítás forrásai

- [Noler az App Store-ban](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler a Google Playen](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy az App Store-ban](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy a Google Playen](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android segítség: horoszkóp beállítása](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Az üzlet jellemzői és a csomagok mérete változhat. Az összehasonlítás ellenőrzése: 2026. szeptember 19. Az Alarmy a megfelelő tulajdonosának védjegye; ez a projekt nem áll kapcsolatban az Alarmy-val vagy a DelightRoom-mal, és nem támogatja azokat.

---

Ez a tároló termékinformációkat tartalmaz. Az alkalmazás zárt forráskódja itt nem érhető el. A beépített Flite beszédmotor nyílt forrású.

<div align="center">
  <strong>Ébredjen fókuszált ébresztőórával, hirdetések és nyomkövetés nélkül.</strong>
</div>
