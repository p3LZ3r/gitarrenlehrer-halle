import { HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';
import * as React from 'react';

import NextImage from '../NextImage';

export default function Contact() {
  return (
    <div className='bg-white' id='kontakt'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8'>
          <div>
            <figure>
              <div className='aspect-w-3 aspect-h-2 lg:aspect-none'>
                <NextImage
                  useSkeleton
                  src='/images/Gitarrenlehrer Halle - Unterrichtssituation.jpeg'
                  width='3000'
                  height='2000'
                  alt='Gitarrenlehrer Halle - Unterrichtssituation'
                  className='rounded-lg object-cover object-center shadow-lg'
                />
              </div>
            </figure>
          </div>
          <div className='mt-12 sm:mt-16 md:mt-0'>
            <h2 className='text-2xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl'>
              Kontakt
            </h2>
            <div className='mt-9'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <PhoneIcon
                    className='h-6 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3 text-base text-gray-500'>
                  <a target='_blank' href='tel:+491767890123' rel='noreferrer'>
                    +49 157 83024534
                  </a>
                </div>
              </div>
              <div className='mt-6 flex'>
                <div className='flex-shrink-0'>
                  <MailIcon
                    className='h-6 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3 text-base text-gray-500'>
                  <a
                    target='_blank'
                    href='mailto:steven.lawrenz@gmx.net'
                    rel='noreferrer'
                  >
                    steven.lawrenz@gmx.net
                  </a>
                </div>
              </div>
              <div className='mt-6 flex'>
                <div className='flex-shrink-0'>
                  <HomeIcon
                    className='h-6 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3 text-base text-gray-500'>
                  <a
                    target='_blank'
                    href='https://goo.gl/maps/JTCjamgKhSTyCyz77'
                    rel='noreferrer'
                  >
                    Gosenstraße 24, 06114 Halle (Saale)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
