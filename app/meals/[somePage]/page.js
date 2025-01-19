// app/meals/[somePage]/page.js
import { getMealBySlug } from "@/lib/meals";
import { getAllMeals } from "@/lib/meals";
import styles from "../[somePage].module.css";
export default async function DynamicMeal({ params }) {
	const meals = await getAllMeals();
	const { somePage } = params;
	const meal = await getMealBySlug(somePage);
	console.log("Slug:", somePage); // Sprawdzamy czy `somePage` ma wartość
	if (!meal) {
		return <div>Meal not found</div>;
	}

	return (
		<div className={styles.mealContainer}>
			{/* Obrazek posiłku */}
			<div className={styles.mealImageContainer}>
				<img className={styles.mealImage} src={meal.image} alt={meal.title} />
			</div>

			{/* Detale posiłku */}
			<div className={styles.mealDetailsContainer}>
				<h1 className={styles.mealTitle}>{meal.title}</h1>
				<p className={styles.mealSummary}>{meal.summary}</p>
				<div className={styles.mealDetails}>
					<p>
						<strong>Creator:</strong> {meal.creator}
					</p>
					<p>
						<strong>Instructions:</strong> {meal.instructions}
					</p>
				</div>
			</div>
		</div>
	);
}
