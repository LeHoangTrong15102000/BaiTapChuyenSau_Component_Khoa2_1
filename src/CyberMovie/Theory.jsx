// Ôn lại cấu trúc đầy đủ của Redux - khai báo action creator
/**
 * Redux bao gồm 3 thành phần chính
 *    + Action : là nơi mang các thông tin dùng để gửi từ ứng dụng đến store. Các thông tin này là 1 object mô tả những gì đã xảy ra.
 * Nói dễ hiểu, từ 1 component, ta muốn thay đổi state trên store, ta phải gửi action, là một object để miêu tả muốn làm gì.
 *    + Reducer: nơi tiếp nhận action và thay đổi state. Gồm 2 loại:
 *          + Root Reducer: là boss quản lí tất cả Reducer con
 *          + Child Reducer: như đã biết state, state là một object có nhiều thuộc tính, mỗi child Reducer chiu trách nhiệm thay đổi 1 thuộc tính trong state
 *    + Store: nơi lưu trữ và quản lí State (chính là big boss)
 */

// Ở bài học ngày hôm nay sẽ học cách viết Redux một cách chuẩn hóa hơn -> Đây là cách mà các công ty bên ngoài người ta thường hay viết
// Ở bài này sẽ khai báo các action bằng cách sử dụng action creator.
// Có 2 component con chinh là danh sách các hàng ghế, thông tin về các hàng ghế đã chọn.
// Những thông tin về đặt ghế sẽ tách nó ra thành một component riêng
// Ở bài sau sẽ binding ra các cái ghế ở các cái hàng -> chỗ này bắt đầu phức tạp rồi

// Danh sách ghế sao này sẽ ứng với API mà Backend trả về cho mình
// Bước 2 là xác định trạng thái thay đổi để lưu trữ trong Redux.
/**
 * cách thứ 1 là lưu trữ nó trong state của Redux
 * Cách thứ 2 là tạo ra một cái mảng giống như cái giỏ hàng để chứa các ghế mà người ta đã đặt -> chọn cách 2 để đỡ phải chỉnh sửa về mặt giao diện
 */

// Ở hàng ghế mỗi lần mình click vào thì mình sẽ binding ra lại cái mảng đó, push vòa mảng danhsachgheDangDat, click lần thứ 2 nếu mà nó đã có trong mangGhe thì remove nó khỏi cái mảng đó, so sánh nếu như cái ghế có trong mảng thì hiển thị màu xanh còn nếu không có thì hiện thị màu mặc định.

/**
 * Vậy làm sao mỗi lần click thì nó sẽ đưa cái ghế đó vào mảng
 * Rồi bây giờ chỗ nào mình đặt thì nó sẽ hiện ra danh sách ghế.
 */

// Bài giảng hôm nay sẽ giới thiệu một kiến thức nâng cao về React đó chính là Pure components
// Những thành phần nào chứa props và cần setState thì mới cần render lại mà thôi, còn những component nào ko liên quan gì và ko cần render lại trong đây, ko cần setState thì nó không nhất thiết phải render lại.
