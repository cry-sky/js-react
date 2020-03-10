import React from 'react';
import Content from './comp/content';
import logo from './comp/flag.jpg';

class MyApp extends React.Component{
  render(){
    return(
        <table className="myApp">
          <thead>
            <th><img style={{width:"200px" }} src={logo} alt="Logo" /></th><th style={{fontSize:"50px"}}> Хмельницький</th>
          </thead>
          <Content />
        </table> 
      );
  }
}

export default MyApp;
