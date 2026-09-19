<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Noler uygulama simgesi">

# Reklamsız Çevrimdışı Alarm

### iPhone, iPad ve Android için hafif bir çevrimdışı alarm

Reklam, uyku takibi, burçlar veya arka plandaki ekstra iş yükü olmadan sizi uyandırmaya odaklanan bir alarm saati.

Alarmınızın ne için olduğunu öğrenin: "Hadi okula gidelim." "İlacını al." "Havaalanına gitmek üzere yola çık."

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Noler'ı App Store'dan indirin"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Noler'ı Google Play'den edinin"></a>

İndirmek ücretsiz. Hesap yok. Abonelik yok. Uygulama içi satın alma yok.

Kullanıcı, aynı telefonda Noler'da gece boyunca pil tüketiminin yaklaşık %3, Alarmy'de ise %10 olduğunu gözlemledi. Bu resmi olmayan bir testtir, kontrollü bir laboratuvar testi değildir ve bir garanti değildir.
</div>

<!-- section:focus -->
## İlgisiz ekstralar olmadan odaklanmış bir alarm saati

Noler, Rust ile oluşturulmuş odaklanmış bir alarm saatidir. Tek seferlik ve tekrarlayan alarmlar oluşturur, her alarmın etiketini yüksek sesle söyler ve alarm kayıtlarını ve ayarlarını cihazınızda tutar.

Uygulama, alarmları daha geniş bir yaşam tarzı hizmetiyle birleştirmek yerine alarmlara odaklanıyor.

Kapattıktan sonra bekleyen reklam yok, uygulamayı nasıl kullandığınızı izleyen analiz yok, oluşturulacak hesap yok, bakımı yapılacak bulut hizmeti yok ve alarmınızın arkasında çalışan alakasız hava durumu, haberler, burç, uyku izleme veya horlama kaydetme makineleri yok.

<!-- section:spoken-purpose -->
## Alarmınızın amacını öğrenin

Normal bir alarm çalar ancak yarı uyanık olduğunuzda bunun ne için olduğunu hatırlamayabilirsiniz. Noler o alarm için yazdığınız etiketi söylüyor:

> "Hadi okula gidelim."

> "İlacını al."

> “Şimdi havaalanına gitmek üzere yola çıkalım.”

Alarm çaldığında mesaj cihazda başlar. Uygulamayı açmak, küçük bir etiketi okumak veya telefonun neden ses çıkardığını merak etmek yerine amacı hemen duyarsınız. Özellikle okul koşuları, ilaç tedavisi, randevular, yemek pişirme, vardiyalı çalışma ve aileyle paylaşılan hatırlatmalar için kullanışlıdır.

<!-- section:comparison -->
## Alarmy yerine Rust ile geliştirilen bu alarmı neden seçmelisiniz?

Rust, yerel performansı bellek güvenliğiyle birleştirir ve iOS ile Android arasında ortak bir uygulama çekirdeği kullanılmasını sağlar. Böylece Noler; reklam kitaplıkları, analiz SDK’sı, hava durumu, burç veya uyku hizmetleri olmadan küçük ve güvenilir kalabilir. Rust kullanmak tek başına pil tasarrufunu kanıtlamaz. Tasarımımız yerel uygulamaya ve alarmla ilgisiz arka plan işlerinin kaldırılmasına dayanır; sayısal tüketim iddiaları gerçek cihazlarda ölçüm gerektirir.

