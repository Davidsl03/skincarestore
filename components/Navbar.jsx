"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    
      <motion.header
        className="fixed top-0 left-0 w-full z-50 text-white"
        initial={{ opacity: 0, y: 30,}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        
      >
        {/* Top bar */}
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? "#ffffff" : "transparent",
            color: scrolled ? "#000000" : "#ffffff",
          }}
          className="transition-colors duration-200"
        >
          {/* Top nav */}
          <div className="flex justify-between items-center px-6 py-4 text-sm backdrop-blur-lg">
            <div className="md:flex gap-4 items-center pl-3 hidden">
              <FaFacebookF className="hover:text-pink-200 cursor-pointer text-lg" />
              <FaInstagram className="hover:text-pink-200 cursor-pointer text-lg" />
              <FaTwitter className="hover:text-pink-200 cursor-pointer text-lg" />
            </div>
        
            <div className="text-lg font-semibold tracking-wide text-center">
              Logo
            </div>
        
            <div className="md:hidden">
              <Menu
                size={26}
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>
        
            <Link href="/appointment" className="hidden md:block">
              <button className={`px-4 py-2 transition hover:bg-black hover:text-white ${
                  scrolled ? "border-black text-black" : "border-white text-white"
                } border`}
              >
                Book Appointment
              </button>
            </Link>
          </div>
        
          <hr className={` ${scrolled ? "border-gray-300" :"border-white/20 "}`} />
        
          {/* Bottom nav - Desktop */}  
          <div className={`py-3 px-6 hidden md:block border-b-1 ${scrolled ? "border-gray-300" :"border-white/20 "}`}>
            <nav className="flex justify-center gap-10 font-medium tracking-wide">
              {["Home", "Services", "Products", "Booking", "Contact"].map(
                (link, index) => (
                  <Link
                    href={`#${link.toLowerCase()}`}
                    key={index}
                    className={`relative group transition font-medium tracking-wide ${
                      scrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              )}
            </nav>
          </div>
        </motion.div>

    
        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-2/4 bg-white z-50 p-6 shadow-lg md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-evcnxGreen">Menu</h2>
                <X size={24} className="cursor-pointer text-black" onClick={() => setIsOpen(false)} />
              </div>
    
              <nav className="flex flex-col gap-5 text-black">
                {["Home", "Services", "Products", "Booking", "Contact"].map((link, i) => (
                  <Link
                    key={i}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-evcnxGreen transition"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.header>
    )
}