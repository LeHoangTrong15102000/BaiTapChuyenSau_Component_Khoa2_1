// Ở bootstrap thì không thực sự đánh giá cao nó
// Thì trong bài này sẽ vẫn dụng gg Input form
// Để sử dụng thư viện được
    /**
     * B1 : copy demo mẫu vào ứng dụng và fix cho chạy được
     * B2 : Tiến hành edit lại
     */

// Lấy thông tin từ thẻ input như thế nào
// Cách thực hiện -> là gán nguồn dữ liệu đó vào trỏng nút control luôn để khi mà người dùng nhập vào thì tự động cái state đó thay đổi cho mình luôn -> thì khi đó mình sẽ lấy được thông tin người dùng nhập vào
// Thay vì dung DOM gán riêng lẻ trên từng sự kiện onClick của form -> thì bây giờ gán trực tiếp sự kiện binding trên từng thẻ luôn

/**
 * Cách thức để lấy thông tin  
 *      - Đặt tên thuộc tính trong state trùng với control là "name" trong thẻ input luôn
 *      - Người dùng thay đổi ở sự kiện onChange của thẻ input, chúng ta muốn khi mà nhập liệu thì nó sẽ binding lên trang form cho chúng ta, thì chúng ta nhập vào cái gì nó sẽ binding ra cái đó
 * 
 *      - Viết một hàm để lấy value của từng ô input
 *     
 */

// *************************** Bài học tiếp validate cho ô input
// Kiểm tra nguồn dữ liệu đó xem có hợp lệ hay không
// Thì kiểm tra nguồn dữ liệu validation cũng là kiểm tra nó có thay đổi hay không -> thì cũng đặt trong state hoặc store của Redux
// Khi mà đặt thuộc tính lỗi mà đặt khác tên name thì rất là khó để binding được dữ liệu

// Sẽ luôn luôn đặt cái gì đó liên quan đến đúng cái tên thuộc tính "name" của thẻ input được nhập từ người dùng
// Sau đó sẽ tiến thành binding dữ liệu và những cái lỗi lên thẻ input của chúng ta.
// Tuy nhiên không phải để dữ liệu tĩnh, mà chúng ta sẽ sett cái lỗi khi mà binding dữ liệu xong 
// value thì sẽ lấy từ value mỗi khi thay đổi giá trị, errors sẽ lấy từ error mỗi khi bắt được lỗi của cái giá trị của ô input đó
// Bây giờ mình sẽ tiến thành sett như thế nào để mỗi lần nhập liệu nó sẽ lấy cái value binding lên cái state của mình đồng thời nó cũng kiểm tra cái lỗi của mình  

// Do mình chưa setState lại giá trị của values: nên khi nhập liệu vào thì nó vẫn là rỗng
// Không khuyến khích gọi 2 hàm setState liên tục với nhau -> chỉ cần gọi 1 hàm setState và viết nhiều phương thức để thực thi đều đó.

// Ở video sau sẽ hướng dẫn cách duyệt submit lại.-> sẽ chặn nút submit khi mà dữ kiện không hợp lệ
