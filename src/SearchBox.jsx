import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from "react";

export default function SearchBox({updateInfo}){

    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="64b634c3dba986919a1a0fefceaffdf6";

    let getWeatherinfo=async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data= await response.json();
        // console.log(data);
        let result={
            city:city,
            temp: data.main.temp,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max,
            weather: data.weather[0].description,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            windSpeed: data.wind.speed,
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
        
    }

    let handleChange=(event)=>{
        // console.log(event);
        setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherinfo();
            updateInfo(newInfo);
            setErr(false);
        }
        catch(err){
            console.log("Error found:",err);
            setErr(true);
        }
       
    }
    return(
        <div className="container">
            <h3>Search for the Weather:</h3>
            <form action="#bbc" onSubmit={handleSubmit}>
               <TextField id="city"
                label="City Name"
                variant="outlined"
                value={city}
                onChange={handleChange}
                required/><br /><br />

               <Button type="submit"
                variant="outlined"
                endIcon={<SendIcon />} > Search </Button>
            {err && <p style={{color:"red"}}>No such place found!!</p> }
            </form>
        </div>
    );
}