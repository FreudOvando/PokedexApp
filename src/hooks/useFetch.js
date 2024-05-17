import { useState } from "react"
import axios from 'axios'

const useFetch = () => {


  
    const [response, setResponse] = useState();

const getApi = (url) => {
    axios.get(url)
    .then(res => setResponse(res.data))
    .catch(err => console.log(err))
}

return [response, getApi] 
}



export default useFetch