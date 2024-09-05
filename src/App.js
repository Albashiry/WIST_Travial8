import {
  Hero,
  RecentLaunched,
  Advertise,
  CustomViews,
  HowItWorks,
  Services,
  Testimonials,
  Statistics,
  FAQ,
  Footer
} from './sections';

const App = () => (
  <main className="relative">
    {/* <Nav /> */}
    <section className="padding wide:padding">
      <Hero />
    </section>
    <section className="padding">
      <RecentLaunched />
    </section>
    <section className="bg-black text-white-400">
      <CustomViews />
    </section>
    <section className="padding">
      <HowItWorks />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <Testimonials />
    </section>
    <section className="padding">
      <Statistics />
    </section>
    <section className="padding">
      <FAQ />
    </section>
    <section className="padding">
      <Advertise />
    </section>
    <footer className="bg-black text-white-400">
      <Footer />
    </footer>
  </main>
)
export default App;