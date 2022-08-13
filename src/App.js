import logo from './assets/BridgeLabz.jpg'
import logo1 from './assets/1img.webp'
import logo2 from './assets/2img.jpg'
import logo3 from './assets/3img.webp'
import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      title: 'hello from bridgelabz' 
    }
  }

render(){
  return(
    <div>
    <h1>Hello Bridgelabz</h1>
     <h1>{this.state.title}</h1>
     <img src={logo}
     alt="The Bridgelabz logo: a bridge tp Employement throgh lab works"/>
     {/* <img src={logo1} />
     <img src={logo2}/>
     <img  src={logo3}/>
     
      */}
    </div>
  );
}
}

export default App;
