// layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Minecraft 2012 Replica',
  description: 'A Minecraft website style replica from 2012',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={headerStyle}>
          <div>
            <img src="/minecraft-logo.png" alt="Minecraft Logo" style={{ height: '60px' }} />
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

        <main
