import React from 'react'
import { customerReviewsData } from '../data/customerReviewsData'
import TestimonialCard from '../components/common/TestimonialCard'

export function CustomerReviews() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Title & Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-2">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Hear from our happy clients who’ve experienced our services
          </p>
        </div>

        {/* 3-Column Testimonial Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviewsData.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              location={item.location}
              stars={item.stars}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
