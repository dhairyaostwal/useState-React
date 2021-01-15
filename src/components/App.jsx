import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [timeUpdated, getTime] = React.useState(time);

  console.log(timeUpdated);

  function buttonAct() {
    var UpdatedTime = new Date().toLocaleTimeString();
    getTime(UpdatedTime);
  }

  setInterval(buttonAct, 1000);

  return (
    <div className="container">
      <h1>{timeUpdated}</h1>
      <button onClick={buttonAct}>Get Time</button>
    </div>
  );
}

export default App;
