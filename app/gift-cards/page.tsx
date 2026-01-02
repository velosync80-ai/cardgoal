import Navbar from '@/components/sections/home/Navbar'
import Footer from '@/components/sections/home/Footer' 
import HeroSection from '@/components/sections/giftCards/HeroSection'
import BestAppSellSection from '@/components/sections/giftCards/BestAppSellSection'
import ThreeEasyStepsSection from '@/components/sections/giftCards/ThreeEasyStepsSection'
import FaqSection from '@/components/sections/giftCards/FaqSection'
import ReadytoSellYourGiftSection from '@/components/sections/giftCards/ReadytoSellYourGiftSection'
import BestValueSection from '@/components/sections/giftCards/BestValueSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sell Gift Cards Online in Nigeria | Best App to Trade Gift Cards | Cardgoal',
  description: 'Sell gift cards online instantly with Cardgoal. Top rates & fast payouts. Get the best app to trade gift cards now to enjoy a N1000 cash + N2000 coupon pack,',
}

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ThreeEasyStepsSection />
      <BestAppSellSection />
      <BestValueSection />
      <FaqSection />
      <ReadytoSellYourGiftSection />
      <Footer />ß
    </div>
  )
}

