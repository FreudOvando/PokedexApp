import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import homephoto from '../assets/imagehome.png'

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

    <div className='flex items-center justify-center flex-col font-mono bg-gray-400 m-2 p-2'>
      <img src={homephoto} alt="mainphoto" className='w-[30rem] h-[10rem] m-1 p-1 ' />

        <h1 className='text-xl text-justify text-red-500'>POKEDEX APP</h1>
        <h2 className='text-xl text-justify text-red-500 '>!Hello Trainer!</h2>
        <p className='text-xl text-justify text-wrap text-red-500'>Write your name and start the adventure</p>

        <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col ml-2 mr-2 p-2' >
      
            <input placeholder='Alejandro' required ref={inputTrainer} type="text" className='bg-slate-300 text-red-500 text-xl min-w-[15rem] h-[3rem] m-2 p-2 text-center shadow-lg shadow-red-600  ' />
      
      
           
            <button  className="m-2 p-2 w-[15rem] h-[3rem] rounded-xl mt-4 shadow-lg shadow-red-400 text-xl bg-gradient-to-r from-red-500 to-yellow-500 hover:from-blue-500 hover:to-amber-500 ...">
            Catch all of them
</button>
      
        </form>

    </div>
  )
}

export default HomePages