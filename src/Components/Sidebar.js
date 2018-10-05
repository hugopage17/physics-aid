import React, { Component } from 'react'
import '../Stylesheets/style.css'
import MenuData from '../MenuList.json'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {
      showKin: 'none',
      showMWD: 'none',
      showTurn: 'none',
      showPres: 'none',
      showEWP: 'none',
      showGWP: 'none'
    }
  }

  kinMode = () => {
    this.setState({showKin:'block'})
    this.setState({showMWD: 'none'})
    this.setState({showTurn: 'none'})
    this.setState({showPres: 'none'})
    this.setState({showEWP: 'none'})
    this.setState({showGWP: 'none'})
  }

  mwdMode = () => {
    this.setState({showKin:'none'})
    this.setState({showMWD: 'block'})
    this.setState({showTurn: 'none'})
    this.setState({showPres: 'none'})
    this.setState({showEWP: 'none'})
    this.setState({showGWP: 'none'})
  }

  turnMode = () => {
    this.setState({showKin:'none'})
    this.setState({showMWD: 'none'})
    this.setState({showTurn: 'block'})
    this.setState({showPres: 'none'})
    this.setState({showEWP: 'none'})
    this.setState({showGWP: 'none'})
  }

  presMode = () => {
    this.setState({showKin:'none'})
    this.setState({showMWD: 'none'})
    this.setState({showTurn: 'none'})
    this.setState({showPres: 'block'})
    this.setState({showEWP: 'none'})
    this.setState({showGWP: 'none'})
  }

  ewpMode = () => {
    this.setState({showKin:'none'})
    this.setState({showMWD: 'none'})
    this.setState({showTurn: 'none'})
    this.setState({showPres: 'none'})
    this.setState({showEWP: 'block'})
    this.setState({showGWP: 'none'})
  }

  gwpMode = () => {
    this.setState({showKin:'none'})
    this.setState({showMWD: 'none'})
    this.setState({showTurn: 'none'})
    this.setState({showPres: 'none'})
    this.setState({showEWP: 'none'})
    this.setState({showGWP: 'block'})
  }


  render(){
    const innerMenuStyle = {backgroundColor:'#333333'}

    return(
      <div id='sidebar'>
        <hr/>
        <div>
          <div>
            <h1 class='catTitle' onClick={this.kinMode}>Kinematics</h1>
          </div>
          <div style={innerMenuStyle}>
            <h2 class='subcatTitle' style={{display:this.state.showKin}} onClick={this.props.avrSpeed}>Average Speed</h2>
            <h2 class='subcatTitle' style={{display:this.state.showKin}} onClick={this.props.avrVel}>Average Velocity</h2>
            <h2 class='subcatTitle' style={{display:this.state.showKin}} onClick={this.props.acc}>Acceleration</h2>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <h1 class='catTitle' onClick={this.mwdMode}>Mass, Weight, Density</h1>
          </div>
          <div style={innerMenuStyle}>
            <h2 class='subcatTitle' style={{display:this.state.showMWD}} onClick={this.props.weight}>Weight</h2>
            <h2 class='subcatTitle' style={{display:this.state.showMWD}} onClick={this.props.density}>Density</h2>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <h1 class='catTitle' onClick={this.turnMode}>Turning effect of force</h1>
          </div>
          <div style={innerMenuStyle}>
            <h2 class='subcatTitle' style={{display:this.state.showTurn}} onClick={this.props.mof}>Moment of force</h2>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <h1 class='catTitle' onClick={this.presMode}>Pressure</h1>
          </div>
          <div style={innerMenuStyle}>
            <h2 class='subcatTitle' style={{display:this.state.showPres}} onClick={this.props.pres}>Pressure</h2>
            <h2 class='subcatTitle' style={{display:this.state.showPres}} onClick={this.props.LCpres}>Pressure of liquid column</h2>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <h1 class='catTitle' onClick={this.ewpMode}>Energy, Work and Power</h1>
          </div>
          <div style={innerMenuStyle}>
            <h2 class='subcatTitle' style={{display:this.state.showEWP}} onClick={this.props.wd}>Work Done</h2>
            <h2 class='subcatTitle' style={{display:this.state.showEWP}} onClick={this.props.pow}>Power</h2>
            <h2 class='subcatTitle' style={{display:this.state.showEWP}} onClick={this.props.ke}>Kinetic Energy</h2>
            <h2 class='subcatTitle' style={{display:this.state.showEWP}} onClick={this.props.gpe}>Gravitational Potential Energy</h2>
          </div>
        </div>

        <hr/>

        <div>
          <div>
            <h1 class='catTitle' onClick={this.gwpMode}>General Wave Properties</h1>
          </div>
          <div style={innerMenuStyle}>
            <h2 class='subcatTitle' style={{display:this.state.showGWP}} onClick={this.props.waveVel}>Wave Velocity</h2>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Sidebar
