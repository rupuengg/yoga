import React from 'react';

export class Head extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand navbar-link external">
                    <img src="images/qdsa/logo.png"/>
                    <span>QUALITY DATA SCIENCES & ANALYTICS LLP</span>
                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="#home" >Home</a></li>
                    <li><a href="#aboutus" >About us</a></li>
                    <li><a href="#services" >Services</a></li>
                    <li><a href="#teams" >Team</a></li>
                    <li><a href="#solutions" >Solutions</a></li>
                    <li><a href="#knowledgecenter" >Knowledge Center</a></li>
                    <li><a href="#contactus" >Contact us</a></li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
