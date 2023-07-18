import Todo from "../todo/todo";

const TodoList = () => {
	const { state, dispatch } = useContext(MainContext);

	// console.log(state);
	return (
		<div>
			<Todo />
		</div>
	);
};

export default TodoList;
