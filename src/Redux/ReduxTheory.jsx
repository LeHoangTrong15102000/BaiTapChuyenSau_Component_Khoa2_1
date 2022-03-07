// Hôm nay sẽ đi tới phần kiến thức khá quan trọng đó chính là redux
/*
    - Bản chất làm việc với React là việc truyền dữ liệu giữa các component và thay đổi state để re-render
    lại giao diện component
    - Redux là thư viện cung cấp cho ta một store trung tâm, lưu trữ tất cả các state, từ component muốn thay đổi
    state chỉ cần truy cập tới store để thay đổi.
    

    - Do đó thằng component chỉ làm việc với thằng store thôi ko làm việc với component cha nữa.
    - ***************************

    - Thì redux sẽ cung cấp cho chúng ta một cái store, và việc component muốn lấy nguồn dữ liệu đó thì nó chỉ cần kết nối với store của redux thôi
    - Và những nút xử lý của những thằng component con muốn lấy dữ liệu thay đổi thì chỉ cần kết nối với store thôi
    - Chỉ nguồn dữ liệu làm cho giao diện thay đổi thì chúng ta mới đặt nó trong store (Redux store)
    
    - Làm 2 đến 3 bài tập ví dụ là chúng ta sẽ nắm được redux


    // Bước đầu tiên vào file index.js set up redux
*/
