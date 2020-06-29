import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

let num = 1;

class Box extends Component {
  state = {
    num:1
  }
  onclick=()=>{
    var num = this.state.num;
    num++;
    this.setState({num})
  }
  render() {
    return <div onClick={this.onclick}><App id={this.state.num}   /></div>
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Box />
  </React.StrictMode>,
  document.getElementById('root')
);










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
