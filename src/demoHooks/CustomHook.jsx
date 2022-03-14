import React, {useState, useEffect} from 'react'
import useFetchData from './useFetchData'
import useStorageState from './useStorageState';

const CustomHook = () => {
    const { data , isLoading, error} = useFetchData("https://62260a202dfa524018fa3e05.mockapi.io/api/todos");
    
    // const [user, setUser] = useState(() => {
    //     // Lấy data từ user, Nếu không có thì trả về null
    //     const data = JSON.parse(localStorage.getItem('user'))
    //     return data || {};
    // })

    const [user, setUser] = useStorageState('user')


    const changeUserInfo = () => {

        const exampleUser = {
            name: "Trong",
            age: 18,
        }
        setUser(exampleUser)
        // set nó vào localStore
        // localStorage.setItem("user", JSON.stringify(exampleUser))
    }

    if (error) {
        return <p>{error}</p>
    } 
    if (isLoading) {
        return <p>Loading ....</p>
    }
  return (
    <div>
        <h1>Todos</h1>
        {data?.map((item, index) => (
            <p key={index}>{item.title}</p>
        ))}

        <h1>User</h1>
        <p>Name: {user.name} - Age: {user.age}</p>
        <button onClick={changeUserInfo}>Change user info</button>
    </div>
  )
}

export default CustomHook


/**
 * Trong ứng dụng có rất nhiều component gọi API lấy data
 */