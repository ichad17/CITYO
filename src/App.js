import React from 'react';
import './App.css';

var appname = 'CITYO';
var username= "Username"

var height = document.getElementsByClassName('App-header');
console.log(height);

class List extends React.Component {
  render() {
    return (
      <ul className="navList">
        <li className="navListItem">Login</li>
        <li className="navListItem">{username}</li>
      </ul>
    );
  }
}

class Header extends React.Component {

  render() {
    return (
      <div className="App-header">
        <h1 className ="App-title">{appname}</h1>
        <List />
      </div>
    );
  }
}

class Logginform extends React.Component {
 constructor(props) {
   super(props);
   this.state = {username:'', password:'', isLoggedIn: ''};

   this.changeHandler = this.changeHandler.bind(this);
   this.changeHandler2 = this.changeHandler2.bind(this);
   this.clickHandler = this.clickHandler.bind(this);
 }

 changeHandler(event) {

  this.setState({username: event.target.value});

}

  changeHandler2(event) {
    this.setState({password: event.target.value});
  }

  loginHandler(){
    alert('nah');
  }

  clickHandler(event){
    event.preventDefault();
    if (this.state.username == 'test' && this.state.password == 'test'){
        this.loginHandler();
        this.setState({isLoggedIn: 'true'});
    }

  }




  render(){
    return (
      <div className="flex">
        <form className="flex">
          <label>
            <input placeholder="Username"  className="formStyle" type="text" value={this.state.value} onChange={this.changeHandler} />
          </label>
          <label >
            <input  placeholder="Password" className="formStyle" type="password" value={this.state.value2} onChange={this.changeHandler2} />
          </label>
          <label >
            <input id="btnLogin" className="button " value="LOGIN" onClick={this.clickHandler}type="submit"/>
            <input id="btnRegister" className="button " value="Register" onClick={this.clickHandler}type="submit"/>
          </label>
        </form>
      </div>
    );
  }
}

class LoginContainer extends React.Component {
  clickHandler() {
    var stop = 10;
    var test = this.clickHandler;
    console.log(test);
  }

  render() {
    return (
      <div className="container">
        <h2>Login to {appname}</h2>
        <Logginform />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div>

      </div>
      <div className="mainbit">
        <LoginContainer />
      </div>
    </div>
  );
}

export default App;
