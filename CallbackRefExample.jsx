import React, { Component } from 'react';

class CallbackRefExample extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = this.inputElementRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputElementRef(inputElement) {
    this.inputRef = inputElement;
  }

  handleClick() {
    this.inputRef.focus();
  }

  render() {
    return (
      <div>
        <b>1. Callback Ref Example :</b>
        <br />
        <br />
        <input type="text" ref={this.inputElementRef} />
        <button class="btn btn-success callback-ref" onClick={this.handleClick}>
          submit
        </button>
      </div>
    );
  }
}
export default CallbackRefExample;
