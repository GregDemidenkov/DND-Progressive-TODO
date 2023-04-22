import { FC, DragEvent, useState } from 'react'

import styles from './cart.module.scss'

type TCart = {
    id: number,
    text: string,
}

export const Cart: FC<TCart> = ({ id, text }) => {

    const dragOverHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.preventDefault()
        if(e.target.className.includes("_cart_")) {
            e.target.style.boxShadow = "0px 3px 4px rgba(92, 92, 92, 0.45)"
        }
    }

    const dragLeaveHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.target.style.boxShadow = "none"
    }

    const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {

    }

    const dragEndHandler = (e: DragEvent<HTMLDivElement> | any) => {
        e.target.style.boxShadow = "none"
    }
    
    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    return (
        <div 
            className = {styles.cart} 
            draggable = {true}
            onDragOver = {(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
            onDragLeave = {(e: DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
            onDragStart = {(e: DragEvent<HTMLDivElement>) => dragStartHandler(e)}
            onDragEnd = {(e: DragEvent<HTMLDivElement>) => dragEndHandler(e)}
            onDrop = {(e: DragEvent<HTMLDivElement>) => dropHandler(e)}
            >
                <p>{text}</p>
                <button>x</button>
        </div>
    )
}
