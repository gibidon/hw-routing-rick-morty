import { useFetch } from '../../hooks/useFetch'
import { LocationTemplate } from '../../components/LocationTemplate/LocationTemplate'
import * as styles from './locationsPage.module.scss'

export interface ILocation {
  id: string
  name: string
  type: string
  dimention: string
  created: string
}

export const LocationsPage = () => {
  const { data, error, isLoading } = useFetch<ILocation[]>(`http://localhost:3001/locations`)

  const locationElems = data?.map((location) => (
    <LocationTemplate key={location.id} locationData={location} />
    // <ElementTemplate key={location.id} data={location} />
  ))

  return (
    <>
      {isLoading && <div>Loading..</div>}
      <div className={styles.layout}>{locationElems}</div>
      {error && <div>Error: {error}</div>}
    </>
  )
}
