// Vậy thì tóm lại khi nào chúng ta dùng cái props children và khi nào chúng ta dùng props thường
//    - Thì câu trả lời là có thể dùng cái nào cũng được cả, cái nào thuận tiện hơn thì chúng ta dùng thôi


// Thì mỗi cái component của chúng ta cũng như là đối tượng thể hiện cho lớp đối tượng đó cũng có thuộc tính và phương thức tương tự như thể input
// Vì nó cũng là một đối tượng nên chúng ta cũng có thể truy xuất được thuộc tính hoặc phương thức

// Đối với component thì nó cũng cho phép chúng ta DOM tới nó
// Chúng ta cũng không cần những nút chúng ta thay đổi nó nằm trong component chúng ta có thể DOM đến nó để xử lý việc đó ở component cha chứa nó
// Từ component có thể DOM đến sự kiện ở component và gọi lại ở component cha




// ******************************************** Tóm lại
// Tùy trường hợp thì chúng ta dùng props để truyền sự kiện, props truyền sự kiện khi nguồn dữ liệu nằm ngoài và nút xử lý nằm bên trong
// Còn khi nguồn dữ liệu nó ở bên trong và nút xử lý nằm bên ngoài thì dùng React.createRef() . khi đó thì chúng ta sẽ xử lý
// Còn nút và dữ liệu đều nằm trong component thì gọi lên sử dụng bình thường.?


// ******************************************* Bài tập giỏ hàng - shopping cart
// Dữ liệu nào trong component thay đổi thí chúng ta sẽ đặt nó trong state của component