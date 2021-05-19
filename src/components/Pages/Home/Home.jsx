import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Dish from '../../Dish/Dish';
import DishCarousel from '../../DishCarousel/DishCarousel';
import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';
import Jumbotron from '../../Jumbotron/Jumbotron'
import { setDishes } from '../../../redux/actions/dishActions';
const Home = () => {
 const dispatch = useDispatch();
 const state = useSelector((state) => state.dishes)
 const {dishes,filtered}=state;
 console.log(filtered)
//  useEffect(() => {
//   console.log('home')
//   dispatch(setDishes())
//  }, [])
 return (
  <div>
  {/* <NavBar btn={'Admin Panel'}/> */}
  <Jumbotron/>
   {
    state.dishes?.length>0?
    <div className='container mt-5'>
    {/* <SearchBar/> */}
    <h2 className='mb-5'><strong>Trending Dishes</strong></h2>
    <div className='row'>
    
    {filtered?filtered.map((dish)=><div key={dish.id} className='col md-4'><Dish dish={dish}/></div>):dishes.map((dish)=><div key={dish.id} className='col md-4'><Dish key={dish.id} dish={dish}/></div>)}
    
    </div>
    </div>
    :
    <div className='d-flex justify-content-center align-items-center ' style={{marginTop:'150px'}}>
    <div className="alert alert-danger w-50 text-center" role="alert">
  <h4>Add dishes from the admin panel to display here!</h4>
</div>
    </div>
   }
  </div>
 )
}

export default Home
