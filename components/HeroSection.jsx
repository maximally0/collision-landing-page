// Hero Section for Redium
const { useRef, useEffect: useEffectHero } = React;
const { motion: motionHero } = Motion;

function HeroSection() {
  const videoRef = useRef(null);

  useEffectHero(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const fadeIn = (el, duration = 500) => {
      let start = null;
      const from = parseFloat(el.style.opacity) || 0;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        el.style.opacity = from + (1 - from) * p;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const fadeOut = (el, duration = 500) => {
      let start = null;
      const from = parseFloat(el.style.opacity) || 1;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        el.style.opacity = from * (1 - p);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const onCanPlay = () => {
      video.play().then(() => fadeIn(video, 500)).catch(() => {});
    };

    const onTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.55) {
        fadeOut(video, 500);
      }
    };

    const onEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => fadeIn(video, 500)).catch(() => {});
      }, 100);
    };

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Background video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'bottom',
          opacity: 0, zIndex: 0,
        }}
      />

      {/* Red radial glow overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.52 0.22 22 / 0.18) 0%, transparent 70%)',
      }} />

      {/* Dark vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.1) 40%, rgba(8,8,8,0.6) 100%)',
      }} />

      {/* Navbar */}
      <div style={{ position: 'relative', zIndex: 20 }}>
        <Navbar />
      </div>

      {/* Hero content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 10,
        padding: '48px 24px',
        transform: 'translateY(-8%)',
        textAlign: 'center',
        gap: 32,
      }}>
        {/* Eyebrow */}
        <motionHero.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: 'var(--red)', boxShadow: '0 0 10px var(--red-glow)',
          }} />
          <span style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--red-bright)', fontWeight: 500,
          }}>Performance Formula — 01</span>
        </motionHero.div>

        {/* Headline */}
        <motionHero.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(64px, 12vw, 120px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            maxWidth: 900,
          }}
        >
          Think clearly.<br />
          <em style={{ color: 'var(--red-bright)', fontStyle: 'italic' }}>Stay on.</em>
        </motionHero.h1>

        {/* Subtitle */}
        <motionHero.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            fontSize: 15, lineHeight: 1.7, color: 'var(--white-40)',
            maxWidth: 440, fontWeight: 300,
          }}
        >
          Smoother energy. Clearer focus. Stable output.
          Built for builders, students, and creators who live on screens.
        </motionHero.p>

        {/* Email CTA */}
        <motionHero.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="liquid-glass"
          style={{
            borderRadius: 9999, padding: '8px 8px 8px 24px',
            display: 'flex', alignItems: 'center', gap: 12,
            maxWidth: 420, width: '100%',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: 'var(--white)', fontSize: 13, fontFamily: 'var(--font-sans)',
              fontWeight: 300,
            }}
          />
          <motionHero.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 24px oklch(0.52 0.22 22 / 0.5)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: 'var(--red)', border: 'none', cursor: 'pointer',
              width: 40, height: 40, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 14px var(--red-glow)',
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motionHero.button>
        </motionHero.div>

        {/* Manifesto button */}
        <motionHero.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="liquid-glass"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            borderRadius: 9999, padding: '11px 32px',
            color: 'var(--white-70)', fontSize: 12,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            textDecoration: 'none', fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--white-70)'}
        >
          Read the Manifesto
        </motionHero.a>
      </div>

      {/* Social icons */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', justifyContent: 'center', gap: 12,
        paddingBottom: 40,
      }}>
        {[
          // Instagram
          <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
          // Twitter/X
          <svg key="tw" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.04 2.25h6.964l4.282 5.656 5.957-5.656Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>,
          // Globe
          <svg key="gl" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10"/></svg>,
        ].map((icon, i) => (
          <motionHero.a
            key={i}
            href="#"
            className="liquid-glass"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44, borderRadius: '50%',
              color: 'var(--white-70)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--white-70)'}
          >
            {icon}
          </motionHero.a>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection });
