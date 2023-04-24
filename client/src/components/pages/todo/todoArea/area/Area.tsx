import { FC } from 'react'

import { Container } from '../container/Container'

import styles from './area.module.scss'


export const Area: FC = () => {

  return (
    <div className = {styles.todoArea}>
        <Container type = {"task"}/>
        <Container type = {"process"}/>
        <Container type = {"done"}/>
    </div>
  )
}
