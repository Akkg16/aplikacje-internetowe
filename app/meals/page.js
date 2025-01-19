import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../components/meals/meal-grid";
import { getAllMeals } from "@/lib/meals";
import { Suspense } from "react";
import LoadingOut from "./loading-out";
export default async function mealsPage() {
	const meals = await getAllMeals();
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created{" "}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose your favourite recipe and cook it youreslf. It is easy and fun!
				</p>
				<p className={classes.cta}>
					<Link href="/share">Share Your Favourite recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense
					fallback={
						<div className="loading">
							<p>Fetching meals...</p>
						</div>
					}>
					<MealsGrid meals={meals} />
				</Suspense>
			</main>
		</>
	);
}
