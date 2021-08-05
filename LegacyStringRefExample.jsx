import React, { Component } from 'react';

export default function CallbackRefApiExample() {
  state = {
    value: ''
  };

  const handleClick = () => {
    console.log(this.refs.textInput);
    console.log(this.refs.textInput.value);
    textInput.current.focus();
  };

  return (
    <div>
      <b>4. React.createRef() Example:</b>
      <br />
      <input type="text" ref="textInput" />
      <button class="btn btn-success create-ref" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
