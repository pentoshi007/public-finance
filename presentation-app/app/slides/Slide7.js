import SlideWrapper from './SlideWrapper';

export default function Slide7() {
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
          What's Wrong with India's Tax System?
        </h1>
      </div>
      <div style={{ fontSize: '1.2rem', lineHeight: 1.6, flex: 1 }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#dc2626', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.2rem' }}>
              <i className="fas fa-xmark"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Too much GST:</strong> Poor people pay the same GST rate as rich people on many things - this hurts them more.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#dc2626', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.2rem' }}>
              <i className="fas fa-xmark"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>No wealth tax:</strong> India removed wealth tax in 2015. Now the super-rich don't pay tax on their huge property and wealth.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#dc2626', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.2rem' }}>
              <i className="fas fa-xmark"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Too few pay tax:</strong> Only 2-3% of people actually pay income tax - rest either earn too little or dodge taxes.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#dc2626', marginRight: '0.75rem', flexShrink: 0, fontSize: '1.2rem' }}>
              <i className="fas fa-xmark"></i>
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Big businesses get breaks:</strong> Many big companies pay less tax than they should because of special deals and loopholes.
            </p>
          </div>
        </div>
        <div style={{
          backgroundColor: '#fee2e2',
          borderLeft: '5px solid #dc2626',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '1rem' }}>The Result:</p>
          <div>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              We collect too little tax to help everyone:
            </p>
            <p>
              India:{' '}
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#dc2626'
              }}>
                11.7%
              </span>
              {' '}vs. Developed nations:{' '}
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#059669'
              }}>
                34%
              </span>
            </p>
          </div>
          <div style={{ fontSize: '0.9rem', marginLeft: '1rem', marginTop: '0.5rem' }}>
            <p>
              This means we have much less money for schools, healthcare, and other things that help everyone.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

