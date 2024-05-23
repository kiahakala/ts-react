// Options: interface, class, type

const num = Math.random();
console.log(num)

class Todo {
	// prop descriptions:
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = (num + Math.random()).toString();
		console.log(this.id)
	}
}

export default Todo;