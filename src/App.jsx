function App() {
  return (
    <div>
      <nav>
        <header>
          <h2>Task Manager</h2>
        </header>
        <ul>
          <li>created by: coode</li>
        </ul>
      </nav>
      <div className="container">
        <div className="inner_container">
          <form>
            <h1>Add Task</h1>
            <label htmlFor="title">
              Title
              <input type="text" id="title" />
            </label>
            <label htmlFor="date">
              Date
              <input type="date" id="date" />
            </label>
            <label htmlFor="content">
              Content
              <textarea id="content"></textarea>
            </label>
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
