// Navbar component for Redium
const { useState, useEffect } = React;
const { motion } = Motion;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{ position: 'relative', zIndex: 20, padding: '24px 24px 0' }}>
      <div
        className="liquid-glass"
        style={{
          maxWidth: 960,
          margin: '0 auto',
          borderRadius: 9999,
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s',
          background: scrolled ? 'rgba(20,0,0,0.4)' : 'rgba(255,255,255,0.01)',
        }}
      >
        {/* Left: Logo + Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* R mark */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10.5" stroke="var(--red)" strokeWidth="1"/>
              <text x="6.5" y="15.5" fontFamily="'Instrument Serif', serif" fontSize="14" fontStyle="italic" fill="var(--red)">R</text>
            </svg>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, letterSpacing: '0.12em', color: 'var(--white)', textTransform: 'uppercase' }}>
              Redium
            </span>
          </div>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links">
            {['Formula', 'Science', 'About'].map(l => (
              <a key={l} href="#" style={{ color: 'var(--white-40)', fontSize: 13, fontWeight: 400, textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                onMouseLeave={e => e.target.style.color = 'var(--white-40)'}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#" style={{ color: 'var(--white-40)', fontSize: 13, fontWeight: 400, textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--white)'}
            onMouseLeave={e => e.target.style.color = 'var(--white-40)'}
          >Log in</a>
          <motion.a
            href="#"
            className="liquid-glass liquid-glass-red"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              borderRadius: 9999,
              padding: '8px 22px',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--white)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              background: 'oklch(0.52 0.22 22 / 0.18)',
              boxShadow: '0 0 20px oklch(0.52 0.22 22 / 0.25)',
            }}
          >
            Get Redium
          </motion.a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

Object.assign(window, { Navbar });
