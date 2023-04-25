import { FC, DragEvent, useEffect } from 'react'

import { observer } from 'mobx-react-lite'
import tasks from '@/store/tasks'

import getBoard from '@/utils/getBoard'
import operationDefinition from '@/utils/operationDefinition'

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
    const {id, id_2, type, newType, newOrder} = tasks.curInfo

    operationDefinition(id, id_2, type, newType, newOrder)
    tasks.changeCurInfo("", "", "", "", -1)
  }, [tasks.curInfo.id])

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    tasks.changeCurInfo(
      tasks.curInfo.id,
      tasks.curInfo.id_2,
      tasks.curInfo.type,
      type, 
      tasks.curInfo.newOrder
    )
  }

  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
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
              text = {cart.text.toString()}
            />
          ))
        }
      </div>
    </div>
  )
})
