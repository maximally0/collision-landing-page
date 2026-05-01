// Services Section for Collision
const { useRef: useRefSv } = React;
const { motion: motionSv, useInView: useInViewSv } = Motion;

const serviceCards = [
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    tag: 'Cognition',
    title: 'Focus & Flow',
    desc: 'Engineered to sharpen attention and sustain deep work sessions. No jitters. No ceiling. Just clean, dialled-in output hour after hour.',
  },
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    tag: 'Energy',
    title: 'Stable Output',
    desc: 'Smooth, sustained energy without the crash. Designed for the long arc of a real working day — not just the first hour.',
  },
];

function ServicesSection() {
  const ref = useRefSv(null);
  const inView = useInViewSv(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      background: 'var(--bg)',
      paddingTop: 'clamp(80px, 14vw, 160px)',
      paddingBottom: 'clamp(80px, 14vw, 160px)',
      paddingLeft: 24,
      paddingRight: 24,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Radial gradient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.52 0.22 22 / 0.05) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1152, margin: '0 auto' }} ref={ref}>
        {/* Header */}
        <motionSv.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex', alignItems: 'baseline',
            justifyContent: 'space-between', marginBottom: 'clamp(40px, 6vw, 64px)',
            flexWrap: 'wrap', gap: 16,
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 400, letterSpacing: '-0.02em',
            color: 'var(--white)',
          }}>What's inside</h2>
          <span style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--white-40)', fontWeight: 400,
          }}>The Formula</span>
        </motionSv.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(16px, 3vw, 32px)',
        }}>
          {serviceCards.map((card, i) => (
            <motionSv.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass"
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              whileHover="hovered"
            >
              {/* Video */}
              <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                <motionSv.video
                  src={card.video}
                  muted autoPlay loop playsInline preload="auto"
                  variants={{ hovered: { scale: 1.05 } }}
                  transition={{ duration: 0.7 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 60%)',
                }} />
                {/* Red corner glow */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.52 0.22 22 / 0.25) 0%, transparent 70%)',
                }} />
              </div>

              {/* Card body */}
              <div style={{ padding: 'clamp(20px, 3vw, 32px)' }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', marginBottom: 16,
                }}>
                  <span style={{
                    fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--red-bright)', fontWeight: 500,
                  }}>{card.tag}</span>
                  {/* Arrow icon in glass circle */}
                  <div className="liquid-glass" style={{
                    width: 32, height: 32, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="var(--white-70)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  fontWeight: 400, letterSpacing: '-0.01em',
                  color: 'var(--white)', marginBottom: 12,
                }}>{card.title}</h3>
                <p style={{
                  fontSize: 13, lineHeight: 1.7,
                  color: 'var(--white-40)', fontWeight: 300,
                }}>{card.desc}</p>
              </div>
            </motionSv.div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesSection });
