<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Icône de l'application Noler">

# Réveil sans pub, hors ligne

### Une alarme hors ligne légère pour iPhone, iPad et Android

Un réveil axé sur votre réveil, sans publicité, sans suivi du sommeil, sans horoscopes ni charge de travail supplémentaire en arrière-plan.

Écoutez à quoi sert votre alarme : « Allons à l'école ». "Prends tes médicaments." "Partez pour l'aéroport."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Téléchargez Noler sur l'App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Obtenez Noler sur Google Play"></a>

Téléchargement gratuit. Aucun compte. Pas d'abonnement. Aucun achat intégré.

Le propriétaire a observé environ 3% de décharge de batterie pendant la nuit avec Noler contre 10% avec Alarmy sur le même téléphone. Il s’agissait d’un test informel, il ne s’agissait pas d’un test de laboratoire contrôlé et ne constitue pas une garantie.
</div>

<!-- section:focus -->
## Un réveil ciblé sans fonctions superflues

Noler est un réveil ciblé construit avec Rust. Il crée des alarmes uniques et répétitives, prononce à haute voix l'étiquette de chaque alarme et conserve les enregistrements et les réglages d'alarme sur votre appareil.

L'application se concentre sur les alarmes au lieu de les combiner avec un service de style de vie plus large.

Il n'y a aucune publicité en attente après le rejet, aucune analyse surveillant la façon dont vous utilisez l'application, aucun compte à créer, aucun service cloud à maintenir et aucune météo, actualité, horoscope, suivi du sommeil ou machine d'enregistrement des ronflements sans rapport derrière votre alarme.

<!-- section:spoken-purpose -->
## Écoutez le but de votre alarme

Une alarme normale sonne, mais à moitié réveillé, vous ne vous souvenez peut-être pas à quoi elle sert. Noler prononce l'étiquette que vous avez écrite pour cette alarme :

> "Allons à l'école."

> "Prends tes médicaments."

> "Partez maintenant pour l'aéroport."

Le message commence sur l'appareil lorsque l'alarme se déclenche. Vous entendez immédiatement le but au lieu d'ouvrir l'application, de lire une petite étiquette ou de vous demander pourquoi le téléphone fait du bruit. Il est particulièrement utile pour les courses scolaires, les médicaments, les rendez-vous, la cuisine, le travail posté et les rappels partagés avec la famille.

<!-- section:comparison -->
## Pourquoi choisir ce réveil en Rust plutôt qu’Alarmy ?

Rust allie performances natives et sécurité mémoire, avec un même noyau d’application pour iOS et Android. Cela aide à garder Noler léger et fiable, sans bibliothèques publicitaires, SDK d’analytique ni services de météo, d’horoscope ou de sommeil. Rust ne prouve pas, à lui seul, une économie de batterie. Notre approche repose sur une implémentation native et l’absence de tâches en arrière-plan sans lien avec le réveil ; les chiffres de consommation nécessitent des mesures sur des appareils réels.

