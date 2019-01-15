import React, { Component } from 'react';
import Weatherform from './component/Weatherform/Weatherform';
import Weathercurrent from './component/Weathercurrent/Weathercurrent';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//import Titles from './component/Titles/Titles';
import Time from './component/Time/Time';
import Weatherdaily from './component/Weatherdaily/Weatherdaily';
import Weatherhourly from  './component/Weatherhourly/Weatherhourly';
//import Weathercity from './component/Weathercity/Weathercity';
import Nav from './component/NAV/Nav'
import './bootstrap.min.css';
import './App.css';
     
class App extends Component{
 state={
    latitude:'',
    longitude:'',

    currently:{summary:"",icon:"",temperature:"",humidity:"",windSpeed:""},

    hourly:{
      summary:" ",
      icon:" ",
      data: [
        //{time:"",summary:"",icon:"",temperature:"",humidity:"",windSpeed:"" }
      ]
    },
    
    daily:{
      summary:" ",
      icon:" ",
      data:[
       // {time:"",summary:"",icon:"",temperature:"",humidity:"",windSpeed:"",temperatureHigh:"",temperatureLow:"" }
      ]
    },
    

    country:"PS ",
    city:"Nablus ",
    day:"",
    hour:"",
    err:'',

    // scountry:"",
    // scity:"",
    // humidity:"",
    // temp:"",
    // description:"",
    
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount=()=>{
    
    let location = null;
    if (window.navigator && window.navigator.geolocation) {
        location = window.navigator.geolocation
    }
    navigator.geolocation.getCurrentPosition(this.success,this.error,this.options);
  }
   success=(position)=> {
    const today = new Date();
    const h = today.getHours();
    let indexday=today.getDay();

    var {latitude,longitude,hour,day} = this.state;
    latitude = position.coords.latitude;
    longitude= position.coords.longitude;
    hour=h;
    day= indexday;
    this.setState({latitude, longitude,hour,day})
    
   this.getCountry(latitude,longitude) //request fun to display city//not Work
    this.getWeather()
    }

    error=(err)=>{
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    options = {
      enableHighAccuracy: true,
      timeout: Infinity,
      maximumAge: 0
    }

    
    /////////////////////////////////////////////////Find Full ADRESS/////////////////////
    getCountry=async(lat,lon)=>{
      var proxyUrl = `https://cors-anywhere.herokuapp.com/`;
      let targetUrl = `https://us1.locationiq.com/v1/reverse.php?key=35b0bfafd3018a&lat=${this.state.latitude}&lon=${this.state.longitude}&format=json`;
      await fetch(proxyUrl +  targetUrl)
    .then(blob => blob.json())
    .then(data => {
    let place = JSON.stringify(data, null, 2);
    let location=JSON.parse(place)
    
    })
    .catch(e => {
      console.log(e);
      return e;
    });

    }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  getWeather= async()=>{
   
    var proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    let targetUrl = `https://api.darksky.net/forecast/3d2b960027221cca9f26b6bc00f06d6e/${this.state.latitude},${this.state.longitude}`;
    await fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {
    let weatherInf = JSON.stringify(data, null, 2);
    let weatherData=JSON.parse( weatherInf)
    this.updateWeather(weatherData)
    })
    .catch(e => {
      console.log(e);
      return e;
    });
    
    
  }
  /////////////////////////////////////////////////////////////////
  updateWeather=(weatherdata)=>{
   
   let{currently,daily,day,hourly,hour}=this.state
   console.log(weatherdata.currently)
   currently.summary=weatherdata.currently.summary
   currently.icon=weatherdata.currently.icon
   currently.temperature=(weatherdata.currently.temperature/6.7070).toFixed(2)
   currently.windSpeed=weatherdata.currently.windSpeed
   currently.humidity=weatherdata.currently.humidity
   currently.cloudCover= weatherdata.currently.cloudCover
   currently.visibility=weatherdata.currently.visibility
   daily.summary=weatherdata.daily.summary
   daily.icon=weatherdata.daily.icon

   let Dayitem=day+1

   for(let i=0 ;i<4;i++){
     if(Dayitem>6){
       Dayitem=0
     }
    daily.data.push({
      time:weatherdata.daily.data[i].time,summary:weatherdata.daily.data[i].summary,
      icon:weatherdata.daily.data[i].icon,temperature:(weatherdata.daily.data[i].temperature/6.7070).toFixed(2),
      humidity:weatherdata.daily.data[i].humidity,windSpeed:(weatherdata.daily.data[i].windSpeed*1.6).toFixed(2),
      temperatureMax:(weatherdata.daily.data[i].temperatureMax/6.7070).toFixed(2),temperatureMin:(weatherdata.daily.data[i].temperatureMin/6.7070).toFixed(2),
      indexDay:Dayitem
     })
      Dayitem++
    
   }
   ///////////////////////////////
   hourly.summary=weatherdata.daily.summary
   hourly.icon=weatherdata.daily.icon

   let houritem=hour+1

   
  for(let i=0 ;i<4;i++){
     if(houritem>23){
      houritem=0
     }
    
    hourly.data.push({
    time:weatherdata.hourly.data[i].time,summary:weatherdata.hourly.data[i].summary,
    icon:weatherdata.hourly.data[i].icon,temperature:(weatherdata.hourly.data[i].temperature/6.7070).toFixed(2),
    humidity:weatherdata.hourly.data[i].humidity,windSpeed:(weatherdata.hourly.data[i].windSpeed*1.6).toFixed(2),
    temperatureMax:weatherdata.hourly.data[i].temperatureMax,temperatureMin:weatherdata.hourly.data[i].temperatureMin,
    hour:houritem
     })
      houritem++
    
   }
   this.setState({
     currently,
     daily,
     hourly
    // alerts
   })
    
  }
  //////////////////////////////////////////Get  Weather For Special city/////////////////////////////////////////////////
  getCityWeather= async(e)=>{
    e.preventDefault()
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
   // console.log("city:"+city+"country:"+country)
   try{ const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=33034eef7f5c4b12961c5ce76218fb94`)
    const data=  await api.json()
    console.log(data)
    this.setState({
      scountry:data.sys.country,
      scity:data.name,
      humidity:data.main.humidity,
      temp:(data.main.temp/22.8).toFixed(1),
      description:data.weather[0].description,
      wind:(data.wind.speed*1.6).toFixed(2),
      icon:data.weather[0].icon,
      err:''
    })}
    catch(e){
     alert("Invalid Name Of Country Or City")
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <BrowserRouter>
      <div className="container-fluid" >
         
      <Nav />
         <div className="row mx-auto text-center mt-4 justify-content-md-center">
           <Time upDay={this.updateDay} />
         </div>

      <Switch>
      <Route exact path="/" component={()=><Weathercurrent weath={this.state} />} />
      <Route path="/weatherhourly" component={()=><Weatherhourly  hourly={this.state.hourly}/>} />
      <Route path="/weatherdaily" component={()=> <Weatherdaily  daily={this.state.daily} />} />
      <Route path="/weathersearch" component={()=> <Weatherform getWeather={this.getCityWeather} weath={this.state} /> }/>
      </Switch>
            
           
           
      </div>
      </BrowserRouter>  
     

      
    );
  }
}


export default ( App);
