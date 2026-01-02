import Navbar from '@/components/sections/home/Navbar'
import HeroSection from '@/components/sections/home/HeroSection'
import StatsSection from '@/components/sections/home/StatsSection'
import FeaturesSection from '@/components/sections/home/FeaturesSection'
import VideoSection from '@/components/sections/home/VideoSection'
import RewardsSection from '@/components/sections/home/RewardsSection'
import ReviewsSection from '@/components/sections/home/ReviewsSection'
import DownloadSection from '@/components/sections/home/DownloadSection'
import Footer from '@/components/sections/home/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All-in-One App to Trade Gift Cards & Pay Bills | Cardgoal',
  description: 'Trade gift cards, recharge airtime, buy data, and pay bills instantly with Cardgoal. A fast, secure, and rewarding all-in-one digital app.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <RewardsSection />
      <VideoSection />
      <ReviewsSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
