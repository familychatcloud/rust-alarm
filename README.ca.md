<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Icona de l'aplicació Noler">

# Despertador sense anuncis

### Una alarma fora de línia lleugera per a iPhone, iPad i Android

Un despertador enfocat a despertar-te, sense publicitat, seguiment del son, horòscops o la seva càrrega de treball de fons addicional.

Escolta per a què serveix la teva alarma: "Anem a l'escola". "Preneu la vostra medicina". "Martin cap a l'aeroport".

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Descarrega Noler a l'App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Obteniu Noler a Google Play"></a>

Descàrrega gratuïta. Sense compte. Sense subscripció. No hi ha compra des de l'aplicació.

El propietari va observar aproximadament un 3% d'esgotament de la bateria durant la nit amb Noler enfront del 10% amb Alarmy al mateix telèfon. Això va ser informal, no una prova de laboratori controlada i no és una garantia.
</div>

<!-- section:focus -->
## Un despertador centrat sense extres no relacionats

Noler és un despertador enfocat construït amb Rust. Crea alarmes úniques i repetides, pronuncia l'etiqueta de cada alarma en veu alta i manté els registres i la configuració d'alarma al dispositiu.

L'aplicació se centra en les alarmes en lloc de combinar-les amb un servei d'estil de vida més ampli.

No hi ha anuncis que s'esperen després de l'acomiadament, no hi ha analítiques per veure com feu servir l'aplicació, no hi ha cap compte per crear, no hi ha servei al núvol per mantenir i no hi ha cap maquinària no relacionada amb el temps, les notícies, l'horòscop, el seguiment del son o l'enregistrament dels roncs que funcionin darrere de l'alarma.

<!-- section:spoken-purpose -->
## Escolteu el propòsit de la vostra alarma

Sona una alarma normal, però mig despert potser no recordeu per a què serveix. Noler diu l'etiqueta que vas escriure per a aquesta alarma:

> "Anem a l'escola".

> "Preneu la vostra medicina".

> "Marxa ara cap a l'aeroport".

El missatge comença al dispositiu quan es dispara l'alarma. Escolteu el propòsit immediatament en lloc d'obrir l'aplicació, llegir una petita etiqueta o preguntar-vos per què el telèfon fa soroll. És especialment útil per a l'escola, la medicació, les cites, la cuina, el treball per torns i els recordatoris compartits amb la família.

<!-- section:comparison -->
## Per què triar aquest despertador fet amb Rust en lloc d’Alarmy?

Rust combina rendiment natiu i seguretat de memòria, i permet compartir un mateix nucli entre iOS i Android. Això ajuda a mantenir Noler petit i fiable, sense eines de publicitat, SDK d’analítica ni serveis de meteorologia, horòscops o son. Fer servir Rust no demostra, per si sol, cap estalvi de bateria. El disseny combina implementació nativa i absència de tasques de fons alienes al despertador; les xifres de consum requereixen proves amb dispositius físics.

