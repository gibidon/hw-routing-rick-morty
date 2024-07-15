import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import * as styles from './navPanel.module.scss'

export const NavPanel = () => {
  const auth = useAuth()

  return (
    <>
      <div className={styles.logo}>
        <Link to="/">Rick & Morty</Link>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.greeting}>
          {auth.user === null ? 'You are not logged in' : `Hello,${auth.user}`}
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
          <li>
            <NavLink to="/login">login page</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
