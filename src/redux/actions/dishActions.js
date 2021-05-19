import {
 ADD_DISH,
 EDIT_DISH,
 DELETE_DISH,
 FILTER_DISHES,
 DISPLAY_DISHES,
 SET_DISHES,
 CLEAR_FILTER
 } from "./types"
 const calculateCalories= (dish)=>{
  const {proteins,carbs,fats}=dish;
  return 4*proteins + 4*carbs + 9* fats;
 }
 export const addDish=(dish)=>{
  const calories =calculateCalories(dish);
  const id = [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
  return async (dispatch)=>{
    dispatch({
     type: ADD_DISH,
     payload: {id,...dish,calories},
   })
  }
 }
 export const editDish=(dish)=>{
  const calories = calculateCalories(dish)
  return async (dispatch)=>{
    dispatch({
     type: EDIT_DISH,
     payload: {...dish,calories},
   })
  }
 }
 export const setDishes= ()=>{
   return async (dispatch)=>{
     dispatch({
       type: SET_DISHES
     })
   }
 }
 export const deleteDish=(id)=>{
   console.log(id);
  return async (dispatch)=>{
    dispatch({
     type: DELETE_DISH,
     payload: id,
   })
  }
 }
 export const filterDishes =(text)=>{
   return async (dispatch)=>{
     dispatch({
       type:FILTER_DISHES,
       payload: text
     })
   }
 }
 export const clearFilter =(text)=>{
  return async (dispatch)=>{
    dispatch({
      type:CLEAR_FILTER
    })
  }
}
