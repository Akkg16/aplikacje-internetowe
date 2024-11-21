import React from "react";
import HandleClickComponent from "./Lab8/HandleClickComponent";
import HandleMouseOverComponent from "./Lab8/HandleMouseOverComponent";
import ShowImageComponent from "./Lab8/ShowImageComponent";
import LoadDataFromJsonComponent from "./Lab8/LoadDataFromJsonComponent";
import UploadFileComponent from "./Lab8/UploadFileComponent";
import ChangeStyleComponent from "./Lab8/ChangeStyleComponent";
import { Layout } from "../templates/Layout";
import CorrectComponent from "./Lab8/CorrectComponent";
import IncorrectComponent from "./Lab8/IncorrectComponent.js";

export const Lab8 = () => {
	return (
		<Layout>
			<div className="space-y-6">
            <h2 className="text-2xl font-bold">Zadanie nr 1 - Czysty Kod</h2>
				<div className="flex flex-row items-center space-x-4 p-6">
					<IncorrectComponent />
					<CorrectComponent />
				</div>
				<h2 className="text-2xl font-bold">Zadanie nr 2 - Interakcje</h2>
				<HandleClickComponent />
				<HandleMouseOverComponent />
				<ShowImageComponent />
				<LoadDataFromJsonComponent />
				<UploadFileComponent />
				<ChangeStyleComponent />
			</div>
		</Layout>
	);
};
