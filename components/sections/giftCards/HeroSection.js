'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function HeroSection() {
  return (
   <section
    className="py-20 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/bg1.png')" }}
  >

      <div className="max-w-7xl h-80 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-0">
              Sell Gift Cards <span className="text-3xl md:text-5xl font-bold">for</span>
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cash Online
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Try the best app to trade gift cards in Nigeria to enjoy top rates and exclusive rewards.
            </p>
            <Link
              href="#"
              className="bg-[#242344] text-xl md:text-xl text-white px-4 py-2 rounded Lexend-Medium inline-block transition-colors"
              onClick={() => trackEvent('click_sell_giftcard_banner', 'CTA Click', 'Sell Gift Card - Banner')}
            >
              Sell a Gift Card
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="w-full  rounded-2xl flex items-center justify-center">
              <Image
                src="/images/cat2.png"
                alt="Sign up with Cardgoal"
                width={280}
                height={0}
                className="h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

