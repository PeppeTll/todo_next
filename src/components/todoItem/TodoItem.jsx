import { useContext } from "react";
import { MainContext } from "@/store";
import styles from "./index.module.scss";

const TodoItem = ({ data }) => {
	const { state, dispatch } = useContext(MainContext);

	const onHandleClick = () => {
		confirm("Sei sicuro di voler cambiare stato?") &&
			dispatch({ type: "SET_TODO_COMPLETED", payload: data.id });
	};

	return (
		<div
			className={`${styles.TodoItem} ${data.completed && styles.completed}`}
			onClick={onHandleClick}
		>
			<div className={styles.content}>
				<p>{data.id}</p>
				<h3>{data.content}</h3>
			</div>
			<p>{data.completed ? "Ottimo lavoro" : "Nuova sfida?"}</p>
		</div>
	);
};

export default TodoItem;
