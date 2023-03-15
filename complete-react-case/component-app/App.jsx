import React from 'lib-app/react';
import Logo from './src/Logo';
import Dialog from './src/Dialog';
import Button from './src/Button';
import NavBar from './src/NavBar'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
  }
  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true,
    });
  }
  HanldeSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible,
    });
  }
  render() {
    return (
      
      <div>
        <NavBar></NavBar>
        {/* <div  className="remote-text-3xl font-bold underline text-cyan-600" >tesst</div> */}
        <br />
        <Button type="primary" />
        <br />

        <button onClick={this.handleClick}>click to open dialog</button>
        <Dialog switchVisible={this.HanldeSwitchVisible} visible={this.state.dialogVisible} />
      </div>
    );
  }
}
