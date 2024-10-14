import React from 'react'
import { FaUsers, FaClock, FaDollarSign, FaSmile } from 'react-icons/fa'

function CTA2() {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center">
        {/* Icône et description 1 */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-5xl mb-4 border border-white rounded-full py-2" />
          <h4 className="text-lg font-bold text-white">Expert Team</h4>
          <p className="text-sm">Ensuring high-quality service and reliable solutions.</p>
        </div>

        {/* Icône et description 2 */}
        <div className="flex flex-col items-center">
          <FaClock className="text-5xl mb-4 " />
          <h4 className="text-lg font-bold text-white">24/7 Emergency Services</h4>
          <p className="text-sm">Urgent issues promptly and minimize disruption.</p>
        </div>

        {/* Icône et description 3 */}
        <div className="flex flex-col items-center">
          <FaDollarSign className="text-5xl mb-4 border border-white rounded-full py-2" />
          <h4 className="text-lg font-bold text-white">Transparent Pricing</h4>
          <p className="text-sm">We offer clear, upfront pricing with no hidden fees.</p>
        </div>

        {/* Icône et description 4 */}
        <div className="flex flex-col items-center">
          <FaSmile className="text-5xl mb-4 border border-white rounded-full py-2" />
          <h4 className="text-lg font-bold text-white">Customer Satisfaction</h4>
          <p className="text-sm">Tailored solutions to meet your specific needs.</p>
        </div>
      </div>
    </div>
  )
}

export default CTA2
