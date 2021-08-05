import React, { Component } from 'react';

export default function CallbackRefApiExample() {
  let inputRef = React.createRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <b>2. React.createRef() Example:</b>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button class="btn btn-success create-ref" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
