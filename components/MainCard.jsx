
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { StarIcon } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

export function MainCard({ asin, product_title, product_photo, product_star_rating, deal_title, deal_photo, deal_price, deal_type, deal_state, deal_badge, product_asin }) {
    return (
      <Link href={`/products/${asin || product_asin}`} className="block h-full ">
        <Card className="h-full transition-all ease-in-out duration-150 hover:bg-gray-400 hover:bg-opacity-25 relative">
          <CardContent className="p-4">
            <div className="w-full h-40 md:h-48 lg:h-56 relative">
              <Image
                src={product_photo || deal_photo}
                alt={product_title || deal_title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </CardContent>
          <CardHeader className="text-center">
            <CardTitle className="text-sm font-bold">{product_title || deal_title}</CardTitle>
            <CardDescription>
              <p className="lg:text-lg">${deal_price?.amount}</p>
            </CardDescription>
          </CardHeader>
          {deal_badge ? (
            <div className="p-2 rounded-lg  absolute top-1 right-1 bg-orange-400 text-white font-semibold">
              {deal_badge}
            </div>
          ) : (
            <div className="p-2 rounded-lg flex items-center gap-x-1 absolute top-1 right-1 bg-orange-400 text-white font-semibold">
            <StarIcon /> <span>{product_star_rating}</span>
          </div>
          )}
        </Card>
      </Link>
    );
  }
  