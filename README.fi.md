<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler-sovelluksen kuvake">

# Herätyskello ilman mainoksia

### Kevyt offline-hälytys iPhonelle, iPadille ja Androidille

Herätykseen keskittyvä herätyskello ilman mainoksia, unenseurantaa, horoskooppeja tai niiden ylimääräistä taustatyötä.

Kuuntele, mitä varten herätys on: "Mennään kouluun." "Ota lääkkeesi." "Lähdä lentokentälle."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Lataa Noler App Storesta"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Hanki Noler Google Playsta"></a>

Lataa ilmaiseksi. Ei tiliä. Ei tilausta. Ei sovelluksen sisäisiä ostoksia.

Omistaja havaitsi noin 3% akun tyhjenemistä yön aikana Nolerin kanssa verrattuna 10%:iin saman puhelimen Alarmylla. Tämä oli epävirallinen, ei kontrolloitu laboratoriotesti, eikä se ole takuu.
</div>

<!-- section:focus -->
## Tarkennettu herätyskello ilman siihen liittyviä lisäominaisuuksia

Noler on Rustilla toteutettu herätyskello. Se luo kertaluonteisia ja toistuvia herätyksiä, lukee niiden nimet ääneen ja tallentaa herätykset sekä asetukset laitteellesi.

Sovellus keskittyy hälytyksiin sen sijaan, että se yhdistäisi niitä laajempaan elämäntapapalveluun.

Ei mainoksia odottamassa hylkäämisen jälkeen, analytiikkaa, joka seuraa sovelluksen käyttöä, ei luotavaa tiliä, ei ylläpidettävää pilvipalvelua, eikä siihen liityviä sää-, uutisia, horoskooppeja, unenseuranta- tai kuorsauksen tallennuslaitteita, jotka pyörivät herätyksen takana.

<!-- section:spoken-purpose -->
## Kuuntele hälytyssi tarkoitus

Normaali herätyskello soi, mutta puoli valveilla et ehkä muista, mihin se on tarkoitettu. Noler puhuu etikettiä, jonka kirjoitit tälle hälytykselle:

> "Mennään kouluun."

> "Ota lääkkeesi."

> "Lähdä nyt lentokentälle."

Viesti alkaa laitteessa, kun hälytys laukeaa. Kuulet tarkoituksen välittömästi sen sijaan, että avaat sovelluksen, lukisit pienen etiketin tai ihmettelet, miksi puhelin pitää ääntä. Se on erityisen hyödyllinen koululenkkejä, lääkitystä, tapaamisia, ruoanlaittoa, vuorotyötä ja perheen kanssa jaettavia muistutuksia varten.

<!-- section:comparison -->
## Miksi valita Rustilla tehty herätyskello Alarmyn sijaan?

Rust yhdistää natiivin suorituskyvyn ja muistiturvallisuuden sekä mahdollistaa yhteisen sovellusytimen iOS:lle ja Androidille. Näin Noler voidaan pitää pienenä ja luotettavana ilman mainoskirjastoja, analytiikka-SDK:ta tai sää-, horoskooppi- ja unipalveluja. Rustin käyttö ei kuitenkaan yksin osoita akun säästöä. Suunnittelu perustuu natiiviin toteutukseen ja ylimääräisten taustatehtävien välttämiseen; kulutusluvut edellyttävät mittauksia oikeilla laitteilla.

