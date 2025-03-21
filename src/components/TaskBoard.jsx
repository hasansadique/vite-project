import { useSelector } from "react-redux";
import TaskColumn from "./TaskColumn";
import { STATUS } from "../constants/appConstants";

const TaskBoard = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
  
    return (
      <div className="board">
        {Object.values(STATUS).map((status) => (
          <TaskColumn key={status} title={status} tasks={tasks.filter((task) => task.status === status)} />
        ))}
      </div>
    );
  };
  export default TaskBoard;