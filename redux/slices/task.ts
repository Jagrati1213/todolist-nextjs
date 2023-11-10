import { TasksProps } from "types/taskProps";
import { createSlice } from "@reduxjs/toolkit";

interface propsType {
  task: TasksProps[] | null;
}
const initialState: propsType = {
  task: [
    {
      title: "task 1",
      description: "task 1",
      status: false,
    },
  ],
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask(state, action) {
      if (typeof state.task !== null) {
        state.task = action.payload;
      }
    },
  },
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;
