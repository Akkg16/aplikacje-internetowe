import React, { createContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
	const value = { message: "Witaj w kontekście React!" };
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
