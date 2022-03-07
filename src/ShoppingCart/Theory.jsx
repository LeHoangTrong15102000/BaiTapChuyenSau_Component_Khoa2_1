// Đặt state ở ProductItem thì nó ko chứa giao diện của chúng ta
// Nên đặt ở thằng component cha để sau đó truyền dữ liệu xuống thông qua props của component

// Đã có giao diện sản phẩm rồi thì chúng ta sẽ làm tiếp tới nút xử lý
// Đã có giao diện rồi bây giờ chúng ta sẽ viết vòng lặp binding dữ liệu lên giao diện
// Dùng phương thức map để render ra giao diện sản phẩm
// Thì những thằng binding từ setState trong modal của giỏ hàng nó sẽ tự động render lại giao diện(thì ta chạy vòng lặp truyền cho từng thằng item cái sự kiện thay đổi giao diện khi nhấn nút click thêm giỏ hàng)
// Khi người dùng click vào sản phẩm đã có trong giỏ hàng rồi thì chúng ta ko đưa sản phẩm đó vào nữa mà chúng ta sẽ tăng số lượng sp đó lên. => bắt buộc duyệt cái giỏ hàng đó xem sản phẩm đã có trong giỏ hàng hay chưa


// *************************** Video tiếp theo sẽ học xử lý các tính năng tiếp theo
// Đồng thời ôn lại props truyền props và xử lý như thế nào
// Thì giao diện chứa nút xóa giỏ hàng sẽ nằm trong component giỏ hàng
// Khi mà nhấn vào nút xóa thì cái mảng sản phẩm nó sẽ xóa sản phẩm trong giỏ hàng với cái index trùng với id của sản phẩm đó trong giỏ hàng
// Làm thế nào để truyền phương thức setState từ nơi shoppingCart -> truyền sang cartModal > đến nơi chứa nút xử lý, lấy nguồn dữ liệu truyền xuống thông qua props
// Nếu mà đã lấy ra được mã SP rồi việc tiếp theo chúng ta cần thực hiện là xóa nó khỏi mảng sản phẩm của chúng ta trong giỏ hàng
// Rồi tiếp theo chúng ta sẽ viết hàm cập nhật số lượng ở ngay giao diện giỏ hàng để người dùng biết trong giỏ hàng hiện đang có bn sản phẩm rồi

// ************************* Video tăng giảm số lượng giỏ hàng của đơn hàng
// Tăng và giảm số lượng đơn hàng thì làm giao diện đơn hàng thay đổi cụ thể là nguồn dữ liệu giỏ hàng thay đổi => thì nó lại đụng tới cái state giỏ hàng.
// Khi mà đụng tới state rồi thì chúng ta phải biết setState giỏ hàng lại => Viết phương thức tăng giảm số lương tại nơi chứa state(giao diện giỏ hàng)

// ************************* Bài học ngày hôm sau sẽ học kiến thức mới trong reactjs