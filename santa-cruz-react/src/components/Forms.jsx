import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  BookOpen, Sparkles, Users, GraduationCap, HeartHandshake, Music,
  ChevronDown, Send, User, Phone, Mail, CalendarDays,
} from 'lucide-react'

const formGroups = [
  { Icon: BookOpen,      title: 'Catequesis',      color: '#c8a84b' },
  { Icon: Sparkles,      title: 'Confirmación',    color: '#c8a84b' },
  { Icon: Users,         title: 'Grupo Joven',     color: '#8b1a2a' },
  { Icon: GraduationCap, title: 'Apoyo Escolar',   color: '#2e7d32' },
  { Icon: HeartHandshake,title: 'Cáritas',          color: '#2e7d32' },
  { Icon: Music,         title: 'Coro Parroquial', color: '#c8a84b' },
]

function ContactForm({ groupTitle, onClose }) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(onClose, 2200)
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    borderRadius: '10px', border: '1px solid rgba(200,168,75,0.25)',
    background: 'rgba(200,168,75,0.04)', color: '#1a1208',
    fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.68rem',
    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6b5e4a', marginBottom: '0.4rem',
  }

  return (
    <div style={{ padding: '2rem' }}>
      {!sent ? (
        <>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1a1208', marginBottom: '0.35rem' }}>
            Inscripción — {groupTitle}
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#9a8a74', marginBottom: '1.5rem' }}>
            Completá tus datos y nos comunicamos a la brevedad.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Nombre y Apellido</label>
              <div style={{ position: 'relative' }}>
                <User size={15} color="#9a8a74" style={{ position:'absolute', left:'0.85rem', top:'50%', transform:'translateY(-50%)' }} />
                <input required type="text" placeholder="Ej: María González" style={{ ...inputStyle, paddingLeft: '2.4rem' }}
                  onFocus={e => e.target.style.borderColor='#c8a84b'}
                  onBlur={e => e.target.style.borderColor='rgba(200,168,75,0.25)'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Teléfono / WhatsApp</label>
              <div style={{ position: 'relative' }}>
                <Phone size={15} color="#9a8a74" style={{ position:'absolute', left:'0.85rem', top:'50%', transform:'translateY(-50%)' }} />
                <input required type="tel" placeholder="Ej: 11 1234-5678" style={{ ...inputStyle, paddingLeft: '2.4rem' }}
                  onFocus={e => e.target.style.borderColor='#c8a84b'}
                  onBlur={e => e.target.style.borderColor='rgba(200,168,75,0.25)'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Correo electrónico</label>
              <div style={{ position: 'relative' }}>
                <Mail size={15} color="#9a8a74" style={{ position:'absolute', left:'0.85rem', top:'50%', transform:'translateY(-50%)' }} />
                <input required type="email" placeholder="tucorreo@ejemplo.com" style={{ ...inputStyle, paddingLeft: '2.4rem' }}
                  onFocus={e => e.target.style.borderColor='#c8a84b'}
                  onBlur={e => e.target.style.borderColor='rgba(200,168,75,0.25)'}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Edad / Año de nacimiento</label>
              <div style={{ position: 'relative' }}>
                <CalendarDays size={15} color="#9a8a74" style={{ position:'absolute', left:'0.85rem', top:'50%', transform:'translateY(-50%)' }} />
                <input required type="text" placeholder="Ej: 14 años / 2010" style={{ ...inputStyle, paddingLeft: '2.4rem' }}
                  onFocus={e => e.target.style.borderColor='#c8a84b'}
                  onBlur={e => e.target.style.borderColor='rgba(200,168,75,0.25)'}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.9rem', borderRadius: '10px', border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #c8a84b, #9a7a2e)',
                color: '#1a1208', fontFamily: 'Cinzel, serif', fontSize: '0.78rem',
                fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                marginTop: '0.5rem', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity='0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}
            >
              Enviar Solicitud
              <Send size={15} strokeWidth={2} />
            </button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: 'center', padding: '1.5rem 0' }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✝</div>
          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 700, color: '#1a1208', marginBottom: '0.5rem' }}>
            ¡Recibimos tu solicitud!
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#6b5e4a', lineHeight: 1.6 }}>
            Nos comunicaremos con vos a la brevedad para confirmar tu inscripción a {groupTitle}.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default function Forms() {
  const [open, setOpen] = useState(null)

  return (
    <section id="inscripcion" style={{ padding: '7rem 0', background: '#e8dcc8' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>

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
            Unite a la Comunidad
          </span>
          <h2 style={{
            fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900, color: '#1a1208', marginBottom: '0.75rem',
          }}>
            Inscripciones
          </h2>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.1rem', color: '#6b5e4a', maxWidth: '480px', margin: '0 auto 1.25rem', lineHeight: 1.7 }}>
            Elegí el grupo al que querés sumarte y completá el formulario de contacto.
          </p>
          <div className="gold-line" style={{ maxWidth: '200px', margin: '0 auto' }} />
        </motion.div>

        {/* Accordion list */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {formGroups.map(g => {
            const { Icon } = g
            const isOpen = open === g.title

            return (
              <motion.div
                key={g.title}
                variants={{
                  hidden:   { opacity: 0, y: 20 },
                  visible:  { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                style={{
                  borderRadius: '14px',
                  border: `1px solid ${isOpen ? g.color + '40' : 'rgba(200,168,75,0.15)'}`,
                  background: '#fdf6ec',
                  boxShadow: isOpen ? `0 8px 32px rgba(26,18,8,0.1)` : '0 2px 12px rgba(26,18,8,0.04)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                {/* Trigger */}
                <button
                  onClick={() => setOpen(isOpen ? null : g.title)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    gap: '1rem', padding: '1.25rem 1.5rem',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '11px', flexShrink: 0,
                    background: `${g.color}14`, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color={g.color} strokeWidth={1.7} />
                  </div>
                  <span style={{ flex: 1, fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, color: '#1a1208' }}>
                    {g.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={18} color="#9a8a74" />
                  </motion.div>
                </button>

                {/* Form panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={  { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22,1,0.36,1] }}
                      style={{ overflow: 'hidden', borderTop: `1px solid ${g.color}20` }}
                    >
                      <ContactForm groupTitle={g.title} onClose={() => setOpen(null)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
