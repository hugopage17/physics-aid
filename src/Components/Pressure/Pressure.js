import React, { Component } from 'react'

class Pressure extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var force = this.refs.force.value
    var area = this.refs.area.value
    if(!isNaN(force) && !isNaN(area)){
      force = Number(force)
      area = Number(area)
      var pressure = force/area
      pressure = Math.round(pressure * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Pressure: ' + pressure
    } else if (isNaN(force) || isNaN(area)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Pressure</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:35}}>Force</label>
          <input type='text' ref='force' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Area</label>
          <input type='text' ref='area' id='inputwidget'/>
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

export default Pressure
