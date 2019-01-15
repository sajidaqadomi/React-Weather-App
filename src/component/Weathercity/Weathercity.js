import React, { Component } from 'react';
import '../../bootstrap.min.css';
import clearday from '../.././img/01d.png';
import partlycloudyday from '../.././img/02d.png';
import cloudy from '../.././img/03d.png';
import brokenclouds from '../.././img/04d.png';
import showerrain from '../.././img/09d.png';
import rain from '../.././img/10d.png';
import thunderstorm from '../.././img/11d.png';
import 	snow from '../.././img/13d.png';
import mist from '../.././img/50d.png';
import clearn from '../.././img/01n.png';
import partlycloudyn from '../.././img/02n.png';
import cloudyn from '../.././img/03n.png';
import brokencloudsn from '../.././img/04n.png';
import showerrainn from '../.././img/09n.png';
import rainn from '../.././img/10n.png';
import thunderstormn from '../.././img/11n.png';
import 	snown from '../.././img/13n.png';
import mistn from '../.././img/50n.png';


const Weathercity=(props)=> {
    let{temp,humidity,scountry,description,scity,wind,icon}=props.weath
    let image
       
        switch(icon) {
            case '02d':
              image=partlycloudyday
              break ;
            case '02n':
              image=partlycloudyn
              break;
            case '03d':
              image=cloudy
              break;
            case '03n':
              image=cloudyn
              break;
            case '04d':
              image=brokenclouds
              break;
            case '04n':
              image=brokencloudsn
              break;
            case '09d':
              image=showerrain
              break;
            case '09n':
              image=showerrainn
              break;
            case '01d':
              image=clearday
              break;
            case '01n':
              image=clearn
              break;
           
            case '10d':
              image=rain
              break ;
            case '10n':
              image=rainn
              break ;
            case '11d':
              image=thunderstorm
              break ;
            case '11n':
              image=thunderstormn
              break ;
            case '13d':
              image=snow
              break ;
            case '13dn':
              image=snown
              break ;
            case '50d':
              image=mist
              break;
            case '50n':
              image=mistn
              break ;
            default:
              return "";
        }

    return (
      <div className="card col-6   mx-auto text-center mt-2">
      
       {	
       temp && <p className="weather__key mt-2"> 
        <span className="weather__value">{scity}-{scountry}</span>
        </p> 
       } 

      {	
        description &&<p className="weather__key mt-1">
        <span className="weather__value">{description}</span>
        </p> 
       } 

      {	
        icon &&<p className="weather__key mt-1">
        <span className="weather__value"><img  className="img-responsive w-22 h-22"  src={image}  alt="immmmmmmmmmmg" /></span>
        </p> 
       } 


       {	
        temp && <p className="weather__key mt-1">Temperature: 
        <span className="weather__value">{temp}</span>
        </p> 
       } 

      {	
        wind && <p className="weather__key mt-1">Wind-speed: 
        <span className="weather__value">{wind}</span>
        </p> 
       } 

       {	
        humidity &&<p className="weather__key mt-1">Humidity: 
        <span className="weather__value">{humidity}</span>
        </p> 
       }
       
       
        
        
        
      </div>
    );
 
}

export default Weathercity;
