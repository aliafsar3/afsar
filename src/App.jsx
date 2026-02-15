const ASSETS = {
  curtainClosed: 'https://template-teatro.lovable.app/assets/curtain-open-C9MqdT6G.jpg',
  curtainVideo: 'https://template-teatro.lovable.app/assets/curtain-video-BAKLj3Y5.mp4',
  venueIllustration: 'https://template-teatro.lovable.app/assets/venue-illustration-DebdGS8I.png',
  menuFrame: 'https://template-teatro.lovable.app/assets/menu-frame-BFE5kCs7.png',
  dressIllustration: 'https://template-teatro.lovable.app/assets/dresscode-illustration-BT5yPEQh.png',
  giftIcon: 'https://template-teatro.lovable.app/assets/gift-icon-BssCdzah.png'
};

const eventDate = new Date('2027-09-10T18:00:00');

function getCountdown() {
  const now = new Date();
  const diff = Math.max(0, eventDate.getTime() - now.getTime());
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / 1000);

  return { days, hours, minutes, seconds };
}

const countdown = getCountdown();

const menuItems = [
  ['Aperitivo', 'Selección de antipasti toscanos', 'Bruschetta, crostini & affettati misti'],
  ['Primo', 'Risotto al tartufo nero di Norcia', 'con parmigiano reggiano 24 mesi'],
  ['Secondo', 'Filetto di manzo alla griglia', 'con salsa al vino rosso e verdure di stagione'],
  ['Dolce', 'Torta nuziale con crema di mascarpone', 'e frutti di bosco freschi']
];

export default function App() {
  return (
    <main>
      <section className="hero">
        <img src={ASSETS.curtainClosed} alt="Theatre curtain" className="hero-image" />
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" src={ASSETS.curtainVideo} />
        <div className="hero-overlay" />
        <div className="hero-center">
          <p className="caps">Wedding invitation</p>
          <h1 className="script">Sam &amp; Sofía</h1>
          <p className="tap">Tap to continue</p>
        </div>
      </section>

      <section className="paper section-center">
        <h2 className="script">Reveal</h2>
        <p className="caps">Scratch to discover the date</p>
        <div className="date-bubbles">
          <span>10</span>
          <span>Sept</span>
          <span>2027</span>
        </div>
      </section>

      <section className="white section-center">
        <h2 className="script">Countdown</h2>
        <div className="count-grid">
          {[
            ['Days', countdown.days],
            ['Hours', countdown.hours],
            ['Min', countdown.minutes],
            ['Sec', countdown.seconds]
          ].map(([label, value]) => (
            <div className="count-card" key={label}>
              <strong>{value}</strong>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="white section-center venue">
        <p className="caps">The celebration will take place at</p>
        <img src={ASSETS.venueIllustration} alt="Venue Illustration" className="venue-img" />
        <h3>Villa Medicea di Artimino</h3>
        <p>Via di Papa Leone X, 28</p>
        <p>Artimino, Florencia</p>
        <p className="date-line">September 10, 2027</p>
        <p className="script small-script">Reception to Follow</p>
      </section>

      <section className="paper section-center menu">
        <img src={ASSETS.menuFrame} alt="Menu frame" className="menu-frame" />
        <div className="menu-content">
          {menuItems.map(([title, main, sub]) => (
            <article key={title}>
              <h4>{title}</h4>
              <p>{main}</p>
              <p className="italic">{sub}</p>
            </article>
          ))}
          <p className="script tiny">Vini della Tenuta</p>
        </div>
      </section>

      <section className="white section-center">
        <h2>Dress Code</h2>
        <img src={ASSETS.dressIllustration} alt="Dress code" className="dress" />
        <p>We invite you to dress elegantly and formally to celebrate this special day with us.</p>
        <h3>Formal Attire</h3>
        <p className="script small-script">Please avoid wearing white</p>
      </section>

      <section className="paper section-center gifts">
        <p className="caps">Wedding registry</p>
        <img src={ASSETS.giftIcon} alt="Gift" className="gift" />
        <h2>Gifts</h2>
        <p>
          Your presence is the best gift we could receive. However, if you wish to contribute to our
          new life together, you can do so via bank transfer.
        </p>
        <div className="bank-box">
          <p>ACCOUNT HOLDER: SAM &amp; SOFIA</p>
          <p>IBAN: ES00 0000 0000 0000 0000 0000</p>
          <p>REFERENCE: Sam &amp; Sofia Wedding</p>
        </div>
      </section>

      <section className="white section-center transport">
        <p className="caps">How to get there</p>
        <h2>Transport</h2>
        <p>
          We have organized buses from the center of Florence to the villa so you can enjoy the
          celebration without worries.
        </p>
        <p className="caps">Bus departure</p>
        <p>Piazza della Signoria - 16:00h</p>
        <p className="caps">Return to Florence</p>
        <p>02:00h</p>
      </section>

      <section className="paper section-center rsvp" id="rsvp">
        <h2 className="script">Confirm your attendance</h2>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Full Name *
            <input required placeholder="Your name" />
          </label>
          <label>
            Email (optional)
            <input type="email" placeholder="your@email.com" />
          </label>
          <label>
            Message for the couple (optional)
            <textarea rows="3" placeholder="Write us a few words..." />
          </label>
          <button type="submit">Confirm</button>
        </form>
      </section>

      <section className="white section-center thanks">
        <h2 className="script">Thank You</h2>
        <p>For joining us on this special day. Your presence is the best gift we could receive.</p>
        <p className="script small-script">Sam &amp; Sofía</p>
      </section>
    </main>
  );
}
