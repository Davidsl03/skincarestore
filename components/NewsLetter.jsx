import React from 'react'

const NewsLetter = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-black">Contact Us</h2>
          <p className="text-black"> +234 123 456 7890</p>
          <p className="text-black"> 123 Spa Street, Lagos, Nigeria</p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block border-l-2 border-black mx-8 h-32"></div>

       
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-black mb-4">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 text-black placeholder-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white  hover:bg-gray-800 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default NewsLetter