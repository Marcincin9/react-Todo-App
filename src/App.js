import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div>
      <div className="topBar">
        <AddTodo />
      </div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Eat a Meal" />
      <Todo text="Go to sleep" />
      <Todo text="Learn React" />
    </div>
  );
}

export default App;
