import * as React from 'react';

import NextImage from '../NextImage';

export default function AboutMe() {
  return (
    <section className='overflow-hidden bg-white' id='ueber-mich'>
      <div className='relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
        <div className='absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block' />
        <div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
          <div>
            <h2 className='text-base font-semibold uppercase tracking-wide text-primary-600'>
              Über mich
            </h2>
            <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
              Steven Lawrenz
            </h3>
          </div>
        </div>
        <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative lg:col-start-2 lg:row-start-1'>
            <svg
              className='absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block'
              width={400}
              height={400}
              aria-hidden='true'
            >
              <pattern
                id='pattern-piano'
                x={0}
                y={0}
                width={70}
                height={46}
                patternUnits='userSpaceOnUse'
              >
                <g id='piano' className='fill-gray-300'>
                  <polygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46' />
                </g>
              </pattern>
              <rect
                x='0'
                y='0'
                width='100%'
                height='100%'
                fill='url(#pattern-piano)'
              ></rect>
            </svg>
            <div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
              <figure>
                <div className='aspect-w-3 aspect-h-2 lg:aspect-none'>
                  <NextImage
                    useSkeleton
                    src='/images/Gitarrenlehrer Halle - Unterrichtssituation zu zweit.jpeg'
                    width='3000'
                    height='2000'
                    alt='Gitarrenlehrer Halle - Unterrichtssituation'
                    className='rounded-lg object-cover object-center shadow-lg'
                    priority={true}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className='mt-8 lg:mt-0'>
            <div className='prose-primary prose mx-auto max-w-prose text-base lg:max-w-none'>
              <p className='text-lg text-gray-500'>
                Seit meiner frühesten Jugend spiele ich Gitarre und war in
                verschiedenen Bands aktiv. Neben meinem Abitur machte ich eine
                studienvorbereitende Ausbildung in den Fächern Gitarre, Klavier,
                Musiktheorie und Gehörbildung.
              </p>
              <p className='text-lg text-gray-500'>
                Anschließend studierte ich an der Martin-Luther-Universität
                Halle-Wittenberg Musikwissenschaften und Kunstgeschichte, wo ich
                mit meiner Arbeit „Die Rolle und Entwicklung der (E-)Gitarre in
                der Popularmusik des 20. & 21. Jahrhunderts“ meinen Abschluss
                machte. Anschließend machte ich als Gitarrenlehrer und
                freiberuflicher Musiker mein Hobby zum Beruf.
              </p>
            </div>
            <div className='prose-primary prose mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none'>
              <h3>Unterricht</h3>
              <p>Individueller Musikunterricht für alle Altersgruppen in...</p>
              <ul role='list'>
                <li>allen Stilrichtungen (Pop/Rock/Jazz/Klassik)</li>
                <li>
                  Musiktheorie, Gehörbildung und Vorbereitung eines Studiums
                </li>
                <li>Komposition, Songwriting und Recording</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
