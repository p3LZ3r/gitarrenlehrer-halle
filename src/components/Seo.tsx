import Head from 'next/head';
import { useRouter } from 'next/router';

import { openGraph } from '@/lib/helper';
import { faqs } from '@/data/faq';

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: 'Gitarrenunterricht Halle - Professioneller Gitarrenlehrer Steven Lawrenz | Individueller Unterricht',
  siteName: 'Gitarrenunterricht Halle - Steven Lawrenz',
  description:
    'Professioneller Gitarrenunterricht in Halle (Saale) für Anfänger und Fortgeschrittene. Individueller Unterricht für E-Gitarre und Akustikgitarre in zentraler Lage. ✓ Keine Mindestvertragslaufzeit ✓ Flexible Zeiten ✓ Alle Altersgruppen ✓ Moderne Lehrmethoden ✓ 5⭐ Google Bewertungen',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://gitarrenlehrer-halle.de',
  type: 'website',
  robots: 'follow, index',
  /** No need to be filled, will be populated with openGraph function */
  image: '',
  keywords:
    'Gitarrenunterricht Halle, Gitarrenlehrer Halle, Gitarre lernen Halle, E-Gitarre Unterricht Halle, Akustikgitarre Unterricht Halle, Steven Lawrenz, Musikunterricht Halle, Gitarrenunterricht Halle Saale, Gitarrenlehrer Halle Zentrum, Musikschule Halle',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  includeLocalBusiness?: boolean;
} & Partial<typeof defaultMeta>;

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://gitarrenlehrer-halle.de/#faq',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

// Local Business Schema Data
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicSchool',
  '@id': 'https://gitarrenlehrer-halle.de/#organization',
  name: 'Gitarrenunterricht Halle - Steven Lawrenz',
  alternateName: 'Gitarrenlehrer Steven Lawrenz',
  description: 'Professioneller Gitarrenunterricht in Halle (Saale) für Anfänger und Fortgeschrittene jeden Alters. Individueller Unterricht für E-Gitarre und Akustikgitarre.',
  url: 'https://gitarrenlehrer-halle.de',
  telephone: '+4915783024534',
  email: 'steven.lawrenz@gmx.net',
  founder: {
    '@type': 'Person',
    name: 'Steven Lawrenz',
    jobTitle: 'Gitarrenlehrer',
    description: 'Diplom-Musikwissenschaftler und professioneller Gitarrenlehrer mit langjähriger Erfahrung',
    alumniOf: 'Martin-Luther-Universität Halle-Wittenberg',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Große Gosenstraße 24',
    addressLocality: 'Halle (Saale)',
    addressRegion: 'Sachsen-Anhalt',
    postalCode: '06114',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '51.4825',
    longitude: '11.9706',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Halle (Saale)',
    },
    {
      '@type': 'State', 
      name: 'Sachsen-Anhalt',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '51.4825',
      longitude: '11.9706',
    },
    geoRadius: '25',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '13',
    reviewCount: '13',
  },
  priceRange: '€€',
  paymentAccepted: ['Cash', 'Bank Transfer'],
  currenciesAccepted: 'EUR',
  openingHours: 'Mo-Fr 09:00-20:00, Sa 09:00-16:00',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gitarrenunterricht Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Gitarre Unterricht',
          description: 'Professioneller E-Gitarren Unterricht für alle Niveaus',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Akustikgitarre Unterricht',
          description: 'Akustikgitarren Unterricht für Anfänger und Fortgeschrittene',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Musiktheorie',
          description: 'Musiktheorie und Gehörbildung für Gitarrenschüler',
        },
      },
    ],
  },
  sameAs: [
    'https://www.google.com/maps/place/Große+Gosenstraße+24,+06114+Halle+(Saale)',
  ],
  mainEntityOfPage: 'https://gitarrenlehrer-halle.de',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'mailto:steven.lawrenz@gmx.net',
    },
    result: {
      '@type': 'Reservation',
      name: 'Gitarrenstunde Buchung',
    },
  },
};

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://gitarrenlehrer-halle.de/#website',
  url: 'https://gitarrenlehrer-halle.de',
  name: 'Gitarrenunterricht Halle - Steven Lawrenz',
  description: 'Professioneller Gitarrenunterricht in Halle (Saale)',
  publisher: {
    '@id': 'https://gitarrenlehrer-halle.de/#organization',
  },
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://gitarrenlehrer-halle.de/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  ],
};

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta['image'] = openGraph({
    description: meta.description,
    siteName: props.templateTitle ? meta.siteName : meta.title,
    templateTitle: props.templateTitle,
  });

  const shouldIncludeLocalBusiness = props.includeLocalBusiness !== false;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      
      {/* Enhanced Local SEO Meta Tags */}
      <meta name='geo.region' content='DE-ST' />
      <meta name='geo.placename' content='Halle (Saale)' />
      <meta name='geo.position' content='51.4825;11.9706' />
      <meta name='ICBM' content='51.4825, 11.9706' />
      
      {/* Business Information */}
      <meta name='business:contact_data:street_address' content='Große Gosenstraße 24' />
      <meta name='business:contact_data:locality' content='Halle (Saale)' />
      <meta name='business:contact_data:postal_code' content='06114' />
      <meta name='business:contact_data:country_name' content='Deutschland' />
      <meta name='business:contact_data:phone_number' content='+4915783024534' />
      <meta name='business:contact_data:email' content='steven.lawrenz@gmx.net' />
      
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      <meta property='og:locale' content='de_DE' />
      
      {/* Enhanced Open Graph for Local Business */}
      <meta property='place:location:latitude' content='51.4825' />
      <meta property='place:location:longitude' content='11.9706' />
      
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@gitarrenlehrer' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      
      {/* Structured Data */}
      {shouldIncludeLocalBusiness && (
        <>
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema),
            }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        </>
      )}
      
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Steven Lawrenz'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#16a34a' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#16a34a' />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

// !STARTERCONF this is the default favicon, you can generate your own from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
];
