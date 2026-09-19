<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Ikon aplikasi Noler">

# Alarm Offline Tanpa Iklan

### Alarm offline ringan untuk iPhone, iPad, dan Android

Jam alarm yang berfokus untuk membangunkan Anda, tanpa iklan, pelacakan tidur, horoskop, atau beban kerja tambahan di latar belakang.

Dengarkan kegunaan alarm Anda: “Ayo pergi ke sekolah”. “Minumlah obatmu.” “Berangkat ke bandara.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Unduh Noler di App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Dapatkan Noler di Google Play"></a>

Gratis untuk diunduh. Tidak ada akun. Tidak ada langganan. Tidak ada pembelian dalam aplikasi.

Pemiliknya mengamati sekitar 3% baterai terkuras dalam semalam dengan Noler dibandingkan 10% dengan Alarmy pada ponsel yang sama. Ini bersifat informal, bukan tes laboratorium terkontrol, dan bukan merupakan jaminan.
</div>

<!-- section:focus -->
## Jam alarm terfokus tanpa tambahan yang tidak terkait

Noler adalah jam alarm terfokus yang dibuat dengan Rust. Ini membuat alarm satu kali dan berulang, mengucapkan setiap label alarm dengan keras, dan menyimpan catatan dan pengaturan alarm di perangkat Anda.

Aplikasi ini berfokus pada alarm daripada menggabungkannya dengan layanan gaya hidup yang lebih luas.

Tidak ada iklan yang menunggu setelah ditutup, tidak ada analisis yang memantau cara Anda menggunakan aplikasi, tidak ada akun yang harus dibuat, tidak ada layanan cloud yang harus dikelola, dan tidak ada mesin perekam cuaca, berita, horoskop, pelacak tidur, atau pendengkur yang tidak terkait yang berjalan di belakang alarm Anda.

<!-- section:spoken-purpose -->
## Dengarkan tujuan alarm Anda

Alarm biasa berbunyi, tetapi dalam keadaan setengah sadar Anda mungkin tidak ingat untuk apa alarm tersebut. Noler mengucapkan label yang Anda tulis untuk alarm itu:

> “Ayo pergi ke sekolah.”

> “Minumlah obatmu.”

> “Berangkat sekarang ke bandara.”

Pesan dimulai di perangkat saat alarm berbunyi. Anda langsung mendengar tujuannya alih-alih membuka aplikasi, membaca label kecil, atau bertanya-tanya mengapa ponsel mengeluarkan suara. Hal ini sangat berguna untuk keperluan sekolah, pengobatan, janji temu, memasak, kerja shift, dan pengingat yang dibagikan kepada keluarga.

<!-- section:comparison -->
## Mengapa memilih alarm berbasis Rust ini daripada Alarmy?

Rust memadukan performa native dan keamanan memori, sekaligus memungkinkan satu inti aplikasi dipakai bersama di iOS dan Android. Ini membantu Noler tetap kecil dan andal tanpa pustaka iklan, SDK analitik, atau layanan cuaca, horoskop, dan tidur. Rust saja tidak membuktikan penghematan baterai. Pendekatan desain kami bertumpu pada implementasi native dan peniadaan tugas latar belakang yang tidak terkait dengan alarm; angka konsumsi harus dibuktikan melalui pengukuran di perangkat fisik.

