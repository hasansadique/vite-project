import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  updateItem: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, title } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, title } : task
      );
      state.updateItem = null;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setUpdateItem: (state, action) => {
      state.updateItem = action.payload;
    },
    dragTask: (state, action) => {
      const { id, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      );
    },
  },
});

export const { addTask, updateTask, deleteTask, setUpdateItem, dragTask } =
  taskSlice.actions;
export default taskSlice.reducer;
