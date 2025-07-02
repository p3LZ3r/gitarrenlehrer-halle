import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import * as React from 'react';

import { faqs } from '@/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-gray-50' id='faq'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl'>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Häufig gestellte Fragen
          </h2>
          <p className='mt-4 text-center text-lg text-gray-600'>
            Hier finden Sie Antworten auf die wichtigsten Fragen zum
            Gitarrenunterricht in Halle
          </p>

          <dl className='mt-12 space-y-6'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='rounded-lg bg-white shadow-sm border border-gray-200'
              >
                <dt>
                  <button
                    className='flex w-full items-start justify-between px-6 py-4 text-left text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className='text-lg font-medium leading-7'>
                      {faq.question}
                    </span>
                    <span className='ml-6 flex h-7 items-center'>
                      {openIndex === index ? (
                        <ChevronUpIcon
                          className='h-6 w-6 text-primary-600'
                          aria-hidden='true'
                        />
                      ) : (
                        <ChevronDownIcon
                          className='h-6 w-6 text-primary-600'
                          aria-hidden='true'
                        />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className='px-6 pb-4'>
                    <p className='text-base leading-7 text-gray-700'>
                      {faq.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
          
          <div className='mt-12 text-center'>
            <p className='text-lg text-gray-600 mb-6'>
              Haben Sie weitere Fragen? Kontaktieren Sie mich gerne!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+4915783024534'
                className='inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
              >
                Jetzt anrufen
              </a>
              <a
                href='mailto:steven.lawrenz@gmx.net'
                className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
              >
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}