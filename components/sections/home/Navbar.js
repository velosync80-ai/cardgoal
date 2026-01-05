'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `font-medium transition-colors ${pathname === path
      ? "text-green-500"
      : "text-gray-900 hover:text-green-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">


          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-[140px] h-10 flex items-center">
              <Link href="/" className="inline-block">
                <Image
                  src={logo}
                  alt="cardgoal logo"
                  width={100}
                  height={40}
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-20">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/gift-cards" className={linkClass("/gift-cards")}>Gift Cards</Link>
            <Link href="http://localhost:3001" className={linkClass("/blog")}>Blog</Link>
          </div>

          <Link 
            href="https://app.cardgoal.com/?name=/sell&id=102" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold transition-colors whitespace-nowrap"
            onClick={() => trackEvent('click_get_app_header', 'CTA Click', 'Homepage - Header')}
          >
            Get the App
          </Link>

        </div>
      </div>
    </nav>
  );
}
