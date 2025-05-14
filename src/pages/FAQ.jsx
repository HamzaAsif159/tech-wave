import { useState, useEffect } from "react";
import "aos/dist/aos.css";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 600, easing: "ease-out", once: true });
    });
  }, []);

  const faqItems = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay.",
    },
    {
      question: "What is your return policy?",
      answer:
        "30-day return policy for unused items in original packaging with receipt.",
    },
    {
      question: "Are your products covered by warranty?",
      answer: "Yes, all products come with a 1-year manufacturer's warranty.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you'll receive tracking information via email once your order ships.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Email support@techwave.com or call (414) 687-5892 (9AM-6PM EST).",
    },
    {
      question: "Are your products compatible with different devices?",
      answer:
        "Yes, our products work with most modern smartphones, tablets, and computers.",
    },
    {
      question: "Do you offer bulk or wholesale discounts?",
      answer:
        "Yes, contact sales@techwave.com for pricing on orders of 10+ units.",
    },
    {
      question:
        "How can I stay updated on new product releases and promotions?",
      answer:
        "Subscribe to our newsletter or follow us on social media for updates.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div className="mb-8 md:mb-12">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-4 text-center"
          data-aos="fade-down"
        >
          Support
        </h1>
        <p
          className="text-base md:text-lg text-gray-600 max-w-[900px] text-center mx-auto"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Whether you need assistance with product setup, troubleshooting, or
          general inquiries, our support staff is just a phone call or email
          away.
        </p>
      </div>
      <div className="my-6 md:my-8"></div>
      <div className="space-y-3 md:space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F8F8F8] rounded-3xl p-5 md:p-6 transition-all"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center text-left"
              aria-expanded={openQuestion === index}
            >
              <span className="text-base md:text-lg font-normal text-gray-900">
                {item.question}
              </span>
              <span className="text-xl text-gray-500 ml-4 shrink-0">
                {openQuestion === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openQuestion === index
                  ? "max-h-40 opacity-100 mt-3 md:mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base text-gray-600">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
