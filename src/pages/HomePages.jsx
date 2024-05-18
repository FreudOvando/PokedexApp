import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import homephoto from '../assets/home-photo.jpg'

const HomePages = () => {

const trainer = useSelector( states => states.trainer )


    const inputTrainer = useRef()

    const dispatch = useDispatch()
    
   const navigate =  useNavigate()

const handleSubmit = (e) =>  {
    e.preventDefault()
        dispatch(setTrainer(inputTrainer.current.value.trim()))
        navigate('/pokedex')
}

console.log(trainer)


  return (

    <div className='flex items-center justify-center flex-col '>
      
        <h1 className='text-xl text-justify'>POKEDEX</h1>
        <h2 className='text-md text-justify'>!Hello Trainer!</h2>
        <p className='text-md text-justify'>Write your name and start the adventure</p>

        <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col' >
      
            <input required ref={inputTrainer} type="text" className='min-w-[15rem] h-[3rem] m-2 p-2 text-center shadow-lg shadow-red-600  ' />
      
      
            <button className=' w-[15rem] h-[4rem] m-2 p-2 shadow-xl rounded-lg bg-red-600 hover:bg-amber-500'>Catch all of them</button>
      
      
        </form>

    </div>
  )
}

export default HomePages