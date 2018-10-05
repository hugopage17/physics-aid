import React, { Component } from 'react'

class Gravitational extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var height = this.refs.height.value
    var mass = this.refs.mass.value
    if(!isNaN(height) && !isNaN(mass)){
      height = Number(height)
      mass = Number(mass)
      var pressure = mass*9.81*height
      pressure = Math.round(pressure * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Pressure: ' + pressure
    } else if (isNaN(height) || isNaN(mass)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Gravitational Potential Energy</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Height</label>
          <input type='text' ref='height' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:30}}>Mass</label>
          <input type='text' ref='mass' id='inputwidget'/>
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

export default Gravitational
