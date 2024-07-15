import { Routes, Route } from 'react-router-dom'
import { NavPanel } from './components/NavPanel/NavPanel'
import { NotFound } from './pages/NotFound'
import { CharactersPage } from './pages/CharactersPage/CharactersPage'
import { EpisodesPage } from './pages/EpisodesPage/EpisodesPage'
import { LocationsPage } from './pages/LocationsPage/LocationsPage'
import { CharacterPage } from './pages/CharacterPage/CharacterPage'
import { ContentLayout } from './components/ContentLayout/ContentLayout'
import { Footer } from './components/Footer/Footer'
import { HomePage } from './pages/Home/Home'
import { EpisodePage } from './pages/EpisodePage/EpisodePage'
import { LocationPage } from './pages/LocationPage/LocationPage'
import { Login } from './pages/Login/Login'
import { PrivatePage } from './pages/PrivatePage/PrivatePage'
import { AuthProvider } from './contexts/AuthProvider'
import { AuthStatus } from './components/AuthStatus/AuthStatus'

export function App() {
  return (
    <>
      <AuthProvider>
        <NavPanel />
        <AuthStatus />
        <Routes>
          <Route path="/" index element={<HomePage />} />

          <Route
            element={
              <PrivatePage>
                <ContentLayout />
              </PrivatePage>
            }
          >
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:characterId" element={<CharacterPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/episodes/:id" element={<EpisodePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:id" element={<LocationPage />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}
