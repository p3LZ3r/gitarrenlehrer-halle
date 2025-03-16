import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';

// Dynamischer Import des ReviewSliders
const ReviewSlider = dynamic(
  () => import('@/components/ReviewSlider').then((mod) => mod.default),
  {
    loading: () => <ReviewsPlaceholder />,
    ssr: false, // Deaktiviere serverseitiges Rendering für diese Komponente
  }
);

// Einfacher Placeholder während des Ladens
function ReviewsPlaceholder() {
  return (
    <div className='relative overflow-hidden bg-primary-800 px-4 py-8 sm:px-6 lg:px-8'>
      <div className='relative mx-auto max-w-7xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-green-50 sm:text-4xl'>
            Was meine Schüler sagen
          </h2>
          <p className='mt-3 text-xl text-green-100'>5.0 ★★★★★ auf Google</p>
        </div>
        <div className='mx-auto mt-12 max-w-2xl'>
          <div className='relative'>
            <div className='h-64 w-full animate-pulse rounded-lg bg-primary-700'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer für Lazy Loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Lade, wenn 10% des Elements sichtbar ist
    );

    const element = document.getElementById('reviews-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id='reviews-section'>
      {isVisible ? (
        <Suspense fallback={<ReviewsPlaceholder />}>
          <ReviewSlider />
        </Suspense>
      ) : (
        <ReviewsPlaceholder />
      )}
    </section>
  );
}
