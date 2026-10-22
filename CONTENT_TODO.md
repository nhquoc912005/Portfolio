# Nội dung cần bổ sung

Đối chiếu master prompt và dữ liệu hiện tại ngày **22/10/2026**. Các mục chưa xác nhận giữ `null`, mảng rỗng hoặc được ẩn hợp lý; không tự điền thành tích, thời gian, đóng góp hay hình ảnh giả.

## Ảnh chân dung

- [x] Chủ sở hữu đã cung cấp ảnh chân dung để sử dụng trên portfolio.
- [x] Đã thêm `public/assets/profile/nguyen-huu-quoc.jpg` và khai báo `profile.portrait` với alt song ngữ ở Home và About.

Website sử dụng đúng ảnh chân dung do chủ sở hữu cung cấp.

## Câu chuyện cá nhân 2023–2024

- [ ] Bổ sung lý do chọn ngành Hệ thống thông tin quản lý, trải nghiệm năm đầu và những thay đổi trong định hướng.
- [ ] Xác nhận các hoạt động, môn học hoặc sự kiện muốn kể, cùng thời điểm và bài học thực tế.

Hiện timeline chỉ ghi nhận bắt đầu đại học năm 2023 và hoạt động nghiên cứu năm học 2024–2025 theo thông tin được cung cấp. Không suy ra câu lạc bộ, giải thưởng hoặc hoạt động khác.

## Thời gian của bốn dự án

- [ ] **CAMSiN:** ngày/tháng bắt đầu, kết thúc hoặc trạng thái đang thực hiện.
- [ ] **Kiểm thử xe trung chuyển:** ngày/tháng bắt đầu, kết thúc.
- [ ] **FLIC Dashboard:** ngày/tháng bắt đầu, kết thúc hoặc trạng thái đang thực hiện.
- [ ] **Cây Lúa AI:** ngày/tháng bắt đầu, kết thúc hoặc trạng thái đang thực hiện.

Giữ `startDate: null`, `endDate: null` và chưa đưa bốn dự án vào timeline theo thời gian. Không dùng ngày commit, ngày sửa file hoặc tên thư mục làm ngày thực hiện. Đã có ngày từ đầu vào cho Văn bản (01–05/2026), Tạp hóa Minh (09–12/2025) và nghiên cứu thực phẩm xanh (10/2025–hiện tại).

## Đóng góp cá nhân trong từng dự án nhóm

- [ ] Xác nhận nhiệm vụ cụ thể của Quốc trong CAMSiN, Cây Lúa AI, xe trung chuyển và FLIC.
- [ ] Với các mô tả đã có từ CV cho Văn bản, Tạp hóa Minh và nghiên cứu thực phẩm xanh, bổ sung ví dụ, tài liệu hoặc đầu ra được phép công khai nếu có.
- [ ] Chỉ bổ sung phân công nhóm, thiết kế kiến trúc, phát triển model, số test, số bug hay kết quả định lượng khi có xác nhận/bằng chứng phù hợp.

Vai trò đã được cung cấp: Team Leader ở Văn bản, CAMSiN, Cây Lúa AI, Tạp hóa Minh; Team Member ở xe trung chuyển và FLIC; thành viên nghiên cứu ở thực phẩm xanh. Vai trò không chứng minh mọi chức năng trong repository do cá nhân thực hiện.

## Screenshot và gallery dự án

- [ ] Bổ sung screenshot thật của các màn hình có thể công khai; ghi tên màn hình, dự án và mô tả `vi/en`.
- [ ] Với CAMSiN và Cây Lúa AI, ưu tiên ảnh màn hình điện thoại đúng tỷ lệ; với web, dùng ảnh desktop/mobile thực tế.
- [ ] Duyệt ảnh để loại thông tin đăng nhập, token, kết nối nội bộ, dữ liệu khách hàng và hội thoại riêng tư.
- [ ] Thêm ảnh đã duyệt vào `public/assets/projects/<slug>/` và `images` trong `src/data/projects.ts`.

Gallery đã có cơ chế phóng to ảnh, điều hướng và tự ẩn khi chưa có ảnh. Đồ họa CSS/icon hiện tại được ghi rõ là minh họa ý tưởng. Không tự sao chép ảnh tìm thấy trong repository khi chưa duyệt nội dung và quyền sử dụng.

## GitHub của Tạp hóa Minh

- [x] Chủ sở hữu đã cung cấp repository `https://github.com/nhquoc912005/49K142.10`.
- [x] Đã thêm link GitHub, tài liệu đặc tả SRS và tài liệu thiết kế hệ thống vào dự án.
- [ ] Bổ sung bằng chứng về công nghệ/kiến trúc triển khai nếu có mã nguồn ứng dụng.

Repository hiện lưu tài liệu phân tích và thiết kế, chưa có mã nguồn ứng dụng để xác minh stack. `technologies` vẫn để trống và `architecture` giữ `null`; vai trò và thời gian dựa trên thông tin chủ sở hữu cung cấp.

## Tài liệu phân tích nghiệp vụ

- [ ] Bổ sung tài liệu BA thật có thể công khai: mô tả quy trình, yêu cầu, Use Case, SRS, BPMN/flowchart hoặc ERD nếu thực sự đã có.
- [ ] Xác nhận tài liệu thuộc dự án nào và vai trò cá nhân trong việc tạo tài liệu.
- [ ] Duyệt nội dung trước khi thêm link vào `documents` của dự án.

Chưa tự nhận đã lập SRS, Use Case hoặc BPMN. Link test plan/test case công khai là bằng chứng kiểm thử, không thay thế tài liệu BA cá nhân.

## Chứng chỉ dạng ảnh

- [ ] Bổ sung ảnh/chứng nhận Tableau và phiếu điểm TOEIC được phép công khai.
- [ ] Xác nhận tên chứng chỉ, tổ chức cấp và ngày cấp nếu muốn hiển thị.
- [ ] Thêm ảnh vào `public/assets/achievements/`, rồi điền `image` với alt song ngữ và `kind: 'certificate'` trong `src/data/achievements.ts`; gallery phóng to đã có sẵn.

Hiện chỉ trình bày nội dung được cung cấp bằng chữ; không tự tạo số chứng chỉ, ảnh chứng nhận hoặc thành tích nghiên cứu.

## CV PDF chính thức

- [ ] Chủ sở hữu chọn bản CV PDF chính thức trong các ứng viên ở `D:\CV` hoặc cung cấp bản cập nhật.
- [ ] Xác nhận nội dung PDF được phép tải công khai.
- [ ] Chép bản đã chọn thành `public/assets/documents/cv.pdf`, kiểm tra `HEAD` trả MIME `application/pdf` rồi tải lại trang.

Chưa có bản chính thức được chọn; không tự sao chép CV ứng viên. Thiếu CV là trạng thái có chủ đích. Nút tải chỉ hoạt động khi file PDF thật được phục vụ đúng MIME, không nhận HTML từ SPA fallback.

Hướng dẫn cập nhật nằm tại [README.md](README.md); nguồn đã kiểm tra nằm tại [docs/CONTENT_SOURCES.md](docs/CONTENT_SOURCES.md).
