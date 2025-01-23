'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
  import { useCallback, useEffect, useState } from "react";
  import { Button } from "./ui/button";
import { pics } from "@/utils/data";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
  
  export const HeroCarousel = () => {
    const [carouselAPI, setCarouselAPI] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
  
    const onSelect = useCallback(() => {
      if (!carouselAPI) return;
  
      setSelectedIndex(carouselAPI.selectedScrollSnap());
    }, [carouselAPI]);
  
    const scrollTo = (index) => {
      if (!carouselAPI) return;
  
      carouselAPI.scrollTo(index);
    };
  
    useEffect(() => {
      if (!carouselAPI) return;
  
      onSelect();
  
      setScrollSnaps(carouselAPI.scrollSnapList());
  
      carouselAPI.on("select", onSelect);
    }, [carouselAPI, onSelect]);
  
    return (
      <div>
        <Carousel
          plugins={[Autoplay({ delay: 3500 })]}
          opts={{ loop: true, align: "center" }}
                setApi={setCarouselAPI}
                className='w-full max-w-lg'
        >
          <CarouselContent>
            {pics.map((item) => {
              const {id, img} = item
              return (
                <CarouselItem key={id} className="w-[100px] lg:w-[120px] xl:w-[150px] rounded-lg overflow-hidden ">
                  <div className="p-1">
              <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 relative rounded-lg overflow-hidden">
                        <Image src={img} alt="pics" fill />
                </CardContent>
              </Card>
                  </div>
                  
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center mt-4 space-x-2">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              onClick={() => scrollTo(index)}
              size="icon"
              className={`w-2 h-2 rounded-full ${
                selectedIndex === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };