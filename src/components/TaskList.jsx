import React from 'react'
import Checkbox from './Checkbox'

const TaskList = props => {

    // define list and setList as props
    const { list, setList } = props;

    // define onChangeStatus arrow function
    const onChangeStatus = e => {
        // define name and checked status from event.target
        const { name, checked } = e.target
        // define updated list of checkboxs
        const updatedList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }))
        // execute state setList to update list of checkbox
        setList(updatedList)
    }

    // define onClickRemoveItem arrow function
    const onClickRemoveItem = e => {
        // define list filtering this by done attribute
        const updatedList = list.filter(item => !item.done)
        // call state setList to update list of checkbox
        setList(updatedList)
    }

    // define list of checkbox
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
    ))

  return (
    <div className='todo-list'>
        { list.length ? chk : "Sin tareas" }
        { list.length ? (
            <p>
                <button className='button blue' onClick={onClickRemoveItem}>Borrar realizados</button>
            </p>
        ) : null }
    </div>
  )
}

export default TaskList