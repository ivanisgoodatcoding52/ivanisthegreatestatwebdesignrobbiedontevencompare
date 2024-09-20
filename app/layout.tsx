import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image'; // Use Next.js Image component

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

// Define styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 50px',
  backgroundColor: '#333',
  color: 'white',
  alignItems: 'center',
};

const footerStyle = {
  backgroundColor: '#333',
  padding: '10px',
  color: '#fff',
  textAlign: 'center' as const, // Use `as const` for type correctness
};
