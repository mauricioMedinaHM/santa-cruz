import { motion } from 'motion/react'
import { useIsMobile } from '../hooks/useIsMobile'

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 36 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      position:   'relative',
      minHeight:  '100vh',
      display:    'flex',
      alignItems: 'center',
      overflow:   'hidden',
    }}>

      {/* Temple background photo */}
      <div style={{
        position:           'absolute', inset: 0,
        backgroundImage:    'url(/files/imgParroquia/fotosTemplo.webp)',
        backgroundSize:     'cover',
        backgroundPosition: isMobile ? 'center center' : 'center 30%',
        backgroundRepeat:   'no-repeat',
        transform:          'scale(1.04)',
      }} />

      {/* Dark overlay */}
      <div style={{
        position:   'absolute', inset: 0, pointerEvents: 'none',
        background: isMobile
          ? 'linear-gradient(180deg, rgba(13,9,5,0.88) 0%, rgba(13,9,5,0.78) 50%, rgba(13,9,5,0.92) 100%)'
          : 'linear-gradient(160deg, rgba(13,9,5,0.82) 0%, rgba(26,18,8,0.75) 50%, rgba(13,9,5,0.88) 100%)',
      }} />

      {/* Gold glow */}
      <div style={{
        position:   'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 65% 55% at 50% 38%, rgba(200,168,75,0.07) 0%, transparent 68%)',
      }} />

      {/* Content */}
      <div style={{
        position:   'relative',
        zIndex:     10,
        maxWidth:   '1280px',
        margin:     '0 auto',
        padding:    isMobile ? '5.5rem 1.5rem 5rem' : '6rem 2rem 4rem',
        width:      '100%',
        display:    'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
        gap:        isMobile ? '2.5rem' : '4rem',
        alignItems: 'center',
      }}>

        {/* Text */}
        <div>
          <motion.div {...up(0.2)}>
            <span style={{
              display:       'inline-block',
              fontFamily:    'Cinzel, serif',
              fontSize:      '0.65rem',
              fontWeight:    700,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color:         '#c8a84b',
              border:        '1px solid rgba(200,168,75,0.3)',
              background:    'rgba(200,168,75,0.07)',
              borderRadius:  '100px',
              padding:       '0.4rem 1rem',
              marginBottom:  '1.5rem',
            }}>
              Parroquia · Santa Cruz
            </span>
          </motion.div>

          <motion.h1 {...up(0.35)} style={{
            fontFamily:    'Cinzel, serif',
            fontSize:      isMobile ? 'clamp(2.6rem, 12vw, 3.5rem)' : 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight:    900,
            color:         '#faf8f3',
            letterSpacing: '-0.01em',
            marginBottom:  '1.25rem',
            lineHeight:    1,
          }}>
            COMUNIDAD<br />
            <span className="text-gold-gradient">DE&nbsp;FE.</span>
          </motion.h1>

          <motion.p {...up(0.5)} style={{
            fontFamily:   'Crimson Text, serif',
            fontSize:     isMobile ? '1.1rem' : '1.2rem',
            color:        '#b8a98a',
            lineHeight:   1.7,
            maxWidth:     '480px',
            marginBottom: '2rem',
          }}>
            Un espacio sagrado para el crecimiento espiritual, la formación y
            el encuentro fraterno en el corazón de nuestra parroquia.
          </motion.p>

          <motion.div {...up(0.62)} style={{
            display:    'flex',
            gap:        '0.85rem',
            flexWrap:   'wrap',
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            <a href="#grupos" style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            '0.5rem',
              padding:        '0.9rem 1.75rem',
              borderRadius:   '10px',
              background:     'linear-gradient(135deg, #c8a84b, #9a7a2e)',
              color:          '#1a1208',
              fontFamily:     'Cinzel, serif',
              fontSize:       '0.78rem',
              fontWeight:     700,
              letterSpacing:  '0.08em',
              textTransform:  'uppercase',
              textDecoration: 'none',
              boxShadow:      '0 6px 28px rgba(200,168,75,0.3)',
            }}>
              Ver Grupos
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>↓</span>
            </a>

            <a href="#horarios" style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            '0.5rem',
              padding:        '0.9rem 1.75rem',
              borderRadius:   '10px',
              border:         '1px solid rgba(200,168,75,0.3)',
              color:          '#e8c97a',
              fontFamily:     'Cinzel, serif',
              fontSize:       '0.78rem',
              fontWeight:     700,
              letterSpacing:  '0.08em',
              textTransform:  'uppercase',
              textDecoration: 'none',
            }}>
              Horarios de Misa
            </a>
          </motion.div>
        </div>

        {/* Image — hide on mobile to keep hero clean */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0,  scale: 1    }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: '18px',
              overflow:     'hidden',
              border:       '1px solid rgba(200,168,75,0.2)',
              boxShadow:    '0 32px 80px rgba(0,0,0,0.65)',
            }}>
              <img
                src="/files/imgParroquia/virgenPuerta .webp"
                alt="Virgen en la puerta de la Parroquia Santa Cruz"
                className="img-landscape"
                style={{ filter: 'brightness(0.88) contrast(1.05)' }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Bible verse */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{
          position:   'absolute',
          bottom:     isMobile ? '4.5rem' : '5rem',
          left:       '50%',
          transform:  'translateX(-50%)',
          width:      '100%',
          textAlign:  'center',
          fontFamily: 'Crimson Text, serif',
          fontStyle:  'italic',
          fontSize:   isMobile ? '0.78rem' : '0.88rem',
          color:      'rgba(200,168,75,0.45)',
          padding:    '0 1.5rem',
        }}
      >
        "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo." — Mt 18:20
      </motion.p>

      {/* Bounce arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        style={{
          position:  'absolute',
          bottom:    isMobile ? '1.5rem' : '2rem',
          left:      '50%',
          transform: 'translateX(-50%)',
          color:     'rgba(200,168,75,0.35)',
        }}
      >
        <span style={{ fontSize: '1.75rem' }}>↓</span>
      </motion.div>
    </section>
  )
}
