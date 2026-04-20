import { useState } from 'react'
import { motion } from 'motion/react'
import { useIsMobile } from '../hooks/useIsMobile'
import {
  BookOpen, Sparkles, Users, Star, Flame,
  MapPin, CheckCircle2, Quote, MessageCircle,
} from 'lucide-react'

const groups = [
  {
    Icon:     BookOpen,
    title:    'Catequesis Primer Año',
    desc:     'Formación inicial en la fe para niños que inician su camino sacramental.',
    day:      'Sábados',
    time:     '09:30 – 11:00',
    location: 'Sede Parroquial',
    contacts: [
      { name: 'Priscila', phone: '2612097070' },
    ],
    accent: '#c8a84b',
    photo:  '/files/imgParroquia/fotosTemplo.webp',
  },
  {
    Icon:     Sparkles,
    title:    'Sacramento de la Confirmación',
    desc:     'Crecimiento y compromiso en el Espíritu Santo para adolescentes y jóvenes.',
    day:      'Sábados',
    time:     '16:30',
    location: 'Sede Parroquial',
    badge:    'Inscripciones 2026 / 2027',
    requirements: [
      'Tener entre 15 y 19 años',
      'Un alimento no perecedero',
      'Colaboración de $3.000',
    ],
    contacts: [
      { name: 'Enzo',  phone: '2615580851' },
      { name: 'Tomás', phone: '2614999391' },
      { name: 'Luján', phone: '2616722002' },
    ],
    accent: '#c8a84b',
    photo:  '/files/imgParroquia/confirmacion.webp',
  },
  {
    Icon:     Users,
    title:    'Grupo Juvenil Juan Pablo II',
    desc:     'Encuentro, misión y amistad para jóvenes confirmados.',
    motto:    'Jóvenes, ustedes que quieren cambiar el mundo: ¡No tengan miedo!',
    day:      'Sábados',
    time:     '15:00',
    location: 'Salón Parroquial',
    badge:    'Inicio: Sábado 25 de Abril',
    requirements: [
      'Tener la Confirmación',
    ],
    contacts: [
      { name: 'Brian', phone: '2612796607' },
    ],
    accent: '#8b1a2a',
    photo:  '/files/imgParroquia/juanPablpo.webp',
  },
  {
    Icon:     Star,
    title:    'Grupo Juvenil Perseverancia',
    desc:     'Espacio de crecimiento espiritual y comunidad para quienes ya recibieron la Comunión.',
    day:      'Sábados',
    time:     '16:30 – 18:00',
    location: 'Sede Parroquial',
    badge:    'Inscripciones 2026',
    requirements: [
      'Tener la Comunión realizada',
      'Tener hasta 14 años',
      'Colaboración de $2.000',
    ],
    contacts: [
      { name: 'Paula',    phone: '2616847854' },
      { name: 'Victoria', phone: '2614192151' },
    ],
    accent: '#8b1a2a',
    photo:  '/files/imgParroquia/viacrusis.webp',
  },
  {
    Icon:     Flame,
    title:    'Adoración Eucarística en Comunidad',
    desc:     'Una jornada entera de corrido para adorar a Jesús Sacramentado. Todos son bienvenidos.',
    day:      'Viernes',
    time:     '08:00 – 19:00',
    location: 'Sede Parroquial',
    accent:   '#2e7d32',
    photo:    '/files/imgParroquia/jesusMuerto.webp',
  },
]

const formatPhone = (p) => `${p.slice(0, 3)} ${p.slice(3, 6)}-${p.slice(6)}`
const waLink = (p) => `https://wa.me/549${p}`

