import React from "react";

const PriceTable = () => {
  const services = [
    {
      title: "Réparation d'une fuite d'un tuyau",
      price: "149€ - 199€",
      link: "#",
    },
    {
      title: "Débouchage d'un wc",
      price: "100€ - 200€",
      link: "#",
    },
    {
      title: "Débouchage de canalisation",
      price: "275€ - 390€",
      link: "#",
    },
    {
      title: "Autre réparation d'un ballon d'eau chaude",
      price: "150€ - 350€",
      link: "#",
    },
    {
      title: "Recherche de fuite non destructive par détection technique",
      price: "380€ - 480€",
      link: "#",
    },
    {
      title: "Réparation d'une fuite sur chasse d'eau",
      price: "149€ - 200€",
      link: "#",
    },
    {
      title: "Installation d'un robinet",
      price: "150€ - 450€",
      link: "#",
    },
    {
      title: "Installation d'un ballon d'eau chaude",
      price: "250€ - sur devis",
      link: "#",
    },
    {
      title: "Installation d'un wc classique",
      price: "200€ - 500€",
      link: "#",
    },
    {
      title: "Réparation d'une fuite de douche",
      price: "149€ - 200€",
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-20 pb-20">
      <h2 className="text-center font-bold text-lg text-gray-700 mb-5">FOURCHETTE DE PRIX FIXE</h2>
      <table className="w-full text-left order-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="py-2 px-4 font-semibold text-gray-700">Service</th>
            <th className="py-2 px-4 font-semibold text-gray-700">Prix</th>
            <th className="py-2 px-4">Contact</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3 px-4 text-black-600 flex items-center">
                <span className="mr-2 hidden md:content">🔧</span> {service.title}
              </td>
              <td className="py-3 px-4 text-gray-600">{service.price}</td>
              <td className="py-3 px-4">
                <a
                  href={service.link}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
                >
                  05.56.34.89.79
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
