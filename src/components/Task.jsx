import { useState } from "react";
import { useDispatch } from "react-redux";

import { taskListSlice } from "../state/taskList/taskListSlice";

import "./SubmitTask.css";

const TaskList = (props) => {
  // Get access to the dispatch using useDispatch() from 'react-redux'.
//   const dispatch = useDispatch();
//   const [newTask, setNewTask] = useState({ completed: false });

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       // Dispatch an action that we imported from the slice, with a payload of "newTask".
//       dispatch(addTask(newTask));
//   };

  return (
  <ul>
   <li>{taskListSlice.description}</li>
  </ul>
  );
  }

export default TaskList;
