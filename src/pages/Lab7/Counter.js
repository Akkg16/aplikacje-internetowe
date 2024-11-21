// src/components/Counter.js
import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="pb-6">
			<p className ="pb-4">Liczba: {count}</p>
			<button
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
				onClick={() => setCount(count + 1)}>
				Zwiększ
			</button>
		</div>
	);
};

export default Counter;
