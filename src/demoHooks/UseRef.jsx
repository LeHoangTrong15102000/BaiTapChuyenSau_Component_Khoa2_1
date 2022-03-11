import React, { useState, useEffect , useRef } from 'react'

const UseRef = () => {

    const [count, setCount ] = useState(0)

    // Mục đích 1 : Khi ta muốn lưu trữ dữ liệu mà không cần render lại component, ta có thể dùng useRef để lưu trữ dữ liệu đó
    const countRef = useRef(0)

    const inputRef = useRef(null); // Khi Muốn DOM Tới một element ta có thể dùng Ref để xử lý
    // Thay vì DOM tới giá trị

    // Muốn DOM tới giá trị nào thì tại thẻ đó khai báo giá trị ref => thì nó sẽ DOM tới thẻ đó để lấy ra giá trị

    const fileRef = useRef(null)


    const handleClickState = () => {
        setCount(count + 1)
    }

    const handleClickRef = () => {
        countRef.current += 1
    }

    const handleSubmit = () => {
        console.log(inputRef.current.value)
    }


    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();// khi ban đầu vào thì Hàm render sẽ chạy vào useEffect sẽ được goi khi inputRef đang có

            // Thì ban đầu sau khi render thì ô input đã xuất hiện ngay sau đó nó sẽ gọi hàm useEffect để focus vào
        }
    },[])
  return (
    <div>
        <p>State count: {count}</p>
        <button onClick={handleClickState}>Click</button>

        <p>Ref count: {countRef.current}</p>
        <button onClick={handleClickRef}>Click Reff</button>

        <br />
        <br />
        <br />

        {/*  giá trị ref này sẽ tồn tại suốt vòng đời của component */}
        {/* khi mà quản lí giá trị của input bằng thuộc tính ref thì nó là unControll component */}
        <input ref={inputRef} type="text" id="txtName"/>
        <button onClick={handleSubmit}>Submit</button>


       <div>
           <button className="btn btn-success" onClick={() => fileRef.current.click()}>Upload</button>
           <input ref={fileRef} type="file" hidden/>
       </div>
    </div>
  )
}

export default UseRef