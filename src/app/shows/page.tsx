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
      <h1 className="text-4xl font-bold mb-8">Ready for the luau of the centery?</h1>

      {/* Instagram video embed */}
      <div className="mb-12 flex justify-center">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DLvKevUJ1TW/"
          data-instgrm-version="14"
          style={{ background: '#000', margin: '0 auto', maxWidth: '540px' }}
        ></blockquote>
      </div>

      {/* Show flyer */}
      <img
        src="/shows/flyer-new.PNG"
        alt="Show Flyer"
        className="w-full max-w-3xl mx-auto rounded shadow-lg mb-12"
      />
      
    </main>
  )
}
