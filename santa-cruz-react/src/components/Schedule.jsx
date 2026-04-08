import { motion } from 'motion/react'

const highlights = [
  { icon:'event_available',     title:'Misas de Domingo',     detail:'08:00 hs | 11:00 hs | 19:30 hs',                              accent:'#c8a84b' },
  { icon:'hourglass_empty',     title:'Confesiones',          detail:'30 min antes de cada misa o con turno previo.',               accent:'#9a7a2e' },
  { icon:'baby_changing_station',title:'Bautismos',           detail:'Primer y tercer domingo del mes. Consultar en secretaría.',   accent:'#8b1a2a' },
]

const weekly = [
  { day:'Lunes a Viernes', event:'Santa Misa',             time:'19:00' },
  { day:'Jueves',          event:'Adoración Eucarística',  time:'18:00', badge:'Hora Santa' },
  { day:'Sábados',         event:'Misa de Vísperas',       time:'19:30' },
  { day:'Primer Viernes',  event:'Misa Sagrado Corazón',   time:'08:00' },
  { day:'Martes',          event:'Apoyo Escolar',          time:'17:30' },
  { day:'Miércoles',       event:'Cáritas',                time:'16:00' },
  { day:'Jueves',          event:'Coro Parroquial',        time:'20:00' },
  { day:'Viernes',         event:'Confirmación',           time:'19:00' },
  { day:'Sábados',         event:'Catequesis + Grupo Joven', time:'10:00 / 17:00' },
]

export default function Schedule() {
  return (
    <section id="horarios" style={{
      padding:    '6rem 0',
      background: 'linear-gradient(180deg, #120d06 0%, #1a1208 50%, #120d06 100%)',
    }}>
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
            Vida Litúrgica
          </span>
          <h2 style={{
            fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900, color: '#faf8f3', marginBottom: '1.25rem',
          }}>
            Horarios
          </h2>
          <div className="gold-line" style={{ maxWidth: '200px', margin: '0 auto' }} />
        </motion.div>

        {/* Two-column layout */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '3rem',
          alignItems:          'start',
        }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'Crimson Text, serif', fontSize: '1.15rem',
              color: '#b8a98a', lineHeight: 1.8, marginBottom: '2rem',
            }}>
              Nuestra comunidad se reúne diariamente para celebrar la Eucaristía y compartir
              momentos de oración profunda. Te esperamos con el corazón abierto.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {highlights.map(h => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5 }}
                  style={{
                    display:      'flex', alignItems: 'flex-start', gap: '1rem',
                    padding:      '1.1rem 1.25rem',
                    borderRadius: '12px',
                    background:   'rgba(255,255,255,0.03)',
                    border:       `1px solid ${h.accent}28`,
                    borderLeft:   `3px solid ${h.accent}`,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: h.accent, fontSize: '1.4rem', marginTop: '2px', flexShrink: 0 }}>
                    {h.icon}
                  </span>
                  <div>
                    <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.95rem', fontWeight: 700, color: '#faf8f3', marginBottom: '0.3rem' }}>
                      {h.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#9a8a74', lineHeight: 1.5 }}>
                      {h.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — table */}
          <motion.div
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div style={{
              borderRadius: '18px', overflow: 'hidden',
              border: '1px solid rgba(200,168,75,0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
            }}>
              {/* Table head */}
              <div style={{
                padding: '1.1rem 1.75rem', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center',
                background: '#1a1208', borderBottom: '1px solid rgba(200,168,75,0.14)',
              }}>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, color: '#faf8f3' }}>
                  Calendario Semanal
                </h3>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c8a84b' }}>
                  Lun – Sáb
                </span>
              </div>

              {/* Rows */}
              <div style={{ background: '#fdf6ec' }}>
                {weekly.map((row, i) => (
                  <div
                    key={i}
                    style={{
                      padding:      '1rem 1.75rem',
                      display:      'flex',
                      justifyContent: 'space-between',
                      alignItems:   'center',
                      borderBottom: i < weekly.length - 1 ? '1px solid rgba(200,168,75,0.07)' : 'none',
                      transition:   'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f5ecda'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div>
                      <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#c8a84b', marginBottom: '0.2rem' }}>
                        {row.day}
                      </span>
                      <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.92rem', fontWeight: 700, color: '#1a1208' }}>
                        {row.event}
                      </span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', fontWeight: 900, color: '#1a1208' }}>
                        {row.time}
                      </span>
                      {row.badge && (
                        <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8b1a2a', marginTop: '2px' }}>
                          {row.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Table footer */}
              <div style={{
                padding:         '1rem 1.75rem',
                display:         'flex', flexWrap: 'wrap',
                justifyContent:  'space-between', alignItems: 'center',
                gap:             '0.75rem',
                background:      '#1a1208',
                borderTop:       '1px solid rgba(200,168,75,0.14)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="material-symbols-outlined" style={{ color: '#c8a84b', fontSize: '1.1rem' }}>notification_important</span>
                  <span style={{ fontSize: '0.8rem', color: '#b8a98a' }}>¿Cambios por feriados?</span>
                </div>
                <a
                  href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer"
                  style={{
                    fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase',
                    letterSpacing: '0.12em', color: '#c8a84b',
                    textDecoration: 'underline', textUnderlineOffset: '3px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color='#e8c97a'}
                  onMouseLeave={e => e.currentTarget.style.color='#c8a84b'}
                >
                  Consultar WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
