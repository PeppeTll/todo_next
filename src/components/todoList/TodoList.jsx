import Todo from "../todo";
import { useContext } from "react";
import { MainContext } from "@/state";

const TodoList = () => {
	const { state } = useContext(MainContext);

	console.log(state);
	return (
		<div>
			{state.map((todo) => (
				<Todo data={todo} key={todo.id} />
			))}
		</div>
	);
};

export default TodoList;
