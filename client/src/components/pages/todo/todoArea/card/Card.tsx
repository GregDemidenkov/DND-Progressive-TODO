import { FC, DragEvent, useState } from 'react'

import { observer } from 'mobx-react-lite'
import tasks from '@/store/tasks'

import { DeleteButton } from '@/components/ui/deleteButton/DeleteButton'
import { EditButton } from '@/components/ui/editButton/EditButton'

import scrollAnimation from '@/utils/scrollAnimation'

import styles from './card.module.scss'


type TCard = {
    id: String,
    type: string,
    order: number,
    text: string,
}

export const Card: FC<TCard> = observer(({ id, type, order, text }) => {

    const [dragActive, setDragActive] = useState(false)

    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()

        setDragActive(true)
    }

    const dragLeaveHandler = () => {
        setDragActive(false)
    }

    const dragEndHandler = () => {
        setDragActive(false)

        tasks.changeCurInfo(id, tasks.curInfo.id_2, type, tasks.curInfo.newType, tasks.curInfo.newOrder)
    }
    
    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()

        setDragActive(false)

        tasks.changeCurInfo(tasks.curInfo.id, id, tasks.curInfo.type, type, order)
    }

    const editHandler = () => {
        tasks.setEditInfo(id, type, text, true)
        scrollAnimation("createArea")
    }

    return (
        <div 
            className = {dragActive ? `${styles.card} ${styles.activeDrag}` : styles.card} 
            draggable = {true}
            onDragOver = {(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
            onDragLeave = {() => dragLeaveHandler()}
            onDragEnd = {() => dragEndHandler()}
            onDrop = {(e: DragEvent<HTMLDivElement>) => dropHandler(e)}
            >
                <p>{text}</p>
                <DeleteButton onClick = {() => tasks.deleteTask(id, type)}/>
                <EditButton onClick = {!tasks.editInfo.status ? () => editHandler() : () => {}}/>
        </div>
    )
})
