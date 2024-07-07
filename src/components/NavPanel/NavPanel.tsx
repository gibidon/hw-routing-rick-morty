import { NavLink } from 'react-router-dom'
import * as styles from './navPanel.module.scss'
import { Link } from 'react-router-dom'

export const NavPanel = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.greeting}>Hello,User!</div>
      <div className={styles.logo}>
        <Link to="/">Rick & Morty</Link>
      </div>
      <ul className={styles.panel}>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
      </ul>
    </nav>
  )
}
