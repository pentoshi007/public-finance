import SlideWrapper from './SlideWrapper';

export default function Slide10() {
  return (
    <SlideWrapper>
      <div className="header" style={{ marginBottom: '1.5rem' }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: '#1e40af',
          fontSize: '2.2rem',
          borderBottom: '3px solid #1e40af',
          paddingBottom: '0.5rem',
          textAlign: 'center'
        }}>
          Conclusion
        </h1>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '60px 80px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '2px solid #dbeafe',
          position: 'relative',
          maxWidth: '1000px'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '40px',
            fontSize: '80px',
            color: '#2563eb',
            opacity: 0.15,
            fontFamily: 'Georgia, serif',
            lineHeight: 1
          }}>
            "
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '40px',
            fontSize: '80px',
            color: '#2563eb',
            opacity: 0.15,
            fontFamily: 'Georgia, serif',
            lineHeight: 1
          }}>
            "
          </div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '1.8rem',
            lineHeight: 1.8,
            color: '#1e293b',
            textAlign: 'center',
            fontWeight: 500,
            fontStyle: 'italic',
            margin: 0,
            padding: '0 40px'
          }}>
            India's tax system is not failing by accident, but by design... relying on regressive indirect taxes while progressive taxes on extreme wealth have been abolished.
          </p>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#dbeafe',
        borderRadius: '8px'
      }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1.3rem',
          fontWeight: 600,
          margin: 0,
          color: '#1e40af'
        }}>
          Thank You
        </p>
      </div>
    </SlideWrapper>
  );
}

