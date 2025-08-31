export default function ContactPage() {
  return (
    <main className="pt-40 px-6 max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-2 flex justify-center">Contact Us</h1>

      {/* Email link */}
      <p className="text-center text-sm text-gray-400 mb-8">
        or email us directly at{' '}
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
        {/* Optional redirect after submission */}
        <input
          type="hidden"
          name="_redirect"
          value="http://localhost:3000/thank-you" // ⬅️ Replace with actual domain before launching
        />

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
    </main>
  )
}
