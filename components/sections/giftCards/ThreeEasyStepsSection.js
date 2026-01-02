'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ThreeEasyStepsSection() {
  const steps = [
    {
      img: '/images/step1.png',
      title: 'Sign Up with Cardgoal',
      desc: 'Create your Cardgoal account or log in instantly using your Google or Apple ID.'
    },
    {
      img: '/images/step2.png',
      title: 'Provide Details',
      desc: 'Choose the gift card you want to sell, enter the card details, and start the trade.'
    },
    {
      img: '/images/step3.png',
      title: 'Cash Out Instantly',
      desc: 'Once your trade is confirmed, the payment is credited to your Cardgoal account immediately.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-5 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 text-center mb-3">
          Sell Gift Cards in 3 Easy Steps
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          The new Cardgoal app offers a simplified gift card trading process.
          Here’s how to sell gift cards online using Cardgoal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 ">

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-start gap-6">

              <Image
                src={step.img}
                alt={step.title}
                width={380}
                height={0}
                className="object-cover rounded-lg"
                priority
              />

              <div className="flex items-center w-full">
                <div className="w-10 h-10 rounded bg-[#f0fcf5] text-[#28cc5a] flex items-center justify-center font-bold z-10">
                  {i + 1}
                </div>
                {i < steps.length && (
                  <div className="flex-1 h-1 bg-[#f0fcf5] "></div>
                )}
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
              </div>

            </div>
          ))}

        </div>
        <div className="text-center mt-16">
          <Link
            href="#"
            className="bg-[#242344] hover:bg-gray-800 text-white px-8 py-3 rounded font-semibold inline-block transition-colors"
          >
            Start Trading
          </Link>
        </div>
      </div>
    </section>
  )
}
