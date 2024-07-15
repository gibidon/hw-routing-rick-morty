import { useFetch } from '../../hooks/useFetch'
import { EpisodeTemplate } from '../../components/EpisodeTemplate/EpisodeTemplate'
import * as styles from './episodesPage.module.scss'

export interface IEpisode {
  id: string
  name: string
  air_date: string
  episode: string
  created: string
}

export const EpisodesPage = () => {
  const { data, isLoading, error } = useFetch<IEpisode[]>('http://localhost:3001/episodes')

  const episodeElems = data?.map((episode) => <EpisodeTemplate key={episode.id} data={episode} />)

  return (
    <div className={styles.layout}>
      {isLoading && <div>Loading..</div>}
      {episodeElems}
    </div>
  )
}
