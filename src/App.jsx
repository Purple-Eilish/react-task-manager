import AddTask from "./components/add_task";
import Navbar from "./components/navbar";
import Tasks from "./components/tasks";

function App() {
  const siteProperties = {
    title: "Task Manager",
    author: "coode",
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    console.log("This is from parent component");
  };

  // tasks 
  const tasks = [
    {
      title:"Project 1",
      description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur delectus atque in temporibus reiciendis eveniet qui culpa nam repellatab?",
      date:"12/12/12",
      completed: true,
    },
    {
      title:"Project 2",
      description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur delectus atque in temporibus reiciendis eveniet qui culpa nam repellatab?",
      date:"12/12/12",
      completed: false,
    },
    {
      title:"Project 3",
      description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur delectus atque in temporibus reiciendis eveniet qui culpa nam repellatab?",
      date:"12/12/12",
      completed: false,
    }
  ]

  return (
    <div>
      <Navbar siteProperties={siteProperties} />
      <div className="container">
        <div className="inner_container">
          <AddTask onSubmit={addTaskHandler} />
          <Tasks tasksData={tasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
