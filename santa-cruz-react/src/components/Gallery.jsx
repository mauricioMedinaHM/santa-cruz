import { useRef } from 'react'
import { motion } from 'motion/react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/files/imgParroquia/virgenPuerta .jpg', title: 'Virgen en la Puerta',   caption: 'Nuestra Señora en la entrada' },
  { src: '/files/imgParroquia/confirmacion.jpeg', title: 'Confirmación',          caption: 'Sacramento del Espíritu Santo' },
  { src: '/files/imgParroquia/viacrusis.jpg',     title: 'Vía Crucis',            caption: 'El camino de la Cruz' },
  { src: '/files/imgParroquia/jesusMuerto.jpg',   title: 'Cristo Yacente',        caption: 'La pasión de Nuestro Señor' },
  { src: '/files/imgParroquia/juanPablpo.jpg',    title: 'San Juan Pablo II',     caption: 'El Papa peregrino' },
]

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 })

  const prev = () => emblaApi?.scrollPrev()
  const next = () => emblaApi?.scrollNext()

  const btnStyle = (side) => ({
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [side]: '0.75rem', zIndex: 10,
    width: '40px', height: '40px', borderRadius: '50%', border: 'none',
    background: 'rgba(26,18,8,0.7)', backdropFilter: 'blur(8px)',
    color: '#c8a84b', cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
    transition: 'background 0.2s',
  })

  return (
    <section id="galeria" style={{
      padding: '4rem 0 5rem',
      background: '#120d06',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Small header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}
        >
          <span style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.38em', textTransform: 'uppercase', color: '#c8a84b',
            whiteSpace: 'nowrap',
          }}>
            ✝ &nbsp; Galería
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(200,168,75,0.4), transparent)' }} />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={prev}
              style={btnStyle('left')}
              onMouseEnter={e => e.currentTarget.style.background='rgba(200,168,75,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(26,18,8,0.7)'}
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              style={{ ...btnStyle('right'), position: 'relative', top: 'auto', right: 'auto', transform: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(200,168,75,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(26,18,8,0.7)'}
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ overflow: 'hidden', borderRadius: '16px' }}
          ref={emblaRef}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            {images.map(img => (
              <div
                key={img.src}
                style={{
                  flex: '0 0 calc(33.333% - 0.67rem)',
                  minWidth: 0,
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(200,168,75,0.12)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="img-landscape"
                  style={{ filter: 'brightness(0.8) contrast(1.06)', transition: 'filter 0.35s' }}
                  onMouseEnter={e => e.currentTarget.style.filter='brightness(0.95)'}
                  onMouseLeave={e => e.currentTarget.style.filter='brightness(0.8) contrast(1.06)'}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(0deg, rgba(13,9,5,0.85) 0%, transparent 55%)',
                  padding: '1rem 1.25rem',
                }}>
                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.88rem', fontWeight: 700, color: '#faf8f3', marginBottom: '0.2rem' }}>
                    {img.title}
                  </p>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.8rem', color: '#c8a84b' }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
