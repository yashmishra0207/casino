import { useEffect, useState } from "react";
import "./App.css";
import Casino from "./components/Casino";

function App() {
  const savedState = JSON.parse(localStorage.getItem("state"));
  const [state, setState] = useState(savedState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      <Casino state={state} setState={setState} />
    </div>
  );
}

export default App;
