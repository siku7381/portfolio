import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../../store';
import { convertToCrore } from '../../utils/ConverToCrore';

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars : { data, searchTerm }}) => {
    const filteredCars =  data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {
      cars : filteredCars,
      name : form.name
    };
  });

  const handleCarDelete = (id) => {
    console.log({id})
    dispatch(removeCar(id));
  }

  const renderedCars = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'text-blue-600 font-bold'}`}>
        <p>
          {car.name} - ₹ {convertToCrore(car.cost)} Cr.
        </p>
        <button
          className='button is-danger'
          onClick={() => handleCarDelete(car.id)}
        >
          Delete
        </button>
      </div>
    )
  })
  return (
    <div className="car-list">
      {
        renderedCars
      }
    </div>
  )
}

export default CarList;