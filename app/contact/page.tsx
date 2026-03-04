import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Greenfield & Associates CPAs',
  description: 'Contact Greenfield & Associates CPAs for accounting, tax, and advisory services.',
  keywords: ['Contact Greenfield & Associates', 'CPA', 'Accounting', 'Tax Services'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Have questions about our accounting services? We would love to hear from you. Schedule a consultation or send us a message.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Office Information</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Email</h3>
                  <p className="text-slate-600 mt-1">info@greenfieldcpa.com</p>
                  <p className="text-slate-600">support@greenfieldcpa.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Phone</h3>
                  <p className="text-slate-600 mt-1">(555) 234-5678</p>
                  <p className="text-sm text-slate-400">Monday to Friday, 8:30 AM - 5:30 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Office</h3>
                  <p className="text-slate-600 mt-1">
                    456 Financial Plaza, Suite 200<br />
                    Downtown Business District<br />
                    Charlotte, NC 28202
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Business Hours</h3>
                  <p className="text-slate-600 mt-1">
                    Monday - Friday: 8:30 AM - 5:30 PM<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send a Message</h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-200 font-semibold text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white border border-slate-200 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Need Immediate Assistance?</h2>
            <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
              For urgent tax or accounting matters, call us directly or explore our resource library for quick answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5552345678"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200 font-medium text-sm"
              >
                Call (555) 234-5678
              </a>
              <a
                href="/resources"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors duration-200 font-medium text-sm"
              >
                Browse Resources
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
