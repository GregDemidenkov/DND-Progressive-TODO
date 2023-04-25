import { FC } from 'react'

import styles from './header.module.scss'


export const Header: FC = () => {
  
  return (
    <header className = {styles.header}>
      <h1>DND-TODO</h1>
    </header>
  )
}
