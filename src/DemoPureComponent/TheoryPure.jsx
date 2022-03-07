// lí thuyết về pure component trong React

// Khi setState lại thì những thành phần (component) ko bị setState thì nó cũng render lại chung với cả giao diện.

//  Trong nhiều cái dự án có animation tĩnh thì chúng ta không cần phải load lại animation đó , còn animation động thì cần load lại -> khi mà nó load lại như vậy thì máy tính mình sẽ rất là tốn dung lượng.
// PureComponent nó sẽ có 1 thz là shouldComponentUpdate -> có nghĩa là các props đầu vào của thằng này ko thay đổi thì nó sẽ không load lại giao diện
// Khi mà nó biết được cái props của nó thay đổi thì nó mới tiến hành load lại trang còn props của nó không thay đổi thì nó sẽ không load lại trang

// Vậy câu hỏi đặt ra là có nên sửa tất cả các component thành purecomponent không -> thì mình không được lạm dụng pureComponent

/**
 * Note:
 * - Chỉ sử dung PureComponent, không nên lạm dụng vì có thể dẫn tới lỗi. Bản chất của PureComponent là tự động kiểm tra nếu props và state của component đó thay đổi thì sẽ render lại, không thì thôi. Nhưng sự so sánh thay đổi của react là so sánh tham chiếu(shallow comparision - so sánh nguyên thủy), nếu như ta truyền một object dưới dạng props, và thay đổi một thuộc tính nào đó thì react không so sánh được, vì căn bản là cùng một object.
 *
 * - Dữ liệu nguyên thủy là : string , number ,boolean , .... Nếu props là một array hoặc một object thì chúng ta không nên sử dụng PureComponent.
 *
 * - Thằng PureComponent nó sẽ không thông minh đến nổi là nó biết thz object hoặc array thay đổi
 * - Vì vậy thằng javascript nó ko so sánh được 2 object bằng bằng với nhau cho nên nó không nhận biết được sự thay dổi
 *
 * - Nhưng mà bây giờ chúng ta quá muốn xài thằng PureComponent quá đi chúng ta muốn là khi object thay đổi thì nó cũng phải thay đổi => điều đó có thể làm được => dùng spread operator => Mặc dù có cách thức để sử dụng nó như vậy thì chúng ta cũng không nên xài nó luôn => vì nó rất khó để kiểm soát mã nguồn.
 *
 *
 */

//Bài hôm sau sẽ học về Context (Context API) - Provider (Kiến thức nâng cao)