| El que importa | Despertador sense anuncis | Alarmy |
|---|---|---|
| **Filosofia bàsica** | Un despertador centrat que fa la feina essencial | Una plataforma més àmplia de son i rutina matinal |
| **Experiència de despertar personalitzada** | Pronuncia el propòsit de l'alarma en veu alta, per exemple, "Anem a l'escola" en lloc d'un to inexplicable. | Se centra en alarmes forts, missions de despertador i funcions de son |
| **Seguretat de la parla al dispositiu** | Sistema TTS al dispositiu; Android afegeix Flite de codi obert inclòs quan no hi ha cap motor TTS del sistema disponible; el so d'alarma del sistema operatiu és l'última alternativa | Consulteu la llista actual d'Alarmy per conèixer el seu comportament sonor |
| **Idioma i pila d'interfície d'usuari** | Rust + Dioxus: un nucli d'aplicació i una interfície d'usuari compartits i lleugers, amb ponts d'alarma natius Swift/Kotlin on els sistemes operatius els requereixen | La documentació tècnica pública fa referència a [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); no s’ha fet pública tota la combinació de tecnologies de la versió actual. |
| **Mida del paquet iOS** | 11.5 MB | 237.5 MB |
| **Diferència de mida d'iOS** | ≈1/20 | ≈20× |
| **Mida de llançament d'Android** | S'ha penjat el paquet d'aplicacions de 5.6 MB a Google Play | Google Play no publica una mida de paquet independent del dispositiu |
| **Publicitat** | Cap | Conté anuncis |
| **Subscripció o compres des de l'aplicació** | Cap | Compres des de l'aplicació i una subscripció premium |
| **Compte obligatori** | No, no hi ha cap sistema de comptes | No comparat; La llista de la botiga d'Alarmy se centra en el seu catàleg de funcions més ampli |
| **Analítica o seguiment del comportament** | Cap | No comparat; La promesa de Noler és que tampoc inclou |
| **Sincronització al núvol** | Cap: les dades d'alarma romanen al dispositiu | No comparat; Noler no té cap capa de núvols deliberadament |
| **Característica meteorològica** | No | Sí: la llista d'Android d'Alarmy diu que la ubicació es pot utilitzar per obtenir el temps després de tancar l'aplicació |
| **Característica de l'horòscop** | No | Sí, documentat al centre d'ajuda d'Android d'Alarmy |
| **Seguiment del son** | No | Sí |
| **Monitorització dels roncs** | No | Sí |
| **Sons del son / ASMR** | No | Sí |
| **Càrrega de treball de la funció de fons** | Treball relacionat amb les alarmes; no hi ha feeds en línia no relacionats, seguiment, anuncis o treball al núvol | Les funcions addicionals activades poden incloure treballs de fons i de xarxa; no es reclama cap comparació de potència controlada |
| **S'ha observat l'esgotament de la bateria durant la nit** | Al voltant del 3% a la prova nocturna del mateix telèfon del propietari | Al voltant del 10% en la mateixa prova |
| **Diferència de bateria en aquesta observació** | Al voltant d'un 70% menys de drenatge només en aquesta observació informal | Al voltant de 3.3× drenatge observat de Noler; no és un referent general |
| **Enfocament de la bateria** | L'estalvi de bateria és una prioritat del producte. El funcionament normal de l'alarma està totalment fora de línia, evitant el treball de dades mòbils/Wi-Fi i l'ús de la bateria causat pel temps, l'horòscop, l'anàlisi del son, els anuncis, les anàlisis i la sincronització al núvol. | El seu conjunt de funcions connectades més gran pot realitzar treballs de xarxa i processament més enllà de programar i sonar alarmes |
| **Ús normal de la xarxa de dades d'alarma** | Zero: les alarmes, les etiquetes, la configuració, els fitxers adjunts, la parla i la programació romanen al dispositiu | Les funcions connectades requereixen accés a la xarxa |
| **Idiomes de la IU** | 39 opcions de configuració regional a l'aplicació | 31 codis d'idioma únics enumerats pel paquet iOS actual |
| **Idiomes de veu d'alarma** | 24 opcions, utilitzant la veu al dispositiu | Consulteu la llista d'Alarmy per a la seva cobertura de veu actual |

La comparació de mida utilitza el recompte de bytes de paquets que informa el catàleg d'Apple per a les versions actuals de l'App Store dels EUA el 19 de setembre de 2026: Noler 11,506,688 bytes i Alarmy 237,476,864 bytes. Els paquets d'aplicacions d'Android utilitzen la distribució dividida, de manera que la descàrrega de Google Play i la mida instal·lada de cada persona varien segons el dispositiu; 5.6 MB és el paquet de càrrega de Play actual verificat de Noler, no una mesura de mida instal·lada promesa.

Els recomptes d'idiomes utilitzen diferents proves públiques: el recompte de Noler prové del selector d'idiomes de l'aplicació, mentre que el recompte d'Alarmy és el recompte de codi d'idioma únic que informa el seu paquet iOS actual. Les 39 opcions es refereixen a la interfície de l'aplicació, no una garantia de l'estat actual de localització de l'aparador.

Alarmy és una opció capaç per a les persones que volen activament missions de despertar, anàlisi del son, seguiment dels roncs, sons del son, temps, horòscop i un catàleg de funcions premium. Trieu Noler quan vulgueu que la vostra aplicació d'alarma segueixi sent una aplicació d'alarma.

<!-- section:battery-observation -->
## La nostra observació informal durant la nit: 3% versus 10%

