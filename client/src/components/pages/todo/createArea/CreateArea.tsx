import { FC, useState, ChangeEvent, useEffect } from 'react'

import { observer } from 'mobx-react-lite'
import tasks from '@/store/tasks'

import styles from './createArea.module.scss'


export const CreateArea: FC = observer(() => {

  const [curText, setCurText] = useState("")

  useEffect(() => {
    if(tasks.editInfo.status) setCurText(tasks.editInfo.text)
  }, [tasks.editInfo.status])

  const saveHandler = () => {
    if (curText.length > 0 && curText.length < 100) {
      if (tasks.editInfo.status) {
        tasks.editTask(tasks.editInfo.id, curText, tasks.editInfo.type)
      } else {
        tasks.createTask(curText, "task")
      }
      tasks.setEditInfo("", "", "", false)
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
      <button onClick = {() => saveHandler()}>Save</button>
    </div>
  )
})
