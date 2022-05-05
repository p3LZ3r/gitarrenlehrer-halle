import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function Impressum() {
  return (
    <Layout>
      <Seo templateTitle='Impressum' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='mt-8 text-4xl md:text-6xl'>Impressum</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Zurück zur Startseite
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
