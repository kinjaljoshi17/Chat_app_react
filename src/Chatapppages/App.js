import React, { useState } from "react";
import Homepage from "./Homepage";

function App() {
  const [welcomemsg, setmsg] = useState["Hello"];
  return (
    <div className="App">
      <h1 id="welcomemsg">{welcomemsg}</h1>
      <Homepage changemsg={(welcomemsg) => setmsg(welcomemsg)} />
    </div>
  );
}

export default App;
