"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
      name: "Ada",
      message: "Absolutely the best spa experience I've had. The ambiance, the service, everything was perfect!",
    },
    {
      name: "Chuka",
      message: "My skin has never felt better. Their organic products are gold!",
    },
    {
      name: "Zainab",
      message: "I felt like royalty. Highly recommend for anyone needing serious self-care.",
    },
  ]

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#f5f5f5] text-black">
    <h2 className="text-4xl font-serif text-center mb-10">What Our Clients Say</h2>
    
    <div className="max-w-3xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="px-4"
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center min-h-[200px] flex flex-col justify-center">
              <p className="text-lg italic mb-4">“{testimonial.message}”</p>
              <h4 className="font-semibold text-sm mt-auto">— {testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  )
}

export default Testimonials