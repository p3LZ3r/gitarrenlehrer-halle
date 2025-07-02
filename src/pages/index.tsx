import dynamic from 'next/dynamic';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import AboutMe from '@/components/sections/about-me';
import Contact from '@/components/sections/contact';
import ExampleLesson from '@/components/sections/example-lesson';
import FAQ from '@/components/sections/faq';
import Pricing from '@/components/sections/pricing';
import Seo from '@/components/Seo';

// Dynamischer Import der Reviews-Komponente
const References = dynamic(() => import('@/components/sections/references'), {
  ssr: true,
});

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo 
        title="Gitarrenunterricht Halle - Professioneller Gitarrenlehrer Steven Lawrenz | Keine Mindestvertragslaufzeit"
        description="Professioneller Gitarrenunterricht in Halle (Saale) für Anfänger und Fortgeschrittene. ✓ Keine Mindestvertragslaufzeit ✓ Flexible Zeiten ✓ Alle Altersgruppen ✓ E-Gitarre & Akustikgitarre ✓ 5⭐ Google Bewertungen ✓ Zentrale Lage"
        keywords="Gitarrenunterricht Halle, Gitarrenlehrer Halle, Gitarre lernen Halle, E-Gitarre Unterricht Halle, Akustikgitarre Unterricht Halle, Steven Lawrenz, Musikunterricht Halle, Gitarrenunterricht Halle Saale, keine Mindestvertragslaufzeit"
        includeLocalBusiness={true}
      />
      <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <div className='sm:text-center lg:text-left'>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Gitarrenlehrer Halle</span>{' '}
            <span className='block text-primary-600 xl:inline'>
              Steven Lawrenz
            </span>
          </h1>
          <div className='mt-2 flex items-center sm:justify-center lg:justify-start'>
            <div className='flex text-yellow-400'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <span className='ml-2 font-medium text-gray-600'>
              5.0 auf Google
            </span>
          </div>
          <p className='mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
            Professioneller Gitarrenunterricht in Halle an der Saale für
            Anfänger und Fortgeschrittene jeden Alters | E- oder Akustikgitarre
          </p>
          <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <a
                target='_blank'
                href='mailto:steven.lawrenz@gmx.net'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:px-10 md:py-4 md:text-lg'
                rel='noreferrer'
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </main>
      <AboutMe />
      {/*<Reviews />*/}
      <References />
      <Pricing />
      <ExampleLesson />
      <FAQ />
      <Contact />
    </Layout>
  );
}
