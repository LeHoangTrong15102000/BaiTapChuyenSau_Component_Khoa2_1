// Lý thuyết về Redux
// Tổ chức component rồi thì việc cần làm bây giờ là tổ chức store cho Redux để kết nối dữ liệu giữa component và redux

// Và hướng dẫn cách khởi tạo store cho Redux

// Trước tiên chúng ta sẽ xử lý binding giỏ hàng mặc định và cái nơi mà lưu trữ state thì nó nằm ở đâu
// Bây giờ thì chúng ta sẽ đặt state giỏ hàng trong redux store của project
// Bên trong redux thì chúng ta sẽ tạo ra cho nó một cái store của giờ hàng. Thì ở trong cái thuật ngữ Redux được gọi là Reducer

// *********************************************
// bây giờ là chúng ta sẽ từ cái component kết nối tới cái store chứa cái state đó
// Đầu tiên chúng ta chỉ mới học phương thức lấy về, chưa học phương thức đẩy lên làm giá trị thay đổi.

// *********************************************
// Video này sẽ nói về các render lại giao diện với dữ liệu động, thay đổi mỗi khi người dùng click vào thêm giỏ hàng render lại giao diện
// Trong bài giảng ngày hôm nay sẽ hướng dẫn làm thay đổi cái state đó.
// Hướng dẫn việc setState của Redux store thông qua việc thay đổi giao diện giỏ hàng
// Lấy sản phẩm push vào cái mảng là giỏ hàng được render ra giao diện giỏ hàng , hoặc là nhấn nút tăng số lượng để tăng số lượng sản phẩm lên
// Hồi nảy mình lấy từ ReduxStore về thì thông qua mapStateToProps, còn bây giờ mình gửi dữ liệu lên ReduxStore thì dừng phương thức là mapDispatchToProps để đưa dữ liệu đó đi

// Đáng có 2 nguồn dữ liệu là BaiTapGioHang và GioHang theo dõi sự thay đổi dữ liệu trên store
// Thì khi nguồn dữ liệu trên store thay đổi thì tất cả giao diện của 2 thằng component kết nối với store sẽ được render lại


// ********************************************
// Tai giỏ hàng muốn thay đổi giá trị của số lượng thì chúng ta sẽ gửi giá trị lên store để nó gửi về các component có kết nối với store render ra lại giao diện
// Component GioHangRedux nó đặc biệt chỗ là vừa lấy dữ liệu từ redux về vừa thay đổi giá trị của redux.
// Thì nó sẽ quét cây rootReducer coi cái này nó chứa cái type đó thì nó se dừng lại và xử lý
// Redux có một cái nhược điểm là nó quản lí state tập trung cho nên mỗi lần dispatch lên nó sẽ quét qua tất cả các state luôn vì vậy nó sẽ tốn cái hiệu năng

//  Khi mà gửi dữ liệu xóa lên store thì các thằng như số lượng cart của bài tập giỏ hàng và modalCart render ra giao diện của sản phẩm cũng thay đổi theo => khi mà click nút xóa
// Redux ra đời giảm bớt sự phụ thuộc của các component lận nhau

// Tóm lại thì những component nào theo dỗi nguồn dữ liệu thì nó sẽ tự động binding lại, render lại giao diện
// Tuy nhiên hiệu năng của Redux nó sẽ có một số nhược điểm, tuy nhiên nhược điểm không quá lớn
// COmponent khác viết dữ liệu chưa có thì trúng ta phải viết hàm connect