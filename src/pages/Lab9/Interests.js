import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";

const Interest = () => {
  return (
    <div className="container mx-auto px-4 py-8text-white">
      <h1 className="text-3xl font-semibold text-left mb-8">Moje Zainteresowania</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kafelek 1 */}
        <div className="bg-gray-800 text-left text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4">Programowanie</h2>
          <p className="text-lg">
            Uwielbiam tworzyć aplikacje internetowe i oprogramowanie. Często eksperymentuję z nowymi technologiami, aby rozwijać swoje umiejętności.
          </p>
        </div>

        {/* Kafelek 2 */}
        <div className="bg-gray-800 text-left text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4">Fotografia</h2>
          <p className="text-lg">
            Fotografowanie to moja pasja, dzięki której mogę uwieczniać chwile z podróży i życia codziennego. Lubię uchwycić piękno w prostych rzeczach.
          </p>
        </div>

        {/* Kafelek 3 */}
        <div className="bg-gray-800 text-left text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4">Podróże</h2>
          <p className="text-lg">
            Podróże pozwalają mi na odkrywanie nowych kultur i miejsc. Każda podróż jest dla mnie inspiracją do nauki i rozwoju.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
