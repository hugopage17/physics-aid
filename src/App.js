import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import AverageSpeed from './Components/Kinematics/AverageSpeed'
import AverageVelocity from './Components/Kinematics/AverageVelocity'
import Acceleration from './Components/Kinematics/Acceleration'
import Weight from './Components/MWD/Weight'
import Density from './Components/MWD/Density'
import MomentOfForce from './Components/Turning/MomentOfForce'
import Pressure from './Components/Pressure/Pressure'
import LiquidColumn from './Components/Pressure/LiquidColumn'
import Work from './Components/EWP/Work'
import Power from './Components/EWP/Power'
import Kinetic from './Components/EWP/KineticEnergy'
import Gravitational from './Components/EWP/Gravitational'
import WaveVelocity from './Components/GWP/WaveVelocity'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          showKin: 'none',
          showMd: 'none',
          showMom: 'none',
          showPres: 'none',
          showEwp: 'none',
          showWave: 'none',

          openAvrSpeed: 'none',
          openAvrVel: 'none',
          openAcc: 'none',

          openWeight: 'none',
          openDensity: 'none',

          openPres: 'none',
          openLC: 'none',

          openWD: 'none',
          openPower: 'none',
          openKE:'none',
          openGPE:'none'
        }
    }

    avrSpeedMode = () => {
        this.setState({showKin:'block'})
        this.setState({showMd:'none'})
        this.setState({showMom:'none'})
        this.setState({showPres:'none'})
        this.setState({showEwp:'none'})
        this.setState({showWave:'none'})

        this.setState({openAvrSpeed:'block'})
        this.setState({openAvrVel:'none'})
        this.setState({openAcc:'none'})
    }

    avrVelMode = () => {
        this.setState({showKin:'block'})
        this.setState({showMd:'none'})
        this.setState({showMom:'none'})
        this.setState({showPres:'none'})
        this.setState({showEwp:'none'})
        this.setState({showWave:'none'})

        this.setState({openAvrSpeed:'none'})
        this.setState({openAvrVel:'block'})
        this.setState({openAcc:'none'})
    }

    accMode = () => {
        this.setState({showKin:'block'})
        this.setState({showMd:'none'})
        this.setState({showMom:'none'})
        this.setState({showPres:'none'})
        this.setState({showEwp:'none'})
        this.setState({showWave:'none'})

        this.setState({openAvrSpeed:'none'})
        this.setState({openAvrVel:'none'})
        this.setState({openAcc:'block'})
    }

    weightMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'block'})
      this.setState({showMom:'none'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'none'})
      this.setState({showWave:'none'})

      this.setState({openWeight:'block'})
      this.setState({openDensity:'none'})
    }

    densityMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'block'})
      this.setState({showMom:'none'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'none'})
      this.setState({showWave:'none'})

      this.setState({openWeight:'none'})
      this.setState({openDensity:'block'})
    }

    mofMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'block'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'none'})
      this.setState({showWave:'none'})
    }

    pressureMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'none'})
      this.setState({showPres:'block'})
      this.setState({showEwp:'none'})
      this.setState({showWave:'none'})

      this.setState({openPres:'block'})
      this.setState({openLC:'none'})
    }

    LCMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'none'})
      this.setState({showPres:'block'})
      this.setState({showEwp:'none'})
      this.setState({showWave:'none'})

      this.setState({openPres:'none'})
      this.setState({openLC:'block'})
    }

    WDMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'none'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'block'})
      this.setState({showWave:'none'})

      this.setState({openWD:'block'})
      this.setState({openPower:'none'})
      this.setState({openKE:'none'})
      this.setState({openGPE:'none'})
    }

    PowMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'none'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'block'})
      this.setState({showWave:'none'})

      this.setState({openWD:'none'})
      this.setState({openPower:'block'})
      this.setState({openKE:'none'})
      this.setState({openGPE:'none'})
    }

    KEMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'none'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'block'})
      this.setState({showWave:'none'})

      this.setState({openWD:'none'})
      this.setState({openPower:'none'})
      this.setState({openKE:'block'})
      this.setState({openGPE:'none'})
    }

    GPEMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'none'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'block'})
      this.setState({showWave:'none'})

      this.setState({openWD:'none'})
      this.setState({openPower:'none'})
      this.setState({openKE:'none'})
      this.setState({openGPE:'block'})
    }

    WaveMode = () => {
      this.setState({showKin:'none'})
      this.setState({showMd:'none'})
      this.setState({showMom:'none'})
      this.setState({showPres:'none'})
      this.setState({showEwp:'none'})
      this.setState({showWave:'block'})
    }

    render() {
    const sideStyle = {float:'left', margin:'auto',width:'30%'}
    const workStyle = {float:'right', margin:'auto',width:'70%'}

    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div style={sideStyle}>
          <Sidebar
            avrSpeed={this.avrSpeedMode} avrVel={this.avrVelMode} acc={this.accMode}
            weight={this.weightMode} density={this.densityMode}
            mof={this.mofMode}
            pres={this.pressureMode} LCpres={this.LCMode}
            wd={this.WDMode} pow={this.PowMode} ke={this.KEMode} gpe={this.GPEMode}
            waveVel={this.WaveMode}
          />
        </div>
        <div style={workStyle}>
          <div id='kinSec' style={{display:this.state.showKin}}>
            <div style={{display:this.state.openAvrSpeed}}><AverageSpeed/></div>
            <div style={{display:this.state.openAvrVel}}><AverageVelocity/></div>
            <div style={{display:this.state.openAcc}}><Acceleration/></div>
          </div>
          <div id='mdSec' style={{display:this.state.showMd}}>
            <div style={{display:this.state.openWeight}}><Weight/></div>
            <div style={{display:this.state.openDensity}}><Density/></div>
          </div>
          <div id='momSec' style={{display:this.state.showMom}}>
            <div><MomentOfForce/></div>
          </div>
          <div id='presSec' style={{display:this.state.showPres}}>
            <div style={{display:this.state.openPres}}><Pressure/></div>
            <div style={{display:this.state.openLC}}><LiquidColumn/></div>
          </div>
          <div id='ewpSec' style={{display:this.state.showEwp}}>
            <div style={{display:this.state.openWD}}><Work/></div>
            <div style={{display:this.state.openPower}}><Power/></div>
            <div style={{display:this.state.openKE}}><Kinetic/></div>
            <div style={{display:this.state.openGPE}}><Gravitational/></div>
          </div>
          <div id='wave' style={{display:this.state.showWave}}>
            <div><WaveVelocity/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
