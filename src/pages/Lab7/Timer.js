// src/components/Timer.js
import React, { useState, useEffect } from "react";

const Timer = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);

		return () => clearInterval(interval); // Cleanup on component unmount
	}, []);

	return <p className="pb-6">Minęło {time} sekund</p>;
};

export default Timer; // Poprawny export default
