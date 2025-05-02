export default function Home() {
  return (
    <div style={{
      background: '#000',
      color: '#0ff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'monospace',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠 Overkore Systems Ready</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.6 }}>Command Interface Detected</p>
      <p style={{ fontSize: '1rem', marginTop: '2rem' }}>Launch <a href="/core/cockpit" style={{ color: '#0f0' }}>Cockpit</a> to engage.</p>
    </div>
  );
}
