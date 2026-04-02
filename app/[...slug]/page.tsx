import { getClient } from '@/lib/drupal-client'
import Header from '../components/Header'
import ErrorBoundary from '../components/ErrorBoundary'
import HomepageRenderer from '../components/HomepageRenderer'
import ResponsiveImage from '../components/ResponsiveImage'
import { Metadata } from 'next'

export const revalidate = 300
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  try {
    const client = getClient()
    const page = await client.getEntryByPath(path)
    const title = (page as any)?.title || 'Page'
    return { title }
  } catch {
    return { title: 'Page' }
  }
}

function PageNotFound({ path }: { path: string }) {
  return (
    <div className="text-center py-16">
      <div className="bg-white border border-slate-200 rounded-lg p-12">
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-2">We couldn&#39;t find any content at this path.</p>
        <p className="text-sm text-slate-400">Path: {path}</p>
        <a href="/" className="inline-block mt-6 px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors font-semibold text-sm">
          Return Home
        </a>
      </div>
    </div>
  )
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  const client = getClient()

  try {
    const entity = await client.getEntryByPath(path) as any
    if (!entity) {
      return (
        <div className="min-h-screen bg-slate-50">
          <Header />
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <PageNotFound path={path} />
          </main>
        </div>
      )
    }

    if (entity.__typename === 'NodeHomepage') {
      return <HomepageRenderer homepageContent={entity} />
    }

    const title = entity.title || 'Untitled'
    const bodyHtml = entity?.body?.processed || ''
    const image = entity?.image

    return (
      <div className="min-h-screen bg-slate-50">
        <Header />

        <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white pt-28 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
            </div>
          </div>
        </section>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <ErrorBoundary>
            <article className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              {image && (
                <ResponsiveImage
                  image={image}
                  alt={image.alt || title}
                  className="rounded-t-lg"
                  priority={true}
                />
              )}
              <div className="p-6 md:p-8">
                <div className="prose prose-sm sm:prose lg:prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-emerald-600" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
              </div>
            </article>
          </ErrorBoundary>
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error loading page by path:', error)
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PageNotFound path={path} />
        </main>
      </div>
    )
  }
}
