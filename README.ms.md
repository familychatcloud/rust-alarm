<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Ikon aplikasi Noler">

# Penggera Offline Tanpa Iklan

### Penggera luar talian yang ringan untuk iPhone, iPad dan Android

Jam penggera memfokuskan untuk membangunkan anda, tanpa pengiklanan, penjejakan tidur, horoskop atau beban kerja latar belakang tambahan mereka.

Dengar untuk tujuan penggera anda: "Jom pergi ke sekolah." “Makan ubat awak.” “Bertolak ke lapangan terbang.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Muat turun Noler di App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Dapatkan Noler di Google Play"></a>

Percuma untuk dimuat turun. Tiada akaun. Tiada langganan. Tiada pembelian dalam apl.

Pemilik memerhatikan kira-kira 3% kehabisan bateri semalaman dengan Noler berbanding 10% dengan Alarmy pada telefon yang sama. Ini adalah tidak formal, bukan ujian makmal terkawal, dan bukan jaminan.
</div>

<!-- section:focus -->
## Jam penggera terfokus tanpa tambahan yang tidak berkaitan

Noler ialah jam penggera terfokus yang dibina dengan Rust. Ia mencipta penggera sekali dan berulang, menyebut setiap label penggera dengan kuat dan menyimpan rekod dan tetapan penggera pada peranti anda.

Aplikasi ini memfokuskan pada penggera dan bukannya menggabungkannya dengan perkhidmatan gaya hidup yang lebih luas.

Tiada iklan menunggu selepas diabaikan, tiada analitis yang memerhatikan cara anda menggunakan apl, tiada akaun untuk dibuat, tiada perkhidmatan awan untuk diselenggara dan tiada cuaca, berita, horoskop, penjejakan tidur atau jentera rakaman dengkuran yang tidak berkaitan berjalan di belakang penggera anda.

<!-- section:spoken-purpose -->
## Dengar tujuan penggera anda

Penggera biasa berbunyi, tetapi separuh terjaga anda mungkin tidak ingat untuk kegunaannya. Noler menyebut label yang anda tulis untuk penggera itu:

> “Jom pergi sekolah.”

> “Makan ubat awak.”

> “Bertolak sekarang ke lapangan terbang.”

Mesej bermula pada peranti apabila penggera berbunyi. Anda mendengar tujuan serta-merta dan bukannya membuka apl, membaca label kecil atau tertanya-tanya mengapa telefon membuat bunyi. Ia amat berguna untuk larian sekolah, ubat-ubatan, janji temu, memasak, kerja syif dan peringatan yang dikongsi dengan keluarga.

<!-- section:comparison -->
## Mengapa memilih penggera berasaskan Rust ini berbanding Alarmy?

Rust menggabungkan prestasi natif dan keselamatan memori serta membolehkan satu teras aplikasi dikongsi antara iOS dengan Android. Ini membantu memastikan Noler kecil dan boleh diharap tanpa pustaka iklan, SDK analitik atau perkhidmatan cuaca, horoskop dan tidur. Rust sahaja tidak membuktikan penjimatan bateri. Reka bentuk kami berasaskan pelaksanaan natif dan penghapusan tugas latar yang tidak berkaitan dengan penggera; angka penggunaan memerlukan ukuran pada peranti fizikal.