| Ce qui compte | Réveil sans pub, hors ligne | Alarmy |
|---|---|---|
| **Philosophie de base** | Un réveil ciblé qui fait le travail essentiel | Une plateforme plus large pour le sommeil et les routines matinales |
| **Expérience de réveil signature** | Dit à haute voix le but de l'alarme, par exemple « Allons à l'école » au lieu d'une sonnerie inexpliquée | Se concentre sur les alarmes bruyantes, les missions de réveil et les fonctionnalités de veille |
| **Sécurité vocale sur l'appareil** | Système TTS sur l'appareil ; Android ajoute Flite open source fourni lorsqu'aucun moteur TTS système n'est disponible ; le son de l'alarme du système d'exploitation est la solution de secours finale | Voir la liste actuelle d'Alarmy pour son comportement sonore |
| **Pile de langage et d'interface utilisateur** | Rust + Dioxus : un noyau d'application et une interface utilisateur légers et partagés, avec des ponts d'alarme natifs Swift/Kotlin là où les systèmes d'exploitation l'exigent. | Les sources techniques publiques mentionnent [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); la combinaison complète des technologies de la version actuelle n’est pas publique. |
| **Taille du paquet iOS** | 11.5 MB | 237.5 MB |
| **Différence de taille iOS** | ≈1/20 | ≈20× |
| **Taille de la version Android** | 5.6 Mo d'applications groupées téléchargées sur Google Play | Google Play ne publie pas une taille de package indépendante de l'appareil |
| **Publicité** | Aucun | Contient des publicités |
| **Abonnement ou achats intégrés** | Aucun | Achats intégrés et abonnement premium |
| **Compte requis** | Non, il n'y a pas de système de compte | Non comparé ; La liste des magasins d'Alarmy se concentre sur son catalogue de fonctionnalités plus large |
| **Analytics ou suivi comportemental** | Aucun | Non comparé ; La promesse de Noler est qu'elle n'inclut ni |
| **synchronisation infonuagique** | Aucun : les données d'alarme restent sur l'appareil | Non comparé ; Noler n'a délibérément pas de couche nuageuse |
| **Fonction météo** | Non | Oui — La liste Android d'Alarmy indique que la localisation peut être utilisée pour obtenir la météo après la fermeture de l'application. |
| **Fonctionnalité d'horoscope** | Non | Oui - documenté dans le centre d'aide Android d'Alarmy |
| **Suivi du sommeil** | Non | Oui |
| **Surveillance des ronflements** | Non | Oui |
| **Sons du sommeil / ASMR** | Non | Oui |
| **Charge de travail des fonctionnalités en arrière-plan** | Travaux liés aux alarmes ; pas de flux en ligne, de suivi, de publicités ou de travail dans le cloud sans rapport | Les fonctionnalités supplémentaires activées peuvent impliquer un travail en arrière-plan et en réseau ; aucune comparaison de puissance contrôlée n'est revendiquée |
| **Décharge de batterie observée pendant la nuit** | Environ 3% lors du test nocturne du même téléphone du propriétaire | Environ 10% dans le même test |
| **Différence de batterie dans cette observation** | Environ 70% de consommation en moins dans cette observation informelle seulement | Environ 3.3× le drain observé par Noler ; pas une référence générale |
| **Approche batterie** | L'économie de batterie est une priorité du produit. Le fonctionnement normal de l'alarme est entièrement hors ligne, évitant ainsi le travail Wi-Fi/données mobiles ainsi que l'utilisation de la batterie causée par la météo, l'horoscope, l'analyse du sommeil, les publicités, les analyses et la synchronisation infonuagique. | Son ensemble de fonctionnalités connectées plus large peut effectuer des travaux de réseau et de traitement au-delà de la planification et de la sonnerie des alarmes. |
| **Utilisation normale du réseau de données d'alarme** | Zéro : les alarmes, les étiquettes, les réglages, les pièces jointes, la parole et la planification restent sur l'appareil | Les fonctionnalités connectées nécessitent un accès au réseau |
| **Langues de l'interface utilisateur** | 39 choix de réglages régionaux dans l'application | 31 codes de langue uniques répertoriés par le package iOS actuel |
| **Langues vocales d'alarme** | 24 choix, en utilisant la parole sur votre appareil | Voir la liste d'Alarmy pour sa couverture vocale actuelle |

La comparaison de taille utilise le nombre d'octets de paquet signalé par le catalogue d'Apple pour les versions actuelles de l'App Store américain au 19 septembre 2026 : Noler 11,506,688 octets et Alarmy 237,476,864 octets. Les Android App Bundles utilisent la livraison fractionnée, de sorte que la taille de téléchargement et d'installation de Google Play de chaque personne varie selon l'appareil ; 5.6 Mo correspond à l'ensemble de téléchargement Play actuel vérifié par Noler, et non à une mesure promise de la taille installée.

Le décompte des langues utilise différentes preuves publiques : le décompte de Noler provient du sélecteur de langue intégré à l'application, tandis que le décompte d'Alarmy est le décompte de codes de langue unique rapporté par son package iOS actuel. Les 39 choix font référence à l'interface de l'application et ne constituent pas une garantie de l'état actuel de localisation de la vitrine.

Alarmy est un choix judicieux pour les personnes qui souhaitent activement des missions de réveil, une analyse du sommeil, une surveillance des ronflements, des sons du sommeil, la météo, un horoscope et un catalogue de fonctionnalités premium. Choisissez Noler lorsque vous souhaitez que votre application d'alarme reste une application d'alarme.

<!-- section:battery-observation -->
## Notre observation informelle pendant une nuit : 3% contre 10%

Sur le téléphone du propriétaire, un test nocturne a montré environ 3% d'utilisation de la batterie avec Noler contre environ 10% avec Alarmy. En d’autres termes, Alarmy a utilisé environ 3.3 fois plus de batterie lors de cette observation nocturne, tandis que la consommation de Noler était environ 70% inférieure.

