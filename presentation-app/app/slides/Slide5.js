'use client';

import { useEffect, useRef } from 'react';
import SlideWrapper from './SlideWrapper';

export default function Slide5() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && chartRef.current) {
      import('chart.js/auto').then((ChartModule) => {
        const Chart = ChartModule.default;
        
        import('chartjs-plugin-datalabels').then((DataLabelsModule) => {
          const ChartDataLabels = DataLabelsModule.default;
          Chart.register(ChartDataLabels);

          const ctx = chartRef.current.getContext('2d');
          
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
          
          chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['0-4L', '4L-8L', '8L-12L', '12L-16L', '16L-20L', '20L-24L', 'Above 24L'],
              datasets: [{
                label: 'Tax Rate (%)',
                data: [0, 5, 10, 15, 20, 25, 30],
                backgroundColor: [
                  'rgba(37, 99, 235, 0.15)',
                  'rgba(37, 99, 235, 0.25)',
                  'rgba(37, 99, 235, 0.35)',
                  'rgba(37, 99, 235, 0.45)',
                  'rgba(37, 99, 235, 0.55)',
                  'rgba(37, 99, 235, 0.65)',
                  'rgba(37, 99, 235, 0.80)',
                ],
                borderColor: 'rgb(37, 99, 235)',
                borderWidth: 2,
              }],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: 'Progressive Tax Structure',
                  font: { family: "'Montserrat', sans-serif", size: 16, weight: 'bold' },
                  padding: { bottom: 15 },
                },
                legend: { display: false },
                datalabels: {
                  anchor: 'end',
                  align: 'top',
                  color: '#1e40af',
                  font: { weight: 'bold', size: 12 },
                  formatter: function (value) {
                    return value === 0 ? 'Nil' : value + '%';
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Income Bracket (₹)',
                    font: { family: "'Montserrat', sans-serif", size: 14, weight: 'bold' },
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Tax Rate (%)',
                    font: { family: "'Montserrat', sans-serif", size: 14, weight: 'bold' },
                  },
                  ticks: {
                    callback: function (value) {
                      return value + '%';
                    },
                  },
                  min: 0,
                  max: 35,
                },
              },
            },
          });
        });
      });
    }
    
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

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
          How India Taxes Income (2025)
        </h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', flex: 1 }}>
        <div style={{
          width: '50%',
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          overflow: 'auto'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{
                  backgroundColor: '#dbeafe',
                  color: '#1e3a8a',
                  fontWeight: 600,
                  textAlign: 'left',
                  padding: '0.75rem 1rem'
                }}>Income Slab (₹)</th>
                <th style={{
                  backgroundColor: '#dbeafe',
                  color: '#1e3a8a',
                  fontWeight: 600,
                  textAlign: 'left',
                  padding: '0.75rem 1rem'
                }}>Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['0 - 4,00,000', 'Nil'],
                ['4,00,001 - 8,00,000', '5%'],
                ['8,00,001 - 12,00,000', '10%'],
                ['12,00,001 - 16,00,000', '15%'],
                ['16,00,001 - 20,00,000', '20%'],
                ['20,00,001 - 24,00,000', '25%'],
                ['Above 24,00,000', '30%'],
              ].map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>{row[0]}</td>
                  <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0' }}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{
          flex: 1,
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          padding: '16px',
          height: '400px'
        }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
      <div style={{
        backgroundColor: '#dbeafe',
        padding: '12px',
        borderRadius: '8px',
        marginTop: '24px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', marginTop: '0.25rem', flexShrink: 0 }}>
            <i className="fas fa-arrow-up"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5 }}>
            <strong>Progressive structure:</strong> Tax rates increase with income - from 0% for incomes up to ₹4 lakh to 30% for incomes above ₹24 lakh.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', marginTop: '0.25rem', flexShrink: 0 }}>
            <i className="fas fa-info-circle"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5 }}>
            <strong>Additional charges:</strong> High earners also pay surcharge and cess on top of these base rates.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', marginTop: '0.25rem', flexShrink: 0 }}>
            <i className="fas fa-exchange-alt"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5 }}>
            <strong>New tax regime:</strong> This simplified system has fewer deductions but lower rates compared to the old system.
          </p>
        </div>
      </div>
      <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#64748b', textAlign: 'right', marginTop: '0.5rem' }}>
        <p>Source: Income Tax Department, Government of India (Updated 2025)</p>
      </div>
    </SlideWrapper>
  );
}

