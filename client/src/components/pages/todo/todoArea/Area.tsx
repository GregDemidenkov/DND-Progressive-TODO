import { FC } from 'react'

import { containerList } from './todoArea.mock'
import { Container } from './todoContainer/Container'

import styles from './area.module.scss'

export const Area: FC = () => {
  return (
    <div className = {styles.todoArea}>
        {
            containerList.map(el => (
                <Container key = {el.id} type = {el.type}/>
            ))
        }
    </div>
  )
}
