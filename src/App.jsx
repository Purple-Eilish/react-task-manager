import { useState } from "react";
import AddTask from "./components/add_task";
import Navbar from "./components/navbar";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const siteProperties = {
    title: "Task Manager",
    author: "coode",
  };
  const addTaskHandler = (formData) => {
    console.log(formData);
    setTasks([...tasks, formData]);
  };

  return (
    <div>
      <Navbar siteProperties={siteProperties} />
      <div className="container">
        <div className="inner_container">
          <AddTask addTaskHandler={addTaskHandler} />
          <Tasks tasksData={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
