import Navbar from '@/components/sections/home/Navbar'
import Footer from '@/components/sections/home/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Cardgoal Gift Card Trading App',
  description: 'Read Cardgoals terms and conditions to understand your rights, responsibilities, and guidelines for using our gift card platform',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl text-center font-bold mb-12">
          <span className="text-[#222423]">Terms of </span>
          <span className="text-[#0ACC5A]">Service</span>
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">1. Introduction</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            Cardgoal (the "App") is a gift-card redemption service operated by Fire Star Ltd. ("Cardgoal", "we", "us", or "our"). These Terms of Service ("Terms") govern your use of our website cardgoal.com and the App (collectively, the "Service"). By opening an account or placing an order you accept and agree to these Terms and to our Privacy Policy. If you do not agree, please stop using the Service.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">2. Acceptance & Modification of Terms</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">2.1 Acceptance</h3>
            <p className="text-[#222423] leading-relaxed">
              By creating an Account, accessing, or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">2.2 Modification</h3>
            <p className="text-[#222423] leading-relaxed">
              We may amend these Terms periodically. Material changes will appear in-App and on our website at least 14 days before they take effect, unless an earlier effective date is required by law. Your continued use of the Service after any notice period constitutes acceptance of the revised Terms.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">3. Definitions</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left text-[#222423] font-semibold">Term</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-[#222423] font-semibold">Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423] font-medium">Gift Card</td>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423]">
                    A third-party stored-value card or digital code submitted to Cardgoal for cash.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-[#222423] font-medium">Order</td>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423]">
                    A request to exchange one or more Gift Cards for Nigerian Naira (₦).
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423] font-medium">Rate-Booster Coupon (“Coupon”)</td>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423]">
                    A single-use digital voucher that unlocks a better exchange rate when the Order meets its stated minimum value.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-[#222423] font-medium">Rate-Lock Period</td>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423]">
                    The 15-minute window after you tap Start Trade during which the quoted rate is held.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423] font-medium">Payout</td>
                  <td className="border border-gray-300 px-4 py-3 text-[#222423]">
                    Transfer of approved Order proceeds to your nominated Nigerian bank account or supported wallet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">4. Eligibility & Account Security</h2>
          <ul className="list-disc list-inside space-y-2 text-[#222423]">
            <li>You must be 18 years or older (or the age of majority in your jurisdiction, if higher).</li>
            <li>Provide accurate, current information and keep it up to date.</li>
            <li>Keep your credentials confidential; you are responsible for activity on your account.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">5. Prohibited Use</h2>
          <p className="text-[#222423] leading-relaxed mb-2">
            You may not use the Service to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#222423] mb-4">
            <li>Sell stolen, counterfeit, altered, or otherwise invalid Gift Cards.</li>
            <li>Launder money, finance terrorism, defraud others, or violate any law.</li>
            <li>Promote pyramid, Ponzi, or "get-rich-quick" schemes.</li>
            <li>Interfere with the Service, attempt unauthorised access, or distribute malware.</li>
            <li>Infringe intellectual-property or privacy rights.</li>
          </ul>
          <p className="text-[#222423] leading-relaxed">
            We may suspend or close accounts engaged in prohibited activity without notice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">6. How to Trade Gift Cards</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">6.1 Quote Creation</h3>
            <ul className="list-disc list-inside space-y-2 text-[#222423]">
              <li>Select the card brand, card type (Physical or E-code), settlement currency, and face value.</li>
              <li>A live, personalised quote appears. Headline rates on the home screen are indicative only.</li>
            </ul>

          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">6.2 Applying Rate-Booster Coupons</h3>
            <ul className="list-disc list-inside space-y-2 text-[#222423]">
              <li>If the Order meets a Coupon's minimum value, you can apply the Coupon to secure the higher rate.</li>
              <li>Coupons are single-use, non-transferable, have no cash value, and are issued through new-user rewards or promotional campaigns.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">6.3 Starting the Trade</h3>

            <ul className="list-disc list-inside space-y-2 text-[#222423]">
              <li> Tap Start Trade to lock the quoted rate for fifteen (15) minutes (Rate-Lock Period).</li>
              <li> You warrant that all information and uploads are accurate and that you are the lawful holder of the Gift Card(s).</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">6.4 Verification Timing</h3>
            <ul className="list-disc list-inside space-y-2 text-[#222423]">
              <li> Standard cards: usually verified within five (5) minutes.</li>
              <li>Additional review: cards requiring issuer confirmation or manual checks may take up to thirty (30) minutes, and—on rare occasions—longer.</li>
              <li>   If verification cannot be completed within the Rate-Lock Period, we may cancel the Order or ask you to obtain a new quote.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">6.5 Payout Timing & Service Credit</h3>

            <ul className="list-disc list-inside space-y-2 text-[#222423]">
              <li> Upon approval, payout is instructed immediately.</li>
              <li> Funds usually reach your Nigerian bank account or wallet within thirty (30) minutes.</li>
              <li>Final settlement depends on external banking networks. Operational issues at Nigerian banks can delay receipt to later the same day, and—in exceptional cases—up to several weeks.</li>
              <li>Service credit: if payout has not been confirmed one (1) hour after we initiate it, the system will automatically issue a one-time ₦200 Rate-Booster Coupon to the affected account. The coupon is single-use, non-transferable, valid for 30 days, and cannot be exchanged for cash.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">6.6 Order Rejection</h3>
            <p className="text-[#222423] leading-relaxed mb-2">
              An Order is rejected—and, where feasible, the Gift Card returned—if verification shows that the:
            </p>

            <ul className="list-disc list-inside space-y-2 pb-4 text-[#222423]">
              <li>upload is not a gift card (unrelated images/documents).</li>
              <li>card has already been redeemed or the balance is zero.</li>
              <li>card is reported stolen, locked, or otherwise invalid by the issuer.</li>
              <li>details provided do not match a valid card brand or denomination.</li>
            </ul>
            <p className="text-[#222423] leading-relaxed mb-2">
              You will receive a concise notice such as:
            </p>
            <p className="text-[#222423] leading-relaxed mb-2">
              "Dear Customer, the details provided do not match a valid gift card. Please double-check and try again."
            </p>
            <p className="text-[#222423] leading-relaxed">
              "Dear Customer, this gift card has already been redeemed. You may verify its status with the issuer."
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">7. Fees</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">7.1 Embedded Fee</h3>
            <p className="text-[#222423] leading-relaxed">
              The service fee is incorporated into each live exchange rate. You will always see the net rate before submitting an Order.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">7.2 No Hidden Charges</h3>
            <p className="text-[#222423] leading-relaxed">
              Cardgoal does not add withdrawal, transfer, or "handling" fees beyond the quoted rate.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">8. No Advice</h2>
          <p className="text-[#222423] leading-relaxed">
            All information provided through the Service is general in nature and does not constitute financial, tax, legal, or investment advice. You are solely responsible for your trading decisions and for any taxes arising from your activity.
          </p>

        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">9. Risk, Liability, and Disclaimers</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">9.1 As-Is Service</h3>
            <p className="text-[#222423] leading-relaxed">
              The Service is provided "as is" and "as available", without warranties of any kind.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">9.2 Limitation of Liability</h3>
            <p className="text-[#222423] leading-relaxed">
              To the fullest extent permitted by law, Cardgoal and its affiliates are not liable for any indirect, incidental, special, punitive, or consequential damages—including lost profits, data, or business opportunity. Cardgoal's aggregate liability for any Order is capped at the face value of the Gift Card(s) involved.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">9.3 User-Assumed Risks</h3>
            <p className="text-[#222423] leading-relaxed">
              You acknowledge that digital transfers are subject to issuer restrictions, banking-network outages, and other third-party failures that may delay settlement—even for several weeks in exceptional cases.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">10. Anti-Money-Laundering and Compliance</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">10.1 Legal Framework</h3>
            <p className="text-[#222423] leading-relaxed">
              Cardgoal adheres to the Money Laundering (Prevention & Prohibition) Act 2022, the Terrorism (Prevention & Prohibition) Act 2022, all Central Bank of Nigeria (CBN) AML/CFT Regulations, and relevant Financial Action Task Force (FATF) standards.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">10.2 Programme Oversight</h3>
            <p className="text-[#222423] leading-relaxed">
              A designated Compliance Officer oversees risk assessment, employee training, record-keeping, and periodic independent audits.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">10.3 Monitoring & Reporting</h3>
            <p className="text-[#222423] leading-relaxed">
              All transactions are screened for suspicious activity; statutory reports are filed with the Nigerian Financial Intelligence Unit and other regulators as required.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">11. Privacy, Data Protection, and Retention</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">11.1 Privacy Policy</h3>
            <p className="text-[#222423] leading-relaxed">
              Our Privacy Policy (https://cardgoal.com/privacy) explains how we collect, use, and share personal data.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">11.2 Retention</h3>
            <p className="text-[#222423] leading-relaxed">
              Transaction and verification records are stored for the period mandated by Nigerian law—currently at least five (5) years—after which they are securely deleted or anonymised.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">11.3 Security Measures</h3>
            <p className="text-[#222423] leading-relaxed">
              We protect personal data with encryption in transit and at rest, strict access controls, routine penetration testing, and incident-response procedures.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">11.4 Your Rights</h3>
            <p className="text-[#222423] leading-relaxed">
              Subject to the Nigeria Data Protection Act 2023, you may request access to, or deletion of, your data via Service@cardgoal.com.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">12. Intellectual Property and Licence</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">12.1 Ownership</h3>
            <p className="text-[#222423] leading-relaxed">
              All software, text, graphics, logos, and other content in the Service belong to Cardgoal or its licensors and are protected by intellectual-property laws.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">12.2 Limited Licence</h3>
            <p className="text-[#222423] leading-relaxed">
              Cardgoal grants you a non-exclusive, non-transferable, revocable licence to access and use the Service for personal or internal business purposes, subject to these Terms. No other rights are granted.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">13. Account Suspension & Termination</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">13.1 Grounds</h3>
            <p className="text-[#222423] leading-relaxed">
              We may suspend or terminate your account immediately if you breach these Terms, engage in prohibited activity, fail KYC/AML checks, or if required by law or a regulatory authority.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">13.2 Notice</h3>
            <p className="text-[#222423] leading-relaxed">
              Where legally permitted, we will inform you of the reason and any steps needed to restore access.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">13.3 Effect</h3>
            <p className="text-[#222423] leading-relaxed">
              All locked or pending Orders may be cancelled. Any lawful balance will be paid out once outstanding checks are complete.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">14. Dispute Resolution</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">14.1 Primary Contact</h3>
            <p className="text-[#222423] leading-relaxed">
              Please first contact our in-App support or email <Link href={"service@cardgoal.com"} className='text-blue-600'>service@cardgoal.com</Link>.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">14.2 Informal Resolution</h3>
            <p className="text-[#222423] leading-relaxed">
              We aim to settle concerns within fifteen (15) business days.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">14.3 Mediation</h3>
            <p className="text-[#222423] leading-relaxed">
              Unresolved issues may be referred to the Lagos Multi-Door Courthouse for mediation.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#222423] mb-3">14.4 Arbitration</h3>
            <p className="text-[#222423] leading-relaxed">
              If mediation fails, disputes are resolved by binding arbitration in Lagos under the Arbitration & Mediation Act 2023. Proceedings are individual, not class actions. The arbitral award may be entered in any court of competent jurisdiction.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">15. Force Majeure</h2>
          <p className="text-[#222423] leading-relaxed">
            Neither party is liable for delay or failure caused by events beyond reasonable control, including natural disasters, civil unrest, acts of government, power or internet outages, or banking-network failures.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">16. Governing Law</h2>
          <p className="text-[#222423] leading-relaxed">
            These Terms are governed by, and construed in accordance with, the laws of the Federal Republic of Nigeria. Nigerian courts have exclusive jurisdiction unless a dispute is referred to arbitration under Section 14.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">16. Governing Law</h2>
          <p className="text-[#222423] leading-relaxed">

          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">17. Ownership Statement</h2>
          <p className="text-[#222423] leading-relaxed">
            <span className='font-bold'>Cardgoal</span> and <span className='font-bold'>CardgoalPlus</span> are part of the same service ecosystem. Both applications are products of the same firm, and by using either application, you acknowledge that they are governed by this single set of Terms and Conditions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">18. Tax / Financial Advise</h2>
          <p className="text-[#222423] leading-relaxed mb-4">
            No information provided on the Platform, the Blog, through your Account, or by any employee, agent, or affiliate of Cardgoal constitutes financial, investment, or other professional advice. Any decision to store, purchase, or sell digital currency is entirely your own responsibility and must consider your personal risk tolerance and financial situation.
          </p>

          <p className="text-[#222423] leading-relaxed">
            You are solely responsible for determining if any taxes apply to transactions conducted through your Cardgoal Account and for calculating the amount of such taxes. You are also solely responsible for withholding, collecting, reporting, and remitting the correct tax amounts to the appropriate tax authorities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#222423] mb-4">19. Contact</h2>
          <p className="text-[#222423] leading-relaxed">
            If you have questions, concerns, or requests regarding this Terms of Service, please contact us at:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#222423]">
            <li>You must be 18 years or older (or the age of majority in your jurisdiction, if higher).</li>
            <li>Email: <Link href={"service@cardgoal.com"} className='text-blue-600'>service@cardgoal.com</Link></li>
            <li>Website: <Link href={"https://cardgoal.com"} className='text-blue-600'>https://cardgoal.com</Link></li>
          </ul>
        </section>


      </div>

      <Footer />
    </div>
  )
}

