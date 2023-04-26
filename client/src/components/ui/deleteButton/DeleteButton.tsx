import { FC } from 'react'

import styles from './deleteButton.module.scss'

type TDeleteButton = {
  onClick: () => void
}

export const DeleteButton: FC<TDeleteButton> = ({ onClick }) => {
	return (
		<div className = {styles.deleteButton} onClick = {onClick}>
			<svg width="12" height="12" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path 
					d="M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z" 
					fill="rgba(0, 0, 0, 0.45)"
				/>
			</svg>
		</div>
	)
}
