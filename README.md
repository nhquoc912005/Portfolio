# Nguyễn Hữu Quốc — Personal Portfolio

Portfolio song ngữ Việt/Anh kể lại hành trình học tập từ 2023, dự án, nghiên cứu và định hướng ở giao điểm công nghệ và kinh doanh. Mã nguồn frontend nằm tại `D:\CV\Personal Portfolio Website`; chưa triển khai công khai.

## Cài đặt và chạy

Dùng Node.js 22.12+ và npm. Vite hiện tại yêu cầu Node `^20.19.0 || >=22.12.0`; Node 22.12+ là lựa chọn thống nhất cho dự án. Website không cần database, API riêng hay biến môi trường để khởi động.

```powershell
cd "D:\CV\Personal Portfolio Website"
npm install
npm run dev
```

Mở URL Vite in ra trong terminal, mặc định `http://127.0.0.1:5173`. Với `package-lock.json` đã có, có thể dùng `npm ci` để cài sạch theo lockfile.

```powershell
npm run build
npm run preview
```

`build` kiểm tra TypeScript và xuất website tĩnh vào `dist/`. `preview` phục vụ bản build ở `http://127.0.0.1:4173` theo mặc định; cần build trước.

## Kiểm tra chất lượng

```powershell
npm run lint
npm test
npm run test:coverage
npx playwright install chromium
npm run test:e2e
```

- `lint`: ESLint cho mã nguồn.
- `test`: Vitest với React Testing Library và jsdom.
- `test:coverage`: báo cáo V8 ở `coverage/`; cấu hình yêu cầu 80% cho lines, statements, functions và branches.
- `test:e2e`: Playwright Chromium tự mở Vite tại `127.0.0.1:4175`, theo `playwright.config.ts`. Trace/screenshot khi có lỗi nằm trong `test-results/`.

Đây là các lệnh xác minh. Tài liệu không suy ra số test pass hoặc kết quả runtime chỉ từ sự tồn tại của mã kiểm thử; kết quả lần chạy thực tế được báo riêng.

## Route và kiến trúc

| Đường dẫn | Nội dung |
|---|---|
| `/` | Trang chủ, giới thiệu, hành trình và dự án nổi bật |
| `/about` | Giới thiệu, học vấn, định hướng và kỹ năng |
| `/journey` | Timeline học tập và trải nghiệm |
| `/projects` | Danh sách, tìm kiếm và bộ lọc dự án |
| `/projects/:slug` | Case study theo slug |
| `/achievements` | Hoạt động học thuật, chứng chỉ và tiếng Anh |
| Đường dẫn khác | Trang 404 |

Slug hiện có: `document-workflow`, `cay-lua-ai`, `shuttle-testing`, `flic-dashboard`, `camsin`, `minh-grocery`, `green-food-research`.

| File/thư mục | Trách nhiệm |
|---|---|
| `src/main.tsx`, `src/App.tsx` | Khởi động React, provider ngôn ngữ và route; lazy load các trang phụ |
| `src/components/layout/Layout.tsx` | Header, menu mobile, footer, liên hệ, cuộn trang và metadata |
| `src/data/profile.ts` | Tên, email, GitHub, học vấn, giới thiệu, định hướng, ảnh chân dung, CV |
| `src/data/projects.ts` | Nội dung, vai trò, thời gian, stack, ảnh và tài liệu dự án |
| `src/data/journey.ts` | Các cột mốc timeline |
| `src/data/skills.ts`, `src/data/achievements.ts` | Kỹ năng và hoạt động/chứng chỉ |
| `src/types/index.ts` | Type dùng chung, gồm `Project`, `ProjectImage` |
| `src/i18n/` | Bản dịch giao diện, nhãn dự án và trạng thái ngôn ngữ |
| `src/pages/`, `src/sections/`, `src/components/` | Trang, section và thành phần tái sử dụng |
| `src/components/projects/ImageGallery.tsx` | Gallery, phóng to ảnh, điều khiển bàn phím |
| `src/hooks/useCvAsset.ts` | Kiểm tra CV trước khi bật tải |
| `src/styles/` | Các file CSS tách theo giao diện; `index.css` nhập theme, layout, responsive và chuyển động |
| `public/assets/` | File tĩnh truy cập qua `/assets/...` |
| `index.html`, `public/favicon.svg`, `public/assets/social-card.svg` | Metadata ban đầu, favicon, ảnh chia sẻ |
| `vite.config.ts`, `playwright.config.ts` | Build, unit test, coverage và E2E |
| `vercel.json` | Build/output, SPA rewrites và HTTP headers trên Vercel |

