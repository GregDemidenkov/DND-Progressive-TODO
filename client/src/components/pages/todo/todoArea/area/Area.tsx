import { FC } from 'react'

import { Container } from '../container/Container'

import styles from './area.module.scss'
import { observer } from 'mobx-react-lite'


export const Area: FC = observer(() => {

  return (
    <div className = {styles.todoArea}>
        <Container type = {"task"}/>
        <Container type = {"process"}/>
        <Container type = {"done"}/>
    </div>
  )
})
