import React, { useState } from "react";

function ContentBox() {
  const [data, setData] = useState("0");

  function handleclicki(e) {
    console.log(e.target.value);
    var number = parseInt(e.target.value);
    number++;
    setData(number);
  }
  function handleclickd(e) {
    console.log(e.target.value);
    var number = parseInt(e.target.value);
    number--;
    setData(number);
  }

  return (
    <div>
      <h3>func Component</h3>
      <input type="text" value={data}></input>
      <br></br>
      <button onClick={handleclicki} value={data}>
        increment
      </button>
      <button onClick={handleclickd} value={data}>
        decrement
      </button>
    </div>
  );
}

export default ContentBox;
