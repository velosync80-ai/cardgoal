'use client'

import { useEffect, useRef, useState } from 'react'
import Image from "next/image";

export default function ReviewsSection() {
  const scrollContainerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 0.5
    const maxScroll = container.scrollWidth / 2

    const animate = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }

        container.scrollLeft = scrollPosition
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])
  const reviews = [
    {
      platform: 'Google Play',
      icon: (
        <Image
          src="/images/playIcon.png"
          width={20}
          height={80}
          unoptimized
          className="z-10"
        />
      ),
      username: 'Monday Ebidalu',
      date: 'Mar 26,2025',
      text: "I've been using Cardgoal for trading my gift cards for 3 years… They offer the highest rates, and payment is always fast and reliable… their support team is friendly and quick to help… I highly recommend Cardgoal."
    },
    {
      platform: 'Google Play',
      icon: (
        <Image
          src="/images/playIcon.png"
          width={20}
          height={80}
          unoptimized
          className="z-10"
        />
      ),
      username: 'Eddy58586',
      date: 'Jul 4,2025',
      text: "This is the best and trusted trading app… I have been trading with them since 2 years now, I have never experienced any issues with them… Trade your gift card with Cardgoal"
    },
    {
      platform: 'App Store',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
        </svg>
      ),
      username: 'Oghattrick',
      date: 'Apr 11,2025',
      text: "I love trading on this platform… it’s the best, fastest and safest platform to trade on gift cards…"
    },
    {
      platform: 'App Store',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
        </svg>
      ),
      username: 'Coba Immanuel',
      date: 'Dec 9,2025',
      text: "Very fast to trade and more faster to withdraw. With a very good rate. I recommend."
    },
    {
      platform: 'App Store',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
        </svg>
      ),
      username: 'Gentisoul',
      date: 'Nov 29,2025',
      text: "They're always available to assist on any issues and they're reliable. Great customer support."
    }
  ]

  const StarIcon = ({ filled }) => (
    <svg
      className={`w-8 h-8 ${filled ? 'text-[#f3b652]' : 'text-gray-600'}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-10">
          Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <Image
                  src="/images/playIcon.png"
                  width={30}
                  height={80}
                  unoptimized
                  className="z-10"
                />
              </div>
              <span className="text-white font-semibold text-lg">Google Play</span>
            </div>
            <div className="text-5xl font-semibold text-white mb-3">4.5</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= 5} />
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg">App Store</span>
            </div>
            <div className="text-5xl font-semibold text-white mb-3">4.5</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= 5} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">

        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 reviews-scroll-container"
            onWheel={(e) => {
              const container = e.currentTarget;
              container.scrollLeft += e.deltaY;
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
              e.preventDefault();
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] rounded-lg p-6 flex-shrink-0"
                style={{
                  width: 'calc((100% - 3rem) / 3)',
                  minWidth: '300px',
                  maxWidth: '400px'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-gray-900">
                    {review.icon}
                  </div>
                  <span className="text-gray-900 font-bold">{review.username}</span>
                  <span className="text-gray-400 ml-auto text-sm whitespace-nowrap">{review.date}</span>
                </div>
                <p className="text-gray-900 leading-relaxed text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

