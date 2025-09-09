"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()

  const handleClosePopup = () => {
    setShowPopup(false)
    router.push("/")
  }

  return (
    <main className="pt-40 px-6 max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-2 flex justify-center">Contact Us</h1>

      <p className="text-center text-sm text-gray-400 mb-8">
        or email us directly at{" "}
        <a
          href="mailto:theshakesdenver@gmail.com"
          className="text-blue-400 hover:underline"
        >
          theshakesdenver@gmail.com
        </a>
      </p>

      <form
        action="https://submit-form.com/B7ALh5q3n"
        method="POST"
        className="space-y-4"
      >

        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-black bg-opacity-30 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-black bg-opacity-30 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            required
            className="w-full bg-black bg-opacity-30 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full bg-black bg-opacity-30 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-white"
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-8 max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="mb-6">Your message has been sent successfully.</p>
            <button
              onClick={() => handleClosePopup()}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
