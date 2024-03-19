import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    
    let HOT_URL="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1671348364387-f20e4305b50a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGQlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D";
    let RAINY_URL="https://images.unsplash.com/photo-1532690505755-416f854618da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
        <div id="card">
            <Card className="card_container" sx={{ maxWidth: 345 }}>
              <CardMedia
                 sx={{ height: 190 }}
                 image={info.humidity > 60 
                    ? RAINY_URL: info.temp > 20
                    ? HOT_URL : COLD_URL}
                 title=" Weather displayed"
               />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                   {info.city} {info.humidity > 60 
                    ? <span style={{color:"Black"}}> <ThunderstormIcon/></span>: info.temp > 20
                    ? <span style={{color:"Orange"}}><WbSunnyIcon/></span> : <span style={{color:"lightBlue"}}><AcUnitIcon/></span>}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="span">
                   <p>Temperature = {info.temp}&deg;C</p>
                   <p>Humidity = {info.humidity}</p>
                   <p>Max-Temperature = {info.maxTemp}&deg;C</p>
                   <p>Min-Temperature = {info.minTemp}&deg;C</p>
                   <p>Wind-Speed = {info.windSpeed}</p>
                   <p>The weather can be descriped as <i>"{info.weather}"</i> and feels like {info.feelsLike}&deg;C</p>
                         
              </Typography>
              </CardContent>
          </Card>
          </div>
        </div>
    )
}
