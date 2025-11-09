'use client';

export default function SlideWrapper({ children, bgColor = '#f8fafc' }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      fontFamily: "'Open Sans', sans-serif",
      backgroundColor: bgColor,
      overflow: 'hidden',
      color: '#334155',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {children}
      </div>
    </div>
  );
}