| Yang penting | Alarm Offline Tanpa Iklan | Alarmy |
|---|---|---|
| **Filosofi inti** | Jam alarm terfokus yang melakukan pekerjaan penting | Platform tidur dan rutinitas pagi yang lebih luas |
| **Pengalaman bangun yang khas** | Mengucapkan tujuan alarm dengan lantang—misalnya, “Ayo pergi ke sekolah” alih-alih berbunyi tanpa alasan | Berfokus pada alarm keras, misi bangun, dan fitur tidur |
| **Keamanan ucapan di perangkat** | TTS sistem pada perangkat; Android menambahkan Flite sumber terbuka yang dibundel ketika tidak ada mesin TTS sistem yang tersedia; suara alarm OS adalah penggantian terakhir | Lihat daftar Alarmy saat ini untuk mengetahui perilaku suaranya |
| **Tumpukan bahasa dan UI** | Rust + Dioxus — satu inti aplikasi dan UI bersama yang ringan, dengan jembatan alarm Swift/Kotlin asli jika sistem operasi memerlukannya | Sumber teknis publik menyebut [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); kombinasi lengkap teknologi dalam versi aplikasi saat ini tidak dipublikasikan. |
| **ukuran paket iOS** | 11.5 MB | 237.5 MB |
| **Perbedaan ukuran iOS** | ≈1/20 | ≈20× |
| **Ukuran rilis Android** | Paket Aplikasi sebesar 5.6 MB diunggah ke Google Play | Google Play tidak memublikasikan satu ukuran paket yang tidak bergantung pada perangkat |
| **Periklanan** | Tidak ada | Berisi iklan |
| **Berlangganan atau pembelian dalam aplikasi** | Tidak ada | Pembelian dalam aplikasi dan langganan premium |
| **Diperlukan akun** | Tidak — tidak ada sistem akun | Tidak dibandingkan; Cantuman toko Alarmy berfokus pada katalog fiturnya yang lebih luas |
| **Analisis atau pelacakan perilaku** | Tidak ada | Tidak dibandingkan; Janji Noler adalah bahwa hal itu tidak termasuk keduanya |
| **Sinkronisasi awan** | Tidak ada — data alarm tetap ada di perangkat | Tidak dibandingkan; Noler sengaja tidak memiliki lapisan awan |
| **Fitur cuaca** | Tidak | Ya — Daftar Android Alarmy menyatakan lokasi dapat digunakan untuk mengetahui cuaca setelah aplikasi ditutup |
| **Fitur horoskop** | Tidak | Ya — didokumentasikan di pusat bantuan Android Alarmy |
| **Pelacakan tidur** | Tidak | Ya |
| **Pemantauan mendengkur** | Tidak | Ya |
| **Suara tidur / ASMR** | Tidak | Ya |
| **Beban kerja fitur latar belakang** | Pekerjaan yang berhubungan dengan alarm; tidak ada feed online, pelacakan, iklan, atau pekerjaan cloud yang tidak terkait | Fitur tambahan yang diaktifkan dapat melibatkan pekerjaan latar belakang dan jaringan; tidak ada perbandingan daya terkontrol yang diklaim |
| **Baterai terkuras semalaman** | Sekitar 3% dalam tes semalam pemilik telepon yang sama | Sekitar 10% dalam tes yang sama |
| **Perbedaan baterai dalam pengamatan itu** | Sekitar 70% lebih sedikit saluran pembuangan hanya dalam observasi informal ini | Sekitar 3.3× saluran air yang diamati Noler; bukan patokan umum |
| **Pendekatan baterai** | Penghematan baterai adalah prioritas produk. Pengoperasian alarm normal sepenuhnya offline, menghindari pekerjaan Wi-Fi/data seluler ditambah penggunaan baterai yang disebabkan oleh cuaca, horoskop, analisis tidur, iklan, analitik, dan sinkronisasi cloud | Rangkaian fitur terhubungnya yang lebih besar dapat melakukan pekerjaan jaringan dan pemrosesan lebih dari sekadar penjadwalan dan membunyikan alarm |
| **Penggunaan jaringan data alarm normal** | Nol — alarm, label, pengaturan, lampiran, ucapan, dan penjadwalan tetap ada di perangkat | Fitur yang terhubung memerlukan akses jaringan |
| **bahasa UI** | 39 pilihan lokal dalam aplikasi | 31 kode bahasa unik yang dicantumkan oleh paket iOS saat ini |
| **Bahasa suara alarm** | 24 pilihan, menggunakan ucapan di perangkat Anda | Lihat daftar Alarmy untuk cakupan suaranya saat ini |

Perbandingan ukuran menggunakan jumlah byte paket yang dilaporkan oleh katalog Apple untuk versi App Store AS saat ini pada 19 September 2026: Noler 11,506,688 byte dan Alarmy 237,476,864 byte. Android App Bundle menggunakan pengiriman terpisah, sehingga ukuran unduhan dan pemasangan Google Play setiap orang berbeda-beda menurut perangkat; 5.6 MB adalah paket unggahan Play terkini yang terverifikasi dari Noler, bukan ukuran ukuran terpasang yang dijanjikan.

Penghitungan bahasa menggunakan bukti publik yang berbeda: Penghitungan Noler berasal dari pemilih bahasa dalam aplikasi, sedangkan penghitungan Alarmy adalah penghitungan kode bahasa unik yang dilaporkan oleh paket iOS saat ini. 39 pilihan mengacu pada antarmuka dalam aplikasi, bukan jaminan status lokalisasi etalase saat ini.

Alarmy adalah pilihan yang tepat bagi orang-orang yang secara aktif menginginkan misi bangun tidur, analisis tidur, pemantauan dengkuran, suara tidur, cuaca, horoskop, dan katalog fitur premium. Pilih Noler bila Anda ingin aplikasi alarm Anda tetap menjadi aplikasi alarm.

<!-- section:battery-observation -->
## Pengamatan informal semalam kami: 3% versus 10%

