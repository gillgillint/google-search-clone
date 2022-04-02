import React from 'react'
import {TailSpin} from 'react-loader-spinner'

function Spinner() {
  return (
    <div className='flex justify-center items-center'>
        <TailSpin color='#00bfff' height={550} width={80} />
    </div>
  )
}

export default Spinner