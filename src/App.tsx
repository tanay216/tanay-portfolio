import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WixLayout } from '@/layouts/wix-layout'
import { ContactPage } from '@/pages/contact-page'
import { HomePage } from '@/pages/home-page'
import { MusicPage } from '@/pages/music-page'
import { PortfolioPage } from '@/pages/portfolio-page'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
      <Routes>
        <Route element={<WixLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
