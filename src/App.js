import React from 'react';
import './App.css';

var appname = 'CITYO';

class List extends React.Component {
  render() {
    return (
      <ul className="navList">
        <li className="navListItem">Login</li>
        <li className="navListItem">Username</li>
      </ul>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1 className ="App-title">{appname }</h1>
        <List />
      </div>
    );
  }
}

class Logginform extends React.Component {
 constructor(props) {
   super(props);
   this.state = {value:'', value2:''};

   this.changeHandler = this.changeHandler.bind(this);
   this.changeHandler2 = this.changeHandler2.bind(this);
 }

 changeHandler(event) {

  this.setState({value: event.target.value});

}

  changeHandler2(event) {
    this.setState({value2: event.target.value});
  }



  render(){
    return (
      <div className="flex">
        <form>
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.changeHandler} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.value2} onChange={this.changeHandler2} />
          </label>
        </form>
      </div>
    );
  }
}

class Container extends React.Component {
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
        <Header />
      </div>
      <div className="mainbit">
        <Container />
      </div>
    </div>
  );
}

export default App;
