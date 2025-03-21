import TaskBoard from "./components/TaskBoard";
import TaskInput from "./components/TaskInput";
import { APP_TITLES } from "./constants/appConstants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>{APP_TITLES.MAIN_TITLE}</h1>
      <TaskInput />
      <TaskBoard />
    </div>
  );
}
export default App;