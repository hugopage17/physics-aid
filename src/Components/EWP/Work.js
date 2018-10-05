import React, { Component } from 'react'

class Work extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var force = this.refs.force.value
    var distance = this.refs.dist.value
    if(!isNaN(force) && !isNaN(distance)){
      force = Number(force)
      distance = Number(distance)
      var work = force/distance
      work = Math.round(work  * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Work: ' + work
    } else if (isNaN(force) || isNaN(distance)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Work</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:40}}>Force</label>
          <input type='text' ref='force' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Distance</label>
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

export default Work
