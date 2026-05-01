// Footer for Redium — Liquid Glass style
const { motion: motionFt } = Motion;

const footerLinks = {
  Discover: ['The Formula', 'Deep Dive Series', 'Science Hub', 'Ingredient Vault', 'Roadmap'],
  Company: ['Our Story', 'The Team', 'Press', 'Careers'],
  Support: ['Contact Us', 'Privacy Policy', 'Terms of Use', 'Report an Issue'],
};

const socialIcons = [
  // Music/Spotify-style
  <svg key="music" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12.5c1.5-1 3.5-1 5 0"/><path d="M6.5 10c2.5-1.5 5.5-1.5 8 0"/><path d="M9.5 15c1-.5 2-.5 3 0"/></svg>,
  // Facebook
  <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  // Twitter/X
  <svg key="tw" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.04 2.25h6.964l4.282 5.656 5.957-5.656Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>,
  // Youtube
  <svg key="yt" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--bg)"/></svg>,
  // Instagram
  <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
];

function Footer() {
  return (
    <div style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 32, position: 'relative', zIndex: 10 }}>
      <motionFt.footer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className="liquid-glass"
        style={{
          maxWidth: 1152,
          margin: '0 auto',
          borderRadius: 28,
          padding: 'clamp(32px, 5vw, 48px)',
          color: 'var(--white-70)',
          marginTop: 'clamp(80px, 14vw, 160px)',
          background: 'rgba(20,4,4,0.25)',
        }}
      >
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(32px, 5vw, 48px)',
          marginBottom: 48,
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="var(--red)">
                <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
              </svg>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15, fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--white)',
              }}>Redium</span>
            </div>
            <p style={{
              fontSize: 13, lineHeight: 1.75,
              color: 'var(--white-40)', maxWidth: 280,
              fontWeight: 300,
            }}>
              Performance-focused supplements built for people who live on screens.
              Smoother energy. Clearer focus. Stable output.
            </p>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p style={{
                fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--white)', fontWeight: 600, marginBottom: 20,
              }}>{heading}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: 12, color: 'var(--white-40)',
                      textDecoration: 'none', fontWeight: 300,
                      transition: 'color 0.2s', letterSpacing: '0.02em',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                    onMouseLeave={e => e.target.style.color = 'var(--white-40)'}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24,
          borderTop: '1px solid var(--white-10)',
          display: 'flex', flexDirection: 'row',
          alignItems: 'center', justifyContent: 'space-between',
          gap: 16, flexWrap: 'wrap',
        }}>
          <p style={{
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--white-40)', fontWeight: 400,
          }}>© 2026 Redium. All rights reserved.</p>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--white-40)', marginRight: 8, fontWeight: 400,
            }}>Follow:</span>
            {socialIcons.map((icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--white-70)', opacity: 0.7,
                  textDecoration: 'none', transition: 'opacity 0.2s, color 0.2s',
                  padding: 4,
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--white)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'var(--white-70)'; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </motionFt.footer>
    </div>
  );
}

Object.assign(window, { Footer });
