import axios from "axios"

const axiosConn = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.MOVIEDB_API_KEY,
    },
})

export default axiosConn
