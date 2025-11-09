import SlideWrapper from './SlideWrapper';

export default function Slide8() {
  return (
    <SlideWrapper>
      <div className="header" style={{ marginBottom: '1rem' }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: '#1e40af',
          fontSize: '2.2rem',
          borderBottom: '3px solid #1e40af',
          paddingBottom: '0.5rem'
        }}>
          What Can India Do? Simple Steps Forward
        </h1>
      </div>
      <div style={{ fontSize: '1.2rem', lineHeight: 1.6, flex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.2rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.4rem' }}>
              <i className="fas fa-chart-line"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Tax the super-rich more</strong>. The top rates work best to reduce the gap. Add a bit more tax just for the wealthiest people.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.2rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.4rem' }}>
              <i className="fas fa-landmark"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Bring back wealth taxes</strong> with better tech. This helps with the fact that 1% of people own 40% of all wealth in India.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.2rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.4rem' }}>
              <i className="fas fa-shopping-cart"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Keep GST low on basics</strong>. Food and medicine should stay at 0-5% so poor families aren't hurt by these taxes.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1.2rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.4rem' }}>
              <i className="fas fa-expand-arrows-alt"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Get more people into the tax system</strong>. Help small businesses join the formal economy and use better tech to catch tax dodgers.
            </p>
          </div>
        </div>
        <div style={{
          backgroundColor: '#dbeafe',
          borderLeft: '5px solid #2563eb',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: '#2563eb', marginRight: '16px', fontSize: '1.4rem' }}>
              <i className="fas fa-hospital-user"></i>
            </div>
            <p>
              <strong>Learn from countries like Sweden:</strong> Use tax money for good schools and healthcare that everyone can use. When people see their taxes doing good things, they trust the system more.
            </p>
          </div>
        </div>
      </div>
      <div style={{
        backgroundColor: '#e0e7ff',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '16px',
        textAlign: 'center'
      }}>
        <p>
          India's tax collection is only 11.7% of GDP - we need to reach 15% to fund proper development. Countries that collect more taxes have less inequality.
        </p>
      </div>
    </SlideWrapper>
  );
}

