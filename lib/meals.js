// lib/meals.js
let db;

if (typeof window === "undefined") {
	const Database = require("better-sqlite3");
	db = new Database("./meals.db");
}

export function getAllMeals() {
	return db.prepare("SELECT * FROM meals").all();
}

export function getMealBySlug(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