Al telèfon del propietari, una prova durant la nit va mostrar aproximadament un 3% d'ús de la bateria amb Noler enfront d'un 10% amb Alarmy. Dit d'una altra manera, Alarmy va utilitzar aproximadament 3.3 vegades més bateria en aquella observació nocturna, mentre que el drenatge de Noler va ser aproximadament un 70% més baix.

Aquesta va ser una comparació de primera mà amb el mateix telèfon en lloc d'una certificació de laboratori controlada. Els resultats de la bateria varien segons el telèfon, l'estat de la bateria, el sistema operatiu, la força del senyal, la configuració d'alarma i les funcions activades. Els números exactes no estan garantits a tots els dispositius, però el motiu per prioritzar la bateria està integrat al producte.

<!-- section:battery-workload -->
## Menys xarxes significa menys treball de la bateria

Cada funció addicional de fons té un cost. Cal buscar el temps. S'ha d'obtenir el contingut de l'horòscop. El seguiment del son i dels roncs requereix un seguiment ampli. Els anuncis i les anàlisis requereixen codi, trànsit de xarxa i processament. Els comptes al núvol requereixen sincronització.

Noler no fa res d'això durant l'ús normal de l'alarma. No necessita Wi-Fi ni dades mòbils per emmagatzemar, programar, parlar o sonar una alarma. En romandre completament fora de línia per a la seva tasca principal, evita despertar la ràdio de la xarxa per al trànsit meteorològic, horòscop, publicitat, anàlisi, compte o sincronització al núvol.

El producte fa l'opció més duradora d'estalvi de bateria: no comenceu a treballar sense relació en primer lloc. Menys responsabilitats en segon pla significa menys oportunitats de consumir temps de CPU, temps de ràdio Wi-Fi/mòbil, memòria i bateria més enllà del treball que realment necessita una alarma.

### Com es provarà una comparació numèrica de la bateria

Un simulador no pot proporcionar una comparació vàlida de la bateria del telèfon: funciona amb el processador, la ràdio i la font d'alimentació de l'ordinador. Qualsevol reclamació futura "utilitza X vegades menys bateria" vindrà de proves de dispositius físics coincidents.

El punt de referència executarà ambdues aplicacions amb el mateix model, versió del sistema operatiu, rang de salut de la bateria, xarxa, brillantor, volum i temperatura. Mesurarà dos escenaris divulgats per separat: una alarma bàsica similar i l'experiència predeterminada normal de cada aplicació. L'ordre de prova s'alternarà, les aplicacions no relacionades s'aturaran, els dispositius començaran amb la mateixa càrrega i temperatura i cada escenari es repetirà almenys cinc vegades.

El mesurament d'Android utilitzarà les estadístiques de la bateria del sistema i les dades d'energia del maquinari quan sigui compatible. El mesurament d'iOS utilitzarà les traces d'energia d'Instruments en un iPhone físic. Els resultats indicaran la durada de la prova, la configuració exacta, el mediana del consum energètic, l'interval d'execució i els fitxers de traça en brut. Fins que no existeixi aquesta evidència controlada, el resultat publicat del 3% versus el 10% es manté clarament identificat com l'observació nocturna del dispositiu real del propietari, no una garantia per a tots els telèfons.

<!-- section:package-size -->
## Un petit paquet amb un conjunt de funcions enfocades

A iOS, el paquet Noler actual és d'uns 11.5 MB, en comparació amb els 237.5 MB d'Alarmy, aproximadament 20 vegades més petit. L'actual Android App Bundle penjat a Google Play és de 5.6 MB.

Aquesta diferència no és un accident. Noler no inclou una plataforma de son, un sistema de publicitat, una capa d'anàlisi, un sistema de comptes al núvol, una font de notícies, un servei meteorològic o una font d'horòscop. Baixeu un despertador i obteniu un despertador.

<!-- section:privacy -->
## Privat per disseny

L'ús normal d'alarma no envia dades d'alarma enlloc.

- Sense identificador de publicitat
- Sense compte ni inici de sessió
- No hi ha SDK d'anàlisi
- Sense seguiment del comportament
- Sense còpia de seguretat ni sincronització al núvol
- No hi ha servei de dades d'alarma remota
- No hi ha cap sol·licitud de xarxa entre orígens en segon pla

Els registres d'alarmes, les etiquetes, la configuració, els fitxers adjunts, la parla i la programació de notificacions romanen al vostre dispositiu. Les pàgines de Condicions, privadesa i assistència en directe només s'obren quan les seleccioneu explícitament a Configuració.