Il s’agissait d’une comparaison directe avec le même téléphone plutôt que d’une certification de laboratoire contrôlée. Les résultats de la batterie varient en fonction du téléphone, de l'état de la batterie, du système d'exploitation, de la force du signal, des réglages d'alarme et des fonctionnalités activées. Les chiffres exacts ne sont pas garantis sur chaque appareil, mais la raison de donner la priorité à la batterie est intégrée au produit.

<!-- section:battery-workload -->
## Moins de réseau signifie moins de travail sur la batterie

Chaque fonctionnalité d’arrière-plan supplémentaire a un coût. La météo doit être récupérée. Le contenu de l'horoscope doit être récupéré. Le suivi du sommeil et des ronflements nécessite une surveillance étendue. Les publicités et les analyses nécessitent du code, du trafic réseau et du traitement. Les comptes cloud nécessitent une synchronisation.

Noler ne fait rien de tout cela lors de l’utilisation normale de l’alarme. Il n'a pas besoin de Wi-Fi ou de données mobiles pour stocker, programmer, parler ou faire sonner une alarme. En restant entièrement hors ligne pour son travail principal, il évite de réveiller la radio du réseau pour la météo, l'horoscope, la publicité, l'analyse, le compte ou le trafic de synchronisation infonuagique.

Le produit constitue le choix le plus durable en matière d'économie de batterie : ne commencez pas un travail sans rapport en premier lieu. Moins de responsabilités en arrière-plan signifie moins de possibilités de consommer du temps CPU, du temps Wi-Fi/radio mobile, de la mémoire et de la batterie au-delà du travail dont une alarme a réellement besoin.

### Comment une comparaison numérique de batterie sera testée

Un simulateur ne peut pas fournir une comparaison valide entre la batterie du téléphone : il fonctionne sur le processeur, la radio et l'alimentation de l'ordinateur. Toute future affirmation « utilise X fois moins de batterie » proviendra de tests d’appareils physiques correspondants.

Le benchmark exécutera les deux applications sur le même modèle, la même version du système d'exploitation, la plage d’état de santé de la batterie, le réseau, la luminosité, le volume et la température. Il mesurera deux scénarios divulgués séparément : une alarme de base similaire et l'expérience par défaut normale de chaque application. L'ordre des tests sera alterné, les applications non liées seront arrêtées, les appareils démarreront avec la même charge et la même température, et chaque scénario sera répété au moins cinq fois.

La mesure Android utilisera les statistiques de la batterie du système et les données d'alimentation du matériel lorsqu'elles sont prises en charge. La mesure iOS utilisera les traces d’énergie d’Instruments sur un iPhone physique. Les résultats indiqueront la durée du test, les réglages exacts, le résultat énergétique médian, la plage d'exécution et les fichiers de trace bruts. Jusqu'à ce que ces preuves contrôlées existent, le résultat publié de 3% contre 10% reste clairement identifié comme étant l'observation nocturne de l'appareil réel par le propriétaire, et non une garantie pour chaque téléphone.

<!-- section:package-size -->
## Un petit package avec un ensemble de fonctionnalités ciblées

Sur iOS, le package Noler actuel fait environ 11.5 Mo, contre 237.5 Mo d'Alarmy, soit environ 20 fois plus petit. L'ensemble d'applications Android actuellement téléchargé sur Google Play fait 5.6 Mo.

Cette différence n’est pas un hasard. Noler ne regroupe pas de plate-forme de sommeil, de système de publicité, de couche d'analyse, de système de compte cloud, de fil d'actualité, de service météo ou de flux d'horoscope. Vous téléchargez un réveil et obtenez un réveil.

<!-- section:privacy -->
## Privé par conception

L’utilisation normale de l’alarme n’envoie aucune donnée d’alarme nulle part.

- Pas d'identifiant publicitaire
- Pas de compte ni de connexion
- Pas de SDK d'analyse
- Pas de suivi comportemental
- Pas de sauvegarde ou de synchronisation infonuagique
- Pas de service de données d'alarme à distance
- Aucune demande de réseau d'origine croisée en arrière-plan

Les enregistrements d'alarme, les étiquettes, les réglages, les pièces jointes, la parole et la planification des notifications restent sur votre appareil. Les pages en direct des conditions d'utilisation, de confidentialité et d'assistance ne s'ouvrent que lorsque vous les sélectionnez explicitement dans les réglages.

