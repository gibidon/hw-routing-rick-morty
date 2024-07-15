import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { CharacterTemplate } from '../../components/CharacterTemplate/CharacterTemplate'
import * as styles from './charactersPage.module.scss'
import { useState } from 'react'

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
  const navigate = useNavigate()

  const dataElems = data?.map((character) => (
    <CharacterTemplate key={character.id} character={character} />
  ))

  return (
    <>
      {isLoading && <div>Loading..</div>}
      <div className={styles.container}>{dataElems}</div>
      {error && <div>Error: {error}</div>}

      <div>
        <button onClick={() => navigate(-1)} className={styles.goBackBtn}>
          Go back
        </button>
      </div>
    </>
  )
}
