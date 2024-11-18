import React, {
	useState,
	useReducer,
	useEffect,
	useContext,
	useRef,
} from "react";
import { AppContext } from "./AppContext";

function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		default:
			return state;
	}
}

function AdvancedHooksDemo() {
	const [state, setState] = useState("Pierwsza zmiana stanu");
	const [reducerState, dispatch] = useReducer(reducer, { count: 0 });
	const { message } = useContext(AppContext);
	const inputRef = useRef();

	useEffect(() => {
		console.log("Komponent załadowany.");
		inputRef.current.focus();
	}, []);

	return (
		<div className="p-5 bg-gray-50 rounded-lg">
			<h1 className="text-3xl font-semibold mb-4">Demonstracja hooków</h1>

			<h2 className="text-xl font-medium mb-2">useState</h2>
			<p className="mb-4">Stan: {state}</p>
			<button
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				onClick={() => setState("Stan zmieniony!")}>
				Zmień stan
			</button>

			<h2 className="text-xl font-medium mt-6 mb-2">useReducer</h2>
			<p className="mb-4">Licznik: {reducerState.count}</p>
			<button
				className="bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-green-600"
				onClick={() => dispatch({ type: "increment" })}>
				Zwiększ
			</button>
			<button
				className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
				onClick={() => dispatch({ type: "decrement" })}>
				Zmniejsz
			</button>

			<h2 className="text-xl font-medium mt-6 mb-2">useContext</h2>
			<p className="mb-4">Wiadomość z kontekstu: {message}</p>

			<h2 className="text-xl font-medium mt-6 mb-2">useRef</h2>
			<input
				ref={inputRef}
				className="border border-gray-300 p-2 rounded w-full"
				placeholder="Skupienie na tym polu przy załadowaniu"
			/>
		</div>
	);
}

export default AdvancedHooksDemo;
