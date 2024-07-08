import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import { ICharacter } from '../CharactersPage/CharactersPage'
import { CharacterTemplate } from '../../components/CharacterTemplate/CharacterTemplate'

export const CharacterPage = () => {
  const { characterId } = useParams()

  const { data, isLoading, error } = useFetch<Array<ICharacter>>(
    `http://localhost:3001/characters?id=${characterId}`,
  )

  const elems = data?.map((character) => (
    <CharacterTemplate key={character.id} character={character} />
  ))
  return (
    <>
      <h1>Character info:</h1>
      {elems}
    </>
  )
}
