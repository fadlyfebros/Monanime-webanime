import { Button } from '@nextui-org/react'
import React from 'react'

export default function Pagination({page,lastPage,setPage}) {


  const handlePrev = () => {
    if(page > 1) return setPage((prevState) => prevState - 1)
  }

  
  const handleNext = () => {
    if(page < lastPage) return setPage((prevState) => prevState + 1)
  }


  return (
    <div className='flex py-5 justify-center space-x-5 items-center'>
      <Button color='danger' variant='flat' onClick={handlePrev}>Prev</Button>
      <p>{page} of {lastPage}</p>
      <Button variant='flat' color='primary' onClick={handleNext}>Next</Button>
    </div>
  )
}
