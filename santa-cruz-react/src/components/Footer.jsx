import { motion } from 'motion/react'
import { useIsMobile } from '../hooks/useIsMobile'

const navLinks = [
  ['#galeria',  'Galería'],
  ['#grupos',   'Grupos Parroquiales'],
  ['#horarios', 'Horarios de Misa'],
  ['#canales',  'Seguinos'],
  ['#contacto', 'Secretaría'],
]

const legalLinks = ['Política de Privacidad', 'Términos de Uso', 'Donaciones']

export default function Footer() {
  const isMobile = useIsMobile()
  return (
    <footer
      id="contacto"
      style={{
        background:  'linear-gradient(180deg, #1a1208 0%, #0d0905 100%)',
        borderTop:   '1px solid rgba(200,168,75,0.14)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '3rem 1.25rem 2rem' : '5rem 2rem 2.5rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display:             'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
            gap:                 isMobile ? '2rem' : '3rem',
            marginBottom:        '2.5rem',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/files/Frame 47.png" alt="Santa Cruz" style={{ height: '44px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', fontWeight: 700, color: '#c8a84b', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '3px' }}>
                  Parroquia
                </span>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', fontWeight: 900, color: '#faf8f3', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Santa Cruz
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#9a8a74', maxWidth: '340px', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              Un lugar de encuentro, oración y servicio para toda la comunidad.
            </p>
            <p style={{ fontSize: '0.82rem', color: '#6b5e4a', marginBottom: '1.75rem' }}>
              Dirección parroquial · Ciudad, Provincia
            </p>

            {/* Developer credit */}
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'0.85rem',
              padding:'0.85rem 1.15rem',
              borderRadius:'12px',
              background:'rgba(200,168,75,0.06)',
              border:'1px solid rgba(200,168,75,0.22)',
            }}>
              <img
                src="https://unavatar.io/instagram/mauri.h.m"
                alt="Mauricio Medina"
                loading="lazy"
                referrerPolicy="no-referrer"
                style={{
                  width:'48px', height:'48px', borderRadius:'50%', flexShrink:0,
                  objectFit:'cover',
                  border:'2px solid rgba(200,168,75,0.45)',
                  background:'linear-gradient(135deg, #c8a84b, #9a7a2e)',
                }}
              />
              <div style={{ display:'flex', flexDirection:'column', gap:'0.15rem', lineHeight:1.3 }}>
                <span style={{ fontSize:'0.68rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.16em', color:'#c8a84b' }}>
                  Desarrollado por
                </span>
                <span style={{ fontFamily:'Cinzel, serif', fontSize:'0.98rem', fontWeight:700, color:'#faf8f3', letterSpacing:'0.02em' }}>
                  Mauricio Medina
                </span>
                <a
                  href="https://www.instagram.com/mauri.h.m/"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:'0.3rem',
                    marginTop:'0.15rem',
                    fontSize:'0.78rem', fontWeight:600, color:'#9a8a74',
                    textDecoration:'none', transition:'color 0.2s', width:'fit-content',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color='#e8c97a'}
                  onMouseLeave={e => e.currentTarget.style.color='#9a8a74'}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @mauri.h.m
                </a>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontFamily:'Cinzel, serif', fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#faf8f3', marginBottom:'1.25rem' }}>
              Navegación
            </h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href} style={{ fontSize:'0.85rem', color:'#9a8a74', textDecoration:'none', transition:'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#c8a84b'}
                    onMouseLeave={e => e.currentTarget.style.color='#9a8a74'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily:'Cinzel, serif', fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#faf8f3', marginBottom:'1.25rem' }}>
              Legales
            </h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {legalLinks.map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize:'0.85rem', color:'#9a8a74', textDecoration:'none', transition:'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#c8a84b'}
                    onMouseLeave={e => e.currentTarget.style.color='#9a8a74'}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="gold-line" style={{ marginBottom: '1.75rem' }} />

        {/* Bottom row */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:'0.75rem' }}>
          <p style={{ fontSize:'0.8rem', color:'#6b5e4a' }}>
            © 2025 Parroquia Santa Cruz. Todos los derechos reservados.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:'#6b5e4a' }}>
            Hecho con
            <span className="material-symbols-outlined" style={{ fontSize:'1rem', color:'#8b1a2a' }}>favorite</span>
            en comunidad
          </div>
        </div>
      </div>

    </footer>
  )
}
