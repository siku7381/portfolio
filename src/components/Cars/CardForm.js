import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCar, changeCost, changeName } from '../../store';

const CardForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return state.form;
  })
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
  }
  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value) || 0))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({
      name,cost
    }))
  }
  return (
    <div className='car-form panel p-5'>
      <h4 className='subtitle is-3 text-white'>Add Car </h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group flex justify-around items-center'>
          <div className='field'>
            <label className='label text-white'>Name</label>
            <input 
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='field'>
            <label className='label text-white'>Cost</label>
            <input 
              className='input is-expanded'
              value={cost || ''}
              onChange={handleCostChange}
              type='number'
            />
          </div>
          <div className='field'>
            <button className='button is-link' type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CardForm