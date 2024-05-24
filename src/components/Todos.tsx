import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// Type definition for function component => React.FC
// Own props described in angle brackets ('generic type')
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} // Bind!
        /> // Pass the entire item object to the todo prop
      ))}
    </ul>
  );
};

export default Todos;
