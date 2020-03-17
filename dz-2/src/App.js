import React from 'react';
import Albom from './comp/albom';
import albom from './comp/Rosenrot.jpg';
import Form from './comp/form';
import ava from './comp/Bender.png';
import Form2 from './comp/form2';


class MyApp extends React.Component{
  render(){
    return(
    <div >
      <h2>DZ-1</h2>
      <div style={{width:"500px", margin:"20px auto" }}>
        
        <div><img style={{width:"500px",border:"solid 1px gray"}} src={albom} alt="albom" /></div>
        <Albom />
      </div>
      <h2>DZ-2</h2>
      <div className='myApp' style={{width:"1000px", margin:"20px auto" }}>
        <div><img src={ava} alt="ava" /></div>
        <Form />
      </div>
      <h2>DZ-3</h2>
      <div className='myApp' style={{width:"1000px", margin:"20px auto" }}>
        <Form2 />
        <div><img src={ava} alt="ava" /></div>
      </div>
    </div>
     );
  }
}

export default MyApp;
