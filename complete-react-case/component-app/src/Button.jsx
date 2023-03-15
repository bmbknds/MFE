import React from 'lib-app/react';
import './Button.css'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var type = this.props.type || 'primary';
    const className = this.props.type  === 'primary' ? 'btn-primary' : ''
    return <button className={className} >{type} Button</button>;
  }
}
