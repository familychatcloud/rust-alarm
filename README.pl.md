<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Ikona aplikacji Noler">

# Budzik bez reklam i internetu

### Lekki alarm offline na iPhone'a, iPada i Androida

Budzik skupiający się na budzeniu Cię, bez reklam, śledzenia snu, horoskopów i dodatkowego obciążenia pracą w tle.

Posłuchaj, do czego służy budzik: „Chodźmy do szkoły”. „Weź lekarstwo”. „Wyjedź na lotnisko”.

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Pobierz Nolera z App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Pobierz Nolera z Google Play"></a>

Do pobrania bezpłatnie. Brak konta. Brak subskrypcji. Brak zakupów w aplikacji.

Właściciel zaobserwował w tym samym telefonie około 3% rozładowywania baterii w ciągu nocy w przypadku Nolera w porównaniu do 10% w przypadku Alarmy. Było to nieformalne, a nie kontrolowane badanie laboratoryjne i nie stanowi gwarancji.
</div>

<!-- section:focus -->
## Skoncentrowany budzik bez niepowiązanych dodatków

Noler to skoncentrowany budzik zbudowany w oparciu o technologię Rust. Tworzy jednorazowe i powtarzające się alarmy, głośno odczytuje etykietę każdego alarmu oraz przechowuje zapisy i ustawienia alarmów na Twoim urządzeniu.

Aplikacja koncentruje się na alarmach, zamiast łączyć je z szerszą usługą lifestylową.

Nie ma żadnych reklam oczekujących po zwolnieniu, żadnych analiz monitorujących sposób korzystania z aplikacji, żadnego konta do utworzenia, żadnej usługi w chmurze do utrzymania, a za Twoim alarmem nie działają niepowiązane maszyny związane z pogodą, wiadomościami, horoskopem, śledzeniem snu czy rejestracją chrapania.

<!-- section:spoken-purpose -->
## Usłysz cel swojego alarmu

Włącza się normalny budzik, ale na wpół przytomny możesz nie pamiętać, do czego służy. Noler wypowiada etykietę, którą napisałeś dla tego alarmu:

> „Chodźmy do szkoły”.

> „Weź lekarstwo”.

> „Wyjedź teraz na lotnisko”.

Wiadomość rozpoczyna się na urządzeniu po uruchomieniu alarmu. Od razu usłyszysz cel, zamiast otwierać aplikację, czytać małą etykietę lub zastanawiać się, dlaczego telefon hałasuje. Jest to szczególnie przydatne w przypadku zajęć szkolnych, leków, wizyt, gotowania, pracy zmianowej i przypomnień udostępnianych rodzinie.

<!-- section:comparison -->
## Dlaczego wybrać ten budzik w Rust zamiast Alarmy?

Rust łączy natywną wydajność z bezpieczeństwem pamięci i pozwala współdzielić rdzeń aplikacji między iOS a Androidem. Pomaga to utrzymać mały rozmiar i niezawodność Noler bez bibliotek reklamowych, analitycznego SDK oraz usług pogody, horoskopów i snu. Sam Rust nie dowodzi oszczędności baterii. Projekt opiera się na natywnej implementacji i pominięciu niezwiązanych z budzikiem zadań w tle; dane liczbowe o zużyciu wymagają pomiarów na fizycznych urządzeniach.

