import SlideWrapper from './SlideWrapper';

export default function Slide2() {
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
          Why Income Inequality in India Matters
        </h1>
      </div>
      <div style={{ fontSize: '1.2rem', lineHeight: 1.6, flex: 1 }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0, marginTop: '0.25rem' }}>
              <i className="fas fa-circle-exclamation"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Inequality</strong> is just the gap between rich and poor. When this gap gets too big, it hurts growth and creates social problems.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0, marginTop: '0.25rem' }}>
              <i className="fas fa-chart-line"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              In India, this gap has grown a lot since the 1990s reforms - now it's bigger than ever before.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0, marginTop: '0.25rem' }}>
              <i className="fas fa-scale-balanced"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              This means fewer chances for most people to get ahead, and it can lead to social tensions.
            </p>
          </div>
        </div>
        <div style={{
          backgroundColor: '#dbeafe',
          borderLeft: '5px solid #2563eb',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '32px'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
            The Numbers Tell the Story (2022-23):
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#1e40af'
              }}>
                22.6%
              </p>
              <p style={{ fontSize: '1rem' }}>of income goes to richest 1%</p>
            </div>
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#1e40af'
              }}>
                40.1%
              </p>
              <p style={{ fontSize: '1rem' }}>of wealth owned by richest 1%</p>
            </div>
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#1e40af'
              }}>
                57.7%
              </p>
              <p style={{ fontSize: '1rem' }}>of income goes to top 10%</p>
            </div>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            This presentation looks at how smart tax policies can help fix this problem.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}

