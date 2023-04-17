import { ClassState, UseState } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name={"UseState"} />
      <ClassState name={"ClassState"} />
    </div>
  );
}

export default App;
