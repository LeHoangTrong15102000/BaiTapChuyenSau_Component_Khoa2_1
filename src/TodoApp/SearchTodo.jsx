import React, { useState, useRef } from 'react'

const SearchTodo = ({value , onSearch }) => {
    // Tạo ra cái State chứa value
    const [internalValue , setInternalValue] = useState(value);// quản lí giá trị của ô input

    // Dùng để lưu trữ data, tuy nhiên điểm khác biệt so với useState đó chính là component không bị render lại khi useRef
    const timeoutSearch = useRef(null);// Chứa giá trị của setTimeout


    const handleChange = (event) => {
        
        // Mỗi lần mình gõ thì nó sẽ chạy 1 cái setTimeout mới
        let {value} = event.target
        setInternalValue(value)

        // Muốn setTimeout chỉ gọi 1 lần duy nhât, nếu hàm handleChange bị gọi nhiều lần, ta cần clear setTimeout cũ và gọi setTimeout mới
        // onSearch truyên lên cho thằng cha thì deplay khoảng 2s thì nó mới hiện ra trên API

        if(timeoutSearch.current) {
            clearTimeout(timeoutSearch.current)
        }

        // useRef khi thay đổi giá trị, component không bị render lại(có nghĩa là khi ta ngõ trên ô input thì nó ko bị gọi lại hàm nhiều lần)
        timeoutSearch.current = setTimeout(() => {
            onSearch(value)
        }, 500)
        // onSearch(value)

        // Không deplay cái UI thiển thị của người dùng chỉ deplay cái API
        // setTimeout(() => {
        //     onSearch(value)
        // }, 1000);// deplay khoảng 1s thì mới bắt đầu gửi giá trị của ô input vào
    }
  return (
    <div>
        <div className="form-group">
            <label>Search</label>
            <input value={internalValue} type="text" className="form-control" onChange={handleChange}/>
        </div>
    </div>
  )
}

export default SearchTodo