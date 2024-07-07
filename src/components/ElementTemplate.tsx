import { ICharacter } from '../pages/CharactersPage/CharactersPage'
import { IEpisode } from '../pages/EpisodesPage/EpisodesPage'
import { ILocation } from '../pages/LocationsPage/LocationsPage'

interface IElementTemplate {
  data: IEpisode | ICharacter | ILocation
}

export const ElementTemplate = ({ data }: IElementTemplate) => {
  const listElems = Object.entries(data).map(([key, value]) =>
    key === 'image' ? (
      <img src={value}></img>
    ) : (
      <li>
        {key}: {value}
      </li>
    ),
  )

  return <ul>{listElems}</ul>
}
