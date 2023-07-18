import { useContext } from "react";
import { MainContext } from "@/state";

const Todo = ({ data }) => {
	const { dispatch } = useContext(MainContext);

	// const onHandleComplete = () => {
	// 	dispatch({ type: "SET_COMPLETE" });
	// };
	return (
		<div>
			<p>
				{data.title} {data.complete ? "✅" : "⚠️"}
			</p>
		</div>
	);
};

export default Todo;
