import React, { Component } from 'react'

class AverageSpeed extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var dist = this.refs.dist.value
    var time = this.refs.time.value
    if(!isNaN(dist) && !isNaN(time)){
      dist = Number(dist)
      time = Number(time)
      var speed = dist/time
      speed = Math.round(speed * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Speed: ' + speed
    } else if (isNaN(dist) || isNaN(time)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }

  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Average Speed</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Change in distance (m)</label>
          <input type='text' ref='dist' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Change in time (sec)</label>
          <input type='text' ref='time' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <button id='butStyle' onClick={this.calculate}>Calculate</button>
        </div>
        <div id='innerDiv'>
          <label ref='results' id='resultsSection'></label>
        </div>
      </div>
    )
  }
}

export default AverageSpeed
