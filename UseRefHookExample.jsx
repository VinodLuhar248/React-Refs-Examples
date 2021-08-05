import React, { useRef } from 'react';

export default function UseRefHookExample() {
  let inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <b>3. useRef() hook Example:</b>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button class="btn btn-success use-ref" onClick={handleClick}>
        submit
      </button>
    </div>
  );
}
