export default function Slide1() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      fontFamily: "'Open Sans', sans-serif",
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 30, 60, 0.7)), url('https://page.gensparksite.com/slides_images/8c76fcd87ef3d3f6bda53da36e8e6fd0.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 64px'
    }}>
      <div>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '2.5rem',
          lineHeight: 1.2,
          marginBottom: '0.5rem'
        }}>
          The Role of Taxation Policies in
        </p>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '2.5rem',
          lineHeight: 1.2,
          marginBottom: '0.5rem'
        }}>
          Reducing Income Inequality
        </p>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '1.7rem',
          marginBottom: '2rem'
        }}>
          A Study with Reference to India
        </p>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '0.5rem',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>
          Presented by:
        </p>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '0.25rem'
        }}>
          Aniket Pandey
        </p>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          Registration Number: 210310762828
        </p>
      </div>
    </div>
  );
}

