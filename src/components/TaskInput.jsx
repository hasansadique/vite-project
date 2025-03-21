import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, setUpdateItem } from "../redux/taskSlice";
import { useState } from "react";

const TaskInput = () => {
  const dispatch = useDispatch();
  const updateItem = useSelector((state) => state.tasks.updateItem);
  const [value, setValue] = useState(updateItem ? updateItem.title : "");

  const handleChange = (e) => setValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) {
      if (updateItem) {
        dispatch(updateTask({ id: updateItem.id, title: value }));
      } else {
        dispatch(addTask({ id: Date.now(), title: value, status: "TODO" }));
      }
      setValue("");
      dispatch(setUpdateItem(null));
    }
  };

  return <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} />;
};

export default TaskInput;