| Önemli olan | Reklamsız Çevrimdışı Alarm | Alarmy |
|---|---|---|
| **Temel felsefe** | Temel işi yapan odaklanmış bir alarm saati | Daha geniş bir uyku ve sabah rutini platformu |
| **İmza uyandırma deneyimi** | Alarmın amacını yüksek sesle söyler; örneğin açıklanamayan bir zil sesi yerine "Hadi okula gidelim" | Yüksek sesli alarmlara, uyandırma görevlerine ve uyku özelliklerine odaklanır |
| **Cihazda konuşma güvenliği** | Cihaz içi sistem TTS; Android, sistem TTS motoru mevcut olmadığında paket halindeki açık kaynaklı Flite'ı ekler; işletim sistemi alarm sesi son çaredir | Ses davranışı için Alarmy'nin mevcut listesine bakın |
| **Dil ve kullanıcı arayüzü yığını** | Rust + Dioxus — işletim sistemlerinin gerektirdiği yerel Swift/Kotlin alarm köprülerine sahip, paylaşılan, hafif bir uygulama çekirdeği ve kullanıcı arayüzü | Herkese açık teknik kaynaklarda şu teknolojiler belirtiliyor: [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); güncel uygulamanın tüm teknoloji bileşenleri kamuya açıklanmış değildir. |
| **iOS paket boyutu** | 11.5 MB | 237.5 MB |
| **iOS boyut farkı** | ≈1/20 | ≈20× |
| **Android sürüm boyutu** | 5.6 MB App Bundle Google Play'e yüklendi | Google Play, cihazdan bağımsız tek bir paket boyutu yayınlamaz |
| **Reklam** | Yok | Reklam içerir |
| **Abonelik veya uygulama içi satın almalar** | Yok | Uygulama içi satın alımlar ve premium abonelik |
| **Hesap gerekli** | Hayır — hesap sistemi yok | Karşılaştırılmadı; Alarmy'nin mağaza girişi daha geniş özellik kataloğuna odaklanıyor |
| **Analitik veya davranışsal izleme** | Yok | Karşılaştırılmadı; Noler'in vaadi bunların ikisini de içermediği yönünde |
| **Bulut senkronizasyonu** | Yok — alarm verileri cihazda kalır | Karşılaştırılmadı; Noler'in kasıtlı olarak bulut katmanı yok |
| **Hava durumu özelliği** | Hayır | Evet — Alarmy'nin Android listesi, uygulama kapatıldıktan sonra hava durumunu öğrenmek için konumun kullanılabileceğini söylüyor |
| **Burç özelliği** | Hayır | Evet — Alarmy'nin Android yardım merkezinde belgelenmiştir |
| **Uyku takibi** | Hayır | Evet |
| **Horlama izleme** | Hayır | Evet |
| **Uyku sesleri / ASMR** | Hayır | Evet |
| **Arka plan özelliği iş yükü** | Alarmla ilgili işler; ilgisiz çevrimiçi yayın, izleme, reklam veya bulut çalışması yok | Etkinleştirilen ek özellikler arka plan ve ağ çalışmasını içerebilir; kontrollü güç karşılaştırması yapılmadığı iddia ediliyor |
| **Gece boyunca pil tüketimi gözlemlendi** | Sahibinin aynı telefonda gece boyunca yaptığı testte yaklaşık %3 | Aynı testte yaklaşık %10 |
| **Bu gözlemdeki pil farkı** | Yalnızca bu resmi olmayan gözlemde yaklaşık %70 daha az tüketim | Yaklaşık 3.3× Noler'in gözlemlenen drenajı; genel bir kriter değil |
| **Pil yaklaşımı** | Pil tasarrufu bir ürün önceliğidir. Normal alarm işlemi tamamen çevrimdışı olduğundan Wi-Fi/mobil veri çalışmasının yanı sıra hava durumu, burç, uyku analizi, reklamlar, analizler ve bulut senkronizasyonunun neden olduğu pil kullanımı ortadan kalkar | Daha büyük bağlantılı özellik seti, planlama ve alarm çalmanın ötesinde ağ ve işleme işlerini gerçekleştirebilir |
| **Normal alarm veri ağı kullanımı** | Sıfır — alarmlar, etiketler, ayarlar, ekler, konuşma ve planlama cihazda kalır | Bağlı özellikler ağ erişimi gerektirir |
| **Kullanıcı arayüzü dilleri** | 39 uygulama içi yerel ayar seçeneği | Mevcut iOS paketinde listelenen 31 benzersiz dil kodu |
| **Alarm ses dilleri** | Cihazınızda konuşmayı kullanarak 24 seçenek | Mevcut ses kapsamı için Alarmy'nin listesine bakın |

