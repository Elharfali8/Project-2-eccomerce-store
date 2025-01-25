
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { StarIcon } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

export function MainCard({ asin, product_title, product_photo, product_star_rating }) {
    return (
      <Link href={`/products/${asin}`} className="block h-full ">
        <Card className="h-full transition-all ease-in-out duration-150 hover:bg-gray-400 hover:bg-opacity-25 relative">
          <CardContent className="p-4">
            <div className="w-full h-40 md:h-48 lg:h-56 relative">
              <Image
                src={product_photo}
                alt={product_title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </CardContent>
          <CardHeader className="text-center">
            <CardTitle className="text-sm font-bold">{product_title}</CardTitle>
          </CardHeader>
          <div className="p-2 rounded-lg flex items-center gap-x-1 absolute top-1 right-1 bg-orange-400 text-white font-semibold">
            <StarIcon /> <span>{product_star_rating}</span>
          </div>
        </Card>
      </Link>
    );
  }
  