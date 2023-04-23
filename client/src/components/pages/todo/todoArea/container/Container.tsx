import { FC, DragEvent, useEffect, useState, useReducer } from 'react'

import styles from './container.module.scss'
import tasks from '@/store/tasks'
import getBoard from '@/utils/getBoard'
import { Cart } from '../cart/Cart'
import { observer } from 'mobx-react-lite'


type TContainer = {
  type: string,
}

export type TCurTask = {
  id: String,
  type: string,
  newType: string
}


export const Container: FC<TContainer> = observer(({ type }) => {

  useEffect(() => {
    tasks.getTasks(type)
  }, [])

  useEffect(() => {
    if (tasks.curInfo.id && tasks.curInfo.newType) {
      tasks.rebaseTasks(tasks.curInfo.id, tasks.curInfo.type, tasks.curInfo.newType)
      tasks.changeCurInfo("", "", "")
    }
  }, [tasks.curInfo.id])

  const setTask = (obj: TCurTask) => {
    tasks.changeCurInfo(obj.id, obj.type, tasks.curInfo.newType)
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()

      tasks.changeCurInfo(tasks.curInfo.id, tasks.curInfo.type, type)
  }

  const dragOverHandler = (e: DragEvent<HTMLDivElement> | any) => {
    e.preventDefault()
    // if(e.target.className.includes("_cart_")) {
    //     e.target.style.boxShadow = "0px 3px 4px rgba(92, 92, 92, 0.45)"
    // }
  }

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement> | any) => {
    // e.target.style.boxShadow = "none"
  }
  
  return (
    <div className={styles.todoContainer}>
      <h3>{type}</h3>
      <div  
        onDrop = {(e: DragEvent<HTMLDivElement>) => dropHandler(e)}
        onDragOver = {(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
        onDragLeave = {(e: DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
        className = {styles.carts}>
        {
          getBoard(type).map((cart, i) => (
            <Cart 
              key = {i}
              id = {cart._id}
              type = {type}
              order = {cart.order.valueOf()}
              text = {cart.text}
              setTask = {(obj: TCurTask) => setTask(obj)}
            />
          ))
        }
      </div>
    </div>
  )
})
