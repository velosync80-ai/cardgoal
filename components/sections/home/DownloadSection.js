'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function DownloadSection() {
  return (
    <section className="bg-green-500 py-5 pb-0">
      <div className="max-w-7xl mx-auto px-4 pb-5 md:pb-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
              Download Cardgoal App
            </h2>
            <p className="text-xl md:text-xl text-white/90 mb-10">
              Install the app today and enjoy your 300 Naira Welcome Bonus.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pb-4">
              <Link
                href="https://app.cardgoal.com/?name=/sell&id=102"
                className="theme-dark-bg text-white px-4 py-3 rounded font-semibold inline-block transition-colors"
                onClick={() => trackEvent('click_get_started_bottom', 'CTA Click', 'Homepage - Bottom Banner')} >
                Get Started
              </Link>

            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-full flex items-center justify-center">
              <Image
                src="/images/showcase_image.png"
                alt="Sign up with Cardgoal"
                width={400}
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

