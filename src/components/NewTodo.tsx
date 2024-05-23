import { useRef } from "react";
import classes from "./NewTodo.module.css";

// onAddToDo is a 'function prop'
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // the possibly nullish value will never be null in this case, thus the '!' operator
    const enteredText = todoTextInputRef.current!.value;

    // validation
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);

		todoTextInputRef.current!.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
