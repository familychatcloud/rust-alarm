<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Biểu tượng ứng dụng Noler">

# Báo thức không quảng cáo

### Báo thức ngoại tuyến nhẹ dành cho iPhone, iPad và Android

Đồng hồ báo thức tập trung vào việc đánh thức bạn mà không có quảng cáo, theo dõi giấc ngủ, tử vi hoặc khối lượng công việc nền thêm của chúng.

Hãy nghe báo thức của bạn dùng để làm gì: “Chúng ta hãy đến trường”. “Hãy uống thuốc đi.” “Ra sân bay.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Tải xuống Noler trên App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Tải Noler trên Google Play"></a>

Miễn phí để tải về. Không có tài khoản. Không có đăng ký. Không mua trong ứng dụng.

Chủ sở hữu quan sát thấy mức tiêu hao pin khoảng 3% qua đêm với Noler so với 10% với Alarmy trên cùng một điện thoại. Đây là thử nghiệm không chính thức, không phải là thử nghiệm trong phòng thí nghiệm có kiểm soát và không phải là sự đảm bảo.
</div>

<!-- section:focus -->
## Đồng hồ báo thức tập trung không có tính năng bổ sung không liên quan

Noler là đồng hồ báo thức tập trung được xây dựng bằng Rust. Nó tạo các cảnh báo một lần và lặp lại, đọc to nhãn của từng cảnh báo và lưu giữ các bản ghi cũng như cài đặt cảnh báo trên thiết bị của bạn.

Ứng dụng tập trung vào các cảnh báo thay vì kết hợp chúng với dịch vụ phong cách sống rộng hơn.

Không có quảng cáo chờ sau khi loại bỏ, không có phân tích xem cách bạn sử dụng ứng dụng, không cần tạo tài khoản, không cần duy trì dịch vụ đám mây và không có thời tiết, tin tức, tử vi, theo dõi giấc ngủ hoặc máy ghi âm tiếng ngáy không liên quan chạy sau báo thức của bạn.

<!-- section:spoken-purpose -->
## Nghe mục đích của báo thức của bạn

Chuông báo thức bình thường đổ chuông nhưng nửa tỉnh nửa mơ bạn có thể không nhớ nó dùng để làm gì. Noler nói nhãn bạn đã viết cho cảnh báo đó:

> “Chúng ta đi học thôi.”

> “Hãy uống thuốc đi.”

> “Bây giờ hãy ra sân bay.”

Thông báo bắt đầu trên thiết bị khi cảnh báo kích hoạt. Bạn nghe thấy mục đích ngay lập tức thay vì mở ứng dụng, đọc một nhãn nhỏ hoặc thắc mắc tại sao điện thoại lại phát ra tiếng ồn. Nó đặc biệt hữu ích cho việc chạy đến trường, dùng thuốc, các cuộc hẹn, nấu ăn, làm việc theo ca và nhắc nhở chia sẻ với gia đình.

<!-- section:comparison -->
## Vì sao chọn đồng hồ báo thức viết bằng Rust này thay cho Alarmy?

Rust kết hợp hiệu năng native với tính an toàn bộ nhớ, đồng thời cho phép dùng chung lõi ứng dụng trên iOS và Android. Điều này giúp Noler nhỏ gọn và đáng tin cậy mà không kèm thư viện quảng cáo, SDK phân tích hay dịch vụ thời tiết, tử vi và giấc ngủ. Chỉ dùng Rust chưa chứng minh được khả năng tiết kiệm pin. Thiết kế của chúng tôi dựa trên mã native và việc loại bỏ tác vụ nền không liên quan đến báo thức; số liệu tiêu thụ phải được kiểm chứng trên thiết bị thật.

