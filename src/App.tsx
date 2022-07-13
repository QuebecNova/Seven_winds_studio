import React from "react";
import Main from "./components/Main";
import randomData from "./mocky/mocky";

const data = randomData();

function App() {

  return (
    <div className="App">
      <Main data={data} />
    </div>
  );
}

export default App;
