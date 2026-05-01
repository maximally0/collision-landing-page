// About Section for Redium
const { useRef: useRefAbout, useEffect: useEffectAbout } = React;
const { motion: motionAbout, useInView: useInViewAbout } = Motion;

function AboutSection() {
  const ref = useRefAbout(null);
  const inView = useInViewAbout(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: 'var(--bg)',
        paddingTop: 'clamp(80px, 12vw, 176px)',
        paddingBottom: 56,
        paddingLeft: 24,
        paddingRight: 24,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Radial glow top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80%', height: 300, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at top, oklch(0.52 0.22 22 / 0.08) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Label */}
        <motionAbout.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--red-bright)', fontWeight: 500, marginBottom: 32,
          }}
        >
          About Redium
        </motionAbout.p>

        {/* Heading */}
        <motionAbout.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 7vw, 88px)',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            maxWidth: 900,
          }}
        >
          Not for the gym.{' '}
          <em style={{ color: 'var(--white-40)', fontStyle: 'italic' }}>For the screen.</em>
          <br />
          Built for minds that{' '}
          <em style={{ color: 'var(--white-40)', fontStyle: 'italic' }}>build, ship, and push.</em>
        </motionAbout.h2>

        {/* Body copy */}
        <motionAbout.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginTop: 48,
            fontSize: 15, lineHeight: 1.8,
            color: 'var(--white-40)', maxWidth: 560,
            fontWeight: 300,
          }}
        >
          Redium is a performance-focused supplement brand built for people who live on screens.
          We focus on one thing: better daily performance. Smoother energy. Clearer focus. Stable output.
        </motionAbout.p>

        {/* Stats row */}
        <motionAbout.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: 'flex', gap: 48, marginTop: 64,
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '6h+', label: 'Sustained focus window' },
            { value: '0', label: 'Crashes. None.' },
            { value: '1', label: 'Formula. Perfected.' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--red-bright)',
                lineHeight: 1,
                marginBottom: 8,
              }}>{value}</div>
              <div style={{
                fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--white-40)', fontWeight: 400,
              }}>{label}</div>
            </div>
          ))}
        </motionAbout.div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutSection });
