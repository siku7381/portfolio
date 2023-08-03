import React from 'react'
import CardForm from './CardForm'
import CarList from './CarList'
import CarSearch from './CarSearch'
import CarValue from './CarValue'

const Car = () => {
  return (
    <div>
        <CardForm />
        <CarSearch />
        <CarList />
        <CarValue/>
    </div>
  )
}

export default Car