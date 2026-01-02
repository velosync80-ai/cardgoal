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
            <p className="text-gray-600 text-lg font-semibold mb-6">
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
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sell Gift Cards</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Airtime</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Data</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Bill Payments</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="mailto:service@cardgoal.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  service@cardgoal.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.947 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-1.3-.47-2.48-1.3-3.35-.5-.44-1.12-.79-1.75-1.03-.19-.07-.38-.13-.58-.19-.01-.02-.01-.04-.02-.05z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
        <div className="text-center text-gray-600 mt-8">
          <p>© 2025 Cardgoal</p>
        </div>
      </div>
    </footer>
  )
}
