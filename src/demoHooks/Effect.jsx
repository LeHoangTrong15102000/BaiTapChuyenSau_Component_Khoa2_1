import React from 'react'
import { useState , useEffect } from 'react'
// Để sử dụng lifeCycle trong function component ta sử dụng import useEffect từ React


/**
 * 
 * MOUNTING (Khởi tạo)
 * - run render
 * - run useEffect()
 * 
 * 
 * UPDATING (cập nhập state/props)
 * - Run Render
 * - Run useEffect cleanup (Nếu có) - Nếu dependencies (danh sách lệ thuộc) thay đổi
 * - Run useEffect
 * 
 * 
 * UNMOUNT 
 * - Run useEffect cleanup
 * - Run useEffect
 */

export const Effect = () => {

    const [count , setCount] = useState(0)

    const [ color , setColor] = useState('red')

    // callBack trong useEffect luôn luôn chạy lại sau mỗi lần render
    // useEffect không có tham số thứ 2
    // Thăng useEffect này không có prevProps và prevState
    useEffect(() => {
        console.log("Run useEffect after Render")

        // Làm cách nào để kiểm tra nếu state thay đổi thì thực hiện một hành động nào đó

        // Trong useEffect có trả về một callback function
        // Là cleanup Function
        return () => {
            console.log("Run cleanup useEffect after render")
            // Sẽ đươc gọi trước lần chạy useEffect kế tiếp hoặc khi component unmount
        }
    })

    // Chi gọi sau 1 lần render đầu tiên
    // Chỉ chạy một lần duy nhất sau lần render đầu tiên
    // Có tham số thứ 2
    useEffect(() => {
        console.log("Run useEffect 1 times after Render")


        return () => {
            console.log("Run useEffect after Component Unmount")
            // chạy 1 lần và chạy trước khi component bị unmount
        }
    }, [])

    // Một cái useEffect với tham số thứ 2 là: [state1 ,state2], [props1, props2,...]
    // Callback trong useEffec này chỉ t hay đổi chạy lại khi giá trị bên trong array bị thay đổi
    useEffect(() => {
        console.log("Run useEffect after render and count change")

        return () => {{}}
    }, [count])
    // Cái useEffect này vẫn chay khi mà cái biến count thay đỏi con biến color không có trong tham số thứ 2 mà thay đổi thì nó vẫn không chạy lại

    // Thằng useEffect chỉ chạy thằng Component chạy xong(hay hàm Return vừa chạy xong)
    console.log("Run Render")
  return (
    <div>
        <p>You clicked: {count} times</p>
        <button onClick={() => setCount(count + 1)}>Clicked</button>

        <p>Color: {color}</p>
        <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>Change Color</button>
    </div>
  )
}
