import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#2d2d2d] text-white font-sans">
      {/* Header */}
      <header className="w-full bg-[#333] py-4 flex justify-center">
        <nav className="space-x-8 text-lg">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Me</a>
          <a href="#" className="hover:underline">Games Made By ME</a>
          <a href="#" className="hover:underline">The Archive</a>
          <a href="#" className="hover:underline">Grades ig</a>
          <a href="#" className="hover:underline">Placeholder</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center py-16 space-y-8">
        {/* Video Placeholder */}
        <div className="bg-black w-[600px] h-[340px] flex justify-center items-center">
          <p>About me</p>
        </div>

        {/* Game Info Text */}
        <p className="text-center max-w-[600px]">
          Gentlemen, welcome to a shithole that I made in less than 1 hour. This is my website. enjoy it.
        </p>
      </main>

      {/* Sidebar with Buy Now and Characters */}
      <section className="flex flex-col items-center space-y-4">
        <button className="bg-[#ff9b1e] text-white font-bold py-2 px-6 rounded-full">
          Grades
        </button>
        <button className="bg-[#ff9b1e] text-white font-bold py-2 px-6 rounded-full">
          Games
        </button>
        <button className="bg-[#ff9b1e] text-white font-bold py-2 px-6 rounded-full">
          Archive
        </button>
        <div className="text-center space-y-1">
          <p>Play :</p>
          <p>
            <a href="#" className="text-blue-300 underline">Placeholder</a> | 
            <a href="#" className="text-blue-300 underline">Placeholder</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center space-y-2">
        <div className="space-x-4">
          <a href="https://twitter.com/unnameduserplus" className="hover:underline">Follow me on Twitter!</a>
          <a href="#" className="hover:underline">Word of ivanisgood52/Ivan</a>
        </div>
        <p>404 Not Found</p>
      </footer>
    </div>
  );
}
