<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Icona dell'app Noler">

# Sveglia senza pubblicità

### Un leggero allarme offline per iPhone, iPad e Android

Una sveglia focalizzata sul tuo risveglio, senza pubblicità, monitoraggio del sonno, oroscopi o carico di lavoro aggiuntivo in background.

Ascolta a cosa serve la tua sveglia: "Andiamo a scuola". "Prendi la tua medicina." "Parti per l'aeroporto."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Scarica Noler dall'App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Ottieni Noler su Google Play"></a>

Scaricabile gratuitamente. Nessun conto. Nessun abbonamento. Nessun acquisto in-app.

Il proprietario ha osservato un consumo della batteria durante la notte di circa il 3% con Noler rispetto al 10% con Alarmy sullo stesso telefono. Si è trattato di un test informale, non di un laboratorio controllato e non costituisce una garanzia.
</div>

<!-- section:focus -->
## Una sveglia mirata senza extra non correlati

Noler è una sveglia focalizzata costruita con Rust. Crea allarmi singoli e ripetuti, pronuncia ad alta voce l'etichetta di ciascun allarme e conserva i record e le impostazioni degli allarmi sul dispositivo.

L'app si concentra sugli allarmi invece di combinarli con un servizio di lifestyle più ampio.

Non ci sono annunci in attesa dopo la chiusura, nessuna analisi che controlla come utilizzi l'app, nessun account da creare, nessun servizio cloud da mantenere e nessun meteo, notizie, oroscopo, monitoraggio del sonno o macchinari per la registrazione del russamento non correlati che funzionano dietro il tuo allarme.

<!-- section:spoken-purpose -->
## Ascolta lo scopo del tuo allarme

Suona una normale sveglia, ma quando sei mezzo sveglio potresti non ricordare a cosa serve. Noler pronuncia l'etichetta che hai scritto per quell'allarme:

> "Andiamo a scuola."

> "Prendi la tua medicina."

> "Parti adesso per l'aeroporto."

Il messaggio inizia sul dispositivo quando scatta l'allarme. Senti immediatamente lo scopo invece di aprire l'app, leggere una piccola etichetta o chiederti perché il telefono fa rumore. È particolarmente utile per le corse scolastiche, i farmaci, gli appuntamenti, la cucina, il lavoro a turni e i promemoria condivisi con la famiglia.

<!-- section:comparison -->
## Perché scegliere questa sveglia in Rust al posto di Alarmy?

Rust unisce prestazioni native e sicurezza della memoria e permette di condividere lo stesso nucleo applicativo tra iOS e Android. Questo aiuta a mantenere Noler piccola e affidabile, senza librerie pubblicitarie, SDK di analisi o servizi di meteo, oroscopo e sonno. Rust da solo non dimostra un risparmio di batteria. Il progetto si basa sull’implementazione nativa e sull’assenza di attività in background estranee alla sveglia; i dati di consumo richiedono misurazioni su dispositivi fisici.

