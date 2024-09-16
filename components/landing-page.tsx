'use client'

import Edge from "@/components/icons/edge"
import { Button } from "@/components/ui/button"
import { Chrome, Paintbrush, Youtube, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">CustomProgressBar</div>
          <Button variant="ghost" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            <Youtube className="mr-2 h-4 w-4" /> For YouTube
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Customize Your YouTube Experience
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Custom Progress Bar is a browser extension that lets you personalize the look of YouTube&apos;s video progress bar. Make your viewing experience truly yours!
          </p>
          <div className="w-full h-4 bg-gray-200 rounded-full mb-8 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full animate-slide"></div>
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Paintbrush, title: "Customizable Styles", description: "Choose from a variety of colors, patterns, and animations" },
              { icon: Zap, title: "Easy to Use", description: "Simple one-click installation, no configuration needed" },
              { icon: Youtube, title: "YouTube Integration", description: "Seamlessly works with YouTube's interface" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center">
                  <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}</div>
        </section>

        <section className="mb-20" id="install">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available on Your Favorite Browsers</h2>
          <div className="flex justify-center space-x-4">
            <Image src="/custom-progressbar.png" alt="Custom Progress Bar for Youtube" width={600} height={380} className="pb-4" />
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="https://chromewebstore.google.com/detail/custom-progress-bar-for-y/nbkomboflhdlliegkaiepilnfmophgfg">
                <Chrome className="mr-2 h-4 w-4" /> Get for Chrome
              </Link>
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600" asChild>
              <Link href="https://microsoftedge.microsoft.com/addons/detail/custom-progress-bar-for-y/fbkcpjalcibpijegdphgnffinjdehhkf">
                <Edge className="mr-2 h-4 w-4" /> Get for Edge
              </Link>
            </Button>
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Alternatives</h2>
          <div className="flex justify-center space-x-4">
            <Image src="/sweezy.png" alt="Sweezy Custom Progress Bar for Youtube" width={600} height={380} className="pb-4" />
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="https://chromewebstore.google.com/detail/sweezy-custom-progress-ba/bnjlijllccbbjdeiflmakhkijbdddflj">
                <Chrome className="mr-2 h-4 w-4" /> Get for Chrome
              </Link>
            </Button>
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
          <ol className="text-center mx-auto text-gray-600">
            <li className="mb-4">1. Install the Custom Progress Bar extension from your browser&apos;s store.</li>
            <li className="mb-4">2. Click on the extension icon to open the customization panel.</li>
            <li className="mb-4">3. Choose your preferred style, color, or animation for the progress bar.</li>
            <li>4. Go to YouTube and start watching any video.</li>
          </ol>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">See It in Action</h2>
          <p className="mb-4">Install the extension and try on this example video.</p>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Is Custom Progress Bar free to use?",
                answer: "Yes, Custom Progress Bar is completely free to download and use. We believe in enhancing your YouTube experience without any cost."
              },
              {
                question: "Will this extension slow down my browser?",
                answer: "No, Custom Progress Bar is designed to be lightweight and efficient. It should not noticeably impact your browser's performance."
              },
              {
                question: "Does Custom Progress Bar collect any personal data?",
                answer: "Custom Progress Bar does not collect any personal data. It only requires permission to modify the YouTube player, which is necessary for its functionality."
              },
              {
                question: "Can I use Custom Progress Bar on mobile devices?",
                answer: "Currently, Custom Progress Bar is only available for desktop browsers. We're exploring options for mobile support in the future."
              },
              {
                question: "How often is Custom Progress Bar updated?",
                answer: "We strive to keep Custom Progress Bar up-to-date with the latest YouTube changes. Updates are typically released monthly, with critical updates pushed as needed."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Custom Progress Bar. All rights reserved.</p>
          <p className="mt-2">Not affiliated with YouTube.</p>
        </div>
      </footer>
    </div>
  )
}