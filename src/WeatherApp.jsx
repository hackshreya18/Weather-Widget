import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Noida",
        feelsLike:20.69,
        humidity:10,
        maxTemp: 22.16,
        minTemp: 22.16,
        pressure:1018,
        temp:22.16,
        weather:"clear sky",
        windSpeed:1.45
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}