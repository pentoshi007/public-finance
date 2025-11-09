import SlideWrapper from './SlideWrapper';

export default function Slide4() {
  return (
    <SlideWrapper>
      <div className="header" style={{ marginBottom: '1rem' }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: '#1e40af',
          fontSize: '2rem',
          borderBottom: '3px solid #1e40af',
          paddingBottom: '0.5rem'
        }}>
          How Taxes Reduce Inequality (Simple View)
        </h1>
      </div>
      <div style={{ fontSize: '1.1rem', lineHeight: 1.5, flex: 1 }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.4rem', fontSize: '1.05rem' }}>Types of Taxes:</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
            <div style={{
              flex: 1,
              padding: '0.75rem',
              margin: '0 0.5rem',
              borderRadius: '8px',
              backgroundColor: '#dbeafe',
              border: '2px solid #2563eb'
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                marginBottom: '0.4rem',
                color: '#1e3a8a',
                fontSize: '1.05rem'
              }}>
                <i className="fas fa-user-tie" style={{ marginRight: '0.5rem' }}></i>Direct Taxes
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>Paid by people/firms on what they earn or own</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
                Examples: Income tax, corporate tax
              </p>
              <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.2rem' }}>
                Easier to make progressive
              </p>
            </div>
            <div style={{
              flex: 1,
              padding: '0.75rem',
              margin: '0 0.5rem',
              borderRadius: '8px',
              backgroundColor: '#fef9c3',
              border: '2px solid #ca8a04'
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                marginBottom: '0.4rem',
                color: '#854d0e',
                fontSize: '1.05rem'
              }}>
                <i className="fas fa-shopping-cart" style={{ marginRight: '0.5rem' }}></i>Indirect Taxes
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>Paid on purchases of goods and services</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
                Examples: GST, sales tax
              </p>
              <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.2rem' }}>
                Often regressive in practice
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '0.75rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.4rem', fontSize: '1.05rem' }}>Progressive vs Regressive:</p>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.6rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
              <i className="fas fa-arrow-up"></i>
            </span>
            <p style={{ flexGrow: 1, margin: 0, fontSize: '0.95rem', lineHeight: 1.4 }}>
              <strong>Progressive taxes:</strong> Higher income → higher tax rate. As your income increases, you pay a larger percentage in tax. This helps narrow the income gap after taxes.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.6rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
              <i className="fas fa-arrow-down"></i>
            </span>
            <p style={{ flexGrow: 1, margin: 0, fontSize: '0.95rem', lineHeight: 1.4 }}>
              <strong>Regressive taxes:</strong> Lower income people pay a larger share of their income. This happens with many indirect taxes because essential purchases take up more of a poor person's budget.
            </p>
          </div>
        </div>
        <div style={{
          backgroundColor: '#dbeafe',
          borderLeft: '5px solid #2563eb',
          padding: '0.75rem',
          borderRadius: '8px'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.05rem' }}>
            <i className="fas fa-sync-alt" style={{ marginRight: '0.5rem' }}></i>How Tax Redistribution Works:
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '66.67%' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
                  <i className="fas fa-check-circle"></i>
                </span>
                <p style={{ flexGrow: 1, margin: 0, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  Step 1: Progressive taxes collect more from high-income earners
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 0 }}>
                <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
                  <i className="fas fa-check-circle"></i>
                </span>
                <p style={{ flexGrow: 1, margin: 0, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  Step 2: Tax revenue funds public services and social programs (education, healthcare, social safety nets)
                </p>
              </div>
            </div>
            <div style={{ width: '33.33%', textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '1.5rem',
                color: '#1e40af',
                margin: 0
              }}>
                →
              </p>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Reduces inequality</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        backgroundColor: '#e0e7ff',
        borderRadius: '8px',
        padding: '0.75rem',
        textAlign: 'center',
        marginTop: '0.75rem'
      }}>
        <p style={{ fontSize: '1rem', margin: 0 }}>
          <strong>Why it works:</strong> Progressive taxes plus good public spending lift lower and middle-income groups and make opportunities more equal
        </p>
      </div>
    </SlideWrapper>
  );
}
