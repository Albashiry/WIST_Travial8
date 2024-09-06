import { Hero, RecentLaunched, Advertise, CustomViews, HowItWorks, Services, Testimonials, Statistics, FAQ, Footer } from './sections';
import { Nav } from './components';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="max-container hero">
      <Hero />
    </section>
    <section className="max-container bg-coral-red">
      <RecentLaunched />
    </section>
    <section className="bg-black text-white-400">
      <CustomViews />
    </section>
    <section className="max-container">
      <HowItWorks />
    </section>
    <section className="max-container">
      <Services />
    </section>
    <section className="max-container">
      <Testimonials />
    </section>
    <section className="max-container">
      <Statistics />
    </section>
    <section className="max-container">
      <FAQ />
    </section>
    <section className="max-container">
      <Advertise />
    </section>
    <footer className="bg-black text-white-400">
      <Footer />
    </footer>
  </main>
)
export default App;