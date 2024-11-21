// src/components/ReducerCounter.js
import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const ReducerCounter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="pb-6">
			<p>Liczba: {state.count}</p>
			<button
				className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 m-2"
				onClick={() => dispatch({ type: "increment" })}>
				Zwiększ
			</button>
			<button
				className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 m-2"
				onClick={() => dispatch({ type: "decrement" })}>
				Zmniejsz
			</button>
		</div>
	);
};

export default ReducerCounter; // Poprawny export default
