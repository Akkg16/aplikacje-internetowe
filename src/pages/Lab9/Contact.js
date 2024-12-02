import { useState } from "react";
import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submissionStatus, setSubmissionStatus] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Mocking API call (replace with actual API endpoint)
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmissionStatus("Wiadomość została wysłana!");
				setFormData({
					name: "",
					email: "",
					message: "",
				});
			} else {
				setSubmissionStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
			}
		} catch (error) {
			setSubmissionStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
		}

		setIsSubmitting(false);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold text-white text-left mb-6">Kontakt</h1>

			{/* Formularz Kontaktowy */}
			<section className="bg-gray-900 text-white rounded-lg shadow-lg p-8">
				<h2 className="text-3xl font-semibold mb-4 text-left">
					Skontaktuj się ze mną
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="name" className="block text-lg font-medium mb-2">
							Imię i nazwisko
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Wpisz swoje imię i nazwisko"
							className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
							required
						/>
					</div>

					<div>
						<label htmlFor="email" className="block text-lg font-medium mb-2">
							Adres e-mail
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Wpisz swój adres e-mail"
							className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
							required
						/>
					</div>

					<div>
						<label htmlFor="message" className="block text-lg font-medium mb-2">
							Wiadomość
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="4"
							placeholder="Wpisz swoją wiadomość"
							className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
							required></textarea>
					</div>

					<div>
						<button
							type="submit"
							className="w-full p-3 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
							disabled={isSubmitting}>
							{isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
						</button>
					</div>

					{submissionStatus && (
						<div className="mt-4 text-lg font-semibold text-center">
							{submissionStatus}
						</div>
					)}
				</form>
			</section>
		</div>
	);
};

export default Contact;
