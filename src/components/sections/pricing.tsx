import { CheckCircleIcon } from '@heroicons/react/solid';
import * as React from 'react';

import NextImage from '../NextImage';

const includedFeatures = [
  'ganzjähriger Unterricht, auch während der Ferien',
  'individuelle Unterrichtszeiten, bei Bedarf wöchentlich abgestimmt',
  'Unterricht auch über Webcam möglich (Skype, Zoom, etc.)',
  '45 Minuten Unterricht pro Woche',
];

export default function Pricing() {
  return (
    <section className='bg-gray-100' id='preise'>
      <div className='mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8'>
        <div className='px-4 pt-12 sm:px-6 sm:text-right md:flex md:flex-col md:pt-16 md:pl-0 md:pr-10 lg:pr-16'>
          <h2 className='text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>
            Preise
          </h2>
          <p className='mt-4 text-xl text-gray-600'>
            Bei Interesse an einer Zusammenarbeit melden Sie sich unverbindlich
            und wir vereinbaren zeitnah einen Termin um alles Weitere zu
            besprechen.
          </p>
        </div>
        <div className='z-20 px-4 pt-12 sm:px-6 md:pt-16 md:pr-0 md:pl-10 lg:pl-16'>
          {' '}
          <NextImage
            useSkeleton
            src='/images/Gitarrenlehrer Halle - Effektgeraete.jpeg'
            width='3000'
            height='2000'
            alt='Gitarrenlehrer Halle - Effektgeräte'
            className='-mb-0 rounded-lg shadow-lg md:-mb-32 lg:block'
          />
        </div>
      </div>
      <div className='mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28'>
        <div className='relative'>
          <div className='absolute inset-0 z-10 h-1/2 bg-gray-100' />
          <div className='relative z-30 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-lg overflow-hidden rounded-lg shadow-2xl lg:flex lg:max-w-none'>
              <div className='flex-1 bg-white px-6 py-8 lg:p-9'>
                <div>
                  <div className='flex items-center'>
                    <h4 className='flex-shrink-0 bg-white pr-4 text-sm font-semibold uppercase tracking-wider text-primary-600'>
                      Was ist inkludiert?
                    </h4>
                    <div className='flex-1 border-t-2 border-gray-200' />
                  </div>
                  <ul
                    role='list'
                    className='mt-8 space-y-3 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-3 lg:space-y-0'
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className='flex items-start lg:col-span-1'
                      >
                        <div className='flex-shrink-0'>
                          <CheckCircleIcon
                            className='h-5 w-5 text-green-400'
                            aria-hidden='true'
                          />
                        </div>
                        <p className='ml-3 text-sm text-gray-700'>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-9'>
                <p className='text-lg font-medium leading-6 text-gray-900'>
                  Zahle monatlich, lerne für&apos;s Leben
                </p>
                <div className='mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900'>
                  <span>99,00€</span>
                  <span className='ml-3 text-left text-lg font-medium leading-5 text-gray-500'>
                    pro Monat
                  </span>
                </div>
                <div className='mt-4 text-sm'>
                  <p className='font-medium text-gray-900'>
                    Spare <span className='font-bold'>10%</span> bei
                    halbjährlicher und <span className='font-bold'>20%</span>
                    bei jährlicher Zahlung auf den Monatspreis
                  </p>
                </div>
                {/* <p className='mt-4 text-sm'>
                  <a
                    href='/docs/Privatunterricht Vertrag.docx'
                    className='font-medium text-gray-500 underline'
                  >
                    Mustervertrag anschauen
                  </a>
                </p> */}
                <div className='mt-6'>
                  <div className='rounded-md shadow'>
                    <a
                      target='_blank'
                      href='mailto:steven.lawrenz@gmx.net'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:py-4 md:px-10 md:text-lg'
                      rel='noreferrer'
                    >
                      Jetzt unverbindlich anfragen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
