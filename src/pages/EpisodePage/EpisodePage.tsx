import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { IEpisode } from '../EpisodesPage/EpisodesPage'
import * as styles from './episode.module.scss'
import { EpisodeTemplate } from '../../components/EpisodeTemplate/EpisodeTemplate'

export const EpisodePage = () => {
  console.log('ep')
  const { id } = useParams()
  console.log('id: ', id)
  const { data, error, isLoading } = useFetch<IEpisode[]>(`http://localhost:3001/episodes?id=${id}`)

  console.log('data, ', data)

  const elems = data?.map((episode) => <EpisodeTemplate key={episode.id} data={episode} />)

  return (
    <ul>
      {elems}
      {/* <li>Id: {data.id}</li> */}
      {/* <li>Name: {name}</li> */}
      {/* <li></li>
      <li></li>
      <li></li> */}
    </ul>
  )
}