| Apa yang penting | Penggera Offline Tanpa Iklan | Alarmy |
|---|---|---|
| **Falsafah teras** | Jam penggera terfokus yang melakukan kerja penting | Platform tidur dan rutin pagi yang lebih luas |
| **Pengalaman bangun tidur yang istimewa** | Sebutkan tujuan penggera dengan kuat—contohnya, “Jom ke sekolah” dan bukannya deringan yang tidak dapat dijelaskan | Memfokuskan pada penggera kuat, misi bangun tidur dan ciri tidur |
| **Keselamatan pertuturan pada peranti** | TTS sistem pada peranti; Android menambah Flite sumber terbuka yang digabungkan apabila tiada enjin TTS sistem tersedia; bunyi penggera OS adalah sandaran terakhir | Lihat penyenaraian semasa Alarmy untuk kelakuan baiknya |
| **Bahasa dan timbunan UI** | Rust + Dioxus — satu teras aplikasi ringan dan UI dikongsi bersama, dengan jambatan penggera Swift/Kotlin asli di mana sistem pengendalian memerlukannya | Sumber teknikal awam menyebut [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); gabungan penuh teknologi dalam versi aplikasi semasa tidak didedahkan kepada umum. |
| **Saiz pakej iOS** | 11.5 MB | 237.5 MB |
| **perbezaan saiz iOS** | ≈1/20 | ≈20× |
| **Saiz keluaran Android** | App Bundle 5.6 MB dimuat naik ke Google Play | Google Play tidak menerbitkan satu saiz pakej bebas peranti |
| **Pengiklanan** | tiada | Mengandungi iklan |
| **Langganan atau pembelian dalam apl** | tiada | Pembelian dalam apl dan langganan premium |
| **Akaun diperlukan** | Tidak — tiada sistem akaun | Tidak dibandingkan; Penyenaraian gedung Alarmy memfokuskan pada katalog cirinya yang lebih luas |
| **Analitis atau penjejakan tingkah laku** | tiada | Tidak dibandingkan; Janji Noler ialah ia tidak termasuk juga |
| **Penyegerakan awan** | Tiada — data penggera kekal pada peranti | Tidak dibandingkan; Noler sengaja tidak mempunyai lapisan awan |
| **Ciri cuaca** | Tidak | Ya — Penyenaraian Android Alarmy mengatakan lokasi boleh digunakan untuk mendapatkan cuaca selepas apl ditutup |
| **Ciri horoskop** | Tidak | Ya — didokumenkan dalam pusat bantuan Android Alarmy |
| **Penjejakan tidur** | Tidak | ya |
| **Pemantauan dengkuran** | Tidak | ya |
| **Bunyi tidur / ASMR** | Tidak | ya |
| **Beban kerja ciri latar belakang** | Kerja berkaitan penggera; tiada suapan dalam talian, penjejakan, iklan atau kerja awan yang tidak berkaitan | Ciri tambahan yang didayakan boleh melibatkan latar belakang dan kerja rangkaian; tiada perbandingan kuasa terkawal dituntut |
| **Diperhatikan kehabisan bateri semalaman** | Kira-kira 3% dalam ujian semalaman telefon sama pemilik | Kira-kira 10% dalam ujian yang sama |
| **Perbezaan bateri dalam pemerhatian itu** | Kira-kira 70% kurang longkang dalam pemerhatian tidak formal ini sahaja | Kira-kira 3.3× longkang diperhatikan Noler; bukan tanda aras umum |
| **Pendekatan bateri** | Penjimatan bateri adalah keutamaan produk. Operasi penggera biasa di luar talian sepenuhnya, mengelakkan kerja Wi-Fi/data mudah alih serta penggunaan bateri yang disebabkan oleh cuaca, horoskop, analisis tidur, iklan, analitis dan penyegerakan awan | Set ciri bersambungnya yang lebih besar boleh melaksanakan kerja rangkaian dan pemprosesan melangkaui penjadualan dan penggera deringan |
| **Penggunaan rangkaian data penggera biasa** | Sifar — penggera, label, tetapan, lampiran, pertuturan dan penjadualan kekal pada peranti | Ciri yang disambungkan memerlukan akses rangkaian |
| **bahasa UI** | 39 pilihan tempat dalam apl | 31 kod bahasa unik yang disenaraikan oleh pakej iOS semasa |
| **Bahasa suara penggera** | 24 pilihan, menggunakan pertuturan pada peranti anda | Lihat penyenaraian Alarmy untuk liputan suara semasanya |

Perbandingan saiz menggunakan kiraan bait pakej yang dilaporkan oleh katalog Apple untuk versi App Store AS semasa pada 19 September 2026: Noler 11,506,688 bait dan Alarmy 237,476,864 bait. Android App Bundles menggunakan penghantaran berpecah, jadi muat turun dan saiz pemasangan Google Play setiap orang berbeza mengikut peranti; 5.6 MB ialah himpunan muat naik Play semasa Noler yang disahkan, bukan ukuran saiz terpasang yang dijanjikan.

Kiraan bahasa menggunakan bukti awam yang berbeza: Kiraan Noler datang daripada pemilih bahasa dalam apl, manakala kiraan Alarmy ialah kiraan kod bahasa unik yang dilaporkan oleh pakej iOS semasanya. 39 pilihan merujuk kepada antara muka dalam apl, bukan jaminan keadaan penyetempatan etalase semasa.

Alarmy ialah pilihan yang mampu untuk mereka yang secara aktif mahukan misi bangun tidur, analisis tidur, pemantauan dengkuran, bunyi tidur, cuaca, horoskop dan katalog ciri premium. Pilih Noler apabila anda mahu apl penggera anda kekal sebagai apl penggera.

<!-- section:battery-observation -->
## Pemerhatian semalaman tidak rasmi kami: 3% berbanding 10%

