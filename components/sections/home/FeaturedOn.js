'use client'

export default function FeaturedOn() {
  const featuredLogos = [
    { name: 'Latest Nigerian News' },
    { name: 'Naija Tech Guide' },
    { name: 'Independent' },
    { name: 'PUNCH' },
    { name: 'Business Day' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            FEATURED ON:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {featuredLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 px-6"
              >
                <span className="text-gray-600 font-semibold text-lg hover:text-gray-900 transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

