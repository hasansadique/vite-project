import { useDispatch } from "react-redux";
import { dragTask } from "../redux/taskSlice";
import TaskItem from "./TaskItem";

const TaskColumn = ({ title, tasks }) => {
  const dispatch = useDispatch();

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) {
      console.log("Dropped task:", taskId, "New status:", status);
      dispatch(dragTask({ id: Number(taskId), status }));
    }
  };

  return (
    <div
      className="column"
      data-status={title}
      onDrop={(e) => handleDrop(e, title)}
      onDragOver={(e) => e.preventDefault()} 
    >
    <h2 className={`${title.toLowerCase()}-col`}>{title}</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
