import SlideWrapper from './SlideWrapper';

export default function Slide9() {
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
          Key Takeaways
        </h1>
      </div>
      <div style={{ fontSize: '1.2rem', lineHeight: 1.6, flex: 1 }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
              📊
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>India has a big gap:</strong> The richest 1% own 40% of all wealth - that's way too much concentration at the top.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
              ⚖️
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Smart taxes help:</strong> When rich people pay a bit more, and that money goes to good schools and hospitals, everyone wins.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
              ⚠️
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Current problem:</strong> We rely too much on GST (which everyone pays) and we've removed taxes on wealth (which only the rich would pay).
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '1rem' }}>
            <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
              💡
            </span>
            <p style={{ flexGrow: 1 }}>
              <strong>Way forward:</strong> Make income tax fairer at the top, bring back simple wealth taxes, and spend the money on things that help everyone.
            </p>
          </div>
        </div>
        <div style={{
          backgroundColor: '#dbeafe',
          borderLeft: '5px solid #2563eb',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <p style={{ textAlign: 'center', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            What Works?
          </p>
          <p style={{ textAlign: 'center' }}>
            Countries with fair tax systems have stronger growth and fewer social problems - the evidence is clear!
          </p>
        </div>
      </div>
      <div style={{
        backgroundColor: '#e0e7ff',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>Remember:</strong> Good tax policy isn't about punishing success—it's about giving everyone a fair chance.
        </p>
      </div>
    </SlideWrapper>
  );
}

