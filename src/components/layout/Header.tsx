import Link from 'next/link';

import NextImage from '@/components/NextImage';

import UnstyledLink from '../links/UnstyledLink';

const navigation = [
  { name: 'Über mich', href: '/#ueber-mich' },
  { name: 'Referenzen', href: '/#referenzen' },
  { name: 'Preise', href: '/#preise' },
  { name: 'Kontakt', href: '/#kontakt' },
];

export default function Header() {
  return (
    <header className='bg-primary-600'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='flex w-full items-center justify-between border-b border-primary-500 py-6 lg:border-none'>
          <div className='flex items-center'>
            <UnstyledLink href='/'>
              <span className='sr-only'>
                Gitarrenlehrer Halle - Steven Lawrenz
              </span>
              <NextImage
                useSkeleton
                src='/images/Gitarrenlehrer Halle - Logo.png'
                width='82'
                height='42'
                alt='Gitarrenlehrer Halle - Steven Lawrenz'
                priority={true}
              />
            </UnstyledLink>
            <div className='ml-10 hidden space-x-8 lg:block'>
              {navigation.map((link) => (
                (<Link
                  href={link.href}
                  key={link.name}
                  scroll={false}
                  className='text-base font-medium text-white hover:text-primary-50'>

                  {link.name}

                </Link>)
              ))}
            </div>
          </div>
          <div className='ml-10 space-x-4'>
            <a
              target='_blank'
              href='mailto:steven.lawrenz@gmx.net'
              className='inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-primary-600 hover:bg-primary-50'
              rel='noreferrer'
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
        <div className='flex flex-wrap justify-center space-x-6 py-4 lg:hidden'>
          {navigation.map((link) => (
            (<Link
              href={link.href}
              key={link.name}
              className='text-base font-medium text-white hover:text-primary-50'>

              {link.name}

            </Link>)
          ))}
        </div>
      </nav>
    </header>
  );
}
