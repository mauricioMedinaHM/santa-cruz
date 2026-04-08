import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { href: '#grupos',      label: 'Grupos'       },
  { href: '#inscripcion', label: 'Inscripciones' },
  { href: '#horarios',    label: 'Horarios'     },
  { href: '#canales',     label: 'Seguinos'     },
  { href: '#contacto',    label: 'Contacto'     },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        zIndex:          100,
        background:      scrolled ? 'rgba(13,9,5,0.96)' : 'rgba(13,9,5,0.75)',
        backdropFilter:  'blur(16px)',
        borderBottom:    scrolled ? '1px solid rgba(200,168,75,0.18)' : '1px solid transparent',
        transition:      'background 0.4s, border-color 0.4s',
      }}
    >
      {/* Main bar */}
      <div style={{
        maxWidth:       '1280px',
        margin:         '0 auto',
        padding:        '0 2rem',
        height:         '68px',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src="/files/Frame 48.png" alt="Santa Cruz" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', fontWeight: 700, color: '#c8a84b', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '2px' }}>
              Parroquia
            </span>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 900, color: '#faf8f3', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Santa Cruz
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
          className="hidden md:flex">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily:     'Cinzel, serif',
                fontSize:       '0.78rem',
                fontWeight:     600,
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          '#c8c0b0',
                textDecoration: 'none',
                transition:     'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#e8c97a'}
              onMouseLeave={e => e.target.style.color = '#c8c0b0'}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e8c97a', padding: '0.5rem', lineHeight: 1 }}
          aria-label="Menú"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.75rem' }}>
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={  { opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(200,168,75,0.15)', background: 'rgba(13,9,5,0.98)' }}
          >
            <div style={{ padding: '1rem 2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily:     'Cinzel, serif',
                    fontSize:       '0.82rem',
                    fontWeight:     600,
                    letterSpacing:  '0.12em',
                    textTransform:  'uppercase',
                    color:          '#c8c0b0',
                    textDecoration: 'none',
                    padding:        '0.85rem 0',
                    borderBottom:   '1px solid rgba(200,168,75,0.08)',
                    display:        'block',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
