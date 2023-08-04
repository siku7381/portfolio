import React from 'react';
import { useSelector } from 'react-redux';
import { convertToCrore } from '../../utils/ConverToCrore';

const CarValue = () => {
  const totalCost = useSelector(({cars : { data, searchTerm }}) => {
    const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredCars.reduce((acc, car) => {
      return acc + car.cost
    },0)
  })
  return (
    <div className='car-value text-white'>
      Total Cost: ₹ {convertToCrore(totalCost)} Cr.
    </div>
  )
}

export default CarValue;