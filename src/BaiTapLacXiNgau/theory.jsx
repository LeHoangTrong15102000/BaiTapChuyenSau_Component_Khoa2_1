// Ở bài sau sẽ hướng dẫn xác định những thành phần nào lưu trữ trong Redux

// Xác định nguồn dữ liệu thay đổi trên giao diện, có những nguồn dữ liệu nào. Lưu vào redux => có tổng cộng 4 nguồn dữ liệu thay đổi

// Lấy về tuần tự các thành phần, của component nào thì lấy về tại component đó

// Ở bài hôm sau sẽ xử lý tính năng là chọn và play game

// Cách làm thay đổi nguồn dữ liệu này để cho giao diện của chúng ta tự động cập nhật lại
// Thì tại component nào chúng ta sẽ viết hàm mapDispatchToProps tại cái hàm đó -> thì khi nhấn nút nó sẽ gửi dữ liệu lên store và dữ liệu trên store sẽ truyền xuống những component làm thay đổi giao diện
// Khi mà chúng ta lạm dung Redux thì nó sx làm chương trình chạy chậm trở lại.
// Video sau sẽ thực hiện chức năng trên nút play game.

// Thì tương tự như  Dat cuoc chúng ta sẽ gửi lên những nguồn dữ liệu làm thay đổi giao diện
/****
 * Về nút play game phải xử lý 
 *      + Là Random dữ liệu của nút xúc xắc
 *      + Sau khi đã random ra được những có xúc xắc ngẫu nhiên, thì bây giờ chúng ta sẽ tính điểm và tính số lần chơi.
 */
// Ok vậy là đã xong Redux về BaiTapLacXiNgau