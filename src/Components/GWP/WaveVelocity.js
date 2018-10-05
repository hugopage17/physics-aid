import React, { Component } from 'react'

class WaveVelocity extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var freq = this.refs.freg.value
    var wave = this.refs.wave.value
    if(!isNaN(freq) && !isNaN(wave)){
      freq = Number(freq)
      wave = Number(wave)
      var velocity = freq*wave
      velocity = Math.round(velocity * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Velocity: ' + velocity
    } else if (isNaN(freq) || isNaN(wave)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }

  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Wave Velocity</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:60}}>Frequency</label>
          <input type='text' ref='freg' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Wave Length</label>
          <input type='text' ref='wave' id='inputwidget'/>
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

export default WaveVelocity
