import { useState } from "react";

function AddTask({ addTaskHandler }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeDate(e) {
    setDate(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }
  
  function onFormSubmitted(e) {
    e.preventDefault();
    const formData = {
      title,
      date,
      description,
      completed: false,
    };
    addTaskHandler(formData);
  }
  return (
    <form onSubmit={onFormSubmitted}>
      <h1>Add Task</h1>
      <label htmlFor="title">
        Title
        <input type="text" id="title" onChange={onChangeTitle} />
      </label>
      <label htmlFor="date">
        Date
        <input type="date" id="date" onChange={onChangeDate} />
      </label>
      <label htmlFor="Description">
        Description
        <textarea id="Description" onChange={onChangeDescription}></textarea>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
