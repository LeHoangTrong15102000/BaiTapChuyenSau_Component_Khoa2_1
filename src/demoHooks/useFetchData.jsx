import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Custom bản chất là một function, không return về JSX mà return về data
// Bên trong custom Hook có thể gọi tới một số Hook khác như useState hoặc useEffect
const useFetchData = (url, params) => {
    const [data ,setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError ] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            try {
                setIsLoading(true)
                const result  = await axios.get(url, params)
                // Nếu mà thành công thì set lại Dâta
                setData(result.data)

            } catch (error) {
                setError(error.response.data)

            } finally {
                // Chạy cuối cùng sau khi try hoặc catch xử lý xong
                setIsLoading(false);
            }
        } 
        
        fetchData()

    }, [])
  return {data, isLoading, error}
}

export default useFetchData