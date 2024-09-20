// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="w-full bg-gray-800 py-4 flex justify-center">
        <nav className="space-x-8 text-lg">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Game</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Store</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Help</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center py-16 space-y-8">
        {/* Video Placeholder */}
        <div className="bg-black w-[600px] h-[340px] flex justify-center items-center">
          <p>Video Placeholder</p>
        </div>

        {/* Game Info Text */}
        <p className="text-center max-w-[600px]">
          Minecraft is a game about placing blocks to build anything you can imagine. At night monsters come out, so make sure to build a shelter before that happens. It also has music by C418! So far, over 27,723,051 people have registered, and 5,744,712 people bought the game.
        </p>
      </main>

      {/* Sidebar with Buy Now and Characters */}
      <section className="flex flex-col items-center space-y-4">
        <div>
          <Image src="/steve.png" alt="Steve" width={180} height={240} /> {/* Example image */}
        </div>
        <button className="bg-[#ff9b1e] text-white font-bold py-2 px-6 rounded-full">
          Buy Now!
        </button>
        <div className="text-center space-y-1">
          <p>Play Minecraft:</p>
          <p>
            <a href="#" className="text-blue-300 underline">In browser</a> | 
            <a href="#" className="text-blue-300 underline">Download</a>
          </p>
          <p>
            Play Minecraft Classic (Outdated but free) <br />
            <span>Single player | Multi player</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center space-y-2">
        <div className="space-x-4">
          <a href="https://facebook.com/minecraft" className="hover:underline">Join Us on Facebook</a>
          <a href="#" className="hover:underline">Word of Notch</a>
        </div>
        <p>404 Not Found</p>
      </footer>
    </div>
  );
}