export default function Groups() {
  const isMobile = useIsMobile()
  return (
    <section id="grupos" style={{ padding: isMobile ? '4rem 0' : '7rem 0', background: '#f0e8d6' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'block', fontFamily: 'Cinzel, serif', fontSize: '0.68rem',
            fontWeight: 700, letterSpacing: '0.42em', textTransform: 'uppercase',
            color: '#c8a84b', marginBottom: '0.85rem',
          }}>
            Participación Activa
          </span>
          <h2 style={{
            fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900, color: '#1a1208', marginBottom: '1.25rem',
          }}>
            Nuestros Grupos
          </h2>
          <div className="gold-line" style={{ maxWidth: '200px', margin: '0 auto' }} />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          style={{
            display:             'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))',
            gap:                 '1.5rem',
            alignItems:          'start',
          }}
        >
          {groups.map(g => <GroupCard key={g.title} g={g} />)}
        </motion.div>
      </div>
    </section>
  )
}

function GroupCard({ g }) {
  const [hovered, setHovered] = useState(false)
  const { Icon } = g
  const isGold = g.accent === '#c8a84b'

  return (
    <motion.div
      variants={{
        hidden:   { opacity: 0, y: 28 },
        visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       'flex',
        flexDirection: 'column',
        borderRadius:  '18px',
        border:        `1px solid ${hovered ? g.accent + '60' : 'rgba(200,168,75,0.15)'}`,
        boxShadow:     hovered
          ? `0 24px 64px rgba(26,18,8,0.28)`
          : '0 2px 16px rgba(26,18,8,0.06)',
        overflow:      'hidden',
        position:      'relative',
        transition:    'border-color 0.35s, box-shadow 0.35s',
        cursor:        'default',
      }}
    >
      {/* Photo layer */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${g.photo})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.45s ease', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(180deg, rgba(13,9,5,0.55) 0%, rgba(13,9,5,0.85) 55%, rgba(13,9,5,0.96) 100%)'
          : 'transparent',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.45s ease', zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', inset: 0, background: '#fdf6ec',
        opacity: hovered ? 0 : 1, transition: 'opacity 0.35s ease', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: `linear-gradient(90deg, ${g.accent}, transparent)`,
        zIndex: 2, opacity: hovered ? 0.7 : 1, transition: 'opacity 0.35s',
      }} />

      {/* Content */}
      <div style={{ padding: '1.75rem 1.75rem 1rem', flex: 1, position: 'relative', zIndex: 2 }}>
        {/* Icon */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '13px',
          background: hovered ? 'rgba(200,168,75,0.25)' : `${g.accent}15`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1rem', transition: 'background 0.35s',
        }}>
          <Icon size={22} color={hovered ? '#e8c97a' : g.accent} strokeWidth={1.7} style={{ transition: 'color 0.35s' }} />
        </div>

        {g.badge && (
          <span style={{
            display: 'inline-block', marginBottom: '0.75rem',
            fontSize: '0.62rem', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            padding: '0.28rem 0.75rem', borderRadius: '100px',
            background: hovered ? 'rgba(200,168,75,0.25)' : `${g.accent}15`,
            color: hovered ? '#e8c97a' : g.accent,
            transition: 'background 0.35s, color 0.35s',
          }}>
            {g.badge}
          </span>
        )}

        <h3 style={{
          fontFamily: 'Cinzel, serif', fontSize: '1.12rem', fontWeight: 700,
          color: hovered ? '#faf8f3' : '#1a1208',
          marginBottom: '0.6rem', transition: 'color 0.35s',
        }}>
          {g.title}
        </h3>
        <p style={{
          fontSize: '0.87rem', lineHeight: 1.65,
          color: hovered ? 'rgba(250,248,243,0.8)' : '#6b5e4a',
          transition: 'color 0.35s',
        }}>
          {g.desc}
        </p>

        {/* Motto */}
        {g.motto && (
          <div style={{
            display: 'flex', gap: '0.5rem', alignItems: 'flex-start',
            marginTop: '0.9rem', padding: '0.75rem 0.9rem',
            borderLeft: `2px solid ${g.accent}`,
            background: hovered ? 'rgba(200,168,75,0.08)' : `${g.accent}0a`,
            borderRadius: '0 8px 8px 0',
            transition: 'background 0.35s',
          }}>
            <Quote size={13} color={hovered ? '#e8c97a' : g.accent} strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{
              fontFamily: 'Crimson Text, serif', fontSize: '0.82rem',
              fontStyle: 'italic', lineHeight: 1.5,
              color: hovered ? 'rgba(250,248,243,0.88)' : '#6b5e4a',
              transition: 'color 0.35s',
            }}>
              "{g.motto}"
            </p>
          </div>
        )}

        {/* Requirements */}
        {g.requirements && g.requirements.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <span style={{
              display: 'block', fontSize: '0.6rem', fontWeight: 800,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: hovered ? '#c8a84b' : '#9a8a74',
              marginBottom: '0.5rem', transition: 'color 0.35s',
            }}>
              Requisitos
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              {g.requirements.map(r => (
                <li key={r} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                  fontSize: '0.82rem', lineHeight: 1.45,
                  color: hovered ? 'rgba(250,248,243,0.85)' : '#6b5e4a',
                  transition: 'color 0.35s',
                }}>
                  <CheckCircle2 size={14} color={hovered ? '#e8c97a' : g.accent} strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Location */}
        {g.location && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            marginTop: '0.9rem', fontSize: '0.78rem',
            color: hovered ? 'rgba(250,248,243,0.75)' : '#9a8a74',
            transition: 'color 0.35s',
          }}>
            <MapPin size={13} strokeWidth={2} />
            <span>{g.location}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: '0.75rem 1.75rem 1.75rem', marginTop: 'auto', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0.85rem 0',
          borderTop:    `1px solid ${hovered ? 'rgba(200,168,75,0.35)' : 'rgba(200,168,75,0.1)'}`,
          borderBottom: `1px solid ${hovered ? 'rgba(200,168,75,0.35)' : 'rgba(200,168,75,0.1)'}`,
          marginBottom: '1rem', transition: 'border-color 0.35s',
        }}>
          <span style={{
            fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: hovered ? '#c8a84b' : '#9a8a74', transition: 'color 0.35s',
          }}>
            {g.day}
          </span>
          <span style={{
            fontSize: '0.88rem', fontWeight: 700, fontFamily: 'Cinzel, serif',
            color: hovered ? '#faf8f3' : '#1a1208', transition: 'color 0.35s',
          }}>
            {g.time} hs
          </span>
        </div>

        {g.contacts && g.contacts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <span style={{
              fontSize: '0.6rem', fontWeight: 800,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: hovered ? '#c8a84b' : '#9a8a74',
              marginBottom: '0.1rem', transition: 'color 0.35s',
            }}>
              Contactar por WhatsApp
            </span>
            {g.contacts.map(c => (
              <a
                key={c.phone}
                href={waLink(c.phone)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '0.6rem', padding: '0.7rem 0.95rem',
                  borderRadius: '10px',
                  background: hovered
                    ? `linear-gradient(135deg, ${g.accent}, ${g.accent}cc)`
                    : g.accent,
                  color: isGold ? '#1a1208' : '#ffffff',
                  textDecoration: 'none',
                  boxShadow: hovered ? `0 6px 20px ${g.accent}44` : 'none',
                  transition: 'box-shadow 0.35s, background 0.35s, transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', minWidth: 0 }}>
                  <MessageCircle size={15} strokeWidth={2.3} style={{ flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.74rem',
                    fontWeight: 700, letterSpacing: '0.04em',
                  }}>
                    {c.name}
                  </span>
                </span>
                <span style={{
                  fontSize: '0.78rem', fontWeight: 600,
                  fontVariantNumeric: 'tabular-nums', opacity: 0.92,
                }}>
                  {formatPhone(c.phone)}
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center', padding: '0.7rem',
            fontSize: '0.75rem', fontStyle: 'italic',
            color: hovered ? 'rgba(250,248,243,0.75)' : '#9a8a74',
            transition: 'color 0.35s',
          }}>
            Todos son bienvenidos — sin inscripción previa.
          </div>
        )}
      </div>
    </motion.div>
  )
}
