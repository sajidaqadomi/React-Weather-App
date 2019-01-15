import React, { Component } from 'react';
import '../../bootstrap.min.css';
import '../../bootstrap.min.css'
import partlycloudyday from '../.././img/02d.png';
import partlycloudynight from '../.././img/02n.png';
import cloudy from '../.././img/04d.png';
import clearday from '../.././img/01d.png';
import clearnight from '../.././img/01n.png';
import rain from '../.././img/10d.png';
import wind from '../.././img/wind.png';
import 	snow from '../.././img/13d.png';
import 	fog from '../.././img/fog.png';
//import './Weatherhourly.css'

const Weatherhourly=(props)=> {
    let {data}=props.hourly
    let dataitem=data.map((item,key)=>{
    let image
        let icon=item.icon
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
       // console.log(item.icon)
        return(
            <div key={key} className=" card col-6 border bg-light mt-4">
                {	
                     <p className="weather__key"> 
                    <span className="weather__value">{item.hour}:00:00</span>
                    </p> 
                } 
                {	
                     <p className="weather__key"> 
                    <span className="weather__value"><img  className="img-responsive w-25 h-50"  src={image}  alt="immmmmmmmmmmg" /> </span>
                    </p> 
                } 
                {	
                    item.summary && <p className="weather__key">
                    <span className="weather__value">{item.summary}</span>
                    </p> 
                } 

                
                 
                {	
                    item.windSpeed && <p className="weather__key"> 
                    <span className="weather__value">{item.windSpeed}km/h </span>
                    </p> 
                   
                } 
                
                {	
                    item.temperature && <p className="weather__key"> 
                    <span className="weather__value">{item.temperature}C</span>
                    </p> 
                   
                }
                
               

            </div>
           
        )
    }) 

    return (
      <React.Fragment>
       <div  className="row mx-auto text-center mt-4 justify-content-md-center w-50">
         {dataitem}
        </div>
         
      </React.Fragment>
    );
 
}

export default Weatherhourly;
