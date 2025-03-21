import { useDispatch } from "react-redux";
import { deleteTask, setUpdateItem } from "../redux/taskSlice";
import { BUTTON_TEXT } from "../constants/appConstants";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  // Store the dragged task's ID in the event
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("taskId", task.id);
    console.log("Dragging task:", task.id);
  };

  return (
    <div
      className="task-item"
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
    >
      {task.title}
      <div>
        <span className="btn" onClick={() => dispatch(setUpdateItem(task))}>
        {BUTTON_TEXT.EDIT}
        </span>
        <span className="btn" onClick={() => dispatch(deleteTask(task.id))}>
        {BUTTON_TEXT.DELETE}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
