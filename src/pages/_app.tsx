import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '@/styles/globals.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Implementiere Route-basiertes Code-Splitting
  useEffect(() => {
    const handleRouteChange = () => {
      // Prefetch wichtige Assets für die nächste Seite
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !href.includes('#') && href !== router.asPath) {
          router.prefetch(href);
        }
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
