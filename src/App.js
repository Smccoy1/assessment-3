import { useSelector } from 'react-redux';
import SubmitTask from './components/SubmitTask';
import TaskList from './components/Task';

import './App.css';

import { selectTaskList } from './state/taskList/taskListSlice';

function App() {
  const taskListArr = useSelector(selectTaskList);
  // const ToDoList = ({ taskListArr }) => (
  //   <ul>
  //     { taskListArr.map(el => (
  //       <li key={el.id}>{el.description}</li>
  //     ))}
  //   </ul>
  //  );

  console.log(taskListArr);

  return (
    <div className="App">
      <section>
        <h1>Assessment #2 - The Todo List</h1>
        <SubmitTask />
      </section>
      <section>
      {/* <ToDoList /> */}
      </section>
    </div>
  );
}

export default App;
