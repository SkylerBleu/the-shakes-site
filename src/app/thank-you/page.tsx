export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-400 text-center mb-6">
        Your message has been sent. We'll get back to you soon!
      </p>
      <a
        href="/"
        className="text-blue-400 hover:underline text-sm"
      >
        Return to Home
      </a>
    </main>
  );
}