| Mitä väliä | Herätyskello ilman mainoksia | Alarmy |
|---|---|---|
| **Ydinfilosofia** | Tarkennettu herätyskello, joka tekee olennaisen työn | Laajempi nukkumis- ja aamurutiinialusta |
| **Tunnusomainen herätyskokemus** | Puhuu hälytyksen tarkoituksen ääneen – esimerkiksi "Mennään kouluun" selittämättömän soittoäänen sijaan | Keskittyy kovaäänisiin hälytyksiin, herätystehtäviin ja nukkumistoimintoihin |
| **Laitteen puheturvallisuus** | Laitteessa oleva TTS-järjestelmä; Android lisää mukana toimitetun avoimen lähdekoodin Fliten, kun järjestelmän TTS-moottoria ei ole saatavilla; käyttöjärjestelmän hälytysääni on viimeinen vaihtoehto | Katso Alarmyn nykyinen luettelo sen äänikäyttäytymisestä |
| **Kieli- ja käyttöliittymäpino** | Rust + Dioxus – yksi jaettu, kevyt sovellusydin ja käyttöliittymä, jossa on alkuperäiset Swift/Kotlin-hälytyssillat käyttöjärjestelmien vaatiessa | Julkisissa teknisissä lähteissä mainitaan [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); nykyisen sovelluksen koko teknologiakokonaisuutta ei ole julkaistu. |
| **iOS-paketin koko** | 11.5 MB | 237.5 MB |
| **iOS-koon ero** | ≈1/20 | ≈20× |
| **Android-julkaisun koko** | 5.6 Mt App Bundle ladattu Google Playhin | Google Play ei julkaise yhtä laitteesta riippumatonta pakettikokoa |
| **Mainonta** | Ei mitään | Sisältää mainoksia |
| **Tilaukset tai sovelluksen sisäiset ostot** | Ei mitään | Sovelluksen sisäiset ostokset ja premium-tilaus |
| **Tili vaaditaan** | Ei – tilijärjestelmää ei ole | Ei verrattu; Alarmyn myymäläluettelo keskittyy laajempaan ominaisuusluetteloonsa |
| **Analyysi tai käyttäytymisen seuranta** | Ei mitään | Ei verrattu; Noler lupaa, että se ei sisällä kumpaakaan |
| **Pilven synkronointi** | Ei mitään — hälytystiedot pysyvät laitteella | Ei verrattu; Nolerilla ei ole tarkoituksella pilvikerrosta |
| **Sääominaisuus** | Ei | Kyllä – Alarmyn Android-listauksessa sanotaan, että sijaintia voidaan käyttää säätietojen selvittämiseen sovelluksen sulkemisen jälkeen |
| **Horoskoopin ominaisuus** | Ei | Kyllä – dokumentoitu Alarmyn Android-ohjekeskuksessa |
| **Unen seuranta** | Ei | Kyllä |
| **Kuorsauksen seuranta** | Ei | Kyllä |
| **Uniäänet / ASMR** | Ei | Kyllä |
| **Taustatoimintojen työmäärä** | Hälytystyöt; ei aiheeseen liittymättömiä verkkosyötteitä, seurantaa, mainoksia tai pilvityötä | Käytössä olevat lisäominaisuudet voivat sisältää tausta- ja verkkotyötä; valvottua tehovertailua ei vaadita |
| **Havaittu akun tyhjenemistä yön aikana** | Noin 3% omistajan saman puhelimen yön yli -testissä | Noin 10% samassa testissä |
| **Akun ero tuossa havainnossa** | Noin 70% vähemmän valua vain tässä epävirallisessa havainnoinnissa | Noin 3.3× Nolerin havaittu valuma; ei yleinen vertailukohta |
| **Akkukäyttöinen lähestymistapa** | Akun säästö on tuotteen prioriteetti. Normaali hälytystoiminto on täysin offline-tilassa, välttäen Wi-Fi-/mobiilidatatyön sekä sään, horoskoopin, unianalyysin, mainosten, analytiikan ja pilvisynkronoinnin aiheuttaman akun käytön. | Sen suurempi yhdistetty ominaisuusjoukko voi suorittaa verkko- ja prosessointitöitä ajastus- ja soittohälytysten lisäksi |
| **Normaali hälytysdataverkon käyttö** | Nolla – hälytykset, tarrat, asetukset, liitteet, puhe ja ajoitus jäävät laitteeseen | Yhdistetyt ominaisuudet vaativat pääsyn verkkoon |
| **käyttöliittymän kielet** | 39 sovelluksen sisäistä aluevalintaa | 31 ainutlaatuista kielikoodia, jotka on lueteltu nykyisessä iOS-paketissa |
| **Hälytysäänikielet** | 24 vaihtoehtoa puheella laitteessasi | Katso Alarmyn luettelo sen nykyisestä äänipeitosta |

