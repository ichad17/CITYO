import React from 'react';
import './App.css';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavHandler/>
    );
  }
}

class NavHandler extends React.Component {

  constructor(props) {
    super(props);
    this.navHandler = this.navHandler.bind(this);
  }

  navHandler(event) {
    return <MenuOrders/>
  }

  render() {
    return (
      <div>{this.navHandler()}</div>
    );
  }
}

class MenuOrders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex ">
        <div className="option" onClick={this.navHandler}> Manage Menu </div>
        <div className="option" onClick={this.navHandler}> Manage Orders </div>
      </div>
    );
  }
}

export default MainMenu;
