import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/layout'
import {
  AboutPage,
  ContractPage,
  DisclaimerPage,
  EcosystemPage,
  FaqPage,
  HomePage,
  NotFoundPage,
  PresalePage,
  PrivacyPage,
  RoadmapPage,
  TermsPage,
  TokenomicsPage,
  UseCasesPage,
} from '../pages'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="ecosystem" element={<EcosystemPage />} />
        <Route path="tokenomics" element={<TokenomicsPage />} />
        <Route path="presale" element={<PresalePage />} />
        <Route path="contract" element={<ContractPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
