import { useMemo, useState } from 'react';

const ASSETS = {
  curtainClosed: 'https://template-teatro.lovable.app/assets/curtain-closed-Bpkadld4.jpg',
  curtainOpen: 'https://template-teatro.lovable.app/assets/curtain-open-C9MqdT6G.jpg',
  curtainVideo: 'https://template-teatro.lovable.app/assets/curtain-video-BAKLj3Y5.mp4'
};

export default function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const heroClass = useMemo(() => {
    if (isOpening) return 'hero opening';
    if (isOpened) return 'hero opened';
    return 'hero';
  }, [isOpening, isOpened]);

  const handleOpenCurtain = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);
  };

  return (
    <main className="app-shell">
      <section className={heroClass} role="button" tabIndex={0} onClick={handleOpenCurtain} onKeyDown={(e) => e.key === 'Enter' && handleOpenCurtain()}>
        <img
          className="hero-image"
          src={isOpened ? ASSETS.curtainOpen : ASSETS.curtainClosed}
          alt="Theatre curtain"
        />

        {isOpening && (
          <video
            className="hero-video"
            src={ASSETS.curtainVideo}
            autoPlay
            playsInline
            muted
            onEnded={() => {
              setIsOpening(false);
              setIsOpened(true);
            }}
          />
        )}

        <header className="top-left-badge" aria-label="Teatro Demo">
          <div>
            <p>TEATRO DEMO</p>
            <span>Buy now</span>
          </div>
          <button type="button" aria-label="Info">
            i
          </button>
        </header>

        <nav className="lang-switch" aria-label="Language switch">
          <button type="button" className="active">
            EN
          </button>
          <button type="button">IT</button>
        </nav>

        <article className="hero-content">
          <p className="eyebrow">YOU ARE CORDIALLY INVITED TO CELEBRATE THE WEDDING OF</p>
          <h1>
            Sam
            <span>&amp;</span>
            Sofía
          </h1>
          <p className="message">
            WE WOULD LIKE TO INVITE YOU TO CELEBRATE WITH US THE MOST SPECIAL DAY OF OUR LIVES. IT WOULD
            BE AN HONOR TO HAVE YOU PRESENT AT THIS IMPORTANT MOMENT.
          </p>
          <p className="scroll">SCROLL</p>
          <p className="arrow">↓</p>
        </article>

        {!isOpening && !isOpened && <p className="tap-indicator">Tap to open curtain</p>}

        <button className="sound-btn" type="button" aria-label="Toggle sound">
          🔊
        </button>
      </section>
    </main>
  );
}
