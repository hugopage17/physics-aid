import React, { Component } from 'react'

class Acceleration extends Component {
  constructor(props){
    super(props)
  }

  calculate = () => {
    var vel = this.refs.vel.value
    var time = this.refs.time.value
    if(!isNaN(vel) && !isNaN(time)){
      vel  = Number(vel)
      time = Number(time)
      var acc = vel /time
      acc = Math.round(acc * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Acceleration: ' + acc
    } else if (isNaN(vel) || isNaN(time)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }

  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Acceleration</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:60}}>Change in velocity</label>
          <input type='text' ref='vel' id='inputwidget'/>
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

export default Acceleration
