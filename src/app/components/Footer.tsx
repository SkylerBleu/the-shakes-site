import { FaSpotify, FaInstagram, FaFacebook } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] bg-opacity-90 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex justify-center space-x-8">
        <a
          href="https://instagram.com/theshakesdenver"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={32} />
        </a>

        <a
          href="https://music.apple.com/ca/artist/the-shakes/1785166106"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apple Music"
          className="hover:text-pink-500 transition"
        >
          <SiApplemusic size={32} />
        </a>

        <a
          href="https://open.spotify.com/artist/6MMIBoU7NDrIWlw4PD37cW"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
          className="hover:text-green-500 transition"
        >
          <FaSpotify size={32} />
        </a>

        <a
          href="https://facebook.com/theshakessound"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-pink-500 transition"
        >
          <FaFacebook size={32} />
        </a>
      </div>
    </footer>
  )
}