| Điều gì quan trọng | Báo thức không quảng cáo | Alarmy |
|---|---|---|
| **Triết lý cốt lõi** | Một chiếc đồng hồ báo thức tập trung thực hiện công việc thiết yếu | Một giấc ngủ rộng hơn và nền tảng thói quen buổi sáng |
| **Trải nghiệm đánh thức đặc trưng** | Nói to mục đích của chuông báo thức—ví dụ: “Chúng ta đi học thôi” thay vì tiếng chuông không giải thích được | Tập trung vào các tính năng báo thức lớn, nhiệm vụ đánh thức và ngủ |
| **An toàn giọng nói trên thiết bị** | TTS hệ thống trên thiết bị; Android bổ sung thêm Flite nguồn mở đi kèm khi không có sẵn công cụ TTS của hệ thống; âm thanh báo động của hệ điều hành là dự phòng cuối cùng | Xem danh sách hiện tại của Alarmy để biết hoạt động âm thanh của nó |
| **Ngăn xếp ngôn ngữ và giao diện người dùng** | Rust + Dioxus — một lõi ứng dụng và giao diện người dùng nhẹ, dùng chung, với các cầu nối cảnh báo Swift/Kotlin gốc nơi hệ điều hành yêu cầu chúng | Các tài liệu kỹ thuật công khai đề cập đến [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); toàn bộ công nghệ của phiên bản hiện tại chưa được công bố. |
| **Kích thước gói iOS** | 11.5 MB | 237.5 MB |
| **Sự khác biệt về kích thước iOS** | ≈1/20 | ≈20× |
| **Kích thước bản phát hành Android** | Gói ứng dụng 5.6 MB được tải lên Google Play | Google Play không xuất bản một kích thước gói độc lập với thiết bị |
| **Quảng cáo** | không có | Chứa quảng cáo |
| **Đăng ký hoặc mua hàng trong ứng dụng** | không có | Mua hàng trong ứng dụng và đăng ký trả phí |
| **Cần có tài khoản** | Không - không có hệ thống tài khoản | Không được so sánh; Danh sách cửa hàng của Alarmy tập trung vào danh mục tính năng rộng hơn của nó |
| **Phân tích hoặc theo dõi hành vi** | không có | Không được so sánh; Lời hứa của Noler là nó không bao gồm cả |
| **Đồng bộ đám mây** | Không có - dữ liệu cảnh báo vẫn còn trên thiết bị | Không được so sánh; Noler cố tình không có lớp mây |
| **Tính năng thời tiết** | Không | Có — Danh sách Android của Alarmy cho biết vị trí có thể được sử dụng để biết thời tiết sau khi đóng ứng dụng |
| **Tính năng tử vi** | Không | Có — được ghi lại trong trung tâm trợ giúp Android của Alarmy |
| **Theo dõi giấc ngủ** | Không | Có |
| **Theo dõi ngáy** | Không | Có |
| **Âm thanh giấc ngủ / ASMR** | Không | Có |
| **Khối lượng công việc của tính năng nền** | Công việc liên quan đến báo động; không có nguồn cấp dữ liệu trực tuyến, theo dõi, quảng cáo hoặc công việc đám mây không liên quan | Các tính năng được kích hoạt bổ sung có thể liên quan đến công việc nền và mạng; không có so sánh quyền lực được kiểm soát nào được yêu cầu |
| **Quan sát thấy hao pin qua đêm** | Khoảng 3% trong bài kiểm tra qua đêm trên cùng một chiếc điện thoại của chủ sở hữu | Khoảng 10% trong cùng một bài kiểm tra |
| **Sự khác biệt về pin trong quan sát đó** | Chỉ tiêu hao ít hơn khoảng 70% trong quan sát không chính thức này | Khoảng 3.3× cống quan sát được của Noler; không phải là điểm chuẩn chung |
| **Cách tiếp cận pin** | Tiết kiệm pin là ưu tiên hàng đầu của sản phẩm. Hoạt động báo thức thông thường hoàn toàn ngoại tuyến, tránh hoạt động Wi-Fi/dữ liệu di động cộng với việc sử dụng pin do thời tiết, tử vi, phân tích giấc ngủ, quảng cáo, phân tích và đồng bộ hóa đám mây | Bộ tính năng được kết nối lớn hơn của nó có thể thực hiện công việc xử lý và kết nối mạng ngoài việc lên lịch và đổ chuông báo thức |
| **Sử dụng mạng dữ liệu cảnh báo bình thường** | Không — cảnh báo, nhãn, cài đặt, tệp đính kèm, giọng nói và lịch trình vẫn còn trên thiết bị | Các tính năng được kết nối yêu cầu quyền truy cập mạng |
| **ngôn ngữ giao diện người dùng** | 39 lựa chọn ngôn ngữ trong ứng dụng | 31 mã ngôn ngữ duy nhất được liệt kê theo gói iOS hiện tại |
| **Ngôn ngữ giọng nói báo động** | 24 lựa chọn, sử dụng giọng nói trên thiết bị của bạn | Xem danh sách của Alarmy để biết phạm vi phủ sóng giọng nói hiện tại của nó |

