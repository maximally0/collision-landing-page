// Featured Video Section for Redium
const { useRef: useRefFV, useEffect: useEffectFV } = React;
const { motion: motionFV, useInView: useInViewFV } = Motion;

function FeaturedVideoSection() {
  const ref = useRefFV(null);
  const inView = useInViewFV(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      background: 'var(--bg)',
      paddingTop: 24,
      paddingBottom: 'clamp(80px, 12vw, 128px)',
      paddingLeft: 24,
      paddingRight: 24,
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }} ref={ref}>
        <motionFV.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: 28,
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '16/9',
          }}
        >
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            muted autoPlay loop playsInline preload="auto"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(8,8,8,0.75) 0%, transparent 50%)',
          }} />
          {/* Red glow accent */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 40% at 50% 100%, oklch(0.52 0.22 22 / 0.2) 0%, transparent 70%)',
          }} />

          {/* Bottom overlay content */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex', flexDirection: 'row', alignItems: 'flex-end',
            justifyContent: 'space-between', gap: 24,
            flexWrap: 'wrap',
          }}>
            {/* Info card */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: 20, padding: 'clamp(20px, 3vw, 32px)',
                maxWidth: 400, flex: '0 1 auto',
                background: 'rgba(8,8,8,0.3)',
              }}
            >
              <p style={{
                fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--red-bright)', fontWeight: 500, marginBottom: 12,
              }}>Our Approach</p>
              <p style={{
                fontSize: 'clamp(13px, 1.5vw, 15px)', lineHeight: 1.7,
                color: 'var(--white-70)', fontWeight: 300,
              }}>
                We believe in evidence over hype. Every ingredient in Redium
                is chosen for one reason: it works. No fillers. No marketing fluff.
                Just clean, effective performance support.
              </p>
            </div>

            {/* Explore button */}
            <motionFV.a
              href="#"
              className="liquid-glass liquid-glass-red"
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px oklch(0.52 0.22 22 / 0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                borderRadius: 9999, padding: '12px 32px',
                color: 'var(--white)', fontSize: 13,
                fontWeight: 500, letterSpacing: '0.06em',
                textDecoration: 'none', flexShrink: 0,
                background: 'oklch(0.52 0.22 22 / 0.2)',
              }}
            >
              Explore the Formula
            </motionFV.a>
          </div>
        </motionFV.div>
      </div>
    </section>
  );
}

Object.assign(window, { FeaturedVideoSection });
