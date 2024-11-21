import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";
import FocusInput from "./Lab7/FocusInput";
import Counter from "./Lab7/Counter";
import ThemedComponent, { ThemeContext } from "./Lab7/ThemedComponent";
import Timer from "./Lab7/Timer";
import ReducerCounter from "./Lab7/Reducer";

// Komponent Card
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export const Lab7 = () => {
  const data = [
    {
      title: "Pierwsza karta",
      description: "To jest opis pierwszej karty.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      title: "Druga karta",
      description: "To jest opis drugiej karty.",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      title: "Trzecia karta",
      description: "To jest opis trzeciej karty.",
      imageUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <Layout>
      <div className="">
        <h2 className="text-2xl font-bold pb-4">
          Zadanie 1 - Komponent wielokrotnego użytku
        </h2>
        
        {/* Dodano kontener grid z odpowiednim paddingiem, aby uniknąć nachodzenia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-16 pb-4">Zadanie 2 - Hooki</h2>
        <Counter />
        <ReducerCounter />
        <Timer />
        {/* Kontekst jest dostarczany przez ThemeContext.Provider */}
        <ThemeContext.Provider value="dark">
          <ThemedComponent />
        </ThemeContext.Provider>
        <FocusInput />
      </div>
    </Layout>
  );
};
