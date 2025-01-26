'use client'
import Amount from "@/components/Amount"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { data } from "@/utils/data"
import { Star, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const page = () => {
    const {id} = useParams()
    const { toast } = useToast()

    const product = data?.find((item) => item.asin === id)
    const isLogin = false

    const { asin, product_title, product_photo, product_star_rating, product_price, sales_volume, delivery, product_url } = product
    
    const handleFavorite = () => {
        if (isLogin) {
            toast({
                title: "Product added successfully to favorites",
                action: (
                  <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
              })
            return
        }
        toast({
            title: "Login first ",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
        })
        
    }

  return (
    <main className='mt-20 min-h-[calc(100vh-80px)] bg-muted grid place-items-center'>
          <div className="container main-container py-12 lg:py-16">
              <div className='grid lg:grid-cols-2 gap-4 place-content-center'>
                  <div className='grid place-items-center'>
                      <Image src={product_photo} alt={product_title} width={400} height={500} className="max-h-[500px] max-w-[400px] object-cover" />
                  </div>
                  <div className='grid place-content-center relative'>
                      <div className="flex justify-start lg:justify-end mb-2 lg:mb-3">
                      <div className="p-2 rounded-lg flex  items-center gap-x-1  bg-orange-400 text-lg text-white font-semibold ">
                            <StarIcon /> <span>{product_star_rating}</span>
                        </div>
                  </div>
                      <h2 className="text-2xl lg:text-3xl font-semibold ">{product_title}</h2>
                      <Link href={product_url} className="mb-4 lg:mb-6 text-blue-500 hover:text-blue-600">Product link</Link>
                      
                      <p className="text-gray-800 dark:text-gray-400 text-xl lg:text-2xl font-semibold ">
                          Price : <span className="text-gray-600 dark:text-gray-300">{product_price}</span>
                      </p>

                      <p className="text-primary mb-2 lg:mb-3">{sales_volume}</p>

                      {/*  */}
                      <p className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-400">Delivery : <span className="text-gray-600 dark:text-gray-300">{delivery}</span></p>
                          
                      <div className="mt-4 lg:mt-6 flex items-center justify-between">

                          <div>
                            <p className="text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-500 mb-1">Amount : </p>
                            <Amount />
                          </div>
                          <div className="grid place-items-center">
                              <button type="button" className=" rounded bg-primary text-white font-semibold text-lg lg:text-xl flex items-center px-6 py-2 gap-x-2" onClick={handleFavorite}>
                                  Add to favorite <Star />
                              </button>
                          </div>
                      </div>
                      <div className="mt-6 lg:mt-10">
                          <Button className='bg-blue-600 w-full text-lg font-semibold hover:bg-blue-700'>
                              Add to cart
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
          </main>
  )
}

export default page