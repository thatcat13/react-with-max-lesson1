import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: 'Soup'
  }

  changeNameHandler = (event) => {
      this.setState({
        username: event.target.value
      })
  }


  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      font: 'monospace',
      alignItems: 'center'
    }
    return (
      <div style={style} className="App">
        <UserInput
          currentName={this.state.username}
          changed={this.changeNameHandler}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='Soup Forever'/>
      </div>
    );
  }
}

export default App;
