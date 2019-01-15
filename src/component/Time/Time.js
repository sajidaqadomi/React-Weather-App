import React, * as react from 'react';

const weekday = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"]

 class Time extends react.Component {
  state = {
      date: "",
      time: ""
    }

  checkTime=(i)=> {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

  startTime =()=> {
    const today = new Date();
    const h = today.getHours();
    const m = this.checkTime(today.getMinutes());
    const s = this.checkTime(today.getSeconds());
    let indexday=today.getDay();
    let day=weekday[indexday]
    let d=today.getDate()
    let month=today.getMonth()+1
    let year=today.getUTCFullYear()

    this.setState({time: h + ":" + m + ":" + s ,
                   date: day+"-"+d+"/"+month+"/"+year
      });
    this.timeout = setTimeout(() => this.startTime(), 500);
  }

  componentDidMount=()=> {
    this.startTime();
  }
  componentWillUnmount=()=>{
    if (!this.timeout) return;
    clearTimeout(this.timeout);
  }

  render() {
    return(

      <div className="col-6 text-center   align-self-center"> 
        <h4 className="  ">{this.state.time}</h4>
        <h4>{this.state.date}</h4> 
      </div>
    );
  }

}
export default   Time;
