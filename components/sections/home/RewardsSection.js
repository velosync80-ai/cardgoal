'use client'

import Image from 'next/image'

export default function RewardsSection() {
  const rewards = [
    {
      icon: "/images/refer_earn.png",
      title: 'Refer & Earn',
      with: 90,
      description: 'Invite friends to Cardgoal and earn ₦500 for each successful referral. Share the love, get rewarded!'
    },
    {
      icon: "/images/daily_rewards.png",
      title: 'Daily Rewards',
      with: 80,
      description: 'Collect daily coins just by checking in. Turn your streak into real cash with ease.'
    },
    {
      icon: "/images/trade_rewards.png",
      title: 'Trade Rewards',
      with: 80,
      description: 'Unlocks exclusive rewards with every gift card you sell. The more you trade, the more you earn.'
    }
  ]

  return (
    <section
      className="py-20 pb-5 pt-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg3.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold theme-dark-text text-center mb-10">
          Rewards That Keep Coming
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={reward.icon}
                  alt={reward.title}
                  width={reward.with}
                  height={80}
                  unoptimized
                  className="z-10"
                />
              </div>


              <h3 className="text-2xl font-bold theme-dark-text text-center mb-4">
                {reward.title}
              </h3>

              <p className="theme-dark-text text-center leading-relaxed">
                {reward.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