Boyut karşılaştırması, Apple kataloğunun 19 Eylül 2026'daki mevcut ABD App Store sürümleri için bildirdiği paket bayt sayılarını kullanır: Noler 11,506,688 bayt ve Alarmy 237,476,864 bayt. Android App Bundle'lar bölünmüş dağıtım kullandığından her kişinin Google Play indirme ve yükleme boyutu cihaza göre değişir; 5.6 MB, Noler'in doğrulanmış mevcut Play yükleme paketidir, vaat edilen yüklü boyut ölçümü değildir.

Dil sayımları farklı genel kanıtları kullanır: Noler'in sayısı uygulama içi dil seçiciden gelir, Alarmy'nin sayısı ise mevcut iOS paketi tarafından bildirilen benzersiz dil kodu sayısıdır. 39 seçenek, mevcut vitrin yerelleştirme durumunun garantisi değil, uygulama içi arayüze atıfta bulunur.

Alarmy, aktif olarak uyandırma görevleri, uyku analizi, horlama izleme, uyku sesleri, hava durumu, burç ve premium özellik kataloğu isteyen kişiler için yetenekli bir seçimdir. Alarm uygulamanızın bir alarm uygulaması olarak kalmasını istiyorsanız Noler'ı seçin.

<!-- section:battery-observation -->
## Resmi olmayan gecelik gözlemimiz: %3'e karşılık %10

Sahibinin telefonunda bir gecede yapılan test, Noler'da yaklaşık %3, Alarmy'de ise yaklaşık %10 pil kullanımı gösterdi. Başka bir deyişle Alarmy, gece boyunca yapılan gözlemde kabaca 3.3 kat daha fazla pil tüketirken, Noler'in tüketimi yaklaşık %70 daha düşüktü.

Bu, kontrollü bir laboratuvar sertifikasyonu yerine, aynı telefonla ilk elden yapılan bir karşılaştırmaydı. Pil sonuçları telefona, pil sağlığına, işletim sistemine, sinyal gücüne, alarm ayarlarına ve etkinleştirilmiş özelliklere göre değişiklik gösterir. Kesin rakamlar her cihazda garanti edilmez; ancak pile öncelik verilmesinin nedeni üründe yerleşiktir.

<!-- section:battery-workload -->
## Daha az ağ, daha az pil çalışması anlamına gelir

Her ekstra arka plan özelliğinin bir maliyeti vardır. Hava durumu getirilmelidir. Burç içeriği getirilmelidir. Uyku ve horlama takibi, uzun süreli izleme gerektirir. Reklamlar ve analizler kod, ağ trafiği ve işleme gerektirir. Bulut hesapları senkronizasyon gerektirir.

Noler normal alarm kullanımı sırasında bunların hiçbirini yapmaz. Bir alarmı depolamak, planlamak, konuşmak veya çalmak için Wi-Fi veya mobil veriye ihtiyaç duymaz. Temel işi için tamamen çevrimdışı kalarak, ağ radyosunun hava durumu, burç, reklam, analiz, hesap veya bulut senkronizasyonu trafiği için uyandırılmasını önler.

Ürün, pil tasarrufu açısından en dayanıklı seçimi yapar: ilgisiz işlere ilk etapta başlamayın. Daha az arka plan sorumluluğu, bir alarmın gerçekte ihtiyaç duyduğu işin ötesinde CPU süresini, Wi-Fi/mobil radyo süresini, belleği ve pili tüketmek için daha az fırsat anlamına gelir.

### Sayısal pil karşılaştırması nasıl test edilecek?

Bir simülatör geçerli bir telefon-pil karşılaştırması sağlayamaz: bilgisayarın işlemcisi, radyosu ve güç kaynağı üzerinde çalışır. Gelecekteki herhangi bir "X kat daha az pil kullanır" iddiası, eşleşen fiziksel cihaz testlerinden gelecektir.

