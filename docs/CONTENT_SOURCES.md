# Nguồn nội dung và phạm vi xác minh

Ngày đối chiếu: **2026-10-22**, múi giờ người dùng **Asia/Saigon**. Tài liệu ghi nguồn của nội dung portfolio và các giới hạn bằng chứng; không phải báo cáo nghiệm thu các ứng dụng dự án cũ.

## Nguyên tắc sử dụng nguồn

- Thông tin cá nhân, vai trò, học vấn, chứng chỉ và các mốc CV đến từ master prompt/thông tin CV do chủ sở hữu cung cấp.
- Các repository công khai được đọc qua GitHub, GitHub API tree và các file source chọn lọc. Không chạy ứng dụng gốc, không kết nối database, không kiểm tra inference thật và không sửa/push repository gốc.
- Chức năng/stack đọc được từ repository mô tả **sản phẩm của nhóm**; không tự chứng minh đóng góp cá nhân, khả năng chạy hiện tại, chất lượng sản phẩm hay kết quả kiểm thử.
- Không sao chép `.env`, thông tin đăng nhập, khóa, dữ liệu khách hàng hoặc hội thoại riêng tư vào portfolio. Ảnh trong repository chưa được duyệt không được tự dùng làm gallery.

## Snapshot repository

GitHub `main` có thể thay đổi sau ngày đối chiếu; SHA dưới đây ghi snapshot source đã đọc.

