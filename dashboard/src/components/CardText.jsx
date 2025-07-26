import React from 'react'

export default function CardText({title,date,description,button}) {
  return (
    <div className=' flex flex-row justify-between w-73 px-7 py-4 border-1 border-gray-300 bg-white rounded-md '>
          <div className=' flex flex-col gap-1'>
              <h3 className=' font-bold text-sm'>{title}</h3>
              <p className=' text-xs'>{description}</p>
              <p className=' text-xs'>{ date}</p>
          </div>
          <p  className='text-xs'>{ button}</p>
    </div>
  )
}
