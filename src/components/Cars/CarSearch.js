import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../../store';


const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    console.log({state})
    return state.cars.searchTerm;
  })
  const handleChange = (e) => {
    dispatch(changeSearchTerm(e.target.value))
  }
  return (
    <div className='list-header my-5 p-3'>
      <h3 className='title is-3 text-white'>My Cars</h3>
      <div className='search field is-horizontal'>
        <label className='label text-white'>Search</label>
        <input 
          className='input'
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default CarSearch