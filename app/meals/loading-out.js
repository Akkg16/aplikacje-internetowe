// app/loading.js
import "./loading.module.css"; // Importujemy style ładowania

export default function Loading() {
	return (
		<div className="loading">
			<p>Fetching meals...</p>
		</div>
	);
}
