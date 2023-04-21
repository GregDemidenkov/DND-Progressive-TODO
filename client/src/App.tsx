import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { TodoPage } from './pages/TodoPage'


export const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element = {<TodoPage/>} />
    </Routes>
  )
}