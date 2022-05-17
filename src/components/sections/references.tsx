import * as React from 'react';

import YoutubeEmbed from '../YouTubeEmbed';

export default function References() {
  return (
    <section className='bg-primary-800'>
      <div className='mx-auto max-w-7xl md:grid md:grid-cols-2 md:border-b-2 md:border-primary-900 md:px-6 lg:px-8'>
        <div className='py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:border-primary-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16'>
          <h2 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            Victorius
          </h2>
          <p className='text-lg leading-8 text-gray-300'>
            Power-Metal-Band aus Leipzig
          </p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='TrW80XB3q_A' />
          </div>
        </div>
        <div className='border-t-2 border-primary-900 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16'>
          <h2 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            Victorius
          </h2>
          <p className='text-lg leading-8 text-gray-300'>
            Power-Metal-Band aus Leipzig
          </p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='TrW80XB3q_A' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl border-t-2 border-primary-900 sm:border-t-0 md:grid md:grid-cols-2 md:px-6 lg:px-8'>
        <div className='py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:border-primary-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16'>
          <h2 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            Victorius
          </h2>
          <p className='text-lg leading-8 text-gray-300'>
            Power-Metal-Band aus Leipzig
          </p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='TrW80XB3q_A' />
          </div>
        </div>
        <div className='border-t-2 border-primary-900 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16'>
          <h2 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            Victorius
          </h2>
          <p className='text-lg leading-8 text-gray-300'>
            Power-Metal-Band aus Leipzig
          </p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='TrW80XB3q_A' />
          </div>
        </div>
      </div>
    </section>
  );
}
