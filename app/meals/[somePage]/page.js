"use client";

import { usePathname } from "next/navigation";
import Title from "@/app/components/title";

export default function DynamicMeal() {
	const pathname = usePathname();
	const someMeal = pathname?.split("/").pop();

	if (!someMeal) return <div>Loading...</div>;

	return (
		<div>
			<Title />
			<h1>Meal: {someMeal}</h1>
		</div>
	);
}
