function Task(props) {
    return (
      <div className="task">
        <input type="checkbox" checked={props.completed} readOnly />
        <div>
          <p>{props.title}</p>
          <p>
           {props.description}
          </p>
        </div>
        <p>{props.date}</p>
      </div>
    );
  }

  
  export default Task;