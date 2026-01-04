import React from 'react'
import Button from './Button'

function Card(props) {
  return (
    <div className='p-8 border bg-gray-700 font-bold text-white flex flex-col items-center text-center w-80 m-5'>
      <img
        className='w-40 h-40 rounded-full object-cover'
        src={props.image}
        alt="profile"
      />

      <h1 className='text-2xl mt-3'>
        {props.name}
      </h1>

      <p className='p-3'>
        {props.description}
      </p>

         <Button value="Veiw Card" />
    </div>
  )
}

export default Card
