import React , {useState} from 'react';
import './App.css';


const App = ()=>{
    const [query, setQuery] = useState('');
    const search = async (e) =>{
        if(e.key === 'enter'){
            const data = await fetchWeather(query)
        }
    }
    return (
        <div className = 'main-container'>
            <input
                type= 'text'
                className='search'
                placeholder='Search'
                value = {query}
                onChange ={(e)=> setQuery(e.target.value)}
            /> 
        </div> 
    );
}


export default App;