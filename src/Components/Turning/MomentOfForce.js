import React, { Component } from 'react'

class MomentOfForce extends Component {
  constructor(props){
    super(props)
  }

  calculate = () => {
    var force = this.refs.force.value
    var dist = this.refs.dist.value
    if(!isNaN(force) && !isNaN(dist)){
      force = Number(force)
      dist = Number(dist)
      var moment_force = force*dist
      moment_force = Math.round(moment_force * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Moment of Force: ' + moment_force
    } else if (isNaN(force) || isNaN(dist)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Moment Of Force</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:170}}>Force</label>
          <input type='text' ref='force' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Distance from force to pivot</label>
          <input type='text' ref='dist' id='inputwidget'/>
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

export default MomentOfForce
