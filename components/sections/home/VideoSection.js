'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false)
  const videoId = 'NLs6-TxrALA'
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  return (
    <section className="py-20 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold theme-dark-text mb-4">
          Cardgoal Charity
        </h2>
        <p className="text-lg md:text-xl text-gray-600 my-12 max-w-24xl mx-auto">
          Cardgoal Charity is built on the belief that growth should benefit both people and communities. Gift Health is Cardgoal's first initiative, created to support children battling malnutrition through structured nutrition and care.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


        <div className="relative w-full aspect-video bg-gray-900 overflow-hidden shadow-2xl">
          {!showVideo ? (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <Image
                src={`/images/videoThumbnail.png`}
                alt="Video Thumbnail"
                fill
                className="object-cover"
                unoptimized
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-10 h-10 text-black ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={videoUrl}
              title="Cardgoal Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  )
}

