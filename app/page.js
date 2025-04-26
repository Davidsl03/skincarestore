"use client"
import { useEffect, useState } from "react"
import ProductCard from "@components/ProductCard"
import axios from "@node_modules/axios"
import Image from "@node_modules/next/image"
import Link from "@node_modules/next/link"
import {motion} from "framer-motion"
import { Spa, HandPlatter, Smile, Flower, Heart } from "lucide-react"
import NewsLetter from "@components/NewsLetter"
import Testimonials from "@components/Testimonials"


const Home = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=3')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Failed to fetch products",err))
  },[])

  return (
    <>
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      <Image
        src="/assets/images/SpaHero.webp" 
        alt="Spa background"
        fill
        priority
        quality={90}
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-10 pointer-events-none"></div>

      <motion.div
        className="relative z-20 max-w-3xl text-center text-white space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-5xl font-bold leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Glow Naturally, Inside & Out
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl drop-shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Book a spa session or order our organic skincare line, delivered with love and care.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        > 
          
          <Link href="/appointment" className="w-full max-w-xs font-semibold py-3 px-8 bg-transparent text-white border border-white hover:bg-white hover:text-black transition duration-300">
            Book Appointment
          </Link>
          <Link href="/" className="w-full max-w-xs font-semibold py-3 px-8 bg-transparent text-white border border-white hover:bg-white hover:text-black transition duration-300">
            Purchase Product
          </Link>
 
        </motion.div>
      </motion.div>
    </section>
    <section id="services" className="py-20 px-4 text-center bg-white text-black">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration: 1, }}
        className="text-4xl font-serif mb-10"
      >
        Service Menu
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 mb-8">
        {[

          { name: "Massages", icon: <HandPlatter className="w-10 h-10" /> },
          { name: "Facials", icon: <Smile className="w-10 h-10" /> },
          { name: "Body Treatments", icon: <Flower className="w-10 h-10" /> },
          { name: "For Couples", icon: <Heart className="w-10 h-10" /> },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center group">
            {item.icon}
            <p className="mt-2 font-medium uppercase text-sm tracking-wider relative">
              {item.name}
              {/* underline animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>
        ))}
      </div>

      <p className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-700 mb-10">
        Our crazy-talented master stylists will connect with you on a personal level, using their creativity and skill to envision a natural, ready-to-wear style that embraces your individuality and lifestyle.
      </p>

      <motion.button 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{duration: 0.8, ease: "easeIn"}}
        className="border border-black text-black px-6 py-3 uppercase tracking-wider font-medium hover:bg-black hover:text-white transition duration-400">
        View Service Menu
      </motion.button>
    </section>
    <section id="products" className="bg-[#e9cad5] py-10">
      <motion.h1
        className="text-center text-black text-4xl font-serif"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Shop
      </motion.h1>
          
      <div className="pt-10 flex flex-wrap justify-center gap-6 px-4">
        {products.map(product => (
          <motion.div
            key={product.id}
            className="w-full max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * product.id, duration: 0.6 }}
          >
            <ProductCard
              imageSrc={product.image}
              name={product.title}
              price={product.price}
              slug={product.id}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="inline-block px-6 py-3 border w-full max-w-xs border-black text-black hover:bg-black hover:text-white transition duration-300"
        >
          Shop All
        </Link>
      </div>
    </section>
    <Testimonials />
    <NewsLetter />
    </>
  )
}

export default Home