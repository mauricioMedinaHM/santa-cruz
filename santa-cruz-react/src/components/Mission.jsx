import { motion } from 'motion/react'
import { Cross, BookOpen, Heart, Users, Globe, Flame } from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    title: 'Evangelización',
    desc: 'Anunciar la Buena Nueva de Jesucristo a toda persona, en todo tiempo y lugar.',
  },
  {
    icon: Heart,
    title: 'Caridad',
    desc: 'Servir a los más pobres y vulnerables como expresión concreta del amor de Dios.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    desc: 'Construir un pueblo unido en la fe, la esperanza y el amor fraterno.',
  },
  {
    icon: Flame,
    title: 'Liturgia',
    desc: 'Celebrar los sacramentos como fuente de gracia y encuentro con el Señor resucitado.',
  },
  {
    icon: Globe,
    title: 'Misión',
    desc: 'Salir al encuentro del mundo, llevando la paz y el testimonio del Evangelio.',
  },
  {
    icon: Cross,
    title: 'Santificación',
    desc: 'Acompañar a cada persona en su camino hacia la plenitud de vida en Cristo.',
  },
]

export default function Mission() {
  return (
    <section style={{
      padding:    '7rem 0',
      background: 'linear-gradient(180deg, #1a1208 0%, #120d06 100%)',
      position:   'relative',
      overflow:   'hidden',
    }}>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(200,168,75,0.07) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.68rem',
            fontWeight: 700, letterSpacing: '0.42em', textTransform: 'uppercase',
            color: '#c8a84b', marginBottom: '1rem',
          }}>
            ✝ &nbsp; Nuestra Razón de Ser &nbsp; ✝
          </span>
          <h2 style={{
            fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900, color: '#faf8f3', marginBottom: '1.25rem',
          }}>
            El Fin de la Iglesia Católica
          </h2>
          <div className="gold-line" style={{ maxWidth: '200px', margin: '0 auto 2rem' }} />
          <p style={{
            fontFamily: 'Crimson Text, serif', fontSize: '1.2rem',
            color: '#b8a98a', maxWidth: '680px', margin: '0 auto',
            lineHeight: 1.8, fontStyle: 'italic',
          }}>
            "La Iglesia existe para evangelizar, es decir, para llevar la Buena Nueva a todos los
            ambientes de la humanidad y, con su influencia, transformar desde dentro, renovar a la
            misma humanidad." — Pablo VI
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {pillars.map(p => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={{
                  hidden:   { opacity: 0, y: 24 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  padding:      '1.75rem',
                  borderRadius: '16px',
                  background:   'rgba(255,255,255,0.03)',
                  border:       '1px solid rgba(200,168,75,0.14)',
                  display:      'flex',
                  gap:          '1.25rem',
                  alignItems:   'flex-start',
                  transition:   'background 0.2s, border-color 0.2s',
                  cursor:       'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(200,168,75,0.06)'; e.currentTarget.style.borderColor='rgba(200,168,75,0.28)' }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(200,168,75,0.14)' }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  background: 'rgba(200,168,75,0.12)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color="#c8a84b" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, color: '#faf8f3', marginBottom: '0.5rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.87rem', color: '#9a8a74', lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Central quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{
            textAlign:    'center',
            padding:      '3rem 2rem',
            borderRadius: '20px',
            background:   'rgba(200,168,75,0.05)',
            border:       '1px solid rgba(200,168,75,0.18)',
          }}
        >
          <span style={{ fontSize: '2.5rem', color: '#c8a84b', display: 'block', marginBottom: '1rem' }}>✝</span>
          <p style={{
            fontFamily: 'Crimson Text, serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontStyle: 'italic', color: '#d4c9b0', lineHeight: 1.75,
            maxWidth: '720px', margin: '0 auto 1.25rem',
          }}>
            "Id por todo el mundo y proclamad el Evangelio a toda criatura."
          </p>
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', color: '#c8a84b', textTransform: 'uppercase' }}>
            Marcos 16:15
          </span>
        </motion.div>

      </div>
    </section>
  )
}