| Ciò che conta | Sveglia senza pubblicità | Alarmy |
|---|---|---|
| **Filosofia fondamentale** | Una sveglia mirata che fa il lavoro essenziale | Una piattaforma più ampia per il sonno e la routine mattutina |
| **Esperienza di risveglio esclusiva** | Pronuncia ad alta voce lo scopo della sveglia, ad esempio "Andiamo a scuola" invece di uno squillo inspiegabile | Si concentra su allarmi forti, missioni di risveglio e funzionalità di sonno |
| **Sicurezza vocale sul dispositivo** | TTS del sistema integrato nel dispositivo; Android aggiunge Flite open source in bundle quando non è disponibile alcun motore TTS di sistema; il suono dell'allarme del sistema operativo è il fallback finale | Vedi l'elenco attuale di Alarmy per il suo comportamento sonoro |
| **Lingua e stack dell'interfaccia utente** | Rust + Dioxus: un core applicativo e un'interfaccia utente leggeri e condivisi, con bridge di allarme Swift/Kotlin nativi laddove i sistemi operativi li richiedono | Le fonti tecniche pubbliche fanno riferimento a [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); la combinazione completa delle tecnologie della versione attuale non è pubblica. |
| **Dimensioni del pacchetto iOS** | 11.5 MB | 237.5 MB |
| **Differenza di dimensione iOS** | ≈1/20 | ≈20× |
| **Dimensioni della versione Android** | Pacchetto app da 5.6 MB caricato su Google Play | Google Play non pubblica una dimensione del pacchetto indipendente dal dispositivo |
| **Pubblicità** | Nessuno | Contiene annunci |
| **Abbonamento o acquisti in-app** | Nessuno | Acquisti in-app e abbonamento premium |
| **Conto richiesto** | No, non esiste un sistema di account | Non confrontato; La scheda del negozio di Alarmy si concentra sul suo catalogo di funzionalità più ampio |
| **Analisi o monitoraggio comportamentale** | Nessuno | Non confrontato; La promessa di Noler è che non include nessuno dei due |
| **Sincronizzazione nel cloud** | Nessuno: i dati dell'allarme rimangono sul dispositivo | Non confrontato; Noler non ha volutamente uno strato di nuvole |
| **Funzionalità meteo** | No | Sì: l'elenco Android di Alarmy indica che la posizione può essere utilizzata per ottenere informazioni meteo dopo la chiusura dell'app |
| **Funzione Oroscopo** | No | Sì, documentato nel centro assistenza Android di Alarmy |
| **Monitoraggio del sonno** | No | Sì |
| **Monitoraggio del russamento** | No | Sì |
| **Suoni del sonno/ASMR** | No | Sì |
| **Carico di lavoro delle funzionalità in background** | Lavori legati agli allarmi; nessun feed online, tracciamento, pubblicità o lavoro cloud non correlati | Ulteriori funzionalità abilitate possono coinvolgere il lavoro in background e in rete; non viene rivendicato alcun confronto di potenza controllata |
| **Consumo della batteria osservato durante la notte** | Circa il 3% nel test notturno con lo stesso telefono del proprietario | Circa il 10% nello stesso test |
| **Differenza della batteria in quell'osservazione** | Circa il 70% in meno di drenaggio solo in questa osservazione informale | Circa 3.3× drenaggio osservato da Noler; non un punto di riferimento generale |
| **Avvicinamento alla batteria** | Il risparmio della batteria è una priorità del prodotto. Il normale funzionamento della sveglia è completamente offline, evitando il funzionamento Wi-Fi/dati mobili oltre al consumo della batteria causato da meteo, oroscopo, analisi del sonno, pubblicità, analisi e sincronizzazione cloud | Il suo set di funzionalità di connessione più ampio può eseguire attività di rete ed elaborazione oltre alla pianificazione e allo squillo degli allarmi |
| **Normale utilizzo della rete dati-allarme** | Zero: allarmi, etichette, impostazioni, allegati, voce e pianificazione rimangono sul dispositivo | Le funzionalità connesse richiedono l'accesso alla rete |
| **Lingue dell'interfaccia utente** | 39 scelte locali in-app | 31 codici lingua univoci elencati dall'attuale pacchetto iOS |
| **Lingue della voce dell'allarme** | 24 scelte, utilizzando la voce sul tuo dispositivo | Vedi l'elenco di Alarmy per la sua attuale copertura vocale |

Il confronto delle dimensioni utilizza il conteggio dei byte del pacchetto riportato dal catalogo Apple per le attuali versioni dell'App Store statunitense al 19 settembre 2026: Noler 11,506,688 byte e Alarmy 237,476,864 byte. Gli Android App Bundle utilizzano la consegna ripartita, pertanto le dimensioni dei download e delle installazioni di Google Play di ogni persona variano in base al dispositivo; 5.6 MB è l'attuale pacchetto di caricamento Play verificato da Noler, non una misura di dimensione installata promessa.

I conteggi delle lingue utilizzano prove pubbliche diverse: il conteggio di Noler proviene dal selettore di lingue in-app, mentre il conteggio di Alarmy è il conteggio dei codici lingua univoci riportato dal suo attuale pacchetto iOS. Le 39 scelte si riferiscono all'interfaccia in-app, non sono una garanzia dell'attuale stato di localizzazione della vetrina.

Alarmy è una scelta valida per le persone che desiderano attivamente missioni di risveglio, analisi del sonno, monitoraggio del russamento, suoni del sonno, meteo, oroscopo e un catalogo di funzionalità premium. Scegli Noler se desideri che la tua app di allarme rimanga un'app di allarme.

<!-- section:battery-observation -->
## La nostra osservazione informale durante la notte: 3% contro 10%

