export default function LargeComponent() {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: 'var(--bg-card)',
      border: '1px dashed var(--accent-cyan)',
      borderRadius: '12px',
      marginTop: '3rem',
      textAlign: 'center',
      boxShadow: '0 0 15px var(--accent-cyan-glow)'
    }}>
      <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
        ⚡ Componente Optimizado
      </h3>
      <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
        Este bloque se carga de forma diferida (Lazy Loading) para acelerar la renderización inicial,
        lo cual mejora significativamente la puntuación Core Web Vitals y el rendimiento SEO.
      </p>
    </div>
  );
}