// page.tsx

export default function HomePage() {
  return (
    <div style={mainStyle}>
      <section style={contentStyle}>
        <h1>Welcome to Minecraft!</h1>
        <p>Minecraft is a game about placing blocks to build anything you can imagine. At night monsters come out, make sure to build a shelter before that happens. It also has music by C418!</p>
        <p>So far 27,723,051 people have registered and 5,744,712 people bought the game. <a href="#">More stats here.</a></p>

        <div style={buttonContainer}>
          <button>Buy Now!</button>
          <a href="/download">Play Minecraft Classic</a>
        </div>
      </section>

      <section style={communityStyle}>
        <h2>Join the Community!</h2>
        <div>
          <a href="https://facebook.com/minecraft">Join us on Facebook</a>
          <a href="https://twitter.com/notch">Follow Notch on Twitter</a>
        </div>
      </section>
    </div>
  );
}

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px',
};

const contentStyle = {
  backgroundColor: '#222',
  padding: '20px',
  borderRadius: '10px',
  width: '80%',
  textAlign: 'center' as 'center',
};

const buttonContainer = {
  marginTop: '20px',
};

const communityStyle = {
  marginTop: '50px',
  textAlign: 'center' as 'center',
};
