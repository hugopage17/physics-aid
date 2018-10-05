import React, { Component } from 'react'

class Density extends Component {
  constructor(props){
    super(props)
  }

  calculate = () => {
    var mass = this.refs.mass.value
    var vol = this.refs.vol.value
    if(!isNaN(mass) && !isNaN(vol)){
      mass = Number(mass)
      vol = Number(vol)
      var density = mass/vol
      density = Math.round(density * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Density: ' + density
    } else if (isNaN(mass) || isNaN(vol)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Density</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:55}}>Mass</label>
          <input type='text' ref='mass' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Volume</label>
          <input type='text' ref='vol' id='inputwidget'/>
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

export default Density
