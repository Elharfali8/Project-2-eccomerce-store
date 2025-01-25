'use client'
import Amount from "@/components/Amount"
import { data } from "@/utils/data"
import { Star } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"

const page = () => {
    const {id} = useParams()

    const product = data?.find((item) => item.asin === id)

    const {asin, product_title, product_photo, product_star_rating, product_price, sales_volume, delivery } = product

  return (
    <main className='mt-20 min-h-[calc(100vh-80px)] bg-muted grid place-items-center'>
          <div className="container main-container py-12 lg:py-16">
              <div className='grid lg:grid-cols-2 gap-4 place-content-center'>
                  <div className='grid place-items-center'>
                      <Image src={product_photo} alt={product_title} width={400} height={500} className="max-h-[500px] max-w-[400px] object-cover" />
                  </div>
                  <div className='grid place-content-center'>
                      <h2 className="text-2xl lg:text-3xl font-semibold ">{product_title}</h2>
                      {/*  */}
                      <div className="w-full h-[2px] bg-gray-500 my-2 lg:my-3" />
                      <p className="text-gray-700 dark:text-gray-500 text-xl lg:text-2xl font-semibold ">
                          Price : {product_price}
                      </p>
                      <p className="text-primary ">{sales_volume}</p>
                      {/*  */}
                      <div className="w-full h-[2px] bg-gray-500 my-2 lg:my-3" />
                      {/*  */}
                      <p className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-500">Delivery : {delivery}</p>
                          {/*  */}
                      <div className="w-full h-[2px] bg-gray-500 my-2 lg:my-3" />
                      <div className="mt-4 lg:mt-6 flex items-center justify-between">

                          <div>
                            <p className="text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-500 mb-1">Amount : </p>
                            <Amount />
                          </div>
                          <div className="grid place-items-center">
                              <button type="button" className=" rounded bg-primary text-white font-semibold text-lg lg:text-xl flex items-center px-6 py-2 gap-x-2">
                                  Add to favorite <Star />
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </main>
  )
}

export default page