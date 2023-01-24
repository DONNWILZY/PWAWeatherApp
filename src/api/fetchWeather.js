 import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '7f9fba3c186237d8fc1e66c6ecac8d49' ;
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


 