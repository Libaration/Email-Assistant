import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Card } from '@/components/ui/card';

export function Carousel({ images, options }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselRef, emblaApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const slides = images.map((image, index) => (
    <div className='embla__slide' key={index}>
      <img src={image.url} alt={`Image ${index}`} />
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
      <Card className='m-0 p-0 bg-white rounded-none border-[#dee2e6] flex flex-row select-none'>
        <div className='flex'>
          <ChevronLeftIcon
            className='embla__button embla__button--prev text-primary/10 w-[60px] h-auto drop-shadow-lg stroke-[0.5px] stroke-primary/10 hover:text-primary/80 transition-all duration-300 ease-in-out cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              emblaApi.scrollPrev();
            }}
          />
        </div>
        <div className='embla' ref={carouselRef}>
          <div className='embla__container'>{slides}</div>
        </div>
        <div className='flex'>
          <ChevronRightIcon
            className='embla__button embla__button--next text-primary/10 w-[60px] h-auto drop-shadow-lg stroke-[0.5px] stroke-primary/10 hover:text-primary/80 transition-all duration-300 ease-in-out cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              emblaApi.scrollNext();
            }}
          />
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
                <img className='bg-red-500 object-fill max-h-[82px] w-auto' src={image.url} alt={`Image ${index}`} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
