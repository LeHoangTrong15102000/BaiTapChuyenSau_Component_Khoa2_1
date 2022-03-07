// Xây dựng giao diện chia component hợp lý
// Sau đó state nguồn dữ liệu thay đổi trên giao diện
// Tổ chức lưu trữ Redux
// Xây dựng chức năng đặt cược và play game của ứng dụng
// Bước chuẩn bị giao diện thì rất là quan trong nên nó mất rất nhiều thời gian

// Việc tách ra nhiều component để dễ maintance code sau này hơn.

// ***********************************
// Xác định state nguồn dữ liệu thay đổi trên giao diện
// State

// Sẽ lưu tất cả các thứ thay đổi vào trong Redux -> để khi click nút sẽ render ra lại giao diện của chúng ta.
// Những thằng nào thay đổi thì mình sẽ lưu l-ại trong cái state hết để khi mà cập nhật thì những thằng theo dõi cái Store Redux sẽ tự động render lại giao diện
// Ban đầu là mình truyền tĩnh cho thuộc tính hình ảnh
// Tiếp theo chúng ta sẽ binding kết quả trò chơi

// ***********************************
// Xử lý tiếp theo là ng ười dùng nhấn play game thì sẽ random cái kéo búa bao bên máy
// Tạo một cái Keyframe

// Sau khi thực hiện hàm setInterval rồi thì chúng ta thực hiện một action nữa -> có nghĩa là sau khi thằng này nó dispatch rồi thì chúng ta sẽ thực hiện một dispatch cuối cùng là

// Mấy cái nào thuộc dữ liệu cơ sỡ ko cần phải clone , gán cái object ra hết, có thể gán trực tiếp cho nó luôn
