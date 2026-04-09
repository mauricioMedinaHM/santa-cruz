import { useState } from 'react'
import { motion } from 'motion/react'
import { useIsMobile } from '../hooks/useIsMobile'
import {
  BookOpen, Sparkles, Users, GraduationCap, HeartHandshake, Music,
  ArrowRight, ExternalLink, TriangleAlert,
} from 'lucide-react'

const groups = [
  {
    Icon:    BookOpen,
    title:   'Catequesis',
    desc:    'Formación inicial en la fe para niños y jóvenes que desean recibir los sacramentos.',
    day:     'Sábados',
    time:    '10:00 – 12:00',
    cta:     'Inscribirme',
    CtaIcon: ArrowRight,
    href:    'https://forms.gle/REEMPLAZAR-CATEQUESIS',
    accent:  '#c8a84b',
    photo:   '/files/imgParroquia/fotosTemplo.webp',
  },
  {
    Icon:    Sparkles,
    title:   'Confirmación',
    desc:    'Crecimiento y compromiso en el Espíritu Santo para adolescentes y adultos.',
    day:     'Viernes',
    time:    '19:00 – 20:30',
    cta:     'Ver Requisitos',
    CtaIcon: ExternalLink,
    href:    'https://forms.gle/REEMPLAZAR-CONFIRMACION',
    accent:  '#c8a84b',
    photo:   '/files/imgParroquia/confirmacion.webp',
  },
  {
    Icon:    Users,
    title:   'Grupo Joven',
    desc:    'Encuentro, misión y amistad para jóvenes mayores de 16 años.',
    day:     'Sábados',
    time:    '17:00 – 19:30',
    cta:     'Sumarme',
    CtaIcon: ArrowRight,
    href:    'https://forms.gle/REEMPLAZAR-GRUPOJOVEN',
    accent:  '#8b1a2a',
    badge:   'Cupos Limitados',
    photo:   '/files/imgParroquia/juanPablpo.webp',
  },
  {
    Icon:    GraduationCap,
    title:   'Apoyo Escolar',
    desc:    'Acompañamiento pedagógico para niños del barrio en sus tareas escolares.',
    day:     'Martes',
    time:    '17:30 – 19:00',
    cta:     'Inscribir Alumno',
    CtaIcon: ArrowRight,
    href:    'https://forms.gle/REEMPLAZAR-APOYOESCOLAR',
    accent:  '#2e7d32',
    photo:   '/files/imgParroquia/viacrusis.webp',
  },
  {
    Icon:    HeartHandshake,
    title:   'Cáritas',
    desc:    'Servicio de asistencia y promoción humana para las familias más necesitadas.',
    day:     'Miércoles',
    time:    '16:00 – 18:30',
    cta:     'Quiero Ayudar',
    CtaIcon: ArrowRight,
    href:    'https://forms.gle/REEMPLAZAR-CARITAS',
    accent:  '#2e7d32',
    photo:   '/files/imgParroquia/jesusMuerto.webp',
  },
  {
    Icon:    Music,
    title:   'Coro Parroquial',
    desc:    'Alabanza a través del canto. Abierto a todas las voces con ganas de participar.',
    day:     'Jueves',
    time:    '20:00 – 21:30',
    cta:     'Unirse al Coro',
    CtaIcon: ArrowRight,
    href:    'https://forms.gle/REEMPLAZAR-CORO',
    accent:  '#c8a84b',
    photo:   '/files/imgParroquia/virgenPuerta .webp',
  },
]

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
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
            gap:                 '1.25rem',
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
  const { Icon, CtaIcon } = g
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
        minHeight:     '340px',
      }}
    >
      {/* ── Photo layer (visible on hover) ── */}
      <div style={{
        position:           'absolute',
        inset:              0,
        backgroundImage:    `url(${g.photo})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        opacity:            hovered ? 1 : 0,
        transition:         'opacity 0.45s ease',
        zIndex:             0,
      }} />

      {/* Overlay on hover to keep text readable */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: hovered
          ? 'linear-gradient(180deg, rgba(13,9,5,0.55) 0%, rgba(13,9,5,0.82) 60%, rgba(13,9,5,0.95) 100%)'
          : 'transparent',
        opacity:    hovered ? 1 : 0,
        transition: 'opacity 0.45s ease',
        zIndex:     1,
      }} />

      {/* Default card background */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: '#fdf6ec',
        opacity:    hovered ? 0 : 1,
        transition: 'opacity 0.35s ease',
        zIndex:     0,
      }} />

      {/* Top accent bar */}
      <div style={{
        position:   'absolute',
        top:        0, left: 0, right: 0,
        height:     '3px',
        background: `linear-gradient(90deg, ${g.accent}, transparent)`,
        zIndex:     2,
        opacity:    hovered ? 0.7 : 1,
        transition: 'opacity 0.35s',
      }} />

      {/* ── Card content ── */}
      <div style={{ padding: '1.75rem 1.75rem 1rem', flex: 1, position: 'relative', zIndex: 2 }}>
        {/* Icon */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '13px',
          background: hovered ? 'rgba(200,168,75,0.25)' : `${g.accent}15`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.25rem',
          transition: 'background 0.35s',
        }}>
          <Icon
            size={22}
            color={hovered ? '#e8c97a' : g.accent}
            strokeWidth={1.7}
            style={{ transition: 'color 0.35s' }}
          />
        </div>

        <h3 style={{
          fontFamily: 'Cinzel, serif', fontSize: '1.12rem', fontWeight: 700,
          color: hovered ? '#faf8f3' : '#1a1208',
          marginBottom: '0.6rem',
          transition: 'color 0.35s',
        }}>
          {g.title}
        </h3>
        <p style={{
          fontSize: '0.87rem',
          color: hovered ? 'rgba(250,248,243,0.8)' : '#6b5e4a',
          lineHeight: 1.65,
          transition: 'color 0.35s',
        }}>
          {g.desc}
        </p>

        {g.badge && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
            marginTop: '0.9rem', fontSize: '0.62rem', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.28rem 0.75rem', borderRadius: '100px',
            background: hovered ? 'rgba(200,168,75,0.25)' : `${g.accent}15`,
            color: hovered ? '#e8c97a' : g.accent,
            transition: 'background 0.35s, color 0.35s',
          }}>
            <TriangleAlert size={11} strokeWidth={2} />
            {g.badge}
          </span>
        )}
      </div>

      {/* ── Footer ── */}
      <div style={{
        padding:    '0.75rem 1.75rem 1.75rem',
        marginTop:  'auto',
        position:   'relative',
        zIndex:     2,
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0.85rem 0',
          borderTop:    `1px solid ${hovered ? 'rgba(200,168,75,0.35)' : 'rgba(200,168,75,0.1)'}`,
          borderBottom: `1px solid ${hovered ? 'rgba(200,168,75,0.35)' : 'rgba(200,168,75,0.1)'}`,
          marginBottom: '1rem',
          transition: 'border-color 0.35s',
        }}>
          <span style={{
            fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: hovered ? '#c8a84b' : '#9a8a74',
            transition: 'color 0.35s',
          }}>
            {g.day}
          </span>
          <span style={{
            fontSize: '0.88rem', fontWeight: 700,
            fontFamily: 'Cinzel, serif',
            color: hovered ? '#faf8f3' : '#1a1208',
            transition: 'color 0.35s',
          }}>
            {g.time} hs
          </span>
        </div>

        <a
          href={g.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '0.45rem', width: '100%', padding: '0.85rem 1rem',
            borderRadius: '10px',
            background: hovered
              ? `linear-gradient(135deg, ${g.accent}, ${g.accent}cc)`
              : g.accent,
            color: isGold ? '#1a1208' : '#ffffff',
            fontFamily: 'Cinzel, serif', fontSize: '0.73rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
            boxShadow: hovered ? `0 6px 24px ${g.accent}55` : 'none',
            transition: 'box-shadow 0.35s, background 0.35s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {g.cta}
          <CtaIcon size={14} strokeWidth={2.5} />
        </a>
      </div>
    </motion.div>
  )
}