So sánh kích thước sử dụng số byte gói được báo cáo trong danh mục của Apple cho các phiên bản App Store hiện tại của Hoa Kỳ vào ngày 19 tháng 9 năm 2026: Noler 11,506,688 byte và Alarmy 237,476,864 byte. Android App Bundle sử dụng phương thức phân phối chia nhỏ nên kích thước tải xuống và cài đặt trên Google Play của mỗi người sẽ khác nhau tùy theo thiết bị; 5.6 MB là gói tải lên Play hiện tại đã được Noler xác minh, không phải là thước đo kích thước cài đặt đã hứa.

Số lượng ngôn ngữ sử dụng bằng chứng công khai khác nhau: Số lượng của Noler đến từ bộ chọn ngôn ngữ trong ứng dụng, trong khi số lượng của Alarmy là số lượng mã ngôn ngữ duy nhất được báo cáo bởi gói iOS hiện tại của nó. 39 lựa chọn đề cập đến giao diện trong ứng dụng, không đảm bảo trạng thái bản địa hóa mặt tiền cửa hàng hiện tại.

Alarmy là một lựa chọn phù hợp cho những người chủ động muốn thực hiện các nhiệm vụ đánh thức, phân tích giấc ngủ, theo dõi tiếng ngáy, âm thanh khi ngủ, thời tiết, tử vi và danh mục tính năng cao cấp. Chọn Noler khi bạn muốn ứng dụng báo thức của mình vẫn là ứng dụng báo thức.

<!-- section:battery-observation -->
## Quan sát qua đêm không chính thức của chúng tôi: 3% so với 10%

Trên điện thoại của chủ sở hữu, thử nghiệm qua đêm cho thấy Noler sử dụng khoảng 3% pin so với khoảng 10% với Alarmy. Nói cách khác, Alarmy đã sử dụng lượng pin nhiều hơn khoảng 3.3 lần trong lần quan sát qua đêm đó, trong khi mức tiêu hao của Noler thấp hơn khoảng 70%.

Đây là sự so sánh trực tiếp, trên cùng một chiếc điện thoại chứ không phải là chứng nhận của phòng thí nghiệm được kiểm soát. Kết quả về pin khác nhau tùy theo điện thoại, tình trạng pin, hệ điều hành, cường độ tín hiệu, cài đặt báo thức và các tính năng được bật. Con số chính xác không được đảm bảo trên mọi thiết bị nhưng lý do ưu tiên pin đã được tích hợp sẵn trong sản phẩm.

<!-- section:battery-workload -->
## Ít kết nối mạng hơn có nghĩa là tốn ít pin hơn

Mỗi tính năng nền bổ sung đều có chi phí. Thời tiết phải được lấy. Nội dung tử vi phải được tìm nạp. Theo dõi giấc ngủ và ngáy đòi hỏi phải theo dõi mở rộng. Quảng cáo và phân tích yêu cầu mã, lưu lượng truy cập mạng và xử lý. Tài khoản đám mây yêu cầu đồng bộ hóa.

Noler không làm điều đó trong quá trình sử dụng báo động thông thường. Nó không cần Wi-Fi hoặc dữ liệu di động để lưu trữ, lên lịch, nói hoặc đổ chuông báo thức. Bằng cách duy trì hoàn toàn ngoại tuyến cho công việc cốt lõi của mình, nó tránh đánh thức đài phát thanh mạng để biết thời tiết, tử vi, quảng cáo, phân tích, tài khoản hoặc lưu lượng đồng bộ hóa trên đám mây.

Sản phẩm đưa ra lựa chọn tiết kiệm pin bền bỉ nhất: không bắt đầu công việc không liên quan ngay từ đầu. Ít trách nhiệm nền hơn đồng nghĩa với việc có ít cơ hội tiêu tốn thời gian CPU, thời gian Wi-Fi/vô tuyến di động, bộ nhớ và pin hơn công việc mà báo thức thực sự cần.

### Cách kiểm tra so sánh pin bằng số

Trình mô phỏng không thể cung cấp so sánh pin điện thoại hợp lệ: nó chạy trên bộ xử lý, radio và nguồn điện của máy tính. Mọi tuyên bố “sử dụng ít pin hơn X lần” trong tương lai sẽ đến từ các thử nghiệm thiết bị vật lý phù hợp.

Điểm chuẩn sẽ chạy cả hai ứng dụng trên cùng một kiểu máy, phiên bản hệ điều hành, phạm vi tình trạng pin, mạng, độ sáng, âm lượng và nhiệt độ. Nó sẽ đo lường hai tình huống được tiết lộ riêng biệt: cảnh báo cơ bản tương tự và trải nghiệm mặc định thông thường của mỗi ứng dụng. Thứ tự kiểm tra sẽ được luân phiên, các ứng dụng không liên quan sẽ bị dừng, các thiết bị sẽ khởi động ở cùng mức sạc và nhiệt độ, đồng thời mỗi kịch bản sẽ được lặp lại ít nhất năm lần.