| Repository | SHA đã đối chiếu |
|---|---|
| [LTMB_Nhom2 / CAMSiN](https://github.com/nhquoc912005/LTMB_Nhom2) | `dbf1d41b8ff78c4e3bec01441cb1613607bd5121` |
| [Project_AI_Nhom2 / Cây Lúa AI](https://github.com/nhquoc912005/Project_AI_Nhom2) | `702c687f806533b2b855fbabf9dbef322990aeb1` |
| [LapTrinhWeb_Nhom3 / Văn bản](https://github.com/nhquoc912005/LapTrinhWeb_Nhom3) | `e8c91c32b991c07395f61fb8455fbd5bd88899de` |
| [07_KiemThuPhanMem / Xe trung chuyển](https://github.com/nhquoc912005/07_KiemThuPhanMem) | `1391659dbfa9a1a1354155023344204b3f85701a` |
| [TTH_Dashboard-Webchat-CSKH / FLIC](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH) | `b79008acee38d6154c6c97559e7d9485d0f70276` |
| [49K142.10 / Tạp hóa Minh](https://github.com/nhquoc912005/49K142.10) | `24ae85507ef39865eba8b15acba94c3d9a25f862` |

## CAMSiN

Tên ứng dụng CAMSiN được ghi trong [strings.xml](https://github.com/nhquoc912005/LTMB_Nhom2/blob/dbf1d41b8ff78c4e3bec01441cb1613607bd5121/app/src/main/res/values/strings.xml). Source chứa dashboard, đặt phòng, quản lý/sơ đồ phòng, nhận–trả phòng, dịch vụ/tài sản, hóa đơn/thanh toán và tài khoản.

Bằng chứng kỹ thuật:

- [Gradle app](https://github.com/nhquoc912005/LTMB_Nhom2/blob/dbf1d41b8ff78c4e3bec01441cb1613607bd5121/app/build.gradle.kts): Java 11, Android, Retrofit/Gson và OkHttp.
- [MainActivity.java](https://github.com/nhquoc912005/LTMB_Nhom2/blob/dbf1d41b8ff78c4e3bec01441cb1613607bd5121/app/src/main/java/com/project_mobile/MainActivity.java): điều hướng các fragment nghiệp vụ.
- [ApiService.java](https://github.com/nhquoc912005/LTMB_Nhom2/blob/dbf1d41b8ff78c4e3bec01441cb1613607bd5121/app/src/main/java/com/project_mobile/network/ApiService.java): endpoint booking, phòng, dịch vụ, check-in/out, hóa đơn và user.
- [Backend package.json](https://github.com/nhquoc912005/LTMB_Nhom2/blob/dbf1d41b8ff78c4e3bec01441cb1613607bd5121/api/hotel-api/package.json), [db.js](https://github.com/nhquoc912005/LTMB_Nhom2/blob/dbf1d41b8ff78c4e3bec01441cb1613607bd5121/api/hotel-api/db.js), [schema_v2.sql](https://github.com/nhquoc912005/LTMB_Nhom2/blob/dbf1d41b8ff78c4e3bec01441cb1613607bd5121/database/schema_v2.sql): Express, PostgreSQL qua `pg`; cấu hình hỗ trợ Supabase PostgreSQL.

Ứng dụng viết bằng **Java/XML**; Kotlin DSL trong file Gradle không chứng minh ngôn ngữ ứng dụng là Kotlin. Vai trò Team Leader do chủ sở hữu xác nhận. Chưa xác nhận ngày, nhiệm vụ cá nhân cụ thể hoặc runtime.

## Cây Lúa AI

[README](https://github.com/nhquoc912005/Project_AI_Nhom2/blob/702c687f806533b2b855fbabf9dbef322990aeb1/README.md) mô tả nhận diện bệnh lá lúa bằng Flutter, FastAPI và PyTorch ResNet18.

- [pubspec.yaml](https://github.com/nhquoc912005/Project_AI_Nhom2/blob/702c687f806533b2b855fbabf9dbef322990aeb1/mobile_flutter/pubspec.yaml): Flutter/Dart, camera, image_picker, Dio và Hive.
- [model_loader.py](https://github.com/nhquoc912005/Project_AI_Nhom2/blob/702c687f806533b2b855fbabf9dbef322990aeb1/backend/app/inference/model_loader.py): ResNet18 với checkpoint PyTorch.
- [main.py](https://github.com/nhquoc912005/Project_AI_Nhom2/blob/702c687f806533b2b855fbabf9dbef322990aeb1/backend/app/main.py), [schemas.py](https://github.com/nhquoc912005/Project_AI_Nhom2/blob/702c687f806533b2b855fbabf9dbef322990aeb1/backend/app/schemas.py): `/health`, `/predict`, nhãn, confidence, low-confidence, top 3 và thông tin bệnh.
- [result_screen.dart](https://github.com/nhquoc912005/Project_AI_Nhom2/blob/702c687f806533b2b855fbabf9dbef322990aeb1/mobile_flutter/lib/screens/result/result_screen.dart): kết quả và lưu cục bộ.

README nêu model weights và dataset gốc không công khai trong repository. Không suy ra accuracy, macro F1, khả năng suy luận hiện tại hay triển khai production. Vai trò Team Leader do chủ sở hữu xác nhận; ngày và đóng góp cụ thể chưa xác nhận.

## Quản lý Văn bản và Điều hành

[README](https://github.com/nhquoc912005/LapTrinhWeb_Nhom3/blob/e8c91c32b991c07395f61fb8455fbd5bd88899de/README.md) và các Django app mô tả văn bản đến/đi, hồ sơ và công việc. ATAX và LapTrinhWeb_Nhom3 là cùng một dự án theo đầu vào của chủ sở hữu.

- [requirements.txt](https://github.com/nhquoc912005/LapTrinhWeb_Nhom3/blob/e8c91c32b991c07395f61fb8455fbd5bd88899de/he_thong_quan_ly_van_ban/requirements.txt) pin Django **6.0.3**; số **4.2.8** trong README đã cũ.
- [settings.py](https://github.com/nhquoc912005/LapTrinhWeb_Nhom3/blob/e8c91c32b991c07395f61fb8455fbd5bd88899de/he_thong_quan_ly_van_ban/he_thong_quan_ly_van_ban/settings.py): Django Templates, SQLite mặc định; `DATABASE_URL` qua dj-database-url hỗ trợ PostgreSQL.
- [Account model](https://github.com/nhquoc912005/LapTrinhWeb_Nhom3/blob/e8c91c32b991c07395f61fb8455fbd5bd88899de/he_thong_quan_ly_van_ban/apps/accounts/models.py): các vai trò admin, lãnh đạo, văn thư, chuyên viên.

Vai trò Team Leader, thời gian **01–05/2026**, hỗ trợ Models/Views/Templates, kiểm tra luồng dữ liệu/logic và phối hợp debug đến từ thông tin CV đã cung cấp. Source xác nhận stack/module của nhóm; chưa chạy lại toàn hệ thống và không tự nhận đã tạo SRS hoặc Use Case.

## Xe trung chuyển và kiểm thử

[README](https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/1391659dbfa9a1a1354155023344204b3f85701a/README.md) mô tả quản lý xe trung chuyển, lập lộ trình, giao diện điều phối viên/tài xế và cập nhật trạng thái chuyến. Stack source: React/TypeScript/Vite, Leaflet, Node/Express, PostgreSQL qua `pg` với Supabase.

[tests/selenium-java/pom.xml](https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/1391659dbfa9a1a1354155023344204b3f85701a/tests/selenium-java/pom.xml) xác nhận Java, Selenium, TestNG và Maven. Tài liệu `docs/test-plan.md` có thông tin môi trường cũ; không dùng dòng SQL Server trong tài liệu đó để thay thế stack hiện tại.

Các link công khai đã kiểm tra HTTP 200 ngày đối chiếu:

- [Test-case.xlsx](https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/main/docs/Test-case.xlsx).
- [BugTrackingList.xlsx](https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/main/docs/BugTrackingList.xlsx).
- [Test plan](https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/main/docs/test-plan.md), [manual test cases](https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/main/docs/test-cases.md).

HTTP 200 chứng minh truy cập file tại thời điểm kiểm tra, không chứng minh test đã pass. Vai trò Team Member do chủ sở hữu xác nhận; chưa xác nhận ngày hoặc phần test do cá nhân thực hiện. Không sao chép dữ liệu kiểm thử/tài khoản mẫu vào website.

## FLIC Dashboard

[README tại snapshot](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/b79008acee38d6154c6c97559e7d9485d0f70276/README.md) mô tả React/Vite → FastAPI → Microsoft SQL Server và Hugging Face Inference Providers. Runtime hiện tại đã loại service model local; không dùng kiến trúc `ml-service`, Redis hoặc Celery cũ làm mô tả hiện hành.

- [requirements.backend.txt](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/b79008acee38d6154c6c97559e7d9485d0f70276/requirements.backend.txt): FastAPI, huggingface_hub và driver SQL Server.
- [package.json](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/b79008acee38d6154c6c97559e7d9485d0f70276/package.json): frontend và lệnh Vitest/Playwright.
- [Automation pom.xml](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/b79008acee38d6154c6c97559e7d9485d0f70276/12.07.2026/pom.xml): Java, Selenium, TestNG, Maven.
- [Traceability](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/main/12.07.2026/docs/TEST_CASE_TRACEABILITY.md): có nhiều trạng thái automated, partial, blocked và cần dữ liệu; không đồng nghĩa mọi ca đã chạy thành công.

Các file [FLIC_Test_Plan.xlsx](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/main/FLIC_Test_Plan.xlsx) và [FLIC_Test_Cases_By_Module.xlsx](https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/main/FLIC_Test_Cases_By_Module.xlsx) đã được kiểm tra truy cập HTTP 200 ngày đối chiếu.

Vai trò Team Member do chủ sở hữu xác nhận. Chưa xác nhận ngày, nhiệm vụ cá nhân hoặc runtime. Không quy việc phát triển AI model cho chủ sở hữu portfolio; không đưa hội thoại khách hàng vào website.

## Tạp hóa Minh

Chủ sở hữu cung cấp [repository 49K142.10](https://github.com/nhquoc912005/49K142.10) cho dự án. README mô tả bài tập nhóm Phân tích thiết kế hệ thống. Đã đọc README và danh sách file tại SHA ở trên; các thư mục chứa tài liệu thu thập yêu cầu, đặc tả và thiết kế hệ thống.

Đã xác nhận hai file công khai tồn tại và raw URL tại snapshot trả HTTP 200: `02. Phân tích và thiết kế hệ thống/49K142.10.SRS-Tài liệu đặc tả.docx` và `02. Phân tích và thiết kế hệ thống/49K142.10_Tài liệu thiết kế hệ thống.docx`. Portfolio liên kết tới các file này; chưa kiểm tra toàn bộ nội dung DOCX hoặc quy tác giả tài liệu cho cá nhân.

Repository chưa có mã nguồn ứng dụng để đối chiếu công nghệ và kiến trúc triển khai. Giữ `technologies: []`, `architecture: null`; không suy ra stack, kết quả chạy hay chất lượng sản phẩm từ tên tài liệu. Vai trò Team Leader và thời gian 09–12/2025 vẫn theo thông tin chủ sở hữu cung cấp.

## Thông tin từ chủ sở hữu/CV và các mục bổ sung

| Nội dung | Phạm vi được sử dụng | Còn thiếu |
|---|---|---|
| Hồ sơ cá nhân | Nguyễn Hữu Quốc; MIS, Đại học Kinh tế – Đại học Đà Nẵng; học từ 2023; email/GitHub từ prompt; ảnh chân dung do chủ sở hữu cung cấp trực tiếp, lưu tại `public/assets/profile/nguyen-huu-quoc.jpg` | Câu chuyện 2023–2024, CV chính thức được chọn |
| Tạp hóa Minh | Team Leader, 09–12/2025; phân tích quy trình bán hàng, chức năng, tham gia CSDL, theo dõi tiến độ và hỗ trợ kiểm thử; repository và link SRS/thiết kế được bổ sung | Stack triển khai được kiểm chứng, ảnh sản phẩm và bằng chứng đóng góp vào từng tài liệu |
| Thực phẩm xanh | Thành viên nghiên cứu, 10/2025–hiện tại; thu thập/làm sạch review, hỗ trợ phân tích cảm xúc và insight/marketing | Kết quả và tài liệu nghiên cứu được phép công khai; không tạo số liệu hoặc kết luận mới |
| Hoạt động/chứng chỉ | Nghiên cứu cấp Khoa năm học 2024–2025, chứng chỉ Tableau và TOEIC 575 | Ảnh chứng nhận, ngày/tổ chức cấp nếu cần; chưa có thông tin giải thưởng |

Nhiều bản CV ứng viên tồn tại cạnh workspace ở `D:\CV`, nhưng chưa có bản nào được chủ sở hữu chỉ định làm PDF tải công khai. Website cố ý chưa kèm `cv.pdf`.

## Portfolio và hướng dẫn phát hành

Các kiểm tra build/lint/unit/coverage/E2E của **portfolio mới** thuộc quy trình riêng trong [README](../README.md), không thay thế bằng chứng runtime cho các repository gốc.

Hướng dẫn Vercel được đối chiếu ngày 2026-10-22 với [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), trang chính thức ghi cập nhật 26/08/2026. Source portfolio dùng `vercel.json` cho SPA deep links và build output `dist`; chưa deploy hay commit/push trong phạm vi tài liệu này.

Các phần cần bổ sung được tập trung tại [CONTENT_TODO.md](../CONTENT_TODO.md).
