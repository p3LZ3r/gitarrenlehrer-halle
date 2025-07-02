import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';

import { reviews } from '@/data/reviews';

interface ReviewSliderProps {
  embedded?: boolean;
}

// Generate reviews schema markup
const generateReviewsSchema = () => {
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://gitarrenlehrer-halle.de/#reviews',
    name: 'Gitarrenunterricht Halle - Steven Lawrenz',
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: `${review.date}-01-01`,
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        bestRating: 5,
        ratingValue: review.rating,
        worstRating: 1,
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };

  return reviewsSchema;
};

function ReviewSlider({ embedded = false }: ReviewSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced Funktion zum Berechnen der maximalen Höhe aller Reviews
  const updateMaxHeight = useCallback(() => {
    const heights = reviewRefs.current
      .filter(Boolean)
      .map((el) => el?.scrollHeight || 0);

    const maxHeight = Math.max(...heights, 200); // Mindesthöhe von 200px
    setContentHeight(maxHeight);
  }, []);

  // Debounced Resize-Handler
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      updateMaxHeight();
    }, 200); // 200ms Debounce
  }, [updateMaxHeight]);

  useEffect(() => {
    // Initialisiere die Refs-Array mit der Anzahl der Reviews
    reviewRefs.current = reviewRefs.current.slice(0, reviews.length);

    // Berechne die maximale Höhe nach dem Rendern
    updateMaxHeight();

    // Berechne die Höhe neu, wenn sich das Fenster ändert
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [updateMaxHeight, handleResize]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Wechselt alle 5 Sekunden

    return () => clearInterval(timer);
  }, []);

  if (embedded) {
    return (
      <>
        <Head>
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateReviewsSchema()),
            }}
          />
        </Head>
        <div className='relative'>
          <h3 className='mb-4 text-xl font-semibold text-gray-900'>
            Was meine Schüler sagen
          </h3>
          <div className='relative'>
            <div
              className='relative overflow-hidden transition-all duration-300'
              style={{ height: `${contentHeight}px` }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    reviewRefs.current[idx] = el;
                  }}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === currentIndex
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-0'
                  }`}
                >
                  <div className='flex flex-col'>
                    <div className='relative'>
                      <div className='text-lg font-medium text-gray-600'>
                        {review.text}
                      </div>
                      <div className='mt-3'>
                        <div className='flex items-center'>
                          <div className='flex text-yellow-400'>
                            {[...Array(review.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className='h-5 w-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                              >
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className='mt-3 flex items-center space-x-3 text-base'>
                          <div className='font-semibold text-gray-900'>
                            {review.author}
                            {review.isLocalGuide && (
                              <span className='ml-2 text-xs font-normal text-gray-500'>
                                Local Guide
                              </span>
                            )}
                          </div>
                          <div className='text-gray-500'>{review.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-6 flex justify-center space-x-3'>
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateReviewsSchema()),
          }}
        />
      </Head>
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
              <div
                className='relative overflow-hidden transition-all duration-300'
                style={{ height: `${contentHeight}px` }}
              >
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    ref={(el) => {
                      reviewRefs.current[idx] = el;
                    }}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      idx === currentIndex
                        ? 'opacity-100'
                        : 'pointer-events-none opacity-0'
                    }`}
                  >
                    <div className='flex flex-col'>
                      <div className='relative'>
                        <div className='text-lg font-medium text-green-100'>
                          {review.text}
                        </div>
                        <div className='mt-3'>
                          <div className='flex items-center'>
                            <div className='flex text-yellow-400'>
                              {[...Array(review.rating)].map((_, i) => (
                                <svg
                                  key={i}
                                  className='h-5 w-5'
                                  fill='currentColor'
                                  viewBox='0 0 20 20'
                                >
                                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <div className='mt-3 flex items-center space-x-3 text-base'>
                            <div className='font-semibold text-green-50'>
                              {review.author}
                              {review.isLocalGuide && (
                                <span className='ml-2 text-xs font-normal text-green-300'>
                                  Local Guide
                                </span>
                              )}
                            </div>
                            <div className='text-green-300'>{review.date}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-6 flex justify-center space-x-3'>
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-2 w-2 rounded-full ${
                      idx === currentIndex ? 'bg-green-300' : 'bg-primary-900'
                    }`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the component directly for dynamic imports
export default ReviewSlider;

// Also export a memoized version if needed elsewhere
export const MemoizedReviewSlider = React.memo(ReviewSlider);
