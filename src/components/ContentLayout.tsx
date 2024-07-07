import { Outlet } from 'react-router-dom'
import * as styles from './contentLayout.module.scss'

export const ContentLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Outlet />
    </div>
  )
}
