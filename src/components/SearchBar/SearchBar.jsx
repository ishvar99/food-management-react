import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {clearFilter} from '../../redux/actions/dishActions'
import {filterDishes} from '../../redux/actions/dishActions'
import './SearchBar.css'
const SearchBar = () => {
 const dispatch = useDispatch();
 const state = useSelector((state) => state.dishes)
 useEffect(() => {
  if (state.filtered && state.filtered.length === 0) {
    document.getElementById('filter').value = '';
    dispatch(clearFilter());
  }
}, [state.filtered]);
const onChange = (e) => {
 if (e.target.value !== '') {
   dispatch(filterDishes(e.target.value));
 } else {
   dispatch(clearFilter());
 }
};
 return (
  <div className="form-group has-search mb-5 container mt-5">
    <span className="fa fa-search form-control-feedback"></span>
    <input autoComplete="off" id="filter" onChange={onChange} type="text" className="form-control" placeholder="Search"/>
  </div>
 )
}

export default SearchBar
