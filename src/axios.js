import axios from 'axios'

const instance = axios.create({
   baseURL: "https://api.spacexdata.com/v3/launches"
})

export default instance;