'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#fafafc] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">

          <div className="md:col-span-2">
            <div className="flex items-center mb-4 w-32  justify-center">
              <Image
                src="/images/logo.png"
                alt="Cardgoal Logo"
                width={128}
                height={128}
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-gray-900 text-base font-medium mb-6">
              An All-in-one Platform For Gift Cards & Bill Payments
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-[#28cc5a] hover:bg-black/40 backdrop-blur-sm text-white px-2 py-2 rounded flex items-center justify-center gap-2 transition-all shadow-lg border border-white/20">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentcolor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white">GET IT ON</div>
                  <div className="text-xl text-white font-semibold">Google Play</div>
                </div>
              </button>
              <button className="bg-[#28cc5a] hover:bg-black/40 backdrop-blur-sm text-white px-4  py-2 rounded flex items-center justify-center gap-2 transition-all shadow-lg border border-white/20">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentcolor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white">Download on the</div>
                  <div className="text-xl text-white font-semibold">App Store</div>
                </div>
              </button>
            </div> */}
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-500 hover:text-gray-900 hover:underline transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-gray-500 hover:underline transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-gray-500 hover:underline transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <Link href="/gift-cards" className="text-gray-500 hover:text-gray-900 transition-colors">Sell Gift Cards</Link>
              <li><a href="#" className="text-gray-500 hover:text-gray-500 hover:underline transition-colors"></a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-500 hover:underline transition-colors">Airtime</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-500 hover:underline transition-colors">Data</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-500 hover:underline transition-colors">Bill Payments</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="http://localhost:3001/" className="text-gray-500 hover:underline hover:text-gray-900 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4 w-full">Contact Us</h3>

            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  href="mailto:service@cardgoal.com"
                  className="text-gray-500 hover:text-gray-500 hover:underline transition-colors"
                >
                  Email:&nbsp;&nbsp;service@cardgoal.com
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/cardgoal_official/"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#FEF3F9] rounded-full hover:bg-pink-100 transition-colors"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="object-contain"
                  unoptimized
                />
              </Link>

              <Link
                href="https://www.facebook.com/cardgoal/"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#ECF3FF] rounded-full hover:bg-blue-100 transition-colors"
              >
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="object-contain"
                  unoptimized
                />
              </Link>

              <Link
                href="https://x.com/cardgoal"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#E3F2FD] rounded-full hover:bg-blue-200 transition-colors"
              >
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={22}
                  height={22}
                  className="object-contain"
                  unoptimized
                />
              </Link>

              <Link
                href="https://www.tiktok.com/@cardgoalapp"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#F2F2F2] rounded-full hover:bg-gray-200 transition-colors"
              >
                <Image
                  src="/images/tiktok.png"
                  alt="TikTok"
                  width={22}
                  height={22}
                  className="object-contain"
                  unoptimized
                />
              </Link>

              <Link
                href="https://www.youtube.com/@Cardgoal-official"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#F2F2F2] rounded-full hover:bg-red-100 transition-colors"
              >
                <Image
                  src="/images/youtube.png"
                  alt="YouTube"
                  width={22}
                  height={22}
                  className="object-contain"
                  unoptimized
                />
              </Link>
            </div>
          </div>


        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>© 2026 Cardgoal</p>
        </div>
      </div>
    </footer>
  )
}
