import React from 'react';
import './App.css';
import MainMenu from './menu.jsx';

var appname = 'CITYO';
var username= "Username"

var height = document.getElementsByClassName('App-header');
console.log(height);

var loggedInStatus = '';

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
        
      </div>
    );
  }
}



class LogginIf extends React.Component {
 constructor(props) {
   super(props);
   this.state = {isLoggedIn: '',};
   this.callBackFunction = this.callBackFunction.bind(this);

 }

  callBackFunction(){
    this.setState({isLoggedIn: 'true'});
  }

  loginHandler(){
    if (this.state.isLoggedIn == '') {
      return <LoginForm callBack = {this.callBackFunction}/>

    }

    else if (this.state.isLoggedIn == 'true') {
      return (
        <MainMenu/>
      );
    }
  }


  render() {
    return (
      <div>
        {this.loginHandler()}
      </div>
    )
  }

}

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {username:'', password:''}

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

  clickHandler(event){
     event.preventDefault();
     if (this.state.username == 'test' && this.state.password == 'test'){
         this.props.callBack();

     }

  }


  render() {
    return (
    <div>
      <h2>Login to {appname}</h2>
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
        <LogginIf />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="mainbit">
        <LoginContainer />
      </div>
    </div>
  );
}

export default App;
