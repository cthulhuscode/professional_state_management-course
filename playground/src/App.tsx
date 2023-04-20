import { ClassState, UseState } from "./components";
import "./App.css";
import { UseReducer } from "./components/UseReducer/UseReducer";

function App() {
  return (
    <div className="App">
      <UseReducer name="UseReducer" />
      <UseState name={"UseState"} />
      <ClassState name={"ClassState"} />
    </div>
  );
}

export default App;
