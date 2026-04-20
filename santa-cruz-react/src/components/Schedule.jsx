import { motion } from 'motion/react'
import { CalendarCheck, Hourglass, Flame, Mail } from 'lucide-react'
import { useIsMobile } from '../hooks/useIsMobile'

const items = [
  {
    Icon:  CalendarCheck,
    label: 'Santa Misa',
    rows: [
      { when: 'Martes a Sábado', time: '19:00 hs' },
      { when: 'Domingos',        time: '10:00 y 19:00 hs' },
    ],
    accent: '#c8a84b',
  },
  {
    Icon:  Hourglass,
    label: 'Confesiones',
    rows: [
      { when: 'Miércoles a Viernes', time: '17:30 – 19:00 hs' },
    ],
    accent: '#9a7a2e',
  },
  {
    Icon:  Flame,
    label: 'Adoración Eucarística',
    rows: [
      { when: 'Viernes', time: '08:00 – 19:00 hs' },
    ],
    note:   'En comunidad, de corrido',
    accent: '#2e7d32',
  },
  {
    Icon:  Mail,
    label: 'Secretaría Parroquial',
    rows: [
      { when: 'Martes a Jueves', time: '16:30 – 19:30 hs' },
    ],
    note:   'Lunes, viernes y fines de semana cerrado',
    accent: '#8b1a2a',
  },
]

export default function Schedule() {
  const isMobile = useIsMobile()

  return (
    <section id="horarios" style={{
      padding:    isMobile ? '4rem 0' : '6rem 0',
      background: 'linear-gradient(180deg, #120d06 0%, #1a1208 50%, #120d06 100%)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '2.75rem' : '4rem' }}
        >
          <span style={{
            display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.68rem',
            fontWeight: 700, letterSpacing: '0.42em', textTransform: 'uppercase',
            color: '#c8a84b', marginBottom: '0.85rem',
          }}>
            Vida Litúrgica
          </span>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontSize:   isMobile ? 'clamp(1.8rem, 8vw, 2.6rem)' : 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900, color: '#faf8f3', marginBottom: '1.25rem',
          }}>
            Horarios
          </h2>
          <div className="gold-line" style={{ maxWidth: '200px', margin: '0 auto' }} />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display:             'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap:                 isMobile ? '1rem' : '1.5rem',
          }}
        >
          {items.map(it => <Card key={it.label} item={it} />)}
        </motion.div>
      </div>
    </section>
  )
}

function Card({ item }) {
  const { Icon } = item
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      style={{
        display:       'flex',
        flexDirection: 'column',
        padding:       '1.75rem 1.75rem 1.5rem',
        borderRadius:  '16px',
        background:    'rgba(255,255,255,0.03)',
        border:        `1px solid ${item.accent}28`,
        borderLeft:    `3px solid ${item.accent}`,
        boxShadow:     '0 8px 32px rgba(0,0,0,0.25)',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.1rem',
      }}>
        <div style={{
          width: '42px', height: '42px', borderRadius: '11px',
          background: `${item.accent}1f`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={20} color={item.accent} strokeWidth={1.8} />
        </div>
        <h3 style={{
          fontFamily: 'Cinzel, serif', fontSize: '1.02rem', fontWeight: 700,
          color: '#faf8f3', letterSpacing: '0.02em',
        }}>
          {item.label}
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        {item.rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              gap: '0.75rem', padding: '0.45rem 0',
              borderBottom: i < item.rows.length - 1 ? '1px solid rgba(200,168,75,0.1)' : 'none',
            }}
          >
            <span style={{
              fontSize: '0.72rem', fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: '#c8a84b',
            }}>
              {r.when}
            </span>
            <span style={{
              fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700,
              color: '#faf8f3', fontVariantNumeric: 'tabular-nums', textAlign: 'right',
            }}>
              {r.time}
            </span>
          </div>
        ))}
      </div>

      {item.note && (
        <p style={{
          marginTop: '0.9rem', fontSize: '0.76rem', fontStyle: 'italic',
          color: '#9a8a74', lineHeight: 1.5,
        }}>
          {item.note}
        </p>
      )}
    </motion.div>
  )
}