Karşılaştırma, her iki uygulamayı da aynı modelde, işletim sistemi sürümünde, pil sağlığı aralığında, ağda, parlaklıkta, ses seviyesinde ve sıcaklıkta çalıştıracaktır. Ayrı olarak açıklanan iki senaryoyu ölçecek: benzer bir temel alarm ve her uygulamanın normal varsayılan deneyimi. Test sırası değişecek, ilgisiz uygulamalar durdurulacak, cihazlar aynı şarj ve sıcaklıkta başlayacak ve her senaryo en az beş kez tekrarlanacak.

Android ölçümü, desteklendiğinde sistem pil istatistiklerini ve donanım gücü verilerini kullanır. iOS ölçümü, Instruments'ın fiziksel bir iPhone'daki enerji izlerini kullanacaktır. Sonuçlar test süresini, kesin ayarları, enerji tüketiminin medyanını, çalışma aralığını ve ham izleme dosyalarını raporlayacaktır. Bu kontrollü kanıt mevcut olana kadar, yayınlanan %3'e karşı %10 sonucu, her telefon için bir garanti değil, sahibinin gerçek cihaz gece gözlemi olarak açıkça tanımlanmaya devam edecektir.

<!-- section:package-size -->
## Odaklanmış özelliklere sahip küçük bir paket

İOS'ta mevcut Noler paketi, Alarmy'nin 237.5 MB'ına (yaklaşık 20 kat daha küçük) kıyasla yaklaşık 11.5 MB'tır. Google Play'e yüklenen mevcut Android App Bundle boyutu 5.6 MB'tır.

Bu fark bir tesadüf değil. Noler, bir uyku platformunu, reklam sistemini, analiz katmanını, bulut hesap sistemini, haber akışını, hava durumu hizmetini veya burç akışını bir araya getirmez. Bir çalar saat indirirsiniz ve bir çalar saat alırsınız.

<!-- section:privacy -->
## Tasarım gereği özel

Normal alarm kullanımı hiçbir yere alarm verisi göndermez.

- Reklam kimliği yok
- Hesap veya giriş yok
- Analiz SDK'sı yok
- Davranış takibi yok
- Bulut yedekleme veya senkronizasyon yok
- Uzaktan alarm veri hizmeti yok
- Arka planda çapraz köken ağ isteği yok

Alarm kayıtları, etiketler, ayarlar, ekler, konuşma ve bildirim planlaması cihazınızda kalır. Canlı Şartlar, Gizlilik ve destek sayfaları yalnızca bunları Ayarlar'da açıkça seçtiğinizde açılır.

<!-- section:speech-fallback -->
## Neden çaldığını açıklayan konuşan bir alarm

Alarma "Okul", "İlaç", "Havaalanı" veya "Annemi Ara" gibi bir etiket verin. Zil çaldığında Noler, cihazınızda bulunan konuşmayı kullanarak bu etiketi yüksek sesle söyleyebilir.

Cihaz içi ses stratejisi platforma özeldir. Her iki platform da alarm etiketi için sistem metin okuma özelliğini kullanır. Android'de, bir cihazın kullanılabilir bir sistem TTS motoru olmadığında, paket halinde, hafif, açık kaynaklı bir Flite sesi devreye girer. İşletim sisteminin alarm sesi son güvenlik katı olarak kalır.

Yalnızca Android’de, kullanılabilir sistem konuşma motoru yoksa birlikte gelen açık kaynak Flite motoru İngilizce yedek ses sağlar. Sesler kurulu dillere bağlıdır. İsteğe bağlı uygulamayı etkin tutma modu başlangıçta kapalıdır ve daha fazla pil tüketebilir.

Geri dönüş alarm sesinin amacı, kullanılamayan bir sesin sessiz alarm üretmesini engellemektir.