<!-- section:speech-fallback -->
## Une alarme parlante qui explique pourquoi elle sonne

Attribuez à une alarme une étiquette telle que « École », « Médecine », « Aéroport » ou « Appeler maman ». Lorsqu'il sonne, Noler peut prononcer cette étiquette à haute voix en utilisant la parole disponible sur votre appareil.

Sa stratégie sonore sur l'appareil est spécifique à la plate-forme. Les deux plates-formes utilisent la synthèse vocale du système pour l'étiquette d'alarme. Sur Android, une voix Flite open source légère et groupée prend le relais lorsqu'un appareil ne dispose pas de moteur TTS système utilisable. Le son de l'alarme du système d'exploitation reste le dernier niveau de sécurité.

Sur Android seulement, le moteur à code source ouvert Flite fournit une voix anglaise de secours si la synthèse vocale du système est inutilisable. Les voix dépendent des langues installées. Le mode facultatif de maintien en activité est désactivé au départ et peut augmenter la consommation.

Le son de l'alarme de secours est destiné à empêcher une voix indisponible de produire une alarme silencieuse.

<!-- section:features -->
## Ce que vous obtenez

- Alarmes uniques et répétées en semaine
- Étiquettes d'alarme vocale
- De grands boutons pour reporter ou arrêter l’alarme
- Une vue claire de la prochaine alarme programmée
- Pièces jointes et réglages locaux
- Stockage sur l'appareil sans compte
- Une interface sombre et sans distraction
- Prise en charge iPhone, iPad et Android
- 39 choix de réglages régionaux de l'interface utilisateur
- 24 choix de langue d'alarme vocale

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Liste des alarmes Noler et écran d'alarme suivant">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Écran du réveil Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Écran des réglages d'alarme Noler">
</div>

<!-- section:ui-languages -->
## 39 choix de réglages régionaux d'interface

arabe, catalan, chinois simplifié, chinois traditionnel, croate, tchèque, danois, néerlandais, anglais australien, anglais canadien, anglais britannique, anglais américain, finnois, français, français canadien, allemand, grec, hébreu, hindi, hongrois, indonésien, italien, japonais, coréen, malais, norvégien bokmål, polonais, portugais brésilien, portugais européen, roumain, russe, slovaque, espagnol, espagnol d’Amérique latine, suédois, thaï, turc, ukrainien et vietnamien.

<!-- section:voice-languages -->
## 24 choix de langue d'alarme vocale

arabe (Égypte), bengali (Bangladesh), néerlandais (Pays-Bas), anglais (Inde), anglais américain, français (France), allemand (Allemagne), hindi (Inde), indonésien (Indonésie), italien (Italie), japonais (Japon), coréen (Corée du Sud), marathi (Inde), polonais (Pologne), portugais brésilien, roumain (Roumanie), russe (Russie), espagnol (États-Unis), tamoul (Inde), télougou (Inde), thaï (Thaïlande), turc (Turquie), ukrainien (Ukraine) et vietnamien (Vietnam).

La disponibilité et la prononciation de la voix dépendent des voix de synthèse vocale installées par le fabricant de l'appareil ou le système d'exploitation. La solution de secours Flite fournie est uniquement Android et parle anglais ; les deux plates-formes disposent d'une alarme sonore de repli lorsque la parole ne peut pas être utilisée.

<!-- section:downloads -->
## Téléchargez le réveil gratuit

| Plateforme | Téléchargement officiel |
|---|---|
| iPhone et iPad | [Télécharger sur l'App Store d'Apple](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Obtenez-le sur Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Sources pour la comparaison

- [Noler sur l'App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler sur Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy sur l'App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy sur Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Aide d'Alarmy Android : configuration de l'horoscope](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Les fonctionnalités du magasin et la taille des emballages peuvent changer. Comparaison vérifiée le 19 septembre 2026. Alarmy est une marque de son propriétaire respectif ; ce projet n'est ni affilié ni approuvé par Alarmy ou DelightRoom.

---

Ce dépôt contient des renseignements sur le produit. Le code de l’application est propriétaire et n’y est pas publié. Le moteur vocal Flite est à code source ouvert.

<div align="center">
  <strong>Réveillez-vous avec un réveil ciblé, sans publicité ni suivi.</strong>
</div>
