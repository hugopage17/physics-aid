import React, { Component } from 'react'

class LiquidColumn extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var height = this.refs.height.value
    var den = this.refs.den.value
    var grav = this.refs.grav.value
    if(!isNaN(height) && !isNaN(den) && !isNaN(grav)){
      height = Number(height)
      den = Number(den)
      grav = Number(grav)
      var pressure = height*den*grav
      pressure = Math.round(pressure * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Pressure: ' + pressure
    } else if (isNaN(height) || isNaN(den) || isNaN(grav)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Pressure of Liquid column</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Height of Liquid Column</label>
          <input type='text' ref='height' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:160}}>Density</label>
          <input type='text' ref='den' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Gravitational Field Strength</label>
          <input type='text' ref='grav' id='inputwidget'/>
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

export default LiquidColumn
