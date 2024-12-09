export default function ContactPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-6 h-full container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">Formularz kontaktowy</h1>
			<div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
				<form className="space-y-4">
					{/* Imię */}
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 mb-1">
							Twoje imię
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Wpisz swoje imię"
						/>
					</div>

					{/* Email */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-1">
							Adres email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Wpisz swój email"
						/>
					</div>

					{/* Wiadomość */}
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 mb-1">
							Treść wiadomości
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Napisz swoją wiadomość"></textarea>
					</div>

					{/* Przycisk wysyłania */}
					<div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
							Wyślij wiadomość
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