| Co się liczy | Budzik bez reklam i internetu | Alarmy |
|---|---|---|
| **Rdzeń filozofii** | Skoncentrowany budzik, który wykonuje zasadniczą pracę | Szersza platforma do snu i porannych rutyn |
| **Charakterystyczne doświadczenie budzenia** | Głośno mówi o celu alarmu — na przykład „Chodźmy do szkoły” zamiast niewyjaśnionego dzwonka | Koncentruje się na głośnych alarmach, misjach budzenia i funkcjach usypiania |
| **Bezpieczeństwo mowy na urządzeniu** | System na urządzeniu TTS; Android dodaje dołączony Flite typu open source, gdy nie jest dostępny systemowy silnik TTS; dźwięk alarmu systemu operacyjnego jest ostatecznym rozwiązaniem | Zobacz aktualną listę Alarmy, aby zapoznać się z jego zachowaniem dźwiękowym |
| **Stos języka i interfejsu użytkownika** | Rust + Dioxus — jeden współdzielony, lekki rdzeń aplikacji i interfejs użytkownika z natywnymi mostkami alarmowymi Swift/Kotlin tam, gdzie wymagają tego systemy operacyjne | Publiczne materiały techniczne wskazują na [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); pełny zestaw technologii obecnej wersji aplikacji nie został ujawniony. |
| **Rozmiar pakietu iOS** | 11.5 MB | 237.5 MB |
| **Różnica w rozmiarze iOS** | ≈1/20 | ≈20× |
| **Rozmiar wersji Androida** | Pakiet aplikacji o wielkości 5.6 MB przesłany do Google Play | Google Play nie publikuje jednego rozmiaru pakietu niezależnego od urządzenia |
| **Reklama** | Żadne | Zawiera reklamy |
| **Subskrypcja lub zakupy w aplikacji** | Żadne | Zakupy w aplikacji i subskrypcja premium |
| **Wymagane konto** | Nie – nie ma systemu kont | Nie porównywane; Lista sklepów Alarmy koncentruje się na szerszym katalogu funkcji |
| **Analityka lub śledzenie zachowań** | Żadne | Nie porównywane; Noler obiecuje, że nie obejmuje żadnego z nich |
| **Synchronizacja w chmurze** | Brak — dane alarmowe pozostają na urządzeniu | Nie porównywane; Noler celowo nie ma warstwy chmur |
| **Funkcja pogody** | Nie | Tak — w wykazie aplikacji Alarmy na Androida wskazano, że lokalizacji można używać do sprawdzania pogody po zamknięciu aplikacji |
| **Funkcja horoskopu** | Nie | Tak — udokumentowano w centrum pomocy systemu Android firmy Alarmy |
| **Śledzenie snu** | Nie | Tak |
| **Monitorowanie chrapania** | Nie | Tak |
| **Dźwięki do snu / ASMR** | Nie | Tak |
| **Obciążenie funkcji w tle** | Prace związane z alarmami; żadnych niepowiązanych kanałów online, śledzenia, reklam i pracy w chmurze | Dodatkowe włączone funkcje mogą obejmować pracę w tle i w sieci; nie zastrzega się żadnego kontrolowanego porównania mocy |
| **Zaobserwowano nocne rozładowywanie akumulatora** | Około 3% w nocnym teście tego samego telefonu właściciela | Około 10% w tym samym teście |
| **Różnica baterii w tej obserwacji** | Tylko z tej nieformalnej obserwacji wynika, że około 70% mniej ścieków | Około 3.3× zaobserwowany drenaż Nolera; nie jest ogólnym punktem odniesienia |
| **Podejście bateryjne** | Oszczędność baterii jest priorytetem produktu. Normalne działanie alarmu odbywa się w trybie offline, co pozwala uniknąć pracy przez Wi-Fi/mobilną transmisję danych oraz zużycia baterii spowodowanego pogodą, horoskopem, analizą snu, reklamami, analizami i synchronizacją z chmurą | Jego większy zestaw połączonych funkcji może wykonywać zadania sieciowe i przetwarzania wykraczające poza planowanie i uruchamianie alarmów |
| **Normalne użycie sieci danych alarmowych** | Zero — alarmy, etykiety, ustawienia, załączniki, mowa i harmonogramy pozostają na urządzeniu | Połączone funkcje wymagają dostępu do sieci |
| **Języki interfejsu użytkownika** | 39 opcji ustawień regionalnych w aplikacji | 31 unikalnych kodów językowych wymienionych w bieżącym pakiecie iOS |
| **Języki głosu alarmu** | 24 możliwości, używając mowy na Twoim urządzeniu | Zobacz listę Alarmy, aby zobaczyć aktualny zasięg głosu |

Do porównania rozmiaru wykorzystano liczbę bajtów pakietów zgłoszoną w katalogu Apple dla bieżących wersji App Store w USA na dzień 19 września 2026 r.: Noler 11,506,688 bajtów i Alarmy 237,476,864 bajtów. W przypadku pakietów aplikacji na Androida dostarczanie jest podzielone, więc rozmiar plików pobranych i zainstalowanych w Google Play różni się w zależności od urządzenia. 5.6 MB to zweryfikowany aktualny pakiet przesyłania do Play firmy Noler, a nie obiecany rozmiar zainstalowanej aplikacji.

Liczniki języków korzystają z różnych publicznych dowodów: licznik Nolera pochodzi z selektora języków w aplikacji, podczas gdy licznik Alarmy to unikalny licznik kodów języka zgłaszany przez bieżący pakiet iOS. 39 opcji odnosi się do interfejsu w aplikacji, a nie do gwarancji bieżącego stanu lokalizacji witryny sklepowej.

Alarmy to odpowiedni wybór dla osób, które aktywnie chcą misji budzenia, analizy snu, monitorowania chrapania, dźwięków do snu, pogody, horoskopu i katalogu funkcji premium. Wybierz Noler, jeśli chcesz, aby aplikacja alarmowa pozostała aplikacją alarmową.

<!-- section:battery-observation -->
## Nasza nieformalna obserwacja nocna: 3% w porównaniu z 10%

Nocny test na telefonie właściciela wykazał około 3% zużycia baterii w Nolerze w porównaniu do około 10% w Alarmy. Innymi słowy, podczas nocnej obserwacji Alarmy zużył około 3.3 razy więcej baterii, podczas gdy zużycie baterii Nolera było o około 70% mniejsze.

