// Main App for Collision
function App() {
  return (
    <main style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
    }}>
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <Footer />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
