import React from 'react'

function Cards({icon,title,describtion}) {
  return (
    <div className=' flex flex-row items-center  gap-4 shadow-sm w-55 bg-white rounded-lg px-4 py-6'>
          <div>{icon}</div>
          <div>
              <h3 className=' font-bold text-xl'>{title}</h3>
              <p className=' text-xs'>{ describtion}</p>
          </div>
    </div>
  )
}

export default Cards
