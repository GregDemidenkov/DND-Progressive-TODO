import { FC, DragEvent } from 'react'

import { observer } from 'mobx-react-lite'
import tasks from '@/store/tasks'

import styles from './cart.module.scss'


type TCart = {
    id: String,
    type: string,
    order: number,
    text: String,
}

export const Cart: FC<TCart> = observer(({ id, type, order, text }) => {

    const dragOverHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.preventDefault()
        if(e.target.className.includes("_cart_")) {
            e.target.classList.add(styles.activeDrag)
        }
    }

    const dragLeaveHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.target.classList.remove(styles.activeDrag)
    }

    const dragEndHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.target.classList.remove(styles.activeDrag)

        tasks.changeCurInfo(id, type, tasks.curInfo.newType, tasks.curInfo.newOrder)
    }
    
    const dropHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.preventDefault()

        e.target.classList.remove(styles.activeDrag)

        tasks.changeCurInfo(tasks.curInfo.id, tasks.curInfo.type, type, order)
    }

    return (
        <div 
            className = {styles.cart} 
            draggable = {true}
            onDragOver = {(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
            onDragLeave = {(e: DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
            onDragEnd = {(e: DragEvent<HTMLDivElement>) => dragEndHandler(e)}
            onDrop = {(e: DragEvent<HTMLDivElement>) => dropHandler(e)}
            >
                <p>{order + 1}. {text}</p>
                <button onClick = {() => tasks.deleteTask(id, type)}>x</button>
        </div>
    )
})