Było to porównanie z pierwszej ręki i tego samego telefonu, a nie kontrolowana certyfikacja laboratoryjna. Wyniki działania baterii różnią się w zależności od telefonu, stanu baterii, systemu operacyjnego, siły sygnału, ustawień alarmów i włączonych funkcji. Dokładne liczby nie są gwarantowane w przypadku każdego urządzenia, ale powód, dla którego priorytetowo traktuje się baterię, jest wbudowany w produkt.

<!-- section:battery-workload -->
## Mniej połączeń sieciowych oznacza mniej pracy na baterii

Każda dodatkowa funkcja w tle ma swoją cenę. Trzeba sprowadzić pogodę. Należy pobrać treść horoskopu. Śledzenie snu i chrapania wymaga dłuższego monitorowania. Reklamy i analizy wymagają kodu, ruchu sieciowego i przetwarzania. Konta w chmurze wymagają synchronizacji.

Noler nie robi tego podczas normalnego używania alarmu. Nie potrzebuje Wi-Fi ani komórkowej transmisji danych, aby przechowywać, planować, rozmawiać lub dzwonić na alarm. Pozostając w pełni offline podczas wykonywania swoich podstawowych zadań, unika budzenia radia sieciowego w celu sprawdzenia pogody, horoskopu, reklam, analiz, konta lub ruchu związanego z synchronizacją w chmurze.

Produkt stanowi najtrwalszy wybór oszczędzający baterię: w pierwszej kolejności nie rozpoczynaj niepowiązanych prac. Mniej obowiązków w tle oznacza mniej możliwości wykorzystania czasu procesora, czasu Wi-Fi/radia mobilnego, pamięci i baterii poza pracą, której faktycznie potrzebuje alarm.

### Jak zostanie przetestowane numeryczne porównanie baterii

Symulator nie może zapewnić prawidłowego porównania baterii telefonu: działa na procesorze komputera, radiu i zasilaczu. Wszelkie przyszłe stwierdzenia „zużywa X razy mniej baterii” będą wynikać z dopasowanych testów urządzeń fizycznych.

W teście porównawczym obie aplikacje będą działać na tym samym modelu, wersji systemu operacyjnego, zakresie stanu baterii, sieci, jasności, głośności i temperaturze. Będzie mierzyć dwa oddzielnie ujawnione scenariusze: podobny podstawowy alarm i normalne domyślne działanie każdej aplikacji. Kolejność testów będzie zmieniana, niepowiązane aplikacje zostaną zatrzymane, urządzenia rozpoczną się z tym samym poziomem naładowania i temperatury, a każdy scenariusz zostanie powtórzony co najmniej pięć razy.

Pomiary w systemie Android będą wykorzystywać statystyki baterii systemowej i dane dotyczące zasilania sprzętu, jeśli są obsługiwane. Pomiary iOS będą wykorzystywać ślady energii Instruments na fizycznym iPhonie. Wyniki będą zawierać czas trwania testu, dokładne ustawienia, medianę zużycia energii, zakres między przebiegami i nieprzetworzone pliki śledzenia. Dopóki nie pojawią się kontrolowane dowody, opublikowany wynik 3% w porównaniu do 10% będzie wyraźnie identyfikowany jako obserwacja nocna właściciela rzeczywistego urządzenia, a nie gwarancja na każdy telefon.

<!-- section:package-size -->
## Mały pakiet z ukierunkowanym zestawem funkcji

W systemie iOS bieżący pakiet Nolera zajmuje około 11.5 MB w porównaniu z 237.5 MB pakietu Alarmy — około 20 razy mniej. Aktualny pakiet aplikacji na Androida przesłany do Google Play ma rozmiar 5.6 MB.

Ta różnica nie jest przypadkowa. Firma Noler nie obejmuje platformy do spania, systemu reklamowego, warstwy analitycznej, systemu kont w chmurze, kanałów informacyjnych, usług pogodowych ani horoskopów. Pobierasz budzik i otrzymujesz budzik.

<!-- section:privacy -->
## Prywatny z założenia

Normalne użycie alarmu nie powoduje nigdzie przesłania danych alarmowych.

- Brak identyfikatora reklamowego
- Brak konta i logowania
- Brak pakietu SDK do analiz
- Brak śledzenia zachowań
- Brak kopii zapasowych i synchronizacji w chmurze
- Brak zdalnej usługi danych alarmowych
- Brak żądania sieciowego między źródłami w tle

Zapisy alarmów, etykiety, ustawienia, załączniki, mowa i harmonogram powiadomień pozostają na Twoim urządzeniu. Aktywne strony Warunki, Prywatność i wsparcie otwierają się tylko wtedy, gdy wyraźnie je zaznaczysz w Ustawieniach.

