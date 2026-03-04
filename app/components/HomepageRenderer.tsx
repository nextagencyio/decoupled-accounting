'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Calculator, FileText, Shield, TrendingUp, Users, Award } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const whyTrustUs = [
  { icon: Calculator, title: 'Tax Planning & Preparation', description: 'Strategic tax planning to minimize liabilities and maximize returns for businesses and individuals.' },
  { icon: FileText, title: 'Financial Reporting', description: 'Clear, accurate financial statements that give you a true picture of your business health.' },
  { icon: Shield, title: 'Audit & Assurance', description: 'Independent audit services that build confidence with stakeholders and regulatory bodies.' },
  { icon: TrendingUp, title: 'Business Advisory', description: 'Data-driven insights and strategic guidance to help your business grow sustainably.' },
  { icon: Users, title: 'Payroll Services', description: 'Reliable payroll processing and compliance so you can focus on what matters most.' },
  { icon: Award, title: 'Compliance & Regulation', description: 'Stay ahead of regulatory requirements with proactive compliance management.' },
]

const certifications = [
  'AICPA Member',
  'State CPA Society',
  'QuickBooks ProAdvisor',
  'Certified Fraud Examiner',
  'IRS Enrolled Agent',
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Why Trust Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-emerald-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Clients Trust Us
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our comprehensive range of accounting and advisory services is designed to give you financial clarity and peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyTrustUs.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:border-emerald-300 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
              Professional Affiliations & Certifications
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Trusted By Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-emerald-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built on Trust, Driven by Results
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From small businesses to established enterprises, we deliver the financial expertise you need to thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80&fit=crop', alt: 'Financial analysis and reporting' },
              { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop', alt: 'Business signing and agreements' },
              { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop', alt: 'Working on financial reports' },
              { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&fit=crop', alt: 'Professional office meeting' },
            ].map((photo, i) => (
              <div key={i} className="relative h-56 rounded-lg overflow-hidden group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G&A</span>
                </div>
                <span className="text-lg font-bold text-white">Greenfield & Associates</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Expert accounting, tax preparation, and financial advisory services for businesses and individuals since 1994.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Services</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/services" className="hover:text-emerald-400 transition-colors">Tax Planning</a></li>
                <li><a href="/services" className="hover:text-emerald-400 transition-colors">Bookkeeping</a></li>
                <li><a href="/services" className="hover:text-emerald-400 transition-colors">Audit & Assurance</a></li>
                <li><a href="/services" className="hover:text-emerald-400 transition-colors">Business Advisory</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Company</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/team" className="hover:text-emerald-400 transition-colors">Our Team</a></li>
                <li><a href="/resources" className="hover:text-emerald-400 transition-colors">Resources</a></li>
                <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li>456 Financial Plaza, Suite 200</li>
                <li>Charlotte, NC 28202</li>
                <li className="pt-1">
                  <a href="mailto:info@greenfieldcpa.com" className="hover:text-emerald-400 transition-colors">info@greenfieldcpa.com</a>
                </li>
                <li>
                  <a href="tel:5552345678" className="hover:text-emerald-400 transition-colors">(555) 234-5678</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Greenfield & Associates CPAs. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
