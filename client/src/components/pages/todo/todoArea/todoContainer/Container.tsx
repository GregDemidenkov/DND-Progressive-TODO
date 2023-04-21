import { FC } from 'react'

import styles from './container.module.scss'
import { Cart } from './cart/Cart'

type TContainer = {
  type: string
}

export const Container: FC<TContainer> = ({ type }) => {
  return (
    <div className={styles.todoContainer}>
      <h3>{type}</h3>
      <div className = {styles.carts}>
          <Cart />
          <Cart />
          <Cart />
          <Cart />
      </div>
    </div>
  )
}
