'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturesSection() {
  return (
    <section className="">

      <div className="mx-auto space-y-12" >
        <h2 className="text-4xl md:text-5xl font-bold text-center theme-dark-text mb-2">Explore What Cardgoal offers</h2>
        <div className="mx-auto space-y-12">

          <div
            className="bg-[#242346] p-8 md:p-12 min-h-[450px] flex  justify-center
               bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/bg2.png')" }}
          >
            <div className="text-center max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Gift Card Trading
              </h2>

              <p className="text-white text-lg md:text-xl font-normal mb-8 leading-relaxed">
                Sell your unused gift cards for instant cash at the best rates.
              </p>
              <Link
                href="https://app.cardgoal.com/?name=/sell&id=102"
                className="bg-green-500 text-white px-8 py-3 rounded font-semibold transition-all shadow-lg" >
                Learn more
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-[#f9fafb] rounded-2xl p-8 py-20 transition-all overflow-hidden">
            <h2 className="text-3xl md:text-3xl font-bold text-center text-gray-900 mb-4">
              Airtime & Data
            </h2>

            <p className="text-gray-700 text-bas lg:text-lg xl:text-xl text-center leading-relaxed max-w-xl mx-auto mb-8">
              Recharge your line in seconds with fast airtime and data top-ups.
            </p>

            <Image
              src="/images/bottomCorner.png"
              alt="20+ Types of Gift Cards Available"
              width={48}
              height={48}
              unoptimized
              className="absolute bottom-0 right-0 w-48 opacity-90"
            />
            <Image
              src="/images/mobile.png"
              alt="20+ Types of Gift Cards Available"
              width={60}
              height={60}
              unoptimized
              className="absolute bottom-5 right-10  z-10"
            />

          </div>
          <div className="relative bg-[#f9fafb] rounded-2xl p-8 py-20 transition-all overflow-hidden">
            <h2 className="text-3xl md:text-3xl font-bold text-center text-gray-900 mb-4">
              Bill Payments
            </h2>

            <p className="text-gray-700 text-base lg:text-lg xl:text-xl text-center leading-relaxed max-w-xl mx-auto mb-8">
              Settle your TV, cable, and electricity bills quickly, all in one place.
            </p>

            <Image
              src="/images/bottomCorner.png"
              alt="20+ Types of Gift Cards Available"
              width={48}
              height={48}
              unoptimized
              className="absolute bottom-0 right-0 w-48 opacity-90"
            />
            <Image
              src="/images/billIcon.png"
              alt="20+ Types of Gift Cards Available"
              width={75}
              height={70}
              unoptimized
              className="absolute bottom-5 right-10  z-10"
            />

          </div>
        </div>
      </div>
    </section>
  )
}
