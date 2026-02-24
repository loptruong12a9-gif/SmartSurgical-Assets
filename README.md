# 🏥 SmartSurgical Pro Assets
**Hệ thống Quản lý Dụng cụ Phẫu thuật Chuyên nghiệp**

SmartSurgical Pro Assets là một ứng dụng web hiện đại (PWA) được thiết kế đặc biệt để quản lý, theo dõi và báo cáo tình trạng các bộ dụng cụ phẫu thuật trong môi trường bệnh viện. Ứng dụng tập trung vào tính tương tác cao, giao diện "Ultra-Density" tối ưu cho thiết bị di động và khả năng đồng bộ dữ liệu tức thì.

## 🚀 Tính năng nổi bật

- **Quản lý danh mục thông minh**: Tự động phân loại và đánh STT hàng ngàn dụng cụ.
- **Giao diện Ultra-Density**: Tối ưu hiển thị mật độ dữ liệu cao, đặc biệt sắc nét trên iPhone 15 Pro Max và các thiết bị Flagship.
- **Chỉnh sửa trực tiếp (Inline Editing)**: Cho phép sửa tên, mã số, số lượng và ghi chú ngay trên bảng.
- **Báo cáo & Thống kê**: Tự động tổng hợp danh sách dụng cụ hư hỏng, cần sửa chữa hoặc thay thế.
- **Xuất dữ liệu chuyên nghiệp**: Hỗ trợ xuất file Excel (.xlsx) với định dạng chuẩn quản lý, sẵn sàng in ấn.
- **Đồng bộ GitHub một chạm**: Sao lưu và đồng bộ toàn bộ cơ sở dữ liệu lên GitHub Cloud mà không cần cài đặt Git.
- **Hỗ trợ Offline (PWA)**: Hoạt động mượt mà như một ứng dụng di động ngay cả khi không có mạng.

## 🛠️ Công nghệ sử dụng

- **Frontend**: HTML5, Vanilla CSS3 (Glassmorphism), JavaScript (ES6+).
- **Thư viện**: 
  - [ExcelJS](https://github.com/exceljs/exceljs) cho việc xử lý file Excel.
  - [FontAwesome 6](https://fontawesome.com/) cho hệ thống icon.
  - [Google Fonts (Inter)](https://fonts.google.com/) cho typography.
- **Backend**: Serverless (GitHub REST API v3).
- **Automation**: PowerShell Core cho quy trình CI/CD thủ công.

## 📦 Cấu trúc dự án

- `index.html`: Giao diện chính của ứng dụng.
- `style.css`: Hệ thống thiết kế Design System & Responsive.
- `script.js`: Logic xử lý nghiệp vụ, tính toán và hiển thị.
- `github_sync.js`: Module xử lý đồng bộ API GitHub.
- `data.js`: Cơ sở dữ liệu danh mục dụng cụ.
- `PUSH.bat` & `GITHUB_PUSH.ps1`: Công cụ đẩy mã nguồn tự động.

## 👤 Tác giả

**Tân Nguyễn**
- 📞 Điện thoại: 036.728.7102
- 💻 "Code một lần - Dùng một đời"

---
*Dự án được bảo mật và tối ưu hóa cho mục đích quản lý tài sản y tế.*
