'use client'

import Image from 'next/image'
export default function BestAppSellSection() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg3.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="">
            <h2 className="text-3xl md:text-4xl Lexend-Medium theme-dark-text mb-12">
              Why is Cardgoal the Best App for Selling Gift Cards in Nigeria?
            </h2>
          </div>

          <div className="col-span-2">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center mb-4">
                  <Image
                    src="/images/top_rates.png"
                    alt="Cardgoal Logo"
                    width={25}
                    height={25}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold theme-dark-text mb-3">Top Rates Guaranteed</h3>
                <p className="text-gray-500">
                  Cardgoal constantly updates gift card rates in real-time to ensure you always get the best value while trading.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center mb-4">
                  <Image
                    src="/images/transections.png"
                    alt="Cardgoal Logo"
                    width={20}
                    height={20}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold theme-dark-text mb-3">Transactions in Under 60 Secs</h3>
                <p className="text-gray-500">
                  Every gift card trade is processed quickly and safely, with payments credited instantly to your Cardgoal account.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center mb-4">
                  <Image
                    src="/images/earn_more.png"
                    alt="Cardgoal Logo"
                    width={25}
                    height={25}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold theme-dark-text mb-3">Earn More with Each Transaction</h3>
                <p className="text-gray-500">
                  Beyond cash, Cardgoal offers exclusive rewards like Daily Rewards, Trade Rewards, and Refer & Earn opportunities.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center mb-4">
                  <Image
                    src="/images/user_friendly.png"
                    alt="Cardgoal Logo"
                    width={25}
                    height={25}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold theme-dark-text mb-3">User-Friendly Experience</h3>
                <p className="text-gray-500">
                  The app is designed for simplicity, allowing you to sell gift cards online with just a few taps, whether on Android or iOS.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

