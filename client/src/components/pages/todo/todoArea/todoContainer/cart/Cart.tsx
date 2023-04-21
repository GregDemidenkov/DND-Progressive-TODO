import { FC } from 'react'

import styles from './cart.module.scss'


export const Cart: FC = () => {
  return (
    <div className = {styles.cart}>
        <p>Some task</p>
        <button>x</button>
    </div>
  )
}
