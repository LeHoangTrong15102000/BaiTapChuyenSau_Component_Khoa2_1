import React, {useState, useEffect} from 'react'

const FilterTodo = ({onFilter}) => {

  const handleChangeFilter = (type) => {
    onFilter(type);//lấy cái props từ thằng cha truyền xuống
  }
  return (
    <div>
        <button onClick={() => {handleChangeFilter('all')}} className="btn btn-primary mr-2">All</button>
        <button onClick={() => {handleChangeFilter('completed')}} className="btn btn-success mr-2">Completed</button>
        <button onClick={() => {handleChangeFilter('uncompleted')}} className="btn btn-danger">Uncompleted</button>
    </div>
  )
}

export default FilterTodo