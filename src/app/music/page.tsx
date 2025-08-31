export default function MusicPage() {
    return (
        <main className="pt-40 px-6 text-white">
            {/* Example embedded Spotify or other content */}
            <div className="flex justify-center">
                <div className="aspect-video w-full max-w-2xl">
                    <p className="mb-4 flex justify-center">Listen to our first EP, Spare Rib</p>
                    <iframe
                        src="https://open.spotify.com/embed/album/2uc5HUF6M2goOZcFqOaBwU"
                        width="100%"
                        height="100%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded"
                    ></iframe>
                </div>
            </div>
        </main>
    )
}
