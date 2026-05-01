// Philosophy Section for Collision
const { useRef: useRefPh } = React;
const { motion: motionPh, useInView: useInViewPh } = Motion;

function PhilosophySection() {
  const ref = useRefPh(null);
  const inView = useInViewPh(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      background: 'var(--bg)',
      paddingTop: 'clamp(80px, 14vw, 160px)',
      paddingBottom: 'clamp(80px, 14vw, 160px)',
      paddingLeft: 24,
      paddingRight: 24,
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }} ref={ref}>
        {/* Heading */}
        <motionPh.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            marginBottom: 'clamp(48px, 8vw, 96px)',
          }}
        >
          Performance{' '}
          <em style={{ color: 'var(--white-40)', fontStyle: 'italic' }}>×</em>{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--red-bright)' }}>Clarity</em>
        </motionPh.h2>

        {/* Two column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(24px, 4vw, 48px)',
          alignItems: 'start',
        }}>
          {/* Left: video */}
          <motionPh.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3' }}
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              muted autoPlay loop playsInline preload="auto"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motionPh.div>

          {/* Right: text blocks */}
          <motionPh.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
          >
            {/* Block 1 */}
            <div style={{ paddingBottom: 40 }}>
              <p style={{
                fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--red-bright)', fontWeight: 500, marginBottom: 16,
              }}>Choose your state</p>
              <p style={{
                fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8,
                color: 'var(--white-40)', fontWeight: 300,
              }}>
                Every meaningful hour of deep work starts with the right biochemical foundation.
                Collision is formulated at the intersection of nootropic science and real-world
                performance demands — so you can operate at your ceiling, not fight to reach it.
              </p>
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: 1, background: 'var(--white-10)', marginBottom: 40 }} />

            {/* Block 2 */}
            <div>
              <p style={{
                fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--red-bright)', fontWeight: 500, marginBottom: 16,
              }}>Shape your output</p>
              <p style={{
                fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8,
                color: 'var(--white-40)', fontWeight: 300,
              }}>
                The best work happens when clarity meets conviction. We built Collision for
                the long sessions — the ones that matter. Consistent energy without the spike.
                Sustained focus without the fog. An edge that stays sharp through hour six.
              </p>
            </div>

            {/* Red accent line */}
            <div style={{
              marginTop: 48,
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <div style={{
                width: 32, height: 1,
                background: 'var(--red)',
                boxShadow: '0 0 8px var(--red-glow)',
              }} />
              <span style={{
                fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--red-bright)', fontWeight: 500,
              }}>Screen-first. Science-backed.</span>
            </div>
          </motionPh.div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PhilosophySection });