Pada telefon pemilik, ujian semalaman menunjukkan kira-kira 3% penggunaan bateri dengan Noler berbanding kira-kira 10% dengan Alarmy. Dengan kata lain, Alarmy menggunakan kira-kira 3.3 kali lebih banyak bateri dalam pemerhatian semalaman itu, manakala longkang Noler adalah kira-kira 70% lebih rendah.

Ini adalah perbandingan telefon yang sama secara langsung dan bukannya pensijilan makmal terkawal. Keputusan bateri berbeza mengikut telefon, kesihatan bateri, sistem pengendalian, kekuatan isyarat, tetapan penggera dan ciri yang didayakan. Nombor tepat tidak dijamin pada setiap peranti—tetapi sebab untuk mengutamakan bateri terbina dalam produk.

<!-- section:battery-workload -->
## Kurang rangkaian bermakna kurang kerja bateri

Setiap ciri latar belakang tambahan mempunyai kos. Cuaca mesti diambil. Kandungan horoskop mesti diambil. Penjejakan tidur dan dengkuran memerlukan pemantauan lanjutan. Iklan dan analitis memerlukan kod, trafik rangkaian dan pemprosesan. Akaun awan memerlukan penyegerakan.

Noler tidak melakukan semua itu semasa penggunaan penggera biasa. Ia tidak memerlukan Wi-Fi atau data mudah alih untuk menyimpan, menjadualkan, bercakap atau membunyikan penggera. Dengan kekal di luar talian sepenuhnya untuk tugas terasnya, ia mengelak daripada membangunkan radio rangkaian untuk cuaca, horoskop, pengiklanan, analitik, akaun atau trafik penyegerakan awan.

Produk ini membuat pilihan penjimatan bateri yang paling tahan lama: jangan mulakan kerja yang tidak berkaitan. Lebih sedikit tanggungjawab latar belakang bermakna lebih sedikit peluang untuk menggunakan masa CPU, masa Wi-Fi/radio mudah alih, memori dan bateri di luar kerja yang sebenarnya diperlukan oleh penggera.

### Cara perbandingan bateri berangka akan diuji

Simulator tidak boleh menyediakan perbandingan bateri telefon yang sah: ia dijalankan pada pemproses komputer, radio dan bekalan kuasa. Sebarang tuntutan "menggunakan X kali ganda kurang bateri" akan datang daripada ujian peranti fizikal yang dipadankan.

Penanda aras akan menjalankan kedua-dua apl pada model yang sama, versi OS, julat kesihatan bateri, rangkaian, kecerahan, kelantangan dan suhu. Ia akan mengukur dua senario yang didedahkan secara berasingan: penggera asas seperti-untuk-seperti dan pengalaman lalai biasa setiap apl. Urutan ujian akan bergantian, apl yang tidak berkaitan akan dihentikan, peranti akan bermula pada cas dan suhu yang sama, dan setiap senario akan diulang sekurang-kurangnya lima kali.

Pengukuran Android akan menggunakan statistik bateri sistem dan data kuasa perkakasan apabila disokong. Pengukuran iOS akan menggunakan surih tenaga Instruments pada iPhone fizikal. Keputusan akan melaporkan tempoh ujian, tetapan tepat, hasil tenaga median, julat run-to-run dan fail surih mentah. Sehingga bukti terkawal itu wujud, hasil 3%-berbanding-10% yang diterbitkan kekal dikenal pasti dengan jelas sebagai pemerhatian semalaman peranti sebenar pemilik, bukan jaminan untuk setiap telefon.

<!-- section:package-size -->
## Pakej kecil dengan set ciri fokus

Pada iOS, pakej Noler semasa ialah kira-kira 11.5 MB, berbanding dengan 237.5 MB Alarmy—kira-kira 20× lebih kecil. Android App Bundle semasa yang dimuat naik ke Google Play ialah 5.6 MB.

Perbezaan itu bukan kebetulan. Noler tidak menggabungkan platform tidur, sistem pengiklanan, lapisan analitik, sistem akaun awan, suapan berita, perkhidmatan cuaca atau suapan horoskop. Anda memuat turun jam penggera dan mendapatkan jam penggera.

<!-- section:privacy -->
## Persendirian mengikut reka bentuk

Penggunaan penggera biasa tidak menghantar data penggera ke mana-mana sahaja.

- Tiada ID pengiklanan
- Tiada akaun atau log masuk
- Tiada SDK analitis
- Tiada penjejakan tingkah laku
- Tiada sandaran atau penyegerakan awan
- Tiada perkhidmatan data penggera jauh
- Tiada permintaan rangkaian silang asal latar belakang

Rekod penggera, label, tetapan, lampiran, pertuturan dan penjadualan pemberitahuan kekal pada peranti anda. Halaman Syarat, Privasi dan sokongan langsung dibuka hanya apabila anda memilihnya secara eksplisit dalam Tetapan.

