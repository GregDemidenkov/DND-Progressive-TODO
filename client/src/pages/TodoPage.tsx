import { FC } from 'react'

import { Header } from '@/components/common/Header/Header'
import { CreateArea } from '@/components/pages/todo/createArea/CreateArea'
import { Area } from '@/components/pages/todo/todoArea/area/Area'


export const TodoPage: FC = () => {
  
    return (
        <>
            <Header />
            <div className = 'container'>
                <Area />
                <CreateArea />
            </div>
        </>
    )
}
