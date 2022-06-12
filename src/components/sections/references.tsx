import * as React from 'react';

import YoutubeEmbed from '../YouTubeEmbed';

const bands = [
  { name: 'All You Can Eat', genre: 'Modern Metal' },
  { name: 'Arctic Island', genre: 'Modern Metal' },
  { name: 'The Handshake Affair', genre: 'Modern Metal' },
  { name: 'Blacktoothed', genre: 'Modern Rock' },
  { name: 'Victorius', genre: 'Power Metal' },
  { name: 'Schema F', genre: 'Unterhaltungsmusik' },
  { name: 'SinnToniker', genre: 'Jazz/Deutsch-Pop' },
  { name: 'BossAria', genre: 'Jazz/Bossa-Nova' },
  { name: 'Bigband Bitterfeld-Wolfen', genre: 'Jazz' },
  { name: 'Goou', genre: 'Jazz/Fusion' },
  { name: 'Blue Bossa', genre: 'Jazz/Unterhaltungsmusik' },
];

export default function References() {
  return (
    <section className='bg-primary-800' id='referenzen'>
      <div className='mx-auto max-w-7xl border-t-2 border-primary-900 sm:border-t-0 md:grid md:grid-cols-2 md:px-6 lg:px-8'>
        <div className='px-4 pt-12 sm:px-6 md:flex md:flex-col md:border-r md:border-primary-900 md:pt-16 md:pl-0 md:pr-10 lg:pr-16'>
          <h2 className='mt-6 text-3xl font-extrabold leading-8 tracking-tight text-green-50 sm:text-right sm:text-4xl md:mt-2 lg:text-5xl'>
            Referenzen
          </h2>
        </div>
        <div className='border-0 border-primary-900 px-4 pt-12 sm:px-6 md:border-l md:pt-16 md:pr-0 md:pl-10 lg:pl-16'>
          <p className='text-lg leading-8 text-green-100'>
            Im Laufe der Jahre als Gitarrist hatte ich das Privileg Teil von
            verschiedensten Ensembles und Bands aller Musikrichtungen zu sein.
          </p>
        </div>
      </div>
      <div className='mx-auto max-w-7xl md:grid md:grid-cols-2 md:border-b-2 md:border-primary-900 md:px-6 lg:px-8'>
        <div className='py-12 px-4 sm:px-6 sm:text-right md:flex md:flex-col md:border-r md:border-primary-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16'>
          <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-green-50 sm:text-4xl'>
            Victorius
          </h3>
          <p className='text-lg leading-8 text-green-300'>
            Power-Metal-Band aus Leipzig
          </p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='TrW80XB3q_A' />
          </div>
        </div>
        <div className='border-t-2 border-primary-900 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16'>
          <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-green-50 sm:text-4xl'>
            Steven Lawrenz
          </h3>
          <p className='text-lg leading-8 text-green-300'>Eigenkomposition</p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='Z-K7wmoOnxo' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl border-t-2 border-primary-900 sm:border-t-0 md:grid md:grid-cols-2 md:px-6 lg:px-8'>
        <div className='py-12 px-4 sm:px-6 sm:text-right md:flex md:flex-col md:border-r md:border-primary-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16'>
          <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-green-50 sm:text-4xl'>
            Goou
          </h3>
          <p className='text-lg leading-8 text-green-300'>Instrumental-Band</p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='mog3Cvf4VnU' />
          </div>
        </div>
        <div className='border-t-2 border-primary-900 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16'>
          <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-green-50 sm:text-4xl'>
            BLACKTOOTHED
          </h3>
          <p className='text-lg leading-8 text-green-300'>Rock-Band</p>
          <div className='md:flex-shrink-0'>
            <YoutubeEmbed embedId='Hxu2u-QZ7tM' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-6xl border-t-2 border-primary-900 pb-12 sm:border-t-0 md:grid md:grid-cols-1 md:px-6 lg:px-8'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h3 className='mt-6 text-xl font-extrabold leading-8 tracking-tight text-green-50 sm:text-2xl md:mt-2 lg:text-3xl'>
                weitere Referenzen
              </h3>
            </div>
          </div>
          <div className='mt-8 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Band
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-2 text-left text-sm font-semibold text-gray-900'
                        >
                          Genre
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {bands.map((band) => (
                        <tr key={band.name}>
                          <td className='whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {band.name}
                          </td>
                          <td className='whitespace-nowrap px-3 py-2 text-sm text-gray-500'>
                            {band.genre}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