Kokovertailu käyttää Applen luettelon ilmoittamia pakettitavumääriä 19. syyskuuta 2026 Yhdysvaltain App Storen nykyisille versioille: Noler 11,506,688 tavua ja Alarmy 237,476,864 tavua. Android App Bundle -paketit käyttävät jaettua toimitusta, joten jokaisen henkilön Google Play -lataus- ja asennuskoko vaihtelee laitteittain. 5.6 Mt on Nolerin vahvistama nykyinen Play-latauspaketti, ei luvattu asennetun koon mitta.

Kielilaskennassa käytetään erilaisia julkisia todisteita: Nolerin määrä tulee sovelluksen sisäisestä kielenvalitsimesta, kun taas Alarmyn määrä on sen nykyisen iOS-paketin ilmoittama ainutlaatuinen kielikoodien määrä. 39 vaihtoehtoa viittaavat sovelluksen sisäiseen käyttöliittymään, eivät takaa nykyisen myymälän lokalisoinnin tilaa.

Alarmy on pätevä valinta ihmisille, jotka haluavat aktiivisesti herätystehtäviä, unianalyysiä, kuorsauksen seurantaa, uniääniä, säätä, horoskooppia ja ensiluokkaista ominaisuusluetteloa. Valitse Noler, kun haluat hälytyssovelluksesi pysyvän hälytyssovelluksena.

<!-- section:battery-observation -->
## Epävirallinen yhden yön havainnointimme: 3% vs. 10%

Omistajan puhelimessa yön yli suoritettu testi osoitti noin 3% akun käytön Nolerilla verrattuna noin 10%:iin Alarmyn kanssa. Toisin sanoen Alarmy käytti noin 3.3 kertaa enemmän akkua tuossa yön havainnossa, kun taas Nolerin virrankulutus oli noin 70% pienempi.

Tämä oli ensikäden, saman puhelimen vertailu eikä valvottu laboratoriotodistus. Akun tulokset vaihtelevat puhelimen, akun kunnon, käyttöjärjestelmän, signaalin voimakkuuden, hälytysasetusten ja käytössä olevien ominaisuuksien mukaan. Tarkkoja lukuja ei taata kaikissa laitteissa, mutta syy akun priorisointiin on sisäänrakennettu tuotteeseen.

<!-- section:battery-workload -->
## Vähemmän verkottumista tarkoittaa vähemmän akun käyttöä

Jokainen ylimääräinen taustaominaisuus maksaa. Sää pitää hakea. Horoskoopin sisältö on haettava. Unen ja kuorsauksen seuranta vaatii laajennettua seurantaa. Mainokset ja analytiikka edellyttävät koodia, verkkoliikennettä ja käsittelyä. Pilvitilit vaativat synkronoinnin.

Noler ei tee mitään tästä normaalin hälytinkäytön aikana. Se ei tarvitse Wi-Fi-yhteyttä tai mobiilidataa hälytyksen tallentamiseen, ajoittamiseen, puhumiseen tai soittamiseen. Pysymällä täysin offline-tilassa ydintehtäväänsä varten se välttää verkkoradion herättämisen sään, horoskoopin, mainonnan, analytiikan, tilin tai pilvisynkronoinnin liikenteen vuoksi.

Tuote tekee kestävimmän akkua säästävän valinnan: älä aloita mitään asiaankuulumatonta työtä. Vähemmän taustavastuuta tarkoittaa vähemmän mahdollisuuksia kuluttaa prosessoriaikaa, Wi-Fi-/mobiiliradioaikaa, muistia ja akkua hälyttimen tarvitseman työn lisäksi.

