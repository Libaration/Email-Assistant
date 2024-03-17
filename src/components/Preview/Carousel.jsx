import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Card } from '@/components/ui/card';

export function Carousel({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselRef, emblaApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const slides = images.map((image, index) => (
    <div className='embla__slide align-middle flex' key={index}>
      <img src={image.url} alt={`Image ${index}`} className='object-cover' />
    </div>
  ));

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <Card className='pl-0 pr-0 bg-transparent rounded-none border-[#dee2e6] flex flex-row select-none'>
        <div className='embla' ref={carouselRef}>
          <div className='embla__container'>{slides}</div>
        </div>
      </Card>

      <div
        className='embla-thumbs image-gallery-thumbnails-wrapper bottom leading-none overflow-hidden'
        ref={emblaThumbsRef}
      >
        <div className='embla__container image-gallery-thumbnails pt-[5px] pb-[5px] leading-none flex'>
          {images.map((image, index) => (
            <div
              className={`ml-1 mr-1 ${index === selectedIndex ? 'is-selected' : ''
                } transition-all duration-300 ease-in-out`}
              key={index}
              onClick={() => onThumbClick(index)}
            >
              <Card
                key={index}
                className={`p-0 rounded-none ${index === selectedIndex ? 'border-[#337ab7] border-[4px]' : ''}`}
              >
                <img
                  className='bg-red-500 object-fill max-h-[82px] min-w-[122px]'
                  src={image.url}
                  alt={`Image ${index}`}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
