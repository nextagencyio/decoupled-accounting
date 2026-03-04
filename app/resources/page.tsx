import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_RESOURCES } from '@/lib/queries'
import { ResourcesData } from '@/lib/types'
import Header from '../components/Header'
import ResourceCard from '../components/ResourceCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Resources | Greenfield & Associates CPAs',
  description: 'Tax guides, financial insights, and professional resources from Greenfield & Associates.',
}

async function getResources() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<ResourcesData>({
      query: GET_RESOURCES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeResources?.nodes || []
  } catch (error) {
    console.error('Error fetching resources:', error)
    return []
  }
}

export default async function ResourcesPage() {
  const items = await getResources()

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Knowledge Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resources & Insights
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Stay informed with the latest tax updates, financial strategies, and industry insights from our team of experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-slate-600 mb-2">No Resources Yet</h2>
              <p className="text-slate-500">
                Resources will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
