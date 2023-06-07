import Task from "./task";

export default function Tasks({tasksData}) {
  return (
    <div className="task_container">
      <h3>My Tasks</h3>
      {
        tasksData.map(function(task, index){
          return <Task title={task.title} description={task.description} date={task.date} completed={task.completed} key={index}/>
        })
      }
    </div>
  );
}

