import logo from './assets/BridgeLabz.jpg'
// import logo1 from './assets/1img.webp'
// import logo2 from './assets/2img.jpg'
// import logo3 from './assets/3img.webp'
import React from 'react';
import './App.css';

class App extends React.Component{
 url = 'http://www.bridgelabz.com/'
  constructor(){
    super()
    //  this.state = {
    //    title: 'hello from bridgelabz' 
    //  }
    this.state = {
      userName: '',
      nameError:''
    }
  }

  //onClick  function 
  onClick = ($event) => {
    console.log("save button is clicked!",$event);
    window.open(this.url, "blank");
  }
  //onChange Function..Regex
  onNameChange = (event) => {
    console.log("value is",event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    //set title using setState method
    this.setState({ userName: event.target.value})
    if (nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    }else{
      this.setState({ nameError: 'Name is Incorrect'})
    }
  }

render() {
  return(
    <>
    <div>
    <h1>Hello Bridgelabz</h1>
     <h1>{this.state.title}</h1>
     <h1>Hello {this.state.userName} from Bridgelabz</h1>
     <img src={logo} onClick={this.onClick}
     alt="The Bridgelabz logo: a bridge tp Employement throgh lab works"/>
     {/* <img src={logo1} />
     <img src={logo2}/>
     <img  src={logo3}/> */}
     </div> 
    <div>
    <input onChange = {this.onNameChange} />
    <span className="error-output">{this.state.nameError}</span>
    </div>
    </>
  );
}
}

export default App;
