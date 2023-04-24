import { FC, DragEvent, useEffect } from 'react'

import { observer } from 'mobx-react-lite'
import tasks from '@/store/tasks'

import getBoard from '@/utils/getBoard'

import { Cart } from '../cart/Cart'

import styles from './container.module.scss'


type TContainer = {
  type: string,
}

export const Container: FC<TContainer> = observer(({ type }) => {

  useEffect(() => {
    tasks.getTasks(type)
  }, [])

  useEffect(() => {
    if (tasks.curInfo.id && tasks.curInfo.newType !== tasks.curInfo.type && tasks.curInfo.newOrder === -1) {
      tasks.rebaseTasks(
        tasks.curInfo.id, 
        tasks.curInfo.type, 
        tasks.curInfo.newType
      )
    } else if(tasks.curInfo.id && tasks.curInfo.newType !== tasks.curInfo.type && tasks.curInfo.newOrder !== -1) {
      tasks.insertTask(
        tasks.curInfo.id,
        tasks.curInfo.type,
        tasks.curInfo.newType,
        tasks.curInfo.newOrder
      )
    }
    tasks.changeCurInfo("", "", "", -1)
  }, [tasks.curInfo.id])

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()

      tasks.changeCurInfo(tasks.curInfo.id, tasks.curInfo.type, type, tasks.curInfo.newOrder)
  }

  const dragOverHandler = (e: DragEvent<HTMLDivElement> | any) => {
    e.preventDefault()
  }
  
  return (
    <div className={styles.todoContainer}>
      <h3>{type}</h3>
      <div  
        onDrop = {(e: DragEvent<HTMLDivElement>) => dropHandler(e)}
        onDragOver = {(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
        className = {styles.carts}>
        {
          getBoard(type).map((cart, i) => (
            <Cart 
              key = {i}
              id = {cart._id}
              type = {type}
              order = {cart.order.valueOf()}
              text = {cart.text}
            />
          ))
        }
      </div>
    </div>
  )
})
