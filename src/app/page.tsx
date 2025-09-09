import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-40">
      <h1 className="text-4xl font-bold text-white"></h1>

      {/* Local video */}
      <div className="w-full max-w-4xl aspect-video mb-10">
        <video
          className="w-full h-full rounded-2xl shadow-lg"
          src="/videos/Dope-Vid-Final.mov"
          controls
          playsInline
        />
      </div>

      {/* YouTube video */}
      <div className="w-full max-w-4xl aspect-video mb-12">
        <iframe
          className="w-full h-full rounded-2xl shadow-lg"
          src="https://www.youtube.com/embed/oFEL3aXrJC4?t=37"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link
        href="/music"
        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        🎶 Our Sound
      </Link>
    </main>
  );
}
