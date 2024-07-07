import { ReactNode } from 'react'
import * as styles from './mainLayout.module.scss'

type Props = { children: React.ReactNode }

export const MainLayout = ({ children }: Props) => {
  // return <div className={styles.background}>{children}</div>
  return <div>{children}</div>
}
