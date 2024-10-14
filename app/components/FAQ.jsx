"use client"
import { useState } from 'react';

const FAQ = () => {
  // Utilisation du hook useState pour suivre l'index actif
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour basculer l'état de l'accordéon
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Ouvre ou ferme la question
  };

  // Liste des questions et réponses de la FAQ
  const faqs = [
    {
      question: 'What are your rates?',
      answer:
        'Our rates are competitive and vary based on the type of service required. We provide a clear pricing grid for transparency. You can always expect no hidden fees with our services.',
    },
    {
      question: 'How quickly can you arrive?',
      answer:
        'We pride ourselves on our rapid response times. In most cases, our team can arrive within 30 minutes for emergency calls. Your plumbing issues are our priority!',
    },
    {
      question: 'Do you offer warranties?',
      answer:
        'Yes, we provide warranties on all our services and parts. This ensures that you receive quality work that lasts. Your satisfaction is our guarantee!',
    },
    {
      question: 'Are your plumbers licensed?',
      answer:
        'Absolutely! All our plumbers are fully licensed and insured. They undergo regular training to stay updated on the latest plumbing techniques and regulations.',
    },
    {
      question: 'What types of services?',
      answer:
        'We offer a wide range of plumbing services, including emergency repairs, installations, and routine maintenance. Trust us for all your plumbing needs!',
    },
  ];

  return (
    <div className="container mx-auto w-full md:w-10/12 px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Section gauche : titre et bouton de contact */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-4">FAQs</h2>
          <p className="mb-4">
            Here are some common questions about our 24/7 plumbing services and emergency interventions.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded">Contact</button>
        </div>

        {/* Section droite : questions et réponses */}
        <div className="md:col-span-2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="text-gray-600 pb-4">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
