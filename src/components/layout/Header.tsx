import Link from 'next/link';

import NextImage from '@/components/NextImage';

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
            <Link href='/'>
              <a>
                <span className='sr-only'>Workflow</span>
                <NextImage
                  useSkeleton
                  src='/images/new-tab.png'
                  width='20'
                  height='20'
                  alt='Gitarrenlehrer Halle - Steven Lawrenz'
                  className='h-10 w-auto'
                />
              </a>
            </Link>
            <div className='ml-10 hidden space-x-8 lg:block'>
              {navigation.map((link) => (
                <Link href={link.href} key={link.name} scroll={false}>
                  <a className='text-base font-medium text-white hover:text-primary-50'>
                    {link.name}
                  </a>
                </Link>
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
            <Link href={link.href} key={link.name}>
              <a className='text-base font-medium text-white hover:text-primary-50'>
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