Di ponsel pemiliknya, pengujian semalam menunjukkan penggunaan baterai sekitar 3% dengan Noler dibandingkan sekitar 10% dengan Alarmy. Dengan kata lain, Alarmy menggunakan sekitar 3.3 kali lebih banyak baterai dalam pengamatan semalam, sementara konsumsi baterai Noler sekitar 70% lebih rendah.

Ini adalah perbandingan telepon yang sama secara langsung, bukan sertifikasi laboratorium terkontrol. Hasil baterai bervariasi menurut ponsel, kesehatan baterai, sistem operasi, kekuatan sinyal, pengaturan alarm, dan fitur yang diaktifkan. Jumlah pastinya tidak dijamin di setiap perangkat—tetapi alasan untuk memprioritaskan baterai sudah ada di dalam produk.

<!-- section:battery-workload -->
## Lebih sedikit jaringan berarti lebih sedikit penggunaan baterai

Setiap fitur latar belakang tambahan memiliki biaya. Cuaca harus diambil. Konten horoskop harus diambil. Pelacakan tidur dan mendengkur memerlukan pemantauan yang lebih lama. Iklan dan analitik memerlukan kode, lalu lintas jaringan, dan pemrosesan. Akun cloud memerlukan sinkronisasi.

Noler tidak melakukan semua itu selama penggunaan alarm normal. Tidak memerlukan Wi-Fi atau data seluler untuk menyimpan, menjadwalkan, berbicara, atau membunyikan alarm. Dengan tetap offline sepenuhnya untuk pekerjaan intinya, ia menghindari membangunkan radio jaringan untuk lalu lintas cuaca, horoskop, periklanan, analitik, akun, atau sinkronisasi cloud.

Produk ini memberikan pilihan hemat baterai yang paling tahan lama: jangan memulai pekerjaan yang tidak terkait sejak awal. Lebih sedikit tanggung jawab di latar belakang berarti lebih sedikit peluang untuk menggunakan waktu CPU, waktu Wi-Fi/radio seluler, memori, dan baterai di luar pekerjaan yang sebenarnya dibutuhkan oleh alarm.

### Bagaimana perbandingan baterai numerik akan diuji

Simulator tidak dapat memberikan perbandingan baterai ponsel yang valid: simulator berjalan pada prosesor komputer, radio, dan catu daya. Klaim “penggunaan baterai X kali lebih sedikit” di masa mendatang akan berasal dari pengujian perangkat fisik yang sesuai.

Tolok ukur ini akan menjalankan kedua aplikasi pada model, versi OS, rentang kesehatan baterai, jaringan, kecerahan, volume, dan suhu yang sama. Ini akan mengukur dua skenario yang diungkapkan secara terpisah: alarm dasar yang serupa, dan pengalaman default normal setiap aplikasi. Urutan pengujian akan bergantian, aplikasi yang tidak terkait akan dihentikan, perangkat akan dimulai dengan pengisian daya dan suhu yang sama, dan setiap skenario akan diulang setidaknya lima kali.

Pengukuran Android akan menggunakan statistik baterai sistem dan data daya perangkat keras jika didukung. Pengukuran iOS akan menggunakan jejak energi Instruments pada iPhone fisik. Hasil akan melaporkan durasi pengujian, pengaturan yang tepat, hasil energi median, rentang lari-ke-lari, dan file jejak mentah. Hingga bukti terkontrol tersebut ada, hasil 3%-versus-10% yang dipublikasikan tetap teridentifikasi dengan jelas sebagai pengamatan langsung pemilik perangkat dalam semalam, dan bukan jaminan untuk setiap ponsel.

<!-- section:package-size -->
## Paket kecil dengan serangkaian fitur terfokus

Di iOS, paket Noler saat ini berukuran sekitar 11.5 MB, dibandingkan dengan Alarmy yang berukuran 237.5 MB—kira-kira 20× lebih kecil. Android App Bundle yang diunggah ke Google Play saat ini berukuran 5.6 MB.

Perbedaan itu bukanlah suatu kebetulan. Noler tidak menggabungkan platform tidur, sistem periklanan, lapisan analitik, sistem akun cloud, umpan berita, layanan cuaca, atau umpan horoskop. Anda mengunduh jam alarm dan mendapatkan jam alarm.

<!-- section:privacy -->
## Pribadi berdasarkan desain

Penggunaan alarm normal tidak mengirimkan data alarm ke mana pun.

- Tidak ada ID iklan
- Tidak ada akun atau login
- Tidak ada SDK analitik
- Tidak ada pelacakan perilaku
- Tidak ada cadangan atau sinkronisasi cloud
- Tidak ada layanan data alarm jarak jauh
- Tidak ada permintaan jaringan lintas asal latar belakang

