"use client"

import { Product } from "@/interfaces"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export function RelatedProducts({products, currentProductId} : { products: Product[], currentProductId: number}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products
        .filter((product) => product.id !== currentProductId)
        .slice(0, 3)
        .map(({id, icon,slug, coverImage, name, shortDescription}) => {
          const Icon = icon
          return (
            <Link
              key={id}
              href={`/productos/${slug}`}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={coverImage}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{name}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon className="mr-2 h-4 w-4 text-blueAmbiente" />
                    <span className="line-clamp-1">{shortDescription}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}