### Kuinka numeerista akkuvertailua testataan

Simulaattori ei voi tarjota kelvollista puhelimen ja akun vertailua: se toimii tietokoneen prosessorilla, radiolla ja virtalähteellä. Kaikki tulevat "käyttää X kertaa vähemmän akkua" -vaatimukset tulevat vastaavien fyysisten laitteiden testeistä.

Vertailuarvo käyttää molempia sovelluksia samalla mallilla, käyttöjärjestelmäversiolla, akun toiminta-alueella, verkossa, kirkkaudella, äänenvoimakkuudella ja lämpötilalla. Se mittaa kahta erikseen julkistettua skenaariota: samankaltaisen perushälytyksen ja kunkin sovelluksen normaalin oletuskokemuksen. Testijärjestys vaihtuu, asiaankuulumattomat sovellukset pysäytetään, laitteet käynnistyvät samalla latauksella ja lämpötilalla, ja jokainen skenaario toistetaan vähintään viisi kertaa.

Android-mittaus käyttää järjestelmän akkutilastoja ja laitteiston tehotietoja, kun niitä tuetaan. iOS-mittauksessa käytetään Instrumentsin energiajälkiä fyysisessä iPhonessa. Tulokset raportoivat testin keston, tarkat asetukset, mediaanienergiatuloksen, aikavälin ja raakajäljitystiedostot. Kunnes tätä valvottua näyttöä on olemassa, julkaistu 3% vs. 10% tulos on edelleen selkeästi tunnistettu omistajan todelliseksi laitteen yön yli havainnona, ei takuuna jokaiselle puhelimelle.

<!-- section:package-size -->
## Pieni paketti, jossa on keskittynyt ominaisuussarja

iOS:ssä nykyinen Noler-paketti on noin 11.5 megatavua verrattuna Alarmyn 237.5 megatavuun – noin 20 kertaa pienempi. Nykyinen Google Playhin ladattu Android App Bundle -paketti on 5.6 Mt.

Tuo ero ei ole sattumaa. Noler ei niputa unialustaa, mainosjärjestelmää, analytiikkakerrosta, pilvitilijärjestelmää, uutissyötettä, sääpalvelua tai horoskooppisyötettä. Lataat herätyskellon ja saat herätyskellon.

<!-- section:privacy -->
## Suunniteltu yksityinen

Normaali hälytyskäyttö ei lähetä hälytystietoja minnekään.

- Ei mainostunnusta
- Ei tiliä tai kirjautumista
- Ei analytiikka-SDK:ta
- Ei käyttäytymisen seurantaa
- Ei pilvivarmuuskopiointia tai synkronointia
- Ei etähälytysdatapalvelua
- Ei taustalla olevien verkkojen välistä pyyntöä

Hälytystietueet, tarrat, asetukset, liitteet, puhe ja ilmoitusten ajoitukset pysyvät laitteellasi. Reaaliaikaiset ehdot, tietosuoja ja tukisivut avautuvat vain, kun valitset ne erikseen asetuksista.

<!-- section:speech-fallback -->
## Puhuva hälytys, joka selittää, miksi se soi

Anna hälyttimelle tarra, kuten "Koulu", "Lääketiede", "Lentokenttä" tai "Soita äidille". Kun se soi, Noler voi puhua kyseisen etiketin ääneen käyttämällä laitteesi puhetta.

Sen laitteessa oleva äänistrategia on alustakohtainen. Molemmat alustat käyttävät järjestelmän tekstistä puheeksi hälytysmerkintää. Androidissa niputettu, kevyt avoimen lähdekoodin Flite-ääni ottaa vallan, kun laitteessa ei ole käyttökelpoista TTS-järjestelmää. Käyttöjärjestelmän hälytysääni pysyy viimeisenä turvakerroksena.

