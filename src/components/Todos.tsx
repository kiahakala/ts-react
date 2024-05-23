import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// Type definition for function component => React.FC
// Own props described in angle brackets ('generic type')
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} // Bind!
        /> // Pass the entire item object to the todo prop
      ))}
    </ul>
  );
};

export default Todos;