Website dùng dữ liệu tĩnh. Liên hệ email dùng `mailto:`, không có dịch vụ gửi mail phía server. Ngôn ngữ lưu qua khóa `portfolio-language` trong localStorage và vẫn hoạt động khi storage không khả dụng. Minh họa dự án hiện tại là đồ họa CSS/icon có nhãn “Minh họa ý tưởng”.

## Cập nhật nội dung

### Thông tin cá nhân

Sửa `src/data/profile.ts` để đổi tên, email, GitHub, học vấn, phần giới thiệu và định hướng; cập nhật cả `vi/en`. Kỹ năng nằm tại `src/data/skills.ts`, hoạt động và chứng chỉ tại `src/data/achievements.ts`. Kiểm tra lại metadata trong `index.html` khi đổi tên hoặc thông tin chia sẻ.

### Thêm dự án

Thêm object trong `src/data/projects.ts` theo type `Project` tại `src/types/index.ts`:

1. Chọn `id`, `slug` duy nhất; route chi tiết tự tìm theo slug.
2. Điền cả `vi` và `en` cho trường song ngữ.
3. Chọn `categories`, `role`, `visual`; đặt `featured: true` để đưa vào nhóm nổi bật.
4. Ngày dùng `YYYY-MM`; giữ `null` khi chưa xác nhận. Chỉ dùng `ongoing: true` khi dự án đang thực hiện.
5. Tách chức năng sản phẩm nhóm trong `features` khỏi đóng góp cá nhân trong `contributions`; giữ `contributions: null` nếu chưa có xác nhận.
6. Thêm link, ảnh và tài liệu có thật; giữ `null` hoặc mảng rỗng khi thiếu, không điền link mẫu hay số liệu giả.
7. Đặt `verificationStatus` là `owner-provided` hoặc `repository-reviewed` theo bằng chứng và cập nhật `docs/CONTENT_SOURCES.md`.

Khi thêm lĩnh vực/loại visual, cập nhật type, `src/i18n/projectCopy.ts` và renderer liên quan. Dữ liệu khai báo readonly; dùng object/mảng mới khi cập nhật.

### Timeline và bản dịch

Thêm mốc vào `src/data/journey.ts` với `id` duy nhất, `year`, nội dung `vi/en` và icon được `src/components/journey/Timeline.tsx` hỗ trợ. `projectSlug` phải khớp dự án hoặc là `null`. Chỉ đưa các mốc có ngày được xác nhận vào timeline.

Copy giao diện chung nằm tại `src/i18n/translations.ts`; nhãn trang dự án tại `src/i18n/projectCopy.ts`. Nội dung hồ sơ/dự án/timeline có bản `vi/en` cạnh nhau trong `src/data/`. `src/i18n/I18nContext.tsx` cung cấp `language` và `t()`.

### Ảnh, gallery và tài liệu

Đặt ảnh đã duyệt tại `public/assets/projects/<slug>/`. Khai báo trong `images` của dự án, dùng URL từ `/assets/`, alt song ngữ và `kind` đúng:

```ts
images: [
  {
    src: '/assets/projects/camsin/room-management.webp',
    alt: { vi: 'Màn hình quản lý phòng CAMSiN', en: 'CAMSiN room management screen' },
    kind: 'mobile',
  },
],
```

Đây là ví dụ khai báo; file ảnh trên chưa được cung cấp. `kind` nhận `desktop`, `mobile`, `diagram`, `certificate`. Gallery tự ẩn nếu mảng rỗng. Nén ảnh, giữ đúng tỷ lệ và kiểm tra desktop/mobile.

Ảnh chân dung hiện tại do chủ sở hữu cung cấp, lưu tại `public/assets/profile/nguyen-huu-quoc.jpg`. Để thay ảnh, thêm file mới vào `public/assets/profile/`, rồi cập nhật `profile.portrait.src` và alt song ngữ trong `src/data/profile.ts`. Home và About tự sử dụng ảnh này; không cần sửa JSX. Đặt `portrait: null` nếu muốn dùng monogram.

Đặt ảnh chứng chỉ tại `public/assets/achievements/`, rồi đổi `image: null` trong mục tương ứng của `src/data/achievements.ts` thành object `{ src, alt: { vi, en }, kind: 'certificate' }`. Thẻ dấu ấn sẽ hiển thị ảnh và cho phép phóng to bằng gallery có sẵn.

Đặt tài liệu công khai trong `public/assets/documents/` và thêm `{ title: { vi, en }, url: '/assets/documents/ten-file.pdf' }` vào `documents`; hoặc dùng link HTTPS công khai đã kiểm tra. Duyệt quyền công bố, thông tin nội bộ và dữ liệu khách hàng trước khi thêm ảnh/tài liệu.

