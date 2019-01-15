import React, { Component } from 'react';
import '../../bootstrap.min.css';
import Cityweather from '../Weathercity/Weathercity'




const Weatherform =(props) => {
  
    return (
        <React.Fragment>
        <div className="row mx-auto text-center mt-4 justify-content-md-center ">
       
        <div className=" col-6    text-center  justify-content-md-center" >
        <form onSubmit={props.getWeather}> 
            <div className="form-row align-items-center"> 
            <div className="col-sm-4 my-1">
              <input type="text" className="form-control" name='city'  placeholder="Enter city ... "required  />
            </div>
            <div className="col-sm-4 my-1">
              <input type="text" className="form-control" name='country' placeholder="Enter country "required /> 
            </div>
            <div className="col-auto my-1">
            <button type="submit" className="btn btn-primary">Git Weather</button>
            </div>
            </div>
            
           
            
        </form>
        </div>
        </div>
        
        <div row mx-auto text-center mt-4 justify-content-md-center w-50>
        <Cityweather weath={props.weath}/>
        </div>
        </React.Fragment>
        
     
    );
  
}

export default  Weatherform;
