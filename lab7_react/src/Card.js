import React from "react";

function Card({ title, content }) {
	return (
		<div className="border border-gray-300 p-5 rounded-lg shadow-lg bg-white">
			<h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
			<p className="text-gray-600">{content}</p>
		</div>
	);
}

export default Card;
