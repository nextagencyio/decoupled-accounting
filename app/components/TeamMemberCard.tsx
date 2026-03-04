import Link from 'next/link'
import { DrupalTeamMember } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight, User } from 'lucide-react'

interface TeamMemberCardProps {
  item: DrupalTeamMember
}

export default function TeamMemberCard({ item }: TeamMemberCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-emerald-300 transition-all duration-200"
    >
      {(item as any).image?.url ? (
        <div className="relative h-56 bg-slate-100">
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
        <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <User className="w-16 h-16 text-slate-300" />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).jobTitle && (
          <p className="text-sm text-emerald-600 font-medium mb-1">{(item as any).jobTitle}</p>
        )}

        {(item as any).credentials && (
          <p className="text-xs text-slate-400 mb-3">{(item as any).credentials}</p>
        )}

        {(item as any).specializations && (
          <p className="text-slate-500 text-sm mb-3 line-clamp-2 leading-relaxed">
            {(item as any).specializations}
          </p>
        )}

        <div className="flex items-center text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
          View profile
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
