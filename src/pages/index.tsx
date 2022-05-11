import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

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

// ToDo: Free Trial und 99 EURO

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <div className='sm:text-center lg:text-left'>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Gitarrenlehrer Halle</span>{' '}
            <span className='block text-primary-600 xl:inline'>
              Steven Lawrenz
            </span>
          </h1>
          <p className='mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
            Gitarrenunterricht in Halle an der Saale für Anfänger und
            Fortgeschrittene jeden Alters | E- oder Akustikgitarre
          </p>
          <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <a
                href='mailto:steven.lawrenz@gmx.net'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:py-4 md:px-10 md:text-lg'
              >
                Kontakt aufnehmen
              </a>
            </div>
            <div className='mt-3 sm:mt-0 sm:ml-3'>
              <a
                href='#'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary-100 px-8 py-3 text-base font-medium text-primary-700 hover:bg-primary-200 md:py-4 md:px-10 md:text-lg'
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
