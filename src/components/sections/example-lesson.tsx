import * as React from 'react';

import ReviewSlider from '../ReviewSlider';

export default function ExampleLesson() {
  return (
    <section id='example-lesson' className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 lg:text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Gitarrenunterricht in Halle (Saale)
          </h2>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Strukturierter und individueller Unterricht für jeden Lerntyp -
            direkt im Herzen von Halle
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          <div className='rounded-lg bg-white p-6 shadow-sm'>
            <h3 className='mb-4 text-xl font-semibold text-gray-900'>
              Typischer Ablauf einer 45-minütigen Unterrichtsstunde
            </h3>
            <ol className='space-y-4 text-gray-600'>
              <li className='flex items-start'>
                <span className='mr-2 font-semibold'>1.</span>
                <span>
                  Warm-up (5 Min): Finger-Aufwärmübungen und kurze Wiederholung
                  der letzten Lektion
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2 font-semibold'>2.</span>
                <span>
                  Technik-Training (10 Min): Üben spezifischer Techniken wie
                  Fingerpicking, Akkordwechsel oder Rhythmus
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2 font-semibold'>3.</span>
                <span>
                  Hauptteil (20 Min): Arbeit am aktuellen Musikstück oder
                  Lernziel mit direktem Feedback
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2 font-semibold'>4.</span>
                <span>
                  Praxis & Spaß (5 Min): Gemeinsames Spielen und Anwendung des
                  Gelernten
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2 font-semibold'>5.</span>
                <span>
                  Zusammenfassung (5 Min): Hausaufgaben und individuelle
                  Übungstipps für zuhause
                </span>
              </li>
            </ol>
            <p className='mt-6 text-sm text-gray-500'>
              Mein Unterrichtsraum befindet sich zentral in Halle (Saale) und
              ist bequem mit öffentlichen Verkehrsmitteln zu erreichen.
            </p>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-sm'>
            <ReviewSlider embedded={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
