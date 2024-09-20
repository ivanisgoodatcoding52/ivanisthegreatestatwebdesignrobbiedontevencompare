import React from 'react';
import './styles.css'; // Make sure to create a styles.css file

const Page = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Minecraft</h1>
        <nav className="nav">
          <a href="#">Download</a>
          <a href="#">Game</a>
          <a href="#">Community</a>
          <a href="#">Help</a>
        </nav>
      </header>
      <main className="main">
        <h2>What is Minecraft?</h2>
        <p>
          Minecraft is a sandbox video game developed by Mojang Studios.
          The game was created by Markus "Notch" Persson in 2009.
        </p>
      </main>
      <footer className="footer">
        <p>&copy; 2012 Mojang</p>
      </footer>
    </div>
  );
};

export default Page;
