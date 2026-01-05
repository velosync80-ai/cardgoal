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

      <div className="max-w-7xl h-90 md:h-80 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div className="text-white">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Get the best value for your gift cards
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed text-white/80">
              Cardgoal offers you the fastest way to sell your gift cards for instant cash at the best value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://app.cardgoal.com/?name=/sell&id=102"
                className="theme-dark-bg text-xl md:text-xl text-white px-4 py-2 rounded Lexend-Medium inline-block transition-colors"
                onClick={() => trackEvent('click_download_app_hero', 'CTA Click', 'Homepage - Hero Banner')}
              >
                Download App
              </Link>
              {/* <button className="bg-gray-900 hover:bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded flex items-center justify-center gap-3 transition-all shadow-lg border border-white/20">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentcolor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white">GET IT ON</div>
                  <div className="text-xl text-white font-semibold">Google Play</div>
                </div>
              </button>
              <button className="bg-gray-900 hover:bg-black/40 backdrop-blur-sm text-white px-4  py-2 rounded flex items-center justify-center gap-3 transition-all shadow-lg border border-white/20">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentcolor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white">Download on the</div>
                  <div className="text-xl text-white font-semibold">App Store</div>
                </div>
              </button> */}
              {/* <Image
            src="/images/google.svg"
            alt="Cardgoal App Phone 1"
            width={200}
            height={0}
            className=" h-auto max-w-full"
            unoptimized
          />
           <Image
            src="/images/apple.svg"
            alt="Cardgoal App Phone 1"
            width={200}
            height={0}
            className=" h-full max-w-full"
            unoptimized
          /> */}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-full  rounded-2xl flex items-center justify-center">
              <Image
                src="/images/cat.png"
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

