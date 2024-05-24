import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
			<h1>My Todos</h1>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