Catatan alarm, label, pengaturan, lampiran, ucapan, dan penjadwalan pemberitahuan tetap ada di perangkat Anda. Halaman Ketentuan, Privasi, dan dukungan langsung hanya terbuka jika Anda memilihnya secara eksplisit di Pengaturan.

<!-- section:speech-fallback -->
## Alarm bicara yang menjelaskan mengapa ia berdering

Berikan label pada alarm seperti “Sekolah”, “Kedokteran”, “Bandara”, atau “Telepon Ibu”. Saat berdering, Noler dapat mengucapkan label itu dengan lantang menggunakan ucapan yang tersedia di perangkat Anda.

Strategi suara pada perangkatnya bersifat spesifik platform. Kedua platform menggunakan sistem text-to-speech untuk label alarm. Di Android, suara Flite sumber terbuka dan ringan yang dibundel akan mengambil alih saat perangkat tidak memiliki mesin sistem TTS yang dapat digunakan. Bunyi alarm sistem operasi tetap menjadi titik aman terakhir.

Khusus Android, mesin sumber terbuka Flite bawaan menyediakan suara Inggris cadangan jika tidak ada mesin ucapan sistem yang dapat digunakan. Suara bergantung pada bahasa terpasang. Mode opsional untuk menjaga aplikasi tetap aktif awalnya mati dan dapat menambah penggunaan baterai.

Bunyi alarm mundur dimaksudkan agar suara yang tidak tersedia tidak menghasilkan alarm senyap.

<!-- section:features -->
## Apa yang Anda dapatkan

- Alarm satu kali dan berulang pada hari kerja
- Label alarm lisan
- Tombol besar untuk menunda dan menghentikan alarm
- Tampilan yang jelas tentang alarm terjadwal berikutnya
- Lampiran dan pengaturan lokal
- Penyimpanan di perangkat tanpa akun
- Antarmuka yang gelap dan bebas gangguan
- Dukungan iPhone, iPad, dan Android
- 39 pilihan lokal UI
- 24 pilihan bahasa suara alarm

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Daftar alarm Noler dan layar alarm berikutnya">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Layar jam alarm Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Layar pengaturan alarm Noler">
</div>

<!-- section:ui-languages -->
## 39 pilihan lokal antarmuka

Arab, Katalan, Tionghoa (Sederhana), Tionghoa (Tradisional), Kroasia, Ceko, Dansk, Belanda, Inggris (Australia), Inggris (Kanada), Inggris (Britania), Inggris (Amerika Serikat), Suomi, Prancis, Prancis (Kanada), Jerman, Yunani, Ibrani, Hindi, Hungaria, Indonesia, Italia, Jepang, Korea, Melayu, Bokmål Norwegia, Polski, Portugis (Brasil), Portugis (Eropa), Rumania, Rusia, Slovak, Spanyol, Spanyol (Amerika Latin), Swedia, Thai, Turki, Ukraina, dan Vietnam.

<!-- section:voice-languages -->
## 24 pilihan bahasa suara alarm

Arab (Mesir), Bengali (Bangladesh), Belanda (Belanda), Inggris (India), Inggris (Amerika Serikat), Prancis (Prancis), Jerman (Jerman), Hindi (India), Indonesia (Indonesia), Italia (Italia), Jepang (Jepang), Korea (Korea Selatan), Marathi (India), Polski (Polandia), Portugis (Brasil), Rumania (Rumania), Rusia (Rusia), Spanyol (Amerika Serikat), Tamil (India), Telugu (India), Thai (Thailand), Turki (Turki), Ukraina (Ukraina), dan Vietnam (Vietnam).

Ketersediaan dan pengucapan suara bergantung pada suara text-to-speech yang dipasang oleh produsen perangkat atau sistem operasi. Penggantian Flite yang dibundel hanya untuk Android dan berbicara bahasa Inggris; kedua platform memiliki pengganti suara alarm ketika ucapan tidak dapat digunakan.

<!-- section:downloads -->
## Unduh jam alarm gratis

| Peron | Unduhan resmi |
|---|---|
| iPhone dan iPad | [Unduh di Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Dapatkan di Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Sumber perbandingan

- [Noler di App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler di Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy di App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy di Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Bantuan Alarmy Android: pengaturan horoskop](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Fitur toko dan ukuran paket dapat berubah. Perbandingan diperiksa pada 19 September 2026. Alarmy adalah merek dagang dari pemiliknya masing-masing; proyek ini tidak berafiliasi atau didukung oleh Alarmy atau DelightRoom.

---

Repositori ini berisi informasi produk, bukan kode sumber aplikasi yang bersifat proprieter. Mesin ucapan Flite bawaan bersumber terbuka.

<div align="center">
  <strong>Bangun dengan jam alarm yang terfokus, tanpa iklan atau pelacakan.</strong>
</div>
