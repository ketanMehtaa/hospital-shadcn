'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import img1 from '../../public/1.jpeg';
import img2 from '../../public/2.jpeg';
import img3 from '../../public/3.jpg';
import img4 from '../../public/4.jpg';
import img5 from '../../public/5.jpeg';
import img6 from '../../public/6.jpeg';
import img7 from '../../public/7.jpeg';
import img8 from '../../public/8.jpeg';
import img9 from '../../public/9.jpeg';
// import img10 from '../../public/10.jpeg';
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

export default function Startcarousel() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="mt-20 flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-[97%] md:w-3/5 md:max-w-2xl" // Changed from w-2/5 to w-4/5
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {images.slice(0, 9).map((img, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={img}
                      alt={`image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
