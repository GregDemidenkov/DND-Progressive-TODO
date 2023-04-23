import { FC, DragEvent, useState } from 'react'

import styles from './cart.module.scss'
import tasks from '@/store/tasks'
import { TCurTask } from '../container/Container'

type TCart = {
    id: String,
    type: string,
    order: number,
    text: String,
    setTask: (obj: TCurTask) => void
}

export const Cart: FC<TCart> = ({ id, type, order, text, setTask }) => {

    // const dragOverHandler = (e: DragEvent<HTMLDivElement> | any) => {
    //     e.preventDefault()
    //     if(e.target.className.includes("_cart_")) {
    //         e.target.style.boxShadow = "0px 3px 4px rgba(92, 92, 92, 0.45)"
    //     }
    // }

    // const dragLeaveHandler = (e: DragEvent<HTMLDivElement> | any) => {
    //     e.target.style.boxShadow = "none"
    // }

    // const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
    // }

    // const dragEndHandler = (e: DragEvent<HTMLDivElement> | any) => {
    //     e.target.style.boxShadow = "none"
    //     // console.log({id, type, newType: "process"})
    //     setTask({id, type, newType: "process"})
    // }
    
    // const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     console.log(5)
    //     tasks.rebaseTasks(id, "task", "process")
    //     tasks.getTasks(type)
    //     tasks.getTasks("process")
    // }

    return (
        <div 
            className = {styles.cart} 
            draggable = {true}
            // onDragOver = {(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
            // onDragLeave = {(e: DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
            // onDragStart = {(e: DragEvent<HTMLDivElement>) => dragStartHandler(e)}
            onDragEnd = {() => setTask({id, type, newType: ""})}
            // onDrop = {(e: DragEvent<HTMLDivElement>) => dropHandler(e)}
            >
                <p>{order + 1}. {text}</p>
                <button>x</button>
        </div>
    )
}