<!-- section:features -->
## Ne elde edeceksin

- Tek seferlik ve tekrarlanan hafta içi alarmlar
- Sesli alarm etiketleri
- Erteleme ve durdurma için büyük düğmeler
- Bir sonraki programlanmış alarmın net görünümü
- Yerel ekler ve ayarlar
- Hesap olmadan cihazda depolama
- Karanlık, dikkat dağıtıcı olmayan bir arayüz
- iPhone, iPad ve Android desteği
- 39 kullanıcı arayüzü yerel ayarı seçeneği
- 24 alarm sesi dili seçeneği

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Noler alarm listesi ve sonraki alarm ekranı">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Noler alarm saati ekranı">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Noler alarm ayarları ekranı">
</div>

<!-- section:ui-languages -->
## 39 arayüz yerel ayarı seçeneği

Arapça, Katalanca, Basitleştirilmiş Çince, Geleneksel Çince, Hırvatça, Çekçe, Danca, Felemenkçe, Avustralya İngilizcesi, Kanada İngilizcesi, İngiliz İngilizcesi, Amerikan İngilizcesi, Fince, Fransızca, Kanada Fransızcası, Almanca, Yunanca, İbranice, Hintçe, Macarca, Endonezce, İtalyanca, Japonca, Korece, Malayca, Norveççe Bokmål, Lehçe, Brezilya Portekizcesi, Avrupa Portekizcesi, Rumence, Rusça, Slovakça, İspanyolca, Latin Amerika İspanyolcası, İsveççe, Tayca, Türkçe, Ukraynaca ve Vietnamca.

<!-- section:voice-languages -->
## 24 alarm sesi dili seçeneği

Arapça (Mısır), Bengalce (Bangladeş), Felemenkçe (Hollanda), İngilizce (Hindistan), Amerikan İngilizcesi, Fransızca (Fransa), Almanca (Almanya), Hintçe (Hindistan), Endonezce (Endonezya), İtalyanca (İtalya), Japonca (Japonya), Korece (Güney Kore), Marathi dili (Hindistan), Lehçe (Polonya), Brezilya Portekizcesi, Rumence (Romanya), Rusça (Rusya), İspanyolca (Amerika Birleşik Devletleri), Tamilce (Hindistan), Telugu dili (Hindistan), Tayca (Tayland), Türkçe (Türkiye), Ukraynaca (Ukrayna) ve Vietnamca (Vietnam).

Sesin kullanılabilirliği ve telaffuzu, cihaz üreticisi veya işletim sistemi tarafından yüklenen metinden konuşmaya seslere bağlıdır. Birlikte verilen Flite geri dönüşü yalnızca Android'e yöneliktir ve İngilizce konuşur; her iki platformda da konuşma kullanılamadığında alarm sesi geri dönüşü bulunur.

<!-- section:downloads -->
## Ücretsiz alarm saatini indirin

| platformu | Resmi indirme |
|---|---|
| iPhone ve iPad | [Apple App Store'dan indirin](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| android | [Google Play'den edinin](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Karşılaştırma kaynakları

- [App Store'da Noler](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Google Play'de Noler](https://play.google.com/store/apps/details?id=com.noler.app)
- [App Store'da Alarmy](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Google Play'de Alarmy](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Alarmy Android yardımı: burç kurulumu](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Mağaza özellikleri ve paket boyutları değişebilir. Karşılaştırma 19 Eylül 2026'da kontrol edildi. Alarmy, ilgili sahibinin ticari markasıdır; Bu proje Alarmy veya DelightRoom'a bağlı değildir veya bunlar tarafından desteklenmemektedir.

---

Bu depo ürün bilgisi sunar. Uygulamanın kapalı kaynak kodu burada yayımlanmaz. Birlikte gelen Flite konuşma motoru açık kaynaklıdır.

<div align="center">
  <strong>Reklamlar veya izleme olmadan odaklanmış bir alarm saati ile uyanın.</strong>
</div>