Tính năng đo lường của Android sẽ sử dụng số liệu thống kê về pin của hệ thống và dữ liệu nguồn phần cứng khi được hỗ trợ. Phép đo iOS sẽ sử dụng dấu vết năng lượng của Instruments trên iPhone thực. Kết quả sẽ báo cáo thời lượng thử nghiệm, cài đặt chính xác, mức tiêu thụ năng lượng trung vị, phạm vi từ lần chạy này đến lần chạy khác và các tệp dấu vết thô. Cho đến khi có bằng chứng được kiểm soát đó, kết quả 3% so với 10% được công bố vẫn được xác định rõ ràng là quan sát qua đêm trên thiết bị thực của chủ sở hữu chứ không phải là sự đảm bảo cho mọi điện thoại.

<!-- section:package-size -->
## Một gói nhỏ với bộ tính năng tập trung

Trên iOS, gói Noler hiện tại có dung lượng khoảng 11.5 MB, so với 237.5 MB của Alarmy—nhỏ hơn khoảng 20 lần. Android App Bundle hiện tại được tải lên Google Play có dung lượng 5.6 MB.

Sự khác biệt đó không phải là ngẫu nhiên. Noler không kết hợp nền tảng giấc ngủ, hệ thống quảng cáo, lớp phân tích, hệ thống tài khoản đám mây, nguồn cấp tin tức, dịch vụ thời tiết hoặc nguồn cấp dữ liệu tử vi. Bạn tải xuống đồng hồ báo thức và nhận được đồng hồ báo thức.

<!-- section:privacy -->
## Riêng tư theo thiết kế

Việc sử dụng cảnh báo bình thường sẽ không gửi dữ liệu cảnh báo đi bất cứ đâu.

- Không có ID quảng cáo
- Không có tài khoản hoặc đăng nhập
- Không có SDK phân tích
- Không theo dõi hành vi
- Không sao lưu hoặc đồng bộ hóa trên đám mây
- Không có dịch vụ dữ liệu cảnh báo từ xa
- Không có yêu cầu mạng có nguồn gốc chéo

Bản ghi cảnh báo, nhãn, cài đặt, tệp đính kèm, giọng nói và lập lịch thông báo vẫn còn trên thiết bị của bạn. Các trang Điều khoản, Quyền riêng tư và hỗ trợ trực tiếp chỉ mở khi bạn chọn chúng một cách rõ ràng trong Cài đặt.

<!-- section:speech-fallback -->
## Một báo thức nói chuyện giải thích lý do tại sao nó đổ chuông

Đặt nhãn cho cảnh báo như “Trường học”, “Y học”, “Sân bay” hoặc “Gọi cho mẹ”. Khi nó đổ chuông, Noler có thể nói to nhãn đó bằng giọng nói có sẵn trên thiết bị của bạn.

Chiến lược âm thanh trên thiết bị của nó dành riêng cho nền tảng. Cả hai nền tảng đều sử dụng tính năng chuyển văn bản thành giọng nói của hệ thống cho nhãn cảnh báo. Trên Android, giọng nói Flite mã nguồn mở nhẹ, đi kèm sẽ đảm nhiệm vai trò này khi thiết bị không có công cụ TTS hệ thống có thể sử dụng được. Âm thanh báo động của hệ điều hành vẫn là tầng an toàn cuối cùng.

Chỉ trên Android, bộ máy mã nguồn mở Flite đi kèm cung cấp giọng tiếng Anh dự phòng nếu không có bộ máy giọng nói hệ thống dùng được. Giọng đọc phụ thuộc ngôn ngữ đã cài. Chế độ tùy chọn giữ ứng dụng hoạt động mặc định tắt và có thể dùng thêm pin.

Âm thanh cảnh báo dự phòng nhằm mục đích ngăn không cho giọng nói không có sẵn tạo ra cảnh báo im lặng.

<!-- section:features -->
## Những gì bạn nhận được

