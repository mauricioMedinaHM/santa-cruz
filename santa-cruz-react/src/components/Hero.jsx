import { motion } from 'motion/react'

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 36 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
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
        position:   'absolute', inset: 0,
        backgroundImage:    'url(/files/imgParroquia/fotosTemplo.jpeg)',
        backgroundSize:     'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat:   'no-repeat',
        transform:          'scale(1.04)',
      }} />

      {/* Dark overlay — keeps text readable + maintains sacred mood */}
      <div style={{
        position:   'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(160deg, rgba(13,9,5,0.82) 0%, rgba(26,18,8,0.75) 50%, rgba(13,9,5,0.88) 100%)',
      }} />

      {/* Gold ambient glow */}
      <div style={{
        position:   'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 65% 55% at 55% 38%, rgba(200,168,75,0.07) 0%, transparent 68%)',
      }} />

      {/* Cross watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          position:      'absolute',
          top:           '50%',
          left:          '50%',
          transform:     'translate(-50%, -50%)',
          fontSize:      '32rem',
          color:         '#c8a84b',
          fontFamily:    'Cinzel, serif',
          userSelect:    'none',
          pointerEvents: 'none',
          lineHeight:    1,
        }}
      >✝</motion.div>

      {/* Content */}
      <div style={{
        position:   'relative',
        zIndex:     10,
        maxWidth:   '1280px',
        margin:     '0 auto',
        padding:    '6rem 2rem 4rem',
        width:      '100%',
        display:    'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap:        '4rem',
        alignItems: 'center',
      }}>

        {/* ── Left: Text ── */}
        <div>
          <motion.div {...up(0.2)}>
            <span style={{
              display:      'inline-block',
              fontFamily:   'Cinzel, serif',
              fontSize:     '0.68rem',
              fontWeight:   700,
              letterSpacing:'0.4em',
              textTransform:'uppercase',
              color:        '#c8a84b',
              border:       '1px solid rgba(200,168,75,0.3)',
              background:   'rgba(200,168,75,0.07)',
              borderRadius: '100px',
              padding:      '0.4rem 1rem',
              marginBottom: '2rem',
            }}>
              Parroquia · Santa Cruz
            </span>
          </motion.div>

          <motion.h1 {...up(0.35)} style={{
            fontFamily:   'Cinzel, serif',
            fontSize:     'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight:   900,
            color:        '#faf8f3',
            letterSpacing:'-0.01em',
            marginBottom: '1.5rem',
          }}>
            COMUNIDAD<br />
            <span className="text-gold-gradient">DE&nbsp;FE.</span>
          </motion.h1>

          <motion.p {...up(0.5)} style={{
            fontFamily:   'Crimson Text, serif',
            fontSize:     '1.2rem',
            color:        '#b8a98a',
            lineHeight:   1.7,
            maxWidth:     '480px',
            marginBottom: '2.5rem',
          }}>
            Un espacio sagrado para el crecimiento espiritual, la formación y
            el encuentro fraterno en el corazón de nuestra parroquia.
          </motion.p>

          <motion.div {...up(0.62)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#grupos" style={{
              display:        'inline-flex',
              alignItems:     'center',
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
              transition:     'opacity 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity='0.9'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity='1';   e.currentTarget.style.transform='translateY(0)'   }}
            >
              Ver Grupos
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>arrow_downward</span>
            </a>

            <a href="#horarios" style={{
              display:        'inline-flex',
              alignItems:     'center',
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
              transition:     'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(200,168,75,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              Horarios de Misa
            </a>
          </motion.div>
        </div>

        {/* ── Right: Image ── */}
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
              src="/files/imgParroquia/virgenPuerta .jpg"
              alt="Virgen en la puerta de la Parroquia Santa Cruz"
              className="img-landscape"
              style={{ filter: 'brightness(0.88) contrast(1.05)' }}
            />
          </div>
          {/* Glow dots */}
          <div style={{ position:'absolute', top:'-12px', right:'-12px', width:'64px', height:'64px', borderRadius:'50%', background:'#c8a84b', opacity:0.18, filter:'blur(20px)' }} />
          <div style={{ position:'absolute', bottom:'-10px', left:'-10px', width:'48px', height:'48px', borderRadius:'50%', background:'#8b1a2a', opacity:0.18, filter:'blur(16px)' }} />
        </motion.div>
      </div>

      {/* Bible verse */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{
          position:   'absolute',
          bottom:     '5rem',
          left:       '50%',
          transform:  'translateX(-50%)',
          width:      '100%',
          textAlign:  'center',
          fontFamily: 'Crimson Text, serif',
          fontStyle:  'italic',
          fontSize:   '0.88rem',
          color:      'rgba(200,168,75,0.45)',
          padding:    '0 1.5rem',
          whiteSpace: 'nowrap',
        }}
      >
        "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos." — Mt 18:20
      </motion.p>

      {/* Bounce arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        style={{
          position:  'absolute',
          bottom:    '2rem',
          left:      '50%',
          transform: 'translateX(-50%)',
          color:     'rgba(200,168,75,0.35)',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>keyboard_arrow_down</span>
      </motion.div>
    </section>
  )
}
