import React from 'react'
import useFetchData from './useFetchData'

const CustomHook = () => {
    const { data , isLoading, error} = useFetchData("https://62260a202dfa524018fa3e05.mockapi.io/api/todos");


    if (error) {
        return <p>{error}</p>
    } 
    if (isLoading) {
        return <p>Loading ....</p>
    }
  return (
    <div>
        {data?.map((item, index) => (
            <p key={index}>{item.title}</p>
        ))}
    </div>
  )
}

export default CustomHook


/**
 * Trong ứng dụng có rất nhiều component gọi API lấy data
 */