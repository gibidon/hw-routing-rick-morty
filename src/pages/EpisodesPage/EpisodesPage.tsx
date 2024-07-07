import { useFetch } from '../../hooks/useFetch'
import { ElementTemplate } from '../../components/ElementTemplate'
import { EpisodeTemplate } from '../../components/EpisodeTemplate/EpisodeTemplate'
import * as styles from './episodesPage.module.scss'
import { Link } from 'react-router-dom'

export interface IEpisode {
  id: string
  name: string
  air_date: string
  episode: string
  created: string
}

export const EpisodesPage = () => {
  const { data, isLoading, error } = useFetch<IEpisode[]>('http://localhost:3001/episodes')

  const episodeElems = data?.map((episode) => (
    // <Link to={`/episodes/${episode.id}`} key={episode.id}>
    // <ElementTemplate key={episode.id} data={episode} />
    <EpisodeTemplate key={episode.id} data={episode} />
    // </Link>
  ))

  return (
    <div className={styles.layout}>
      {isLoading && <div>Loading..</div>}
      {episodeElems}
    </div>
  )
}
