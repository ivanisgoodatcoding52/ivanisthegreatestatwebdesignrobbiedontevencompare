import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image'; // Add this

export const metadata = {
  title: 'Minecraft 2012 Replica',
  description: 'A Minecraft website style replica from 2012',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header style={headerStyle}>
        <div>
          <Image src="/minecraft-logo.png" alt="Minecraft Logo" width={180} height={60} />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/game">Game</a>
          <a href="/community">Community</a>
          <a href="/store">Store</a>
          <a href="/profile">Profile</a>
          <a href="/help">Help</a>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer style={footerStyle}>
        <p>© 2012 Mojang AB | <a href="/terms">Terms</a></p>
      </footer>
    </>
  );
}
