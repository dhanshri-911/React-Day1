import logo from './assets/BridgeLabz.jpg'
import logo1 from './assets/1img.webp'
import logo2 from './assets/2img.jpg'
import logo3 from './assets/3img.webp'
import React from 'react';
import './App.css';

class App extends React.Component{
 url = 'http://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      title: 'hello from bridgelabz' 
    }
  }

  //onClick  function 
  onClick = ($event) => {
    console.log("save button is clicked!",$event);
    window.open(this.url, "blank");
  }
  

render(){
  return(
    <div>
    <h1>Hello Bridgelabz</h1>
     <h1>{this.state.title}</h1>
     <img src={logo} onClick={this.onClick}
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
