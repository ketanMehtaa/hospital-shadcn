const faqs = [
  {
    question: "Do you store my personal information?",
    answer:
      "We store your personal information securely to facilitate your appointments and provide better service. Your privacy is our priority, and we adhere to strict data protection protocols.",
  },
  {
    question: "How can I book an appointment?",
    answer: (
      <>
        You can book an appointment online through our{" "}
        <a
          href="/"
          target="_blank"
          className="font-semibold hover:underline"
        >
          booking page
        </a>
        . We offer both online and offline consultation options.
      </>
    ),
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide specialized ENT services along with general OPD consultations. Our services include treatment for ear, nose, and throat conditions, and general healthcare.",
  },
  {
    question: "Do you accept walk-in patients?",
    answer:
      "Yes, we accept walk-in patients for OPD. However, we recommend booking an appointment online to avoid waiting times.",
  },
  {
    question: "What are your hospital timings?",
    answer:
      "Our hospital is open from 9:00 AM to 8:00 PM, all days. For emergency cases, we are available 24/7 in Haldwani.",
  },
  {
    question: "How can I contact the hospital?",
    answer: (
      <>
        You can contact us via phone at{" "}
        <a
          href="tel:+918449473664"
          className="font-semibold underline"
        >
          +918449473664
        </a>{" "}
        or email us at{" "}
        <a
          href="mailto:shardaEntHospital@gmail.com"
          target="_blank"
          className="font-semibold underline"
        >
          shardaEntHospital@gmail.com
        </a>
        . We are here to assist you with any queries or concerns.
      </>
    ),
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes, we offer online consultations through our booking system. You can choose a time slot that suits you and have a consultation from the comfort of your home.",
  },
];

export function FAQs() {
  return (
    <div
      className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32"
      id="faq"
    >
      <h2 className="font-cal text-2xl leading-10 text-gray-900">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
          >
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
              {faq.question}
            </dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
