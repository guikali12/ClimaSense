import axios from "axios";


const api= axios.create({
    baseURL: "http://api.weatherapi.com/v1/current.json?key=8a52862d4a9a466886a184211232108&q=${city}&lang=pt"
})

export default api;