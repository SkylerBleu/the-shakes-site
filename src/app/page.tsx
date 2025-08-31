import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-40">
      <h1 className="text-4xl font-bold text-white">WELCOME TO OUR LUAU</h1>
      <div className="flex justify-center">
        <Image
          src="/us/us-w-cake.jpg"
          alt="The Shakes with Cake"
          width={1100}     
          height={540} 
          className="h-auto object-cover"
        />
      </div>
    </main>
  );
}