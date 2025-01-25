'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { data } from "@/utils/data"
import { MainCard } from "./MainCard"

export function MainCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm sm:max-w-[500px] md:max-w-[650px] lg:max-w-[1000px] xl:max-w-[1200px]"
    >
      <CarouselContent className=''>
        {data.map((item) => {
          const { asin} = item
          return (
            <CarouselItem key={asin} className="px-2 md:basis-1/3 lg:basis-1/4 h-auto" >
              {/* <Link href={'/'} className="p-1 w-full h-full grid place-content-center">
                  <Image src={product_photo} alt={product_title} width={120} height={176} className="object-contain" />
              </Link> */}
              <MainCard {...item} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
