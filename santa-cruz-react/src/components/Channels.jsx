import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

/* ── WhatsApp SVG ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

/* ── Instagram SVG ── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

/* ── Megaphone / Canal SVG ── */
const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1a1208" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
  </svg>
)

const channels = [
  {
    Ico:      WhatsAppIcon,
    title:    'WhatsApp',
    desc:     'Escribinos directamente para consultas y novedades',
    cta:      'Escribirnos',
    href:     'https://wa.me/5491100000000',
    iconBg:   '#25D366',
    ctaColor: '#25D366',
  },
  {
    Ico:      InstagramIcon,
    title:    'Instagram',
    desc:     'Fotos, anuncios y momentos de nuestra comunidad',
    cta:      'Seguirnos',
    href:     'https://instagram.com/parroquiasantacruz',
    iconBg:   'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
    ctaColor: '#DD2A7B',
  },
  {
    Ico:      MegaphoneIcon,
    title:    'Canal de Difusión',
    desc:     'Recibí avisos y recordatorios de la parroquia',
    cta:      'Suscribirse',
    href:     'https://wa.me/5491100000000',
    iconBg:   '#c8a84b',
    ctaColor: '#9a7a2e',
  },
]

export default function Channels() {
  return (
    <section id="canales" style={{ padding: '7rem 0', background: '#f0e8d6' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{
            display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.68rem',
            fontWeight: 700, letterSpacing: '0.42em', textTransform: 'uppercase',
            color: '#c8a84b', marginBottom: '0.85rem',
          }}>
            Comunidad
          </span>
          <h2 style={{
            fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900, color: '#1a1208', marginBottom: '0.75rem',
          }}>
            Seguinos y conectate
          </h2>
          <p style={{
            fontFamily: 'Crimson Text, serif', fontSize: '1.12rem',
            color: '#6b5e4a', maxWidth: '500px', margin: '0 auto 1.25rem', lineHeight: 1.7,
          }}>
            Estamos en varios canales para que puedas estar al tanto de todo lo que pasa en la parroquia.
          </p>
          <div className="gold-line" style={{ maxWidth: '200px', margin: '0 auto' }} />
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap:                 '1.5rem',
            maxWidth:            '900px',
            margin:              '0 auto',
          }}
        >
          {channels.map(c => {
            const { Ico } = c
            return (
              <motion.a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden:   { opacity: 0, y: 28 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  display:        'flex',
                  flexDirection:  'column',
                  alignItems:     'center',
                  textAlign:      'center',
                  gap:            '1rem',
                  padding:        '2.25rem 1.75rem',
                  borderRadius:   '20px',
                  background:     '#fdf6ec',
                  border:         '1px solid rgba(200,168,75,0.14)',
                  boxShadow:      '0 2px 20px rgba(26,18,8,0.05)',
                  textDecoration: 'none',
                  transition:     'box-shadow 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 14px 44px rgba(26,18,8,0.1)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 20px rgba(26,18,8,0.05)'}
              >
                {/* App-style icon */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '18px',
                  background: c.iconBg, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.14)',
                  flexShrink: 0,
                }}>
                  <Ico />
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, color: '#1a1208', marginBottom: '0.4rem' }}>
                    {c.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#6b5e4a', lineHeight: 1.55 }}>
                    {c.desc}
                  </p>
                </div>

                <span style={{
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase',
                  letterSpacing: '0.14em', color: c.ctaColor, fontFamily: 'Cinzel, serif',
                }}>
                  {c.cta}
                  <ArrowRight size={13} strokeWidth={2.5} />
                </span>
              </motion.a>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
