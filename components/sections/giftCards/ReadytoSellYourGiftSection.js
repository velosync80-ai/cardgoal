'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ReadytoSellYourGiftSection() {
  return ( 
 <section
    className="py-20 bg-[#28cc5a] bg-center bg-no-repeat"
  >

      <div className="max-w-7xl h-80 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div className="text-white md:pt-20">
            <h2 className="text-5xl md:text-4xl font-bold mb-6 text-white lexend-bold">
              Ready to Sell Your Gift Card?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Install the Cardgoal app and experience the most rewarding gift card trades in Nigeria.
            </p>
            <Link
              href="https://app.cardgoal.com/?name=/sell&id=102"
              className="bg-gray-900 hover:bg-blue-800 text-white px-4 py-3 rounded font-semibold inline-block transition-colors"
            >
              Get the Cardgoal App
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="w-full  rounded-2xl flex items-center justify-center">
              <Image
                src="/images/mobile2.png"
                alt="Sign up with Cardgoal"
                width={300}
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