Vain Androidissa mukana oleva avoimen lähdekoodin Flite tarjoaa englanninkielisen varaäänen, jos järjestelmän puhesynteesiä ei voi käyttää. Äänet riippuvat asennetuista kielistä. Valinnainen sovelluksen aktiivisena pitävä tila on oletuksena pois päältä ja voi lisätä akun kulutusta.

Varahälytysäänen tarkoituksena on estää äänetön ääni tuottamasta hiljaista hälytystä.

<!-- section:features -->
## Mitä saat

- Kertaluonteiset ja toistuvat arkipäivähälytykset
- Puhuneet hälytystarrat
- Suuret painikkeet torkutukseen ja herätyksen lopettamiseen
- Selkeä näkymä seuraavasta ajoitetusta hälytyksestä
- Paikalliset liitteet ja asetukset
- Laitteen tallennustila ilman tiliä
- Tumma, häiriötön käyttöliittymä
- iPhone-, iPad- ja Android-tuki
- 39 käyttöliittymän aluevalintaa
- 24 hälytysäänen kielivaihtoehtoa

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler-hälytysluettelo ja seuraava hälytysnäyttö">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler herätyskellon näyttö">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler-hälytysasetusten näyttö">
</div>

<!-- section:ui-languages -->
## 39 käyttöliittymän aluevalintaa

arabia, katalaani, kiina (yksinkertaistettu), kiina (perinteinen), kroatia, tšekki, tanska, hollanti, australianenglanti, kanadanenglanti, britannianenglanti, amerikanenglanti, suomi, ranska, kanadanranska, saksa, kreikka, heprea, hindi, unkari, indonesia, italia, japani, korea, malaiji, norjan bokmål, puola, brasilianportugali, euroopanportugali, romania, venäjä, slovakki, espanja, amerikanespanja, ruotsi, thai, turkki, ukraina ja vietnam.

<!-- section:voice-languages -->
## 24 hälytysäänen kielivaihtoehtoa

arabia (Egypti), bengali (Bangladesh), hollanti (Alankomaat), englanti (Intia), amerikanenglanti, ranska (Ranska), saksa (Saksa), hindi (Intia), indonesia (Indonesia), italia (Italia), japani (Japani), korea (Etelä-Korea), marathi (Intia), puola (Puola), brasilianportugali, romania (Romania), venäjä (Venäjä), espanja (Yhdysvallat), tamili (Intia), telugu (Intia), thai (Thaimaa), turkki (Turkki), ukraina (Ukraina) ja vietnam (Vietnam).

Äänen saatavuus ja ääntäminen riippuvat laitteen valmistajan tai käyttöjärjestelmän asentamista tekstistä puheeksi -äänistä. Mukana oleva Flite-varaversio on vain Androidille ja puhuu englantia. molemmilla alustoilla on hälytysäänen varatoiminto, kun puhetta ei voida käyttää.

<!-- section:downloads -->
## Lataa ilmainen herätyskello

| Alusta | Virallinen lataus |
|---|---|
| iPhone ja iPad | [Lataa Apple App Storesta](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Hanki se Google Playsta](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Vertailun lähteet

- [Noler App Storessa](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler Google Playssa](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy App Storessa](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy Google Playssa](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android -ohje: horoskoopin asetukset](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Kaupan ominaisuudet ja pakkauskoot voivat muuttua. Vertailu tarkistettu 19. syyskuuta 2026. Hälytys on omistajansa tavaramerkki; tämä projekti ei ole sidoksissa Alarmyyn tai DelightRoomiin tai tue niitä.

---

Tämä tietovarasto esittelee tuotteen. Sovelluksen suljettua lähdekoodia ei julkaista täällä. Mukana tuleva Flite-puhemoottori on avointa lähdekoodia.

<div align="center">
  <strong>Herää tarkennetulla herätyskellolla ilman mainoksia tai seurantaa.</strong>
</div>
