import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addTodo,deleteTodo,removeTodo} from '../actions/index'
import '../styles/Todo.css'
const Todo = () => {
    const [inputData,setInputData]=useState('');
    const list=useSelector((state)=>state.todoReducers.list )
    const dispatch=useDispatch();
 
    return (
    <>
   
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption>😊✌️Hello add your todo list here</figcaption>
        </figure>


        <div className='addItems'>
          <input type='text' placeholder='✍️ Write yor task here ...' value={inputData} onChange={(event)=>setInputData(event.target.value)}></input>
          <i className='fa fa-plus add-btn' onClick={()=>dispatch(addTodo(inputData),setInputData(''))}></i>
        </div>
  
  
          <div className="showItems">
           {
            list.map((elem)=>{
              return(
                 <div className='eachItem' key={elem.id}>
                   <h3>{elem.data}</h3>
                  <i className='far fa-trash-alt add-btn' 
                    title="DeleteItem" 
                    onClick={()=>dispatch(deleteTodo(elem.id),setInputData(''))}>
                  </i>
                 </div>)     
              })
            } 
          </div>
          <div className='showItems'>
            <button className='btn effect04' 
            data-sm-link-text="remove All"
            onClick={()=>dispatch(removeTodo())}>
              <spam>check List</spam>
            </button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Todo