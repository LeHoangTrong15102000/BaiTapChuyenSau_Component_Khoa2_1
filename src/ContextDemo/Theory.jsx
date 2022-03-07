/**
 * Vẫn là câu chuyện quản lí state. Khi component phân cấp quá nhiều việc xác định nơi lưu trữ state và nơi làm thay đổi state khi component thay đổi dẫn đến công việc truyền props trở nên rườm rà và phức tạp. Dữ liệu được truyền qua props theo hình thức cha -> con , anh -> em , ông nội -> cha -> con ,..
 * Tương tự Redux React - Context ra đời cũng nhằm để giải quyết vấn đề đó.
 * Context chia sẻ dữ liệu cho nhiều các component khác nhau tương tự Redux (theo 1 góc nhìn nào đó redux khá giống nhau chúng đều quản lý state tập trung rồi phân phối cho các component)
 * Context có 2 thành phần là: Provider và  Consumer. Trong đó Provider đóng vai trò là component quản lý các state sử dụng chung cho các component được nó bao phủ, consumer đóng vai trò truy suất dữ liệu từ state chứa trong Provider
 */

// Giống như Reducer thì chúng ta sẽ có thư mục context để quản lý.
// Trong Context sẽ chứa 2 thành phần là Provider và Consumer.
// Sau khi hoàn thành giao diện thì tổ chức nguồn dữ liệu thay đổi trong Provider. Muốn quản lí state nào thì tạo Provider cho state đó

// folder Context nó như là store tổng của chúng ta, 1 Context chỉ chứa 1 Provider nhưng mà có thể sử dụng nhiều Provider
// Provider giống như là component được lấy ra từ Context đó

// Redux bây giờ giống như là thằng quản lí mã nguồn mạnh nhất rồi , tùy một vài trường hợp thì thằng Context nó sẽ hơn nhưng đa phần nó phải cần thêm PureComponent để tối ưu nữa.

// Hướng dẫn một số cái tips của Provider là: Vì vậy phải xác định rằng cái phần giao diện của nó cái phần nào cần binding từ cái consumer thì chúng ta mới bọc nó lại, còn không thì không cần bọc lại hết vì nó sẽ render lại hết giao diện
// Nên hết sức lưu ý khi sử dụng thằng này là dữ liệu nào cần binding lại từ state của Provider -> thì mới bọc Consumer vào nội dung của cái cần binding đó\

// Khóa học tiếp theo sẽ học về Hooks và cách viết hooks như thế nào để mà đi phỏng vấn cho nó chắc chắn.
