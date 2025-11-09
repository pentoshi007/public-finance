import SlideWrapper from './SlideWrapper';

export default function Slide4() {
  return (
    <SlideWrapper>
      <div className="header" style={{ marginBottom: '1.5rem' }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: '#1e40af',
          fontSize: '2.2rem',
          borderBottom: '3px solid #1e40af',
          paddingBottom: '0.5rem'
        }}>
          How Taxes Reduce Inequality (Simple View)
        </h1>
      </div>
      <div style={{ fontSize: '1.2rem', lineHeight: 1.6, flex: 1 }}>
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Types of Taxes:</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
            <div style={{
              flex: 1,
              padding: '1rem',
              margin: '0 0.5rem',
              borderRadius: '8px',
              backgroundColor: '#dbeafe',
              border: '2px solid #2563eb'
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                marginBottom: '0.5rem',
                color: '#1e3a8a'
              }}>
                👔 Direct Taxes
              </p>
              <p>Paid by people/firms on what they earn or own</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Examples: Income tax, corporate tax
              </p>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.25rem' }}>
                Easier to make progressive
              </p>
            </div>
            <div style={{
              flex: 1,
              padding: '1rem',
              margin: '0 0.5rem',
              borderRadius: '8px',
              backgroundColor: '#fef9c3',
              border: '2px solid #ca8a04'
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                marginBottom: '0.5rem',
                color: '#854d0e'
              }}>
                🛒 Indirect Taxes
              </p>
              <p>Paid on purchases of goods and services</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Examples: GST, sales tax
              </p>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.25rem' }}>
                Often regressive in practice
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Progressive vs Regressive:</p>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>↑</span>
            <p style={{ flexGrow: 1 }}>
              <strong>Progressive taxes:</strong> Higher income → higher tax rate. As your income increases, you pay a larger percentage in tax. This helps narrow the income gap after taxes.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>↓</span>
            <p style={{ flexGrow: 1 }}>
              <strong>Regressive taxes:</strong> Lower income people pay a larger share of their income. This happens with many indirect taxes because essential purchases take up more of a poor person's budget.
            </p>
          </div>
        </div>
        <div style={{
          backgroundColor: '#dbeafe',
          borderLeft: '5px solid #2563eb',
          padding: '1.25rem',
          borderRadius: '8px'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>
            🔄 How Tax Redistribution Works:
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '66.67%' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
                <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>✓</span>
                <p style={{ flexGrow: 1 }}>
                  Step 1: Progressive taxes collect more from high-income earners
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 0 }}>
                <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>✓</span>
                <p style={{ flexGrow: 1 }}>
                  Step 2: Tax revenue funds public services and social programs (education, healthcare, social safety nets)
                </p>
              </div>
            </div>
            <div style={{ width: '33.33%', textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#1e40af'
              }}>
                →
              </p>
              <p style={{ fontSize: '1rem' }}>Reduces inequality</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        backgroundColor: '#e0e7ff',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        marginTop: '1rem'
      }}>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>Why it works:</strong> Progressive taxes plus good public spending lift lower and middle-income groups and make opportunities more equal
        </p>
      </div>
    </SlideWrapper>
  );
}

