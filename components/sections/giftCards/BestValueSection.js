'use client'

import Image from 'next/image'

export default function BestValueSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-semibold theme-dark-text text-center mb-12">
          Tips for the Getting the Best Value When Trading Gift Cards in Nigeria
        </h2>

        <div className="flex overflow-x-auto gap-6 scroll-smooth">

          {[
            { img: '/images/coin.png', title: 'Check Rates Regularly', text: 'Gift card rates fluctuate depending on demand, currency exchange, and card type. Sell gift cards on Cardgoal when rates are high and get the maximum value each time.' },
            { img: '/images/search.png', title: 'Avoid Common Mistakes', text: 'Double-check the card details before selling gift cards. Entering the wrong PIN or card value can delay payment or even result in rejection.' },
            { img: '/images/card_safe_new.png', title: 'Keep Your Cards Safe', text: 'Keep your codes private and never share them publicly. Treat your cards like cash to avoid any risk of losing value.' },
            { img: '/images/star.png', title: 'Use Trade & Referral Rewards', text: 'Every trade on Cardgoal can unlock extra rewards, and referring friends earns you 500 Naira per referral. Combine these perks to boost the overall cash you earn from selling your gift cards.' },
            { img: '/images/daily_coin.png', title: 'Daily Coins for Extra Cash', text: 'Dont forget to collect your daily coins. These can be converted into cash and added to your gift cards trade value, giving you more for every card sold.' },
            { img: '/images/multiple_feature.png', title: 'Combine Multiple Features', text: 'Cardgoal offers an all-in-one experience with gift card trading, airtime/data top-ups, and soon bill payments, Use the app fully to maximize rewards.' },
          ].map((item, index) => (
            <div
              key={index}
             className="
  w-full
  sm:w-1/2
  lg:w-1/4
  flex-shrink-0
  bg-[#f9fafb]
  p-4
  text-center
  rounded-lg
"

            >
              <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <Image src={item.img} alt="" width={50} height={50} />
              </div>

              <h3 className="text-lg font-semibold text-[#1a1d1b] mb-3">
                {item.title}
              </h3>

              <p className="text-[#7f827f] text-sm">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
