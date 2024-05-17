import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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

    <div>
        <h1>POKEDEX</h1>
        <h2>!Hola entrenador!</h2>
        <p>Hi here your name for look your favoritew pokemos </p>

        <form onSubmit={handleSubmit} >
            <input ref={inputTrainer} type="text" />
            <button>Catch teh all</button>
        </form>

    </div>
  )
}

export default HomePages