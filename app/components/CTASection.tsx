'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Ready to Take Control of Your Finances?'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Schedule a Consultation'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        {description ? (
          <div className="text-slate-300 mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our experienced team of CPAs help you navigate your financial future with confidence. Contact us today for a complimentary initial consultation.
          </p>
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors font-semibold"
          >
            {primaryLabel}
          </a>
          <a
            href="/services"
            className="px-8 py-3 border border-slate-500 text-slate-200 rounded-lg hover:bg-slate-700 transition-colors font-semibold"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
