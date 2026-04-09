import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Mission  from './components/Mission'
import Groups   from './components/Groups'
import Gallery  from './components/Gallery'
import Schedule from './components/Schedule'
import Channels from './components/Channels'
import Footer   from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Groups />
        <Gallery />
        <Schedule />
        <Channels />
      </main>
      <Footer />
    </>
  )
}
