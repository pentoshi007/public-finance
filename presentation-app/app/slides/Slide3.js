'use client';

import { useEffect, useRef } from 'react';
import SlideWrapper from './SlideWrapper';

export default function Slide3() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && chartRef.current) {
      // Dynamically import Chart.js
      import('chart.js/auto').then((ChartModule) => {
        const Chart = ChartModule.default;
        
        // Import and register datalabels plugin
        import('chartjs-plugin-datalabels').then((DataLabelsModule) => {
          const ChartDataLabels = DataLabelsModule.default;
          Chart.register(ChartDataLabels);

          const ctx = chartRef.current.getContext('2d');
          
          // Destroy existing chart if it exists
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
          
          chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['1981', '1991', '2001', '2011', '2022-23'],
              datasets: [
                {
                  label: 'Top 10% Wealth Share',
                  data: [45.1, 49.6, 51.1, 59.6, 63.9],
                  backgroundColor: 'rgba(59, 130, 246, 0.6)',
                  order: 4,
                  barPercentage: 0.6,
                  categoryPercentage: 0.8,
                },
                {
                  label: 'Top 1% Wealth Share',
                  data: [12.6, 16.1, 18.5, 29.4, 40.1],
                  backgroundColor: 'rgba(29, 78, 216, 0.7)',
                  order: 3,
                  barPercentage: 0.6,
                  categoryPercentage: 0.8,
                },
                {
                  label: 'Top 10% Income Share',
                  data: [30.7, 35.1, 40.0, 54.3, 57.7],
                  type: 'line',
                  borderColor: 'rgb(234, 88, 12)',
                  backgroundColor: 'rgb(234, 88, 12)',
                  borderWidth: 3,
                  pointBackgroundColor: 'rgb(234, 88, 12)',
                  pointRadius: 5,
                  pointHoverRadius: 7,
                  order: 1,
                  tension: 0.3,
                },
                {
                  label: 'Top 1% Income Share',
                  data: [6.2, 10.3, 14.7, 21.3, 22.6],
                  type: 'line',
                  borderColor: 'rgb(194, 65, 12)',
                  backgroundColor: 'rgb(194, 65, 12)',
                  borderWidth: 3,
                  pointBackgroundColor: 'rgb(194, 65, 12)',
                  pointRadius: 5,
                  pointHoverRadius: 7,
                  order: 2,
                  tension: 0.3,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top',
                  labels: {
                    font: { family: "'Open Sans', sans-serif", size: 12 },
                    padding: 20,
                  },
                },
                datalabels: {
                  display: true,
                  anchor: 'end',
                  align: 'top',
                  color: function (context) {
                    if (context.dataset.type === 'line') {
                      return context.dataset.borderColor;
                    }
                    return '#1e3a8a';
                  },
                  font: { weight: 'bold', size: 10 },
                  formatter: function (value) {
                    return value + '%';
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Year',
                    font: { family: "'Montserrat', sans-serif", size: 14, weight: 'bold' },
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Percentage Share (%)',
                    font: { family: "'Montserrat', sans-serif", size: 14, weight: 'bold' },
                  },
                  ticks: {
                    callback: function (value) {
                      return value + '%';
                    },
                  },
                  min: 0,
                  max: 70,
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
      <div className="header" style={{ marginBottom: '0.75rem' }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: '#1e40af',
          fontSize: '2.2rem',
          borderBottom: '3px solid #1e40af',
          paddingBottom: '0.5rem'
        }}>
          The Growing Gap: Who Has India's Money?
        </h1>
      </div>
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        flex: 1,
        padding: '12px',
        marginBottom: '16px',
        minHeight: 0
      }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div style={{
        backgroundColor: '#dbeafe',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
            <i className="fas fa-arrow-trend-up"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5, margin: 0 }}>
            <strong>After 1991, the rich got much richer:</strong> The top 1%'s income share jumped from 6.2% to 22.6% - more than triple!
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
            <i className="fas fa-coins"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5, margin: 0 }}>
            <strong>Wealth gap is even worse than income gap:</strong> By 2022-23, the richest 1% owned 40% of all wealth, up from just 12.6% in 1981.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
            <i className="fas fa-chart-pie"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5, margin: 0 }}>
            <strong>Most growth went to the top:</strong> This created what's called the "Billionaire Raj" - even more unequal than during British rule.
          </p>
        </div>
      </div>
      <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#64748b', textAlign: 'right' }}>
        <p style={{ margin: 0 }}>Source: World Inequality Lab (Bharti et al., 2024)</p>
      </div>
    </SlideWrapper>
  );
}

