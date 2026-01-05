'use client'
 
import Image from 'next/image'
export default function FaqSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-4">

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <h2 className="text-3xl md:text-4xl font-normal theme-dark-text">
              Frequently Asked 
              <span className="font-bold"> Questions</span>
            </h2>

            <div className="bg-[#28cc5a] text-white rounded-xl p-6 py-4 max-w-xl">
              <h3 className="font-bold mb-2">
               1. How do I sell gift cards on Cardgoal?
              </h3>
              <p className="text-sm">
                Selling gift cards on Cardgoal is simple. Just create an account, select the gift card you want to sell, enter the details, and cash out instantly. It's one of the easiest apps to trade gift cards in Nigeria.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">

            <div className="theme-dark-bg text-white rounded-xl p-6 py-4 max-w-xl self-start">
              <h3 className="font-bold mb-2">
               2. Is Cardgoal a legitimate site to sell gift cards?
              </h3>
              <p className="text-sm">
                Yes! Cardgoal is a secure and trusted platform where thousands of users sell gift cards daily. With real-time rates, fast payouts, and robust security, it's one of the most reliable ways to trade gift cards online.
              </p>
            </div>

            <div className="bg-[#28cc5a] text-white rounded-xl p-6 py-4  max-w-xl self-end">
              <h3 className="font-bold mb-2">
             3. What is the best app to sell gift cards in Nigeria?
              </h3>
              <p className="text-sm">
                Cardgoal is widely recognized as the best app for selling gift cards due to its simple interface, high rates, instant payouts, and additional rewards like referral bonuses and daily coins.
              </p>
            </div>

           <div className="theme-dark-bg text-white rounded-xl p-6 py-4 max-w-xl self-start relative">
           
            <div className="absolute -top-20 left-4 w-20 h-20  rounded-full flex items-center justify-center">
              <Image
                src="/images/cat3.png"  
                alt="Icon"
                width={80}
                height={80}
                className="object-contain hidden sm:block object-contai"
                unoptimized
              />
            </div>

            <h3 className="font-bold mb-2">
              4. What types of gift cards can I sell on Cardgoal?
            </h3>
            <p className="text-sm">
              You can sell a variety of gift cards, including Apple, Google Play, Steam, Razer Gold, Amazon, and many more. The platform constantly adds new cards based on user demand.
            </p>
          </div>


            <div className="bg-[#28cc5a] text-white rounded-xl p-6 py-4 max-w-xl self-end">
              <h3 className="font-bold mb-2">
              5. How quickly is the payout when I sell gift cards in Nigeria?
              </h3>
              <p className="text-sm">
                Payouts on Cardgoal are almost instant. Once your gift card details are verified, the cash is credited to your Cardgoal account and can be withdrawn immediately.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

