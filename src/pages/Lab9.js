import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useHeaderLinks } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";

export const Lab9 = () => {
  const { setDynamicLinks } = useHeaderLinks();
  const location = useLocation();

  useEffect(() => {
    setDynamicLinks([
      { path: "/lab9/about", label: "O mnie" },
      { path: "/lab9/interests", label: "Moje zainteresowania" },
      { path: "/lab9/favorite", label: "Ulubiony film" },
      { path: "/lab9/contact", label: "Kontakt" },
    ]);

    return () => setDynamicLinks([]); // Czyszczenie linków po opuszczeniu Lab9
  }, [setDynamicLinks]);

  return (
    <div className="p-4">
      {location.pathname === "/lab9" && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Witamy w Lab9</h2>
          <p className="mt-4 text-lg">Wybierz podstronę z menu powyżej.</p>
        </div>
      )}
      <Outlet />
    </div>
  );
};
