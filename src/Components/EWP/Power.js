import React, { Component } from 'react'

class Power extends Component{
  constructor(props){
    super(props)
  }

  calculate = () => {
    var work = this.refs.work.value
    var time = this.refs.time.value
    if(!isNaN(work) && !isNaN(time)){
      work = Number(work)
      time = Number(time)
      var power = work/time
      power = Math.round(power  * 100)/100
      this.refs.results.style.color = 'white'
      this.refs.results.innerText = 'Power: ' + power
    } else if (isNaN(work) || isNaN(time)){
      this.refs.results.style.color = 'red'
      this.refs.results.innerText = 'Please only enter valid numbers'
    }
  }

  render(){
    return(
      <div id='workPanel'>
        <div>
          <h1>Power</h1>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Work</label>
          <input type='text' ref='work' id='inputwidget'/>
        </div>
        <div id='innerDiv'>
          <label style={{marginRight:20}}>Time</label>
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

export default Power
