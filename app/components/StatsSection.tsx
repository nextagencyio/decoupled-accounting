'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const defaultStats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '2,500+', label: 'Clients Served' },
  { value: '99%', label: 'Client Retention' },
  { value: '$1.2B', label: 'Assets Managed' },
]

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {displayStats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="text-center px-8 md:px-12 py-6 md:py-0">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                {stat.value || stat.number || stat.statValue}
              </div>
              <div className="text-slate-500 mt-1 text-sm font-medium">
                {stat.label || stat.statLabel || stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