### CV chính thức

CV mặc định cố ý chưa có. `D:\CV` có nhiều CV ứng viên nhưng chủ sở hữu chưa chọn file chính thức; không tự sao chép một bản bất kỳ lên website.

1. Chọn bản PDF chính thức được phép công khai.
2. Chép vào `public/assets/documents/cv.pdf`, hoặc đổi `profile.cvPath` trong `src/data/profile.ts` cho khớp.
3. Build lại khi phát hành và tải lại trang trình duyệt; trạng thái kiểm tra CV được cache trong phiên trang hiện tại.
4. Kiểm tra `HEAD /assets/documents/cv.pdf` trả status thành công và `Content-Type: application/pdf`.

`useCvAsset` chỉ bật tải khi status thành công **và** MIME chứa `application/pdf`; response HTML do SPA fallback không được coi là CV. Thiếu file, lỗi mạng hoặc MIME sai sẽ không tạo download hỏng.

Xem nội dung còn thiếu tại [CONTENT_TODO.md](CONTENT_TODO.md), bằng chứng và giới hạn xác minh tại [docs/CONTENT_SOURCES.md](docs/CONTENT_SOURCES.md).

## Triển khai Vercel

Đối chiếu [tài liệu Vite chính thức của Vercel](https://vercel.com/docs/frameworks/frontend/vite) ngày **22/10/2026**.

1. Đưa mã nguồn portfolio lên Git repository của bạn khi sẵn sàng.
2. Trong Vercel chọn **Add New → Project**, import repository, chọn root chứa `package.json`.
3. Preset **Vite**; install command `npm install` hoặc `npm ci` theo lockfile; build command `npm run build`; output directory `dist`.
4. Chọn Node.js tương thích yêu cầu ở trên. Website hiện không cần env vars.
5. Giữ `vercel.json` để `/projects/camsin`, `/journey` mở trực tiếp/tải lại được. SPA rewrite về `/index.html` đang loại trừ `/assets/`, `favicon.svg`, `robots.txt` để tài nguyên thiếu không bị thay bằng HTML.
6. Sau khi triển khai, kiểm tra route trực tiếp, trang 404, assets, CV MIME, bản dịch và giao diện mobile. Khi có domain chính thức, cập nhật metadata chia sẻ/URL chuẩn nếu cần.

Hướng dẫn này không thực hiện deploy, tạo project Vercel, commit hay push.

## Phiên bản dependency

Bảng phản ánh `package.json` và `package-lock.json` ngày **22/10/2026**. Cột khai báo là semver, cột lock là phiên bản đã khóa; cập nhật bảng khi thay dependency.


### Runtime

| Package | package.json | package-lock.json |
|---|---|---|
| `@fontsource/be-vietnam-pro` | `^5.2.8` | `5.3.0` |
| `lucide-react` | `^0.468.0` | `0.468.0` |
| `react` | `^19.2.0` | `19.3.1` |
| `react-dom` | `^19.2.0` | `19.3.1` |
| `react-router` | `^7.13.0` | `7.18.4` |

### Development / QA

| Package | package.json | package-lock.json |
|---|---|---|
| `@eslint/js` | `^9.39.0` | `9.39.5` |
| `@playwright/test` | `^1.58.0` | `1.64.1` |
| `@tailwindcss/vite` | `^4.2.0` | `4.3.3` |
| `@testing-library/jest-dom` | `^6.9.1` | `6.9.1` |
| `@testing-library/react` | `^16.3.2` | `16.3.3` |
| `@testing-library/user-event` | `^14.6.1` | `14.6.8` |
| `@types/node` | `^24.10.0` | `24.19.2` |
| `@types/react` | `^19.2.0` | `19.3.0` |
| `@types/react-dom` | `^19.2.0` | `19.3.0` |
| `@vitejs/plugin-react` | `^5.1.0` | `5.2.0` |
| `@vitest/coverage-v8` | `^4.0.0` | `4.1.12` |
| `eslint` | `^9.39.0` | `9.39.5` |
| `eslint-plugin-react-hooks` | `^7.0.1` | `7.1.1` |
| `eslint-plugin-react-refresh` | `^0.4.24` | `0.4.26` |
| `globals` | `^16.5.0` | `16.5.0` |
| `jsdom` | `^27.4.0` | `27.4.0` |
| `tailwindcss` | `^4.2.0` | `4.3.3` |
| `typescript` | `~5.9.3` | `5.9.3` |
| `typescript-eslint` | `^8.53.0` | `8.72.0` |
| `vite` | `^7.3.0` | `7.3.7` |
| `vitest` | `^4.0.0` | `4.1.12` |
