import React, { Component } from 'react'

class Kinetic extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var mass = this.refs.mass.value
    var velocity = this.refs.vel.value
    if(!isNaN(mass) && !isNaN(velocity)){
      mass = Number(mass)
      velocity = Number(velocity)
      var kineticEnergy = 0.5*(mass*(Math.pow(velocity,2)))
      kineticEnergy = Math.round(kineticEnergy * 100) / 100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Kinetic Energy: ' + kineticEnergy  + ' (j)'
    } else if (isNaN(mass) || isNaN(velocity)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Kinetic Energy</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Mass</label>
          <input type='text' ref='mass' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Velocity</label>
          <input type='text' ref='vel' id='inputwidget'/>
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

export default Kinetic
