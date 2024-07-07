import { Routes, Route } from 'react-router-dom'
import { NavPanel } from './components/NavPanel/NavPanel'
import { NotFound } from './pages/NotFound'
import { CharactersPage } from './pages/CharactersPage/CharactersPage'
import { EpisodesPage } from './pages/EpisodesPage/EpisodesPage'
import { LocationsPage } from './pages/LocationsPage/LocationsPage'
import { CharacterPage } from './pages/CharacterPage/CharacterPage'
import { ContentLayout } from './components/ContentLayout'
import { Footer } from './components/Footer/Footer'
import { HomePage } from './pages/Home/Home'
import { EpisodePage } from './pages/EpisodePage/EpisodePage'
import { LocationPage } from './pages/LocationPage/LocationPage'

export function App() {
  return (
    <>
      <NavPanel />
      <Routes>
        <Route element={<ContentLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:characterId" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/episodes/:id" element={<EpisodePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:id" element={<LocationPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