- Báo thức một lần và lặp lại các ngày trong tuần
- Nhãn cảnh báo bằng giọng nói
- Nút lớn để báo lại hoặc dừng báo thức
- Một cái nhìn rõ ràng về báo thức theo lịch trình tiếp theo
- Tệp đính kèm và cài đặt cục bộ
- Bộ nhớ trên thiết bị không có tài khoản
- Giao diện tối, không bị phân tâm
- Hỗ trợ iPhone, iPad và Android
- 39 lựa chọn ngôn ngữ giao diện người dùng
- 24 lựa chọn ngôn ngữ giọng nói báo động

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Danh sách cảnh báo Noler và màn hình cảnh báo tiếp theo">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Màn hình đồng hồ báo thức Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Màn hình cài đặt cảnh báo Noler">
</div>

<!-- section:ui-languages -->
## 39 lựa chọn ngôn ngữ giao diện

Tiếng Ả Rập, Tiếng Catalan, Tiếng Trung (Giản thể), Tiếng Trung (Phồn thể), Tiếng Croatia, Tiếng Séc, Tiếng Đan Mạch, Tiếng Hà Lan, Tiếng Anh (Úc), Tiếng Anh (Canada), Tiếng Anh (Anh), Tiếng Anh (Mỹ), Tiếng Phần Lan, Tiếng Pháp, Tiếng Pháp (Canada), Tiếng Đức, Tiếng Hy Lạp, Tiếng Do Thái, Tiếng Hindi, Tiếng Hungary, Tiếng Indonesia, Tiếng Italy, Tiếng Nhật, Tiếng Hàn, Tiếng Mã Lai, Tiếng Na Uy (Bokmål), Tiếng Ba Lan, Tiếng Bồ Đào Nha (Brazil), Tiếng Bồ Đào Nha (Châu Âu), Tiếng Romania, Tiếng Nga, Tiếng Slovak, Tiếng Tây Ban Nha, Tiếng Tây Ban Nha (Mỹ La tinh), Tiếng Thụy Điển, Tiếng Thái, Tiếng Thổ Nhĩ Kỳ, Tiếng Ukraina và Tiếng Việt.

<!-- section:voice-languages -->
## 24 lựa chọn ngôn ngữ giọng nói báo động

Tiếng Ả Rập (Ai Cập), Tiếng Bangla (Bangladesh), Tiếng Hà Lan (Hà Lan), Tiếng Anh (Ấn Độ), Tiếng Anh (Mỹ), Tiếng Pháp (Pháp), Tiếng Đức (Đức), Tiếng Hindi (Ấn Độ), Tiếng Indonesia (Indonesia), Tiếng Italy (Italy), Tiếng Nhật (Nhật Bản), Tiếng Hàn (Hàn Quốc), Tiếng Marathi (Ấn Độ), Tiếng Ba Lan (Ba Lan), Tiếng Bồ Đào Nha (Brazil), Tiếng Romania (Romania), Tiếng Nga (Nga), Tiếng Tây Ban Nha (Hoa Kỳ), Tiếng Tamil (Ấn Độ), Tiếng Telugu (Ấn Độ), Tiếng Thái (Thái Lan), Tiếng Thổ Nhĩ Kỳ (Thổ Nhĩ Kỳ), Tiếng Ukraina (Ukraina) và Tiếng Việt (Việt Nam).

Tính khả dụng và cách phát âm của giọng nói phụ thuộc vào giọng nói chuyển văn bản thành giọng nói do nhà sản xuất thiết bị hoặc hệ điều hành cài đặt. Dự phòng Flite đi kèm chỉ dành cho Android và nói tiếng Anh; cả hai nền tảng đều có tính năng dự phòng âm thanh báo động khi không thể sử dụng giọng nói.

<!-- section:downloads -->
## Tải xuống đồng hồ báo thức miễn phí

| Nền tảng | Tải xuống chính thức |
|---|---|
| iPhone và iPad | [Tải xuống trên Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Tải trên Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Nguồn so sánh

- [Noler trên App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler trên Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy trên App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy trên Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Trợ giúp Alarmy trên Android: thiết lập tử vi](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Các tính năng của cửa hàng và kích thước gói có thể thay đổi. Kiểm tra so sánh vào ngày 19 tháng 9 năm 2026. Alarmy là nhãn hiệu của chủ sở hữu tương ứng; dự án này không được liên kết hoặc xác nhận bởi Alarmy hoặc DelightRoom.

---

Kho này cung cấp thông tin sản phẩm, không công bố mã nguồn độc quyền của ứng dụng. Bộ máy giọng nói Flite đi kèm là mã nguồn mở.

<div align="center">
  <strong>Thức dậy với đồng hồ báo thức tập trung, không có quảng cáo hoặc theo dõi.</strong>
</div>
