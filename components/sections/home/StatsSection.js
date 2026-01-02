'use client'

import Image from 'next/image'

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 
          <div className="rounded-xl bg-[#f0fdf4] p-8 hover:shadow-xl transition-all text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/images/downlaod.png"
                alt="1 Million+ Downloads"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            <p className="text-gray-700 text-lg font-medium leading-snug">
              <span className="font-bold text-xl">1 Million +</span> Downloads
            </p>
          </div>
 
          <div className="rounded-xl bg-[#f0fdf4] p-8 hover:shadow-xl transition-all text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/images/app_store.png"
                alt="Google + App Store Rating 4.5"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            <p className="text-gray-700 text-lg font-medium leading-snug">
              Google + App Store <span className="font-bold text-xl">Rating 4.5</span>
            </p>
          </div>
 
          <div className="rounded-xl bg-[#f0fdf4] p-8 hover:shadow-xl transition-all text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/images/speedless.png"
                alt="Transaction Speed less than a minute"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            <p className="text-gray-700 text-lg font-medium leading-snug">
              Transaction Speed <span className="font-bold text-xl">less than a minute</span>
            </p>
          </div>
 
          <div className="rounded-xl bg-[#f0fdf4] p-8 hover:shadow-xl transition-all text-center">
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/images/gift_cards.png"
                alt="20+ Types of Gift Cards Available"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            <p className="text-gray-700 text-lg font-medium leading-snug">
              <span className="font-bold text-xl">20+</span> Types of Gift Cards Available
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
