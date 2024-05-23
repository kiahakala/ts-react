import React from "react";
import { useState } from "react";
import Todo from "../models/todo";

const TodosContext = React.createContext<{
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
}>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	const contextValue = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
}

export default TodosContext;