'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedOn() {
  const featuredLogos = [
    {
      name: 'Naija Tech Guide',
      image: '/images/nigerian.png',
      url: 'https://play.google.com/store/apps/details?id=com.cardgoal.plus&hl=en',
      width: 160,
      height: 50,
    },
    {
      name: 'Latest Nigerian News',
      image: '/images/naja_tech.png',
      url: 'https://www.naijatechguide.com/how-to-share-data-with-your-friends-and-family-in-nigeria.html',
      width: 60,
      height: 45,
    },
    {
      name: 'Independent',
      image: '/images/independent.png',
      url: 'https://independent.ng/the-new-cardgoal-app-update-designed-with-you-in-mind/',
      width: 190,
      height: 50,
    },
    {
      name: 'PUNCH',
      image: '/images/punch.png',
      url: 'https://punchng.com/govt-backs-ngos-nutrition-programme-for-150-children/?amp=#amp_tf=From%20%251%24s&aoh=17642606594215&referrer=https%3A%2F%2Fwww.google.com',
      width: 80,
      height: 40,
    },
    {
      name: 'Business Day',
      image: '/images/bussiness_day.png',
      url: 'https://businessday.ng/news/article/lagos-hei-cardgoal-partner-on-nutrition-programme-for-children',
      width: 120,
      height: 55,
    },
  ]

  return (
    <section className="bg-white py-16 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:flex items-center justify-between">
       
        <div className="text-left ">
          <h3 className="text-lg font-semibold theme-dark-text uppercase tracking-wider">
            FEATURED ON
          </h3>
          <div className="w-12 h-1 bg-green-500 mt-2 rounded " />
        </div>
        <div className="flex items-center gap-8 md:gap-12  ">
          <div className="grid grid-cols-2 md:grid-cols-3  gap-0 lg:grid-cols-5 ">
          {featuredLogos.map((logo, index) => (
            <Link
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-10 lg:mt-0"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
        </div>


      </div>
    </section>
  )
}
