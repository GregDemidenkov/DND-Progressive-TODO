import { FC, DragEvent, useState } from 'react'

import { observer } from 'mobx-react-lite'
import tasks from '@/store/tasks'

import { DeleteButton } from '@/components/ui/deleteButton/DeleteButton'
import { CreateButton } from '@/components/ui/createButton/CreateButton'

import styles from './cart.module.scss'


type TCart = {
    id: String,
    type: string,
    order: number,
    text: String,
}

export const Cart: FC<TCart> = observer(({ id, type, order, text }) => {

    const [dragActive, setDragActive] = useState(false)

    const dragOverHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.preventDefault()

        setDragActive(true)
    }

    const dragLeaveHandler = () => {
        setDragActive(false)
    }

    const dragEndHandler = () => {
        setDragActive(false)

        tasks.changeCurInfo(id, type, tasks.curInfo.newType, tasks.curInfo.newOrder)
    }
    
    const dropHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.preventDefault()

        setDragActive(false)

        tasks.changeCurInfo(tasks.curInfo.id, tasks.curInfo.type, type, order)
    }

    return (
        <div 
            className = {dragActive ? `${styles.cart} ${styles.activeDrag}` : styles.cart} 
            draggable = {true}
            onDragOver = {(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
            onDragLeave = {() => dragLeaveHandler()}
            onDragEnd = {() => dragEndHandler()}
            onDrop = {(e: DragEvent<HTMLDivElement>) => dropHandler(e)}
            >
                <p><span>{order + 1}</span> {text}</p>
                <DeleteButton onClick = {() => tasks.deleteTask(id, type)}/>
                <CreateButton onClick = {() => tasks.deleteTask(id, type)}/>
        </div>
    )
})