<!-- section:speech-fallback -->
## Mówiący alarm, który wyjaśnia, dlaczego dzwoni

Nadaj alarmowi etykietę, np. „Szkoła”, „Medycyna”, „Lotnisko” lub „Zadzwoń do mamy”. Kiedy zadzwoni, Noler może wypowiedzieć tę etykietę na głos, korzystając z mowy dostępnej w Twoim urządzeniu.

Strategia dotycząca dźwięku na urządzeniu jest specyficzna dla platformy. Obie platformy korzystają z systemowego przetwarzania tekstu na mowę w przypadku etykiety alarmu. W systemie Android dołączony, lekki głos Flite typu open source przejmuje kontrolę, gdy urządzenie nie ma użytecznego silnika systemowego TTS. Dźwięk alarmu systemu operacyjnego pozostaje ostatnim poziomem bezpieczeństwa.

Tylko na Androidzie dołączony silnik Flite o otwartym kodzie zapewnia angielski głos zapasowy, jeśli brak użytecznej syntezy mowy systemu. Głosy zależą od zainstalowanych języków. Opcjonalny tryb podtrzymywania aktywności jest domyślnie wyłączony i może zwiększać zużycie baterii.

Dźwięk alarmu awaryjnego ma na celu uniemożliwienie niedostępnego głosu wywołania cichego alarmu.

<!-- section:features -->
## Co dostajesz

- Alarmy jednorazowe i powtarzalne w dni powszednie
- Mówione etykiety alarmów
- Duże przyciski drzemki i wyłączania alarmu
- Przejrzysty widok następnego zaplanowanego alarmu
- Lokalne załączniki i ustawienia
- Pamięć na urządzeniu bez konta
- Ciemny, pozbawiony zakłóceń interfejs
- Obsługa iPhone'a, iPada i Androida
- 39 opcji ustawień regionalnych interfejsu użytkownika
- 24 języki do wyboru z głosem alarmowym

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Lista alarmów Nolera i ekran następnego alarmu">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Ekran budzika Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Ekran ustawień alarmu Noler">
</div>

<!-- section:ui-languages -->
## 39 opcji ustawień regionalnych interfejsu

arabski, kataloński, chiński uproszczony, chiński tradycyjny, chorwacki, czeski, duński, niderlandzki, angielski australijski, angielski kanadyjski, angielski brytyjski, angielski amerykański, fiński, francuski, francuski kanadyjski, niemiecki, grecki, hebrajski, hindi, węgierski, indonezyjski, włoski, japoński, koreański, malajski, norweski (bokmål), polski, brazylijski portugalski, europejski portugalski, rumuński, rosyjski, słowacki, hiszpański, amerykański hiszpański, szwedzki, tajski, turecki, ukraiński i wietnamski.

<!-- section:voice-languages -->
## 24 języki do wyboru z głosem alarmowym

arabski (Egipt), bengalski (Bangladesz), niderlandzki (Holandia), angielski (Indie), angielski amerykański, francuski (Francja), niemiecki (Niemcy), hindi (Indie), indonezyjski (Indonezja), włoski (Włochy), japoński (Japonia), koreański (Korea Południowa), marathi (Indie), polski (Polska), brazylijski portugalski, rumuński (Rumunia), rosyjski (Rosja), hiszpański (Stany Zjednoczone), tamilski (Indie), telugu (Indie), tajski (Tajlandia), turecki (Turcja), ukraiński (Ukraina) i wietnamski (Wietnam).

Dostępność głosu i wymowa zależą od głosów zamiany tekstu na mowę zainstalowanych przez producenta urządzenia lub systemu operacyjnego. Dołączona wersja zastępcza Flite jest przeznaczona wyłącznie dla systemu Android i mówi po angielsku; obie platformy mają funkcję awaryjnego włączania dźwięku alarmu, gdy nie można używać mowy.

<!-- section:downloads -->
## Pobierz darmowy budzik

| Platforma | Oficjalne pobieranie |
|---|---|
| iPhone'a i iPada | [Pobierz w Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Androida | [Pobierz z Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Źródła porównania

- [Noler w App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler w Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy w App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy w Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Pomoc dla aplikacji Alarmy na Androida: konfiguracja horoskopu](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Funkcje sklepu i rozmiary opakowań mogą ulec zmianie. Porównanie sprawdzone 19 września 2026 r. Alarmy jest znakiem towarowym odpowiedniego właściciela; ten projekt nie jest powiązany ani wspierany przez Alarmy ani DelightRoom.

---

To repozytorium zawiera informacje o produkcie. Własnościowy kod aplikacji nie jest tu publikowany. Dołączony silnik Flite ma otwarty kod źródłowy.

<div align="center">
  <strong>Obudź się z ukierunkowanym budzikiem, bez reklam i śledzenia.</strong>
</div>