<!-- section:speech-fallback -->
## Una alarma parlant que explica per què sona

Posa a una alarma una etiqueta com ara "Escola", "Medicina", "Aeroport" o "Truca a la mare". Quan soni, Noler pot pronunciar aquesta etiqueta en veu alta mitjançant la veu disponible al dispositiu.

La seva estratègia de so al dispositiu és específica de la plataforma. Ambdues plataformes utilitzen el text a veu del sistema per a l'etiqueta d'alarma. A Android, un paquet de veu Flite de codi obert lleuger pren el relleu quan un dispositiu no té un motor TTS de sistema utilitzable. El so d'alarma del sistema operatiu continua sent el pis de seguretat final.

Només a Android, el motor de codi obert Flite inclòs ofereix una veu anglesa de recurs si no hi ha cap motor de veu del sistema utilitzable. Les veus depenen de les llengües instal·lades. El mode opcional per mantenir l’aplicació activa està desactivat inicialment i pot gastar més bateria.

El so d'alarma alternativa està pensat per evitar que una veu no disponible produeixi una alarma silenciosa.

<!-- section:features -->
## El que aconsegueixes

- Alarmes puntuals i repetides entre setmana
- Etiquetes d'alarma parlada
- Botons grans per ajornar i aturar l’alarma
- Una visió clara de la propera alarma programada
- Configuració i fitxers adjunts locals
- Emmagatzematge al dispositiu sense compte
- Una interfície fosca i sense distraccions
- Compatibilitat amb iPhone, iPad i Android
- 39 opcions de configuració regional de la IU
- 24 opcions d'idioma de veu d'alarma

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler llista d'alarmes i pantalla d'alarma següent">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler pantalla de despertador">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler pantalla de configuració d'alarma">
</div>

<!-- section:ui-languages -->
## 39 opcions de configuració regional de la interfície

àrab, català, xinès simplificat, xinès tradicional, croat, txec, danès, neerlandès, anglès australià, anglès canadenc, anglès britànic, anglès americà, finès, francès, francès canadenc, alemany, grec, hebreu, hindi, hongarès, indonesi, italià, japonès, coreà, malai, noruec bokmål, polonès, portuguès del Brasil, portuguès de Portugal, romanès, rus, eslovac, espanyol, espanyol llatinoamericà, suec, tai, turc, ucraïnès i vietnamita.

<!-- section:voice-languages -->
## 24 opcions d'idioma de veu d'alarma

àrab (Egipte), bengalí (Bangladesh), neerlandès (Països Baixos), anglès (Índia), anglès americà, francès (França), alemany (Alemanya), hindi (Índia), indonesi (Indonèsia), italià (Itàlia), japonès (Japó), coreà (Corea del Sud), marathi (Índia), polonès (Polònia), portuguès del Brasil, romanès (Romania), rus (Rússia), espanyol (Estats Units), tàmil (Índia), telugu (Índia), tai (Tailàndia), turc (Turquia), ucraïnès (Ucraïna) i vietnamita (Vietnam).

La disponibilitat de veu i la pronunciació depenen de les veus de text a veu instal·lades pel fabricant del dispositiu o el sistema operatiu. El paquet Flite fallback només és per a Android i parla anglès; ambdues plataformes tenen una alternativa de so d'alarma quan no es pot utilitzar la parla.

<!-- section:downloads -->
## Descarrega el despertador gratuït

| Plataforma | Descàrrega oficial |
|---|---|
| iPhone i iPad | [Baixa a l'App Store d'Apple](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Aconsegueix-ho a Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Fonts per a la comparació

- [Noler a l'App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler a Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy a l'App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy a Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Ajuda d'Alarmy Android: configuració de l'horòscop](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Les característiques de la botiga i les mides dels paquets poden canviar. La comparació es va comprovar el 19 de setembre de 2026. Alarmy és una marca comercial del seu respectiu propietari; aquest projecte no està afiliat ni avalat per Alarmy o DelightRoom.

---

Aquest repositori presenta el producte; el codi propietari de l’aplicació no s’hi publica. El motor de veu Flite inclòs és de codi obert.

<div align="center">
  <strong>Desperta amb un despertador enfocat, sense anuncis ni seguiment.</strong>
</div>