Sul telefono del proprietario, un test notturno ha mostrato un utilizzo della batteria di circa il 3% con Noler rispetto a circa il 10% con Alarmy. In altre parole, Alarmy ha utilizzato circa 3.3 volte più batteria nell'osservazione notturna, mentre il consumo di Noler era inferiore di circa il 70%.

Si è trattato di un confronto diretto sullo stesso telefono piuttosto che di una certificazione di laboratorio controllato. I risultati della batteria variano in base al telefono, allo stato della batteria, al sistema operativo, alla potenza del segnale, alle impostazioni della sveglia e alle funzionalità abilitate. I numeri esatti non sono garantiti su ogni dispositivo, ma il motivo per cui si dà priorità alla batteria è integrato nel prodotto.

<!-- section:battery-workload -->
## Meno networking significa meno consumo della batteria

Ogni funzionalità extra dello sfondo ha un costo. Il tempo deve essere recuperato. Il contenuto dell'oroscopo deve essere recuperato. Il monitoraggio del sonno e del russamento richiede un monitoraggio prolungato. Annunci e analisi richiedono codice, traffico di rete ed elaborazione. Gli account cloud richiedono la sincronizzazione.

Noler non fa nulla di tutto ciò durante il normale utilizzo dell'allarme. Non necessita di Wi-Fi o dati mobili per archiviare, programmare, parlare o far suonare una sveglia. Rimanendo completamente offline per il suo lavoro principale, evita di riattivare la radio di rete per meteo, oroscopo, pubblicità, analisi, account o traffico di sincronizzazione cloud.

Il prodotto rappresenta la scelta più duratura per il risparmio della batteria: in primo luogo, non iniziare lavori non correlati. Meno responsabilità in background significano meno opportunità di consumare tempo CPU, tempo Wi-Fi/radio mobile, memoria e batteria oltre il lavoro effettivamente necessario a un allarme.

### Come verrà testato un confronto numerico della batteria

Un simulatore non può fornire un confronto valido tra telefono e batteria: funziona sul processore, sulla radio e sull'alimentatore del computer. Qualsiasi futura affermazione “utilizza X volte meno batteria” deriverà da test abbinati sui dispositivi fisici.

Il benchmark eseguirà entrambe le app sullo stesso modello, versione del sistema operativo, autonomia della batteria, rete, luminosità, volume e temperatura. Misurerà due scenari divulgati separatamente: un allarme di base identico e la normale esperienza predefinita di ciascuna app. L'ordine di prova verrà alternato, le app non correlate verranno arrestate, i dispositivi verranno avviati con la stessa carica e temperatura e ogni scenario verrà ripetuto almeno cinque volte.

La misurazione Android utilizzerà le statistiche della batteria di sistema e i dati di alimentazione dell'hardware, se supportati. La misurazione iOS utilizzerà le tracce energetiche di Instruments su un iPhone fisico. I risultati riporteranno la durata del test, le impostazioni esatte, il risultato dell'energia mediana, l'intervallo da un'analisi all'altra e i file di traccia non elaborati. Fino a quando non esisteranno prove controllate, il risultato pubblicato del 3% rispetto al 10% rimane chiaramente identificato come osservazione notturna del dispositivo reale del proprietario, non una garanzia per ogni telefono.

<!-- section:package-size -->
## Un piccolo pacchetto con un set di funzionalità mirate

Su iOS, l'attuale pacchetto Noler è di circa 11.5 MB, rispetto ai 237.5 MB di Alarmy, circa 20 volte più piccolo. L'attuale Android App Bundle caricato su Google Play è di 5.6 MB.

Questa differenza non è un incidente. Noler non include una piattaforma per il sonno, un sistema pubblicitario, un livello di analisi, un sistema di account cloud, un feed di notizie, un servizio meteorologico o un feed dell'oroscopo. Scarichi una sveglia e ottieni una sveglia.

<!-- section:privacy -->
## Privato per progettazione

Il normale utilizzo dell'allarme non invia dati di allarme da nessuna parte.

- Nessun ID pubblicitario
- Nessun account o accesso
- Nessun SDK di analisi
- Nessun monitoraggio comportamentale
- Nessun backup o sincronizzazione nel cloud
- Nessun servizio dati di allarme remoto
- Nessuna richiesta di rete multiorigine in background

I record degli allarmi, le etichette, le impostazioni, gli allegati, la voce e la pianificazione delle notifiche rimangono sul tuo dispositivo. Le pagine attive dei Termini, della Privacy e del supporto si aprono solo quando le selezioni esplicitamente in Impostazioni.

