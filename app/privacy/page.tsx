import Navbar from '@/components/sections/home/Navbar'
import Footer from '@/components/sections/home/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cardgoal Gift Card Trading App',
  description: 'Learn how Cardgoal collects, uses, and protects your personal information while you use our gift card trading platform safely',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl text-center font-bold mb-12">
          <span className="text-[#222423]">Privacy </span>
          <span className="text-[#0ACC5A]">Policy</span>
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">1. Introduction</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            Cardgoal ("we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our mobile application or visit our website (together, the "Service").
          </p>
          <p className="text-[#222423] leading-relaxed mb-4">
            We encourage you to read this policy carefully to understand your rights and how we handle your information. By using the Service, you agree to the practices described in this policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">2. Information We Collect</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">a. Information You Provide</h3>
            <p className="text-[#222423] leading-relaxed mb-2">
              When you use our services—such as creating an account, submitting a trade, or completing identity verification (KYC)—you may provide the following personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#222423]">
              <li>Full name, email address, and phone number</li>
              <li>Bank account details (for withdrawals)</li>
              <li>Gift card codes or Image</li>
              <li>Government-issued ID and selfie (where required for KYC)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">b. Automatically Collected Non-Personal Information</h3>
            <p className="text-[#222423] leading-relaxed mb-2">
              We also automatically collect non-personal data when you interact with our Service, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#222423]">
              <li>Device information (model, OS version, language)</li>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Network provider</li>
              <li>App usage data</li>
              <li>Referral and install sources</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">c. Analytics via Adjust SDK</h3>
            <p className="text-[#222423] leading-relaxed mb-2">
              We use Adjust, a third-party analytics SDK, to track app usage and measure marketing effectiveness. Adjust collects:
            </p>
            <ul className="list-disc list-inside space-y-2 pb-4 text-[#222423]">
              <li>Google Advertising ID (GAID) or Apple IDFA</li>
              <li>Anonymized IP address</li>
              <li>Device type and OS version</li>
              <li>App events and user interactions</li>
              <li>Install and referral sources</li>
            </ul>
            <p className="text-[#222423] leading-relaxed mb-2">
              Adjust ensures that the data is anonymized and does not contain personally identifiable information (PII). For more details, see <Link href={"Adjust's Privacy Policy"} className='text-blue-600'>Adjust's Privacy Policy</Link>.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">2. How We Use Your Information</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 pb-4 text-[#222423]">
            <li>Process your trades – Verify gift cards, execute payouts, and manage your account.</li>
            <li>Comply with legal obligations – Perform KYC, detect fraud, and meet Nigerian AML/CTF regulations.</li>
            <li>Improve and personalize your experience – Resolve crashes, monitor feature usage, save preferences, and suggest tailored Rate-Booster Coupons.</li>
            <li>Communicate with you – Deliver service alerts, important updates, and (with your consent) promotional messages.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">3. Legal Basis</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            We process your data based on one or more of the following legal grounds under the Nigeria Data Protection Act 2023 (NDPA):
          </p>
          <ul className="list-disc list-inside space-y-2 pb-4 text-[#222423]">
            <li>Performance of a contract.</li>
            <li>Compliance with legal obligations</li>
            <li>Our legitimate interests</li>
            <li>Your explicit consent</li>
          </ul>
          <p className="text-[#222423] leading-relaxed mb-2">
            We do not sell your personal data. Data is shared only with trusted providers or regulators when required by law.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">4. Permissions We Request</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            To provide core functionality, our app may request access to the following device permissions:
          </p>
          <ul className="list-disc list-inside space-y-2 pb-4 text-[#222423]">
            <li>Camera – To capture images of gift cards or identification documents for trades or verification.</li>
            <li>Photo Library – To allow users to upload existing images of gift cards or documents.</li>
            <li>Push Notifications – To inform you about order status, withdrawal updates, customer support replies, and optional promotional content.</li>
          </ul>
          <p className="text-[#222423] leading-relaxed mb-4">
            You will be prompted to grant or deny each permission. You may also adjust these settings later via your device's system preferences. Denying permission may limit related features but will not block overall access to the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">5. Sharing & Disclosures</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            We may share your data with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#222423]">
            <li>Service Providers – Including cloud hosting and secure payment processors</li>
            <li>Financial Institutions – Such as settlement banks and card issuers</li>
            <li>Transaction Counterparties – Where needed to resolve a trade-related dispute</li>
            <li>Regulators or Law Enforcement – As mandated under AML/CTF laws, court orders, or NDPA obligations</li>
            <li>Corporate Events – In the context of mergers, acquisitions, or asset transfers (subject to confidentiality agreements)</li>
          </ul>
          <p className="text-[#222423] leading-relaxed mt-4">
            We do not sell or share your personal data with third-party advertisers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">6. Cookies & Tracking</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            Our website does not use cookies or track visitors. Within the mobile app, we use the Adjust SDK for analytics and install attribution only. No cookies are stored or accessed.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">7. Data Security & Retention</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            We take your data security seriously and implement strong security measures to protect your personal information. These measures include:
          </p>
          <ul className="list-disc list-inside space-y-2 pb-4 text-[#222423]">
            <li>Data Encryption – All user data is encrypted during storage and transmission.</li>
            <li>Access Control – Only authorized personnel can access sensitive data through role-based access controls.</li>
            <li>Security Monitoring – We regularly monitor our systems for potential threats to data security.</li>
          </ul>
          <p className="text-[#222423] leading-relaxed mb-4">
            In compliance with regulations, transaction and KYC records are stored for at least five (5) years. After this period, the records are securely deleted or anonymized.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">8. Your Rights (NDPA 2023)</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            You may:
          </p>
          <ul className="list-disc list-inside space-y-2 pb-4 text-[#222423]">
            <li>Access, correct, erase, restrict, or port your data</li>
            <li>Object to certain processing or withdraw consent</li>
            <li>File a complaint with the Nigeria Data Protection Commission</li>
          </ul>
          <p className="text-[#222423] leading-relaxed mb-4">
            To exercise your rights, email us at <Link href="mailto:service@cardgoal.com" className='text-blue-600'>service@cardgoal.com</Link>, we will respond to verified requests within 30 days.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">9. Children</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            The Service is not directed to persons under 18 years. We do not knowingly collect data from minors. Parents may request deletion via the contact address below.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">10. International Transfers</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            Data may be processed in Nigeria or other jurisdictions. Where data leaves Nigeria, we rely on adequacy decisions, Standard Contractual Clauses, or other lawful transfer mechanisms recognised by the NDPA 2023.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">11. Updates</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            We may revise this Policy. Material changes will be announced in-App and on our website 14 days before they take effect, unless a shorter period is required by law.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">12. Contact</h2>
          <p className="text-[#222423] leading-relaxed">
            If you have questions, concerns, or requests regarding this Terms of Service, please contact us at:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#222423]">
            <li>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</li>
            <li>Email: <Link href="mailto:service@cardgoal.com" className='text-blue-600'>service@cardgoal.com</Link></li>
            <li>Website: <Link href={"https://cardgoal.com"} className='text-blue-600'>https://cardgoal.com</Link></li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  )
}

