import React, { Component } from 'react'

class Weight extends Component {
  constructor(props){
    super(props)
  }

  calculate = () => {
    var mass = this.refs.mass.value
    var grav = this.refs.grav.value
    if(!isNaN(mass) && !isNaN(grav)){
      mass = Number(mass)
      grav = Number(grav)
      var weight = mass*grav
      weight = Math.round(weight * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Weight: ' + weight
    } else if (isNaN(mass) || isNaN(grav)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Weight</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:160}}>Mass</label>
          <input type='text' ref='mass' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Acceleration of Gravity</label>
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

export default Weight
