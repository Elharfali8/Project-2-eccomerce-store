import React from "react";
import SectionTitle from "./SectionTitle";
import { categoriesData } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

const CategoriesSection = () => {
  return (
    <section className="py-10 lg:py-16">
      <SectionTitle text="shop by category" />
      <div className="container main-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categoriesData.map((cat) => {
          const { id, title, img } = cat;
          return (
            <Link
              href={`/products?category=${title}`}
              key={id}
              className="block group shadow-md pb-1"
            >
              <div className="relative w-full h-44 overflow-hidden bg-gray-100 rounded-md">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 text-center text-lg lg:text-xl font-semibold capitalize">{title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;