<!-- section:speech-fallback -->
## Penggera bercakap yang menerangkan mengapa ia berdering

Beri penggera label seperti "Sekolah," "Perubatan," "Lapangan Terbang" atau "Panggil Ibu". Apabila ia berdering, Noler boleh menyebut label itu dengan kuat menggunakan pertuturan yang tersedia pada peranti anda.

Strategi bunyi pada perantinya adalah khusus platform. Kedua-dua platform menggunakan sistem teks-ke-pertuturan untuk label penggera. Pada Android, suara Flite sumber terbuka yang digabungkan dan ringan mengambil alih apabila peranti tidak mempunyai enjin TTS sistem yang boleh digunakan. Bunyi penggera sistem pengendalian kekal sebagai lantai keselamatan terakhir.

Hanya pada Android, enjin sumber terbuka Flite terbina dalam menyediakan suara Inggeris sandaran jika tiada enjin pertuturan sistem yang boleh digunakan. Suara bergantung pada bahasa yang dipasang. Mod pilihan untuk mengekalkan aplikasi aktif dimatikan secara lalai dan boleh menggunakan lebih banyak bateri.

Bunyi penggera sandaran bertujuan untuk mengekalkan suara yang tidak tersedia daripada menghasilkan penggera senyap.

<!-- section:features -->
## Apa yang anda dapat

- Penggera satu kali dan berulang hari bekerja
- Label penggera yang dituturkan
- Butang besar untuk tunda dan henti
- Pandangan jelas penggera dijadualkan seterusnya
- Lampiran dan tetapan setempat
- Storan pada peranti tanpa akaun
- Antara muka yang gelap dan bebas gangguan
- Sokongan iPhone, iPad dan Android
- 39 pilihan tempat UI
- 24 pilihan bahasa penggera-suara

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Senarai penggera Noler dan skrin penggera seterusnya">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Skrin jam penggera Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Skrin tetapan penggera Noler">
</div>

<!-- section:ui-languages -->
## 39 pilihan tempat antara muka

Arab, Catalonia, Cina Ringkas, Cina Tradisional, Croatia, Czech, Denmark, Belanda, Inggeris Australia, Inggeris Kanada, Inggeris British, Inggeris AS, Finland, Perancis, Perancis Kanada, Jerman, Greek, Ibrani, Hindi, Hungary, Indonesia, Itali, Jepun, Korea, Melayu, Bokmal Norway, Poland, Portugis Brazil, Portugis Eropah, Romania, Rusia, Slovak, Sepanyol, Sepanyol Amerika Latin, Sweden, Thai, Turki, Ukraine dan Vietnam.

<!-- section:voice-languages -->
## 24 pilihan bahasa penggera-suara

Arab (Mesir), Benggali (Bangladesh), Belanda (Belanda), Inggeris (India), Inggeris AS, Perancis (Perancis), Jerman (Jerman), Hindi (India), Indonesia (Indonesia), Itali (Itali), Jepun (Jepun), Korea (Korea Selatan), Marathi (India), Poland (Poland), Portugis Brazil, Romania (Romania), Rusia (Rusia), Sepanyol (Amerika Syarikat), Tamil (India), Telugu (India), Thai (Thailand), Turki (Turkiye), Ukraine (Ukraine) dan Vietnam (Vietnam).

Ketersediaan suara dan sebutan bergantung pada suara teks ke pertuturan yang dipasang oleh pengeluar peranti atau sistem pengendalian. Sandaran Flite yang digabungkan ialah Android sahaja dan bertutur dalam bahasa Inggeris; kedua-dua platform mempunyai sandaran bunyi penggera apabila pertuturan tidak boleh digunakan.

<!-- section:downloads -->
## Muat turun jam penggera percuma

| Platform | Muat turun rasmi |
|---|---|
| iPhone dan iPad | [Muat turun di Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Dapatkan di Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Sumber untuk perbandingan

- [Noler di App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler di Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy di App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy di Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Bantuan Android Alarmy: persediaan horoskop](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Ciri kedai dan saiz pakej boleh berubah. Perbandingan disemak pada 19 September 2026. Alarmy ialah tanda dagangan pemiliknya masing-masing; projek ini tidak bergabung dengan atau disokong oleh Alarmy atau DelightRoom.

---

Repositori ini menyediakan maklumat produk. Kod sumber aplikasi adalah proprietari dan tidak diterbitkan di sini. Enjin pertuturan Flite ialah sumber terbuka.

<div align="center">
  <strong>Bangun dengan jam penggera terfokus, tanpa iklan atau penjejakan.</strong>
</div>
