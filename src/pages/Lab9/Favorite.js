import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";

const Favorite = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white text-left mb-6">Mój Ulubiony Film: Matrix</h1>

      {/* Sekcja Opis */}
      <section className="bg-gray-900 text-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-left">Matrix: Nowa Rzeczywistość</h2>
        <p className="text-lg text-left">
          Matrix to film science fiction z 1999 roku, który zrewolucjonizował kino i wprowadził nas w świat cyberpunkowej rzeczywistości,
          gdzie rzeczywistość jest tylko iluzją. W głównych rolach występują Keanu Reeves jako Neo, Laurence Fishburne jako Morfeusz
          oraz Carrie-Anne Moss jako Trinity. Film ten porusza tematy wolnej woli, rzeczywistości, technologii oraz przyszłości ludzkości.
        </p>
      </section>

      {/* Sekcja Cytaty */}
      <section className="bg-gray-900 text-white rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-left">Kluczowe Cytaty:</h3>
        <blockquote className="italic text-lg text-left mb-4">"What is real? How do you define real?" – Morpheus</blockquote>
        <blockquote className="italic text-lg text-left">"There is no spoon." – Spoon Boy</blockquote>
      </section>

      {/* Sekcja z grafiką */}
      <section className="bg-gray-900 text-white rounded-lg shadow-lg p-8 mb-8">
        <img
          src="https://via.placeholder.com/800x400/333333/ffffff?text=Matrix+Poster"
          alt="Matrix Poster"
          className="rounded-lg shadow-xl w-full"
        />
      </section>

      {/* Sekcja Dlaczego Matrix */}
      <section className="bg-gray-900 text-white rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-left">Dlaczego "Matrix" jest moim ulubionym filmem?</h3>
        <p className="text-lg text-left">
          "Matrix" to nie tylko film, to prawdziwa filozofia, która zmusza nas do refleksji nad tym, czym jest rzeczywistość,
          czym jest wolna wola i jakie konsekwencje może mieć postęp technologiczny. Film łączy niesamowite efekty specjalne
          z głęboką, intelektualną treścią, co czyni go ponadczasowym. Jego wpływ na kulturę pop jest niezaprzeczalny,
          a cytaty i sceny wciąż pozostają w pamięci widzów.
        </p>
      </section>
    </div>
  );
};

export default Favorite;
