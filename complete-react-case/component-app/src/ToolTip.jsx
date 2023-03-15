import React from 'lib-app/react';
import css from './tool-tip.css';
const styleObj = {};
export default class ToolTip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="remote-text-cyan-500" data-content={this.props.message}>
        
        {this.props.content}
      </div>
    );
  }
}
