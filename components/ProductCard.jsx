import React from 'react'
import Image from '@node_modules/next/image'
import Link from '@node_modules/next/link'


const ProductCard = ({imageSrc, name, price, slug}) => {
  return (
    <Link href={`/products/${slug}`} className="w-full max-w-xs">
      <div className="bg-white/10 border border-white/30 rounded-2xl p-3 backdrop-blur-md hover:shadow-xl hover:scale-105 transition duration-300 text-white  min-h-[420px]">
        <div className="relative w-full h-60 rounded-xl overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={name} 
            fill 
            className="object-cover rounded-xl"
          />
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="text-lg  text-black font-semibold tracking-wide">{name}</h3>
          <p className="text-sm text-black opacity-80">&#8358;{price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard