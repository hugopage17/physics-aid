import React, { Component } from 'react';
import header from '../header.png'
import '../Stylesheets/style.css'

class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id='header'>
        <img src={header} style={{marginLeft:20}}/>
      </div>
    )
  }
}

export default Header
