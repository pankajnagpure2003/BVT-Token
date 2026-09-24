import {
  About,
  Contract,
  Ecosystem,
  FAQ,
  FinalCTA,
  Hero,
  Roadmap,
  Tokenomics,
  UseCases,
} from '../components/sections'

/** Full marketing landing — all sections in one scroll. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <UseCases />
      <Roadmap />
      <Ecosystem />
      <Tokenomics />
      <Contract />
      <FAQ />
      <FinalCTA />
    </>
  )
}
