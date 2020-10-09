import React from "react";

const Counter = ({count, up, down}) =>
  <div>
    {count}
    <button onClick={up}>+</button>
    <button onClick={down}>-</button>
  </div>

export default Counter
