'use client'

import { useEffect } from 'react'

export default function ShowsPage() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <main className="pt-40 px-6 max-w-4xl mx-auto text-white text-center">
      <h1 className="text-4xl font-bold mb-8">The Rickhouse</h1>

      {/* Show flyer */}
      <img
        src="/shows/rickhouse_flyer.JPG"
        alt="Show Flyer"
        className="w-full max-w-3xl mx-auto rounded shadow-lg mb-12"
      />

      {/* Get Tickets button */}
      <a
        href="https://www.bandsintown.com/e/1036428729-immortal-synn-at-the-rickhouse?came_from=252"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        🎟️ Get Tickets
      </a>
    </main>
  )
}
