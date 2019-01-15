import React, { Component } from 'react';
import '../../bootstrap.min.css';
import partlycloudyday from '../.././img/02d.png';
import partlycloudynight from '../.././img/02n.png';
import cloudy from '../.././img/04d.png';
import clearday from '../.././img/01d.png';
import clearnight from '../.././img/01n.png';
import rain from '../.././img/10d.png';
import wind from '../.././img/wind.png';
import 	snow from '../.././img/13d.png';
import 	fog from '../.././img/fog.png';
//import './Weather.css';



const Weathercurrent=(props)=> {
    let {currently,city,country}=props.weath
    let icon =currently.icon
    let image=""
   
      switch(icon) {
        case 'partly-cloudy-day':
          image=partlycloudyday
          break ;
        case 'partly-cloudy-night':
          image=partlycloudynight
          break;
        case 'cloudy':
          image=cloudy
          break;
        case 'clear-day':
          image=clearday
          break;
        case 'clear-night':
          image=clearnight
          break;
        case 'rain':
          image=rain
          break ;
        case 'wind':
          image=wind
          break ;
        case 'snow':
            image=snow
            break ;
        case 'sleet':
          image=snow
          break ;
        case 'fog':
          image=fog
          break ;
        default:
          return "";
      }
   
    

    return (
      
      <div className="card col-6 mt-4  mx-auto text-center " >
      {	
        city && country && <p className="weather__key mt-2">  
          <i className="weather__value"> Nablus, PS</i>
        </p> 
      }

      


     {	
        city && country && <p className="weather__key ">  
          <span className="weather__value"> <img src={image} className="img-responsive w-20 h-15" alt="immmmmmmmmmmg" /></span>
        </p> 
      }


     

      {	
        currently.summary &&  <p className="weather__key  mt-1"> 
          <span className="weather__value"> {currently.summary}</span>
        </p> 
      }
       { 	
      currently.temperature && <p className="weather__key  mt-1"> Temperature: 
        <span className="weather__value"> { currently.temperature } C	</span>
      </p> 
      }

      {	
        currently.cloudCover &&  <p className="weather__key  mt-1 ">CloudCover: 
          <span className="weather__value"> {currently.cloudCover}</span>
        </p> 
      }
       
     

      { 	
      currently.humidity && <p className="weather__key  mt-1">Humidity: 
        <span className="weather__value "> {  currently.humidity }	</span>
      </p> 
      } 

      { 	
      currently.windSpeed && <p className="weather__key mt-1">Windspeed: 
        <span className="weather__value"> { currently.windSpeed }	</span>
      </p> 
      }     
       
       
       
      
      </div>
     
    );
 
}

export default  Weathercurrent;
