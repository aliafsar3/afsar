const eventDetails = {
  bride: 'Aisha',
  groom: 'Rahul',
  date: 'Sunday, 8 December 2026',
  time: '6:30 PM onwards',
  venue: 'The Grand Orchid Lawn, Jaipur',
  hashtag: '#AishaWedsRahul'
};

const schedule = [
  { name: 'Haldi', day: 'Friday', time: '11:00 AM' },
  { name: 'Sangeet Night', day: 'Saturday', time: '7:00 PM' },
  { name: 'Wedding Ceremony', day: 'Sunday', time: '6:30 PM' },
  { name: 'Reception', day: 'Monday', time: '8:00 PM' }
];

export default function App() {
  return (
    <div className="app">
      <header className="hero card">
        <p className="label">You are invited to celebrate</p>
        <h1>
          {eventDetails.bride} <span>&amp;</span> {eventDetails.groom}
        </h1>
        <p className="subtitle">With joy in our hearts, we invite you to witness our union.</p>
        <div className="pill-group">
          <span>{eventDetails.date}</span>
          <span>{eventDetails.time}</span>
          <span>{eventDetails.venue}</span>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h2>Our Story</h2>
          <p>
            From chance conversations to endless laughter, every moment brought us here. We would be
            honored to have your blessings as we begin this beautiful new chapter together.
          </p>
        </section>

        <section className="card">
          <h2>Event Schedule</h2>
          <ul className="timeline">
            {schedule.map((event) => (
              <li key={event.name}>
                <div>
                  <strong>{event.name}</strong>
                  <p>
                    {event.day} · {event.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="card full">
          <h2>RSVP</h2>
          <p>We’d love to celebrate with you. Please confirm your presence by 1st November 2026.</p>
          <button
            type="button"
            onClick={() => {
              window.location.href = 'mailto:rsvp@weddinginvite.com?subject=RSVP%20for%20the%20wedding';
            }}
          >
            Send RSVP
          </button>
          <p className="hashtag">{eventDetails.hashtag}</p>
        </section>
      </main>
    </div>
  );
}
