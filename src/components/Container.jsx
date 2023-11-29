import React, { useState } from 'react'
import FormTodo from './FormTodo'
import TaskList from './TaskList'

const Container = () => {
  
  // define list state
  const [list, setList] = useState([])

  // define handleAddItem arrow function
  const handleAddItem = item => {
    setList([...list, item])
  }

    return (
    <div>
        <FormTodo handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>
    </div>
  )
}

export default Container