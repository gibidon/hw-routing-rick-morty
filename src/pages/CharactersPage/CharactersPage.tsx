import { useFetch } from '../../hooks/useFetch'
import { CharacterTemplate } from '../../components/CharacterTemplate/CharacterTemplate'
import * as styles from './charactersPage.module.scss'

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  created: string
}

export const CharactersPage = () => {
  const { data, error, isLoading } = useFetch<ICharacter[]>(`http://localhost:3001/characters`)

  console.log('###data: ', data)

  const dataElems = data?.map((character) => (
    <CharacterTemplate key={character.id} character={character} />
  ))

  return (
    <>
      {isLoading && <div>Loading..</div>}
      <div className={styles.container}>{dataElems}</div>
      {error && <div>Error: {error}</div>}
    </>
  )
}
