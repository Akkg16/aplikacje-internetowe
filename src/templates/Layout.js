import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";

// Kontekst
const HeaderLinksContext = createContext();

export const useHeaderLinks = () => useContext(HeaderLinksContext);

export const Layout = ({ children }) => {
  const [dynamicLinks, setDynamicLinks] = useState([]);

  return (
    <HeaderLinksContext.Provider value={{ dynamicLinks, setDynamicLinks }}>
      <div>
        <header className="bg-gray-800 text-white py-4">
          <nav className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold">Kacper Kobylecki 20454</h1>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/aplikacje-internetowe/"
                  className="nav-link hover:text-indigo-300 hover:bg-gray-700 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Strona Główna
                </a>
              </li>
              {dynamicLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="nav-link hover:text-indigo-300 hover:bg-gray-700 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center">
          {children}
        </main>
      </div>
    </HeaderLinksContext.Provider>
  );
};
