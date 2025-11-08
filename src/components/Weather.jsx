import React, { useState } from 'react'
import './Weather.css'
export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [error, setErorr] = useState("");
    const apikey = import.meta.env.VITE_APP_APIKEY;
    // Function for input field to get city
    const handleCityName = (e) => {
    setCity(e.target.value);
    };
    const handleFetchWeather = async () => {
        if (!city) return;
        try {
            const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
            if(!responce.ok){
                throw new Error("City Not Found");
            }
            const data = await responce.json();
            setWeather(data);
            setErorr("");
        } catch (error) {
        setErorr(error.message);
        setWeather(null);
        }
    };
  return (
    <div className='weather'> 
        <h1>Weather App</h1>
        <input className='input' type="text" value={city} onChange={handleCityName} />
        <button className='bton' onClick={handleFetchWeather}>Get Weather</button>
        <div>{error}</div>
        <h2>
            {weather && (
                <div>
        <h2>{weather.main.temp}Fahrenheit</h2>
        </div>
            )}
            </h2>
    </div>
  );
}
