import Link from 'next/link'
import { DrupalResource } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight, FileText } from 'lucide-react'

interface ResourceCardProps {
  item: DrupalResource
}

function normalizeTermText(value: any): string {
  if (!value) return ''
  if (Array.isArray(value)) {
    return value
      .map((entry) => (typeof entry === 'string' ? entry : entry?.name || entry?.title || entry?.id || ''))
      .filter(Boolean)
      .join(', ')
  }
  if (typeof value === 'object') {
    return value.name || value.title || value.id || ''
  }
  return String(value)
}

export default function ResourceCard({ item }: ResourceCardProps) {
  const resourceTopic = normalizeTermText((item as any).resourceTopic)

  return (
    <Link
      href={item.path || '#'}
      className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-emerald-300 transition-all duration-200"
    >
      {(item as any).image?.url ? (
        <div className="relative h-40 rounded-md overflow-hidden mb-4 bg-slate-100">
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        </div>
      ) : (
        <div className="h-40 rounded-md mb-4 bg-slate-50 border border-slate-100 flex items-center justify-center">
          <FileText className="w-10 h-10 text-slate-300" />
        </div>
      )}

      <div>
        {resourceTopic && (
          <span className="inline-block text-xs font-semibold text-emerald-600 tracking-wider uppercase mb-2">
            {resourceTopic}
          </span>
        )}

        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).authorName && (
          <p className="text-xs text-slate-400 mb-2">
            By <span className="font-medium text-slate-500">{(item as any).authorName}</span>
          </p>
        )}

        {(item as any).body?.processed && (
          <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
          Read more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
