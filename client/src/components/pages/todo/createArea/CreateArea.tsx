import { FC, useState, ChangeEvent } from 'react'

import styles from './createArea.module.scss'
import tasks from '@/store/tasks'

export const CreateArea: FC = () => {

  const [curText, setCurText] = useState("")

  const createTaskHandler = () => {
    if (curText.length > 0 && curText.length < 100) {
      tasks.createTask(curText, "task")
      setCurText("")
    }
  }

  return (
    <div className = {styles.wrapper}>
      <input 
        type = "text" 
        placeholder = 'Enter a task...'
        value = {curText}
        onChange = {(e: ChangeEvent<HTMLInputElement>) => setCurText(e.target.value)}
      />
      <button onClick = {() => createTaskHandler()}>Save</button>
    </div>
  )
}
