 import axios from 'axios';
 const URL = 'https://api.openweathermap.org/data/2.5/weather';
const URLi = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';
const API_KEY_ = '7f9fba3c186237d8fc1e66c6ecac8d49';
I

 export const fetchWeather = async (query)=>{
    const resposnse = await axios.get(URL, {
      params:{
         q: query,
         Uint: 'metric',
         APPID: API_KEY,
      }
    }); 
    return data;
 }


 