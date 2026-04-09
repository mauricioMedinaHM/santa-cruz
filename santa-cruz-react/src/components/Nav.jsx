import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '../hooks/useIsMobile'

const links = [
  { href: '#grupos',   label: 'Grupos'   },
  { href: '#horarios', label: 'Horarios' },
  { href: '#canales',  label: 'Seguinos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const isMobile                = useIsMobile()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu when switching to desktop
  useEffect(() => { if (!isMobile) setOpen(false) }, [isMobile])

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position:       'fixed',
        top: 0, left: 0, right: 0,
        zIndex:         100,
        background:     scrolled ? 'rgba(13,9,5,0.97)' : 'rgba(13,9,5,0.78)',
        backdropFilter: 'blur(16px)',
        borderBottom:   scrolled ? '1px solid rgba(200,168,75,0.18)' : '1px solid transparent',
        transition:     'background 0.4s, border-color 0.4s',
      }}
    >
      {/* ── Main bar ── */}
      <div style={{
        maxWidth:       '1280px',
        margin:         '0 auto',
        padding:        isMobile ? '0 1.25rem' : '0 2rem',
        height:         isMobile ? '60px' : '68px',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
          <img
            src="/files/Frame 48.png"
            alt="Santa Cruz"
            style={{ height: isMobile ? '34px' : '40px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'Cinzel, serif',
              fontSize:   isMobile ? '0.55rem' : '0.65rem',
              fontWeight: 700,
              color:      '#c8a84b',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              marginBottom: '2px',
            }}>
              Parroquia
            </span>
            <span style={{
              fontFamily:    'Cinzel, serif',
              fontSize:      isMobile ? '0.95rem' : '1.1rem',
              fontWeight:    900,
              color:         '#faf8f3',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Santa Cruz
            </span>
          </div>
        </a>

        {/* Desktop links — only render when NOT mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
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
        )}

        {/* Mobile hamburger — only render when mobile */}
        {isMobile && (
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#e8c97a', padding: '0.4rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={  { opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            style={{
              overflow:    'hidden',
              borderTop:   '1px solid rgba(200,168,75,0.15)',
              background:  'rgba(13,9,5,0.99)',
            }}
          >
            <div style={{ padding: '0.75rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily:     'Cinzel, serif',
                    fontSize:       '0.9rem',
                    fontWeight:     600,
                    letterSpacing:  '0.1em',
                    textTransform:  'uppercase',
                    color:          '#c8c0b0',
                    textDecoration: 'none',
                    padding:        '1rem 0',
                    borderBottom:   '1px solid rgba(200,168,75,0.1)',
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