<!-- section:speech-fallback -->
## Una sveglia parlante che spiega perché sta suonando

Assegna a una sveglia un'etichetta come "Scuola", "Medicina", "Aeroporto" o "Chiama mamma". Quando squilla, Noler può pronunciare l'etichetta ad alta voce utilizzando la voce disponibile sul tuo dispositivo.

La sua strategia audio sul dispositivo è specifica della piattaforma. Entrambe le piattaforme utilizzano la sintesi vocale del sistema per l'etichetta dell'allarme. Su Android, una voce Flite open source leggera e in bundle prende il sopravvento quando un dispositivo non dispone di un motore TTS di sistema utilizzabile. Il suono dell'allarme del sistema operativo rimane l'ultimo livello di sicurezza.

Solo su Android, il motore open source Flite integrato offre una voce inglese di riserva se manca una sintesi vocale di sistema utilizzabile. Le voci dipendono dalle lingue installate. La modalità facoltativa che mantiene attiva l’app è disattivata all’inizio e può aumentare il consumo.

Il suono dell'allarme di fallback ha lo scopo di impedire a una voce non disponibile di produrre un allarme silenzioso.

<!-- section:features -->
## Cosa ottieni

- Allarmi singoli e ripetuti nei giorni feriali
- Etichette di allarme parlato
- Pulsanti grandi per rimandare e fermare la sveglia
- Una visione chiara del prossimo allarme programmato
- Allegati e impostazioni locali
- Spazio di archiviazione sul dispositivo senza account
- Un'interfaccia oscura e priva di distrazioni
- Supporto per iPhone, iPad e Android
- 39 scelte locali dell'interfaccia utente
- 24 scelte di lingua per la voce di allarme

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Elenco allarmi Noler e schermata di allarme successiva">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Schermata della sveglia Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Schermata delle impostazioni dell'allarme Noler">
</div>

<!-- section:ui-languages -->
## 39 scelte locali dell'interfaccia

arabo, catalano, cinese semplificato, cinese tradizionale, croato, ceco, danese, olandese, inglese australiano, inglese canadese, inglese britannico, inglese americano, finlandese, francese, francese canadese, tedesco, greco, ebraico, hindi, ungherese, indonesiano, italiano, giapponese, coreano, malese, norvegese bokmål, polacco, portoghese brasiliano, portoghese europeo, rumeno, russo, slovacco, spagnolo, spagnolo latinoamericano, svedese, thailandese, turco, ucraino e vietnamita.

<!-- section:voice-languages -->
## 24 scelte di lingua per la voce di allarme

arabo (Egitto), bengalese (Bangladesh), olandese (Paesi Bassi), inglese (India), inglese americano, francese (Francia), tedesco (Germania), hindi (India), indonesiano (Indonesia), italiano (Italia), giapponese (Giappone), coreano (Corea del Sud), marathi (India), polacco (Polonia), portoghese brasiliano, rumeno (Romania), russo (Russia), spagnolo (Stati Uniti), tamil (India), telugu (India), thailandese (Thailandia), turco (Turchia), ucraino (Ucraina) e vietnamita (Vietnam).

La disponibilità e la pronuncia della voce dipendono dalle voci di sintesi vocale installate dal produttore del dispositivo o dal sistema operativo. Il fallback Flite in bundle è solo Android e parla inglese; entrambe le piattaforme dispongono di un sistema di allarme acustico quando non è possibile utilizzare la voce.

<!-- section:downloads -->
## Scarica la sveglia gratuita

| Piattaforma | Scaricamento ufficiale |
|---|---|
| iPhone e iPad | [Scarica dall'Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Androide | [Scaricalo su Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Fonti per il confronto

- [Noler sull'App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler su Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy sull'App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy su Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Guida di Alarmy Android: configurazione dell'oroscopo](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Le funzionalità del negozio e le dimensioni dei pacchetti possono cambiare. Confronto verificato il 19 settembre 2026. Alarmy è un marchio del rispettivo proprietario; questo progetto non è affiliato o approvato da Alarmy o DelightRoom.

---

Questo repository presenta il prodotto, non il codice proprietario dell’applicazione. Il motore vocale Flite integrato è open source.

<div align="center">
  <strong>Svegliati con una sveglia focalizzata, senza pubblicità o tracciamento.</strong>
</div>
