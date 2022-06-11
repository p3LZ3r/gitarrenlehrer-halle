import * as React from 'react';

import YoutubeEmbed from '../YouTubeEmbed';

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
          <p className='text-lg leading-8 text-green-300'>Instrumental Band</p>
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
      <div className='mx-auto max-w-7xl border-t-2 border-primary-900 sm:border-t-0 md:grid md:grid-cols-2 md:px-6 lg:px-8'>
        <div className='px-4 pb-12 sm:px-6 md:flex md:flex-col md:border-r md:border-primary-900 md:pb-16 md:pl-0 md:pr-10 lg:pr-16'>
          <h2 className='mt-6 text-xl font-extrabold leading-8 tracking-tight text-green-50 sm:text-right sm:text-2xl md:mt-2 lg:text-3xl'>
            weitere Referenzen
          </h2>
        </div>
        <div className='border-0 border-primary-900 px-4 pb-12 sm:px-6 md:border-l md:pb-16 md:pr-0 md:pl-10 lg:pl-16'>
          <p className='text-base leading-8 text-green-100'>
            All You Can Eat (Modern Metal); Arctic Island (Modern Metal); The
            Handshake Affair (Modern Metal); Blacktoothed (Modern Rock);
            Victorius (Powermetal); Schema F (Unterhaltungsmusik); SinnToniker
            (Jazz/Deutsch-Pop); BossAria (Jazz/Bossa-Nova); Bigband
            Bitterfeld-Wolfen; Goou (Jazz/Fusion); Blue Bossa
            (Jazz/Unterhaltungsmusik);
          </p>
        </div>
      </div>
    </section>
  );
}
