import {
 ADD_DISH,
 EDIT_DISH,
 DELETE_DISH,
 CLEAR_FILTER,
 SET_DISHES,
 FILTER_DISHES
} from "../actions/types"
const initialState = {
  filtered :null,
 dishes:[]
}
const dishReducer=  (state = initialState, action) => {
 switch (action.type) {
   case ADD_DISH: {
     initialState.dishes.push(action.payload)
     localStorage.setItem('dishes',JSON.stringify(initialState.dishes))
     return {
       ...state,
      //  dishes:initialState.dishes
     }
   }
   case EDIT_DISH: {
     const {id}=action.payload;
    const foundIndex= initialState.dishes.findIndex((e)=>e.id===id);
    initialState.dishes[foundIndex]=action.payload
    localStorage.setItem('dishes',JSON.stringify(initialState.dishes))
    return {
      ...state,
      // dishes:initialState.dishes
    }
  }
  case DELETE_DISH: {
    const foundIndex = initialState.dishes.findIndex((e)=>e.id===action.payload)
    initialState.dishes.splice(foundIndex,1)
    localStorage.setItem('dishes',JSON.stringify(initialState.dishes))
    return {
      ...state,
      // dishes:initialState.dishes
    }
  }
  case SET_DISHES: {
    let fetchedDishes = localStorage.getItem('dishes')
    if(fetchedDishes){
      initialState.dishes =JSON.parse(fetchedDishes)
      return {
        ...state
      }
    }
    return {
      ...state
    }
  }
  case FILTER_DISHES: {
    console.log('filter dishes')
    return {
      ...state,
      filtered: initialState.dishes.filter((dish) => {
        let re = new RegExp(`${action.payload}`, 'gi');
        return dish.name.match(re);
      }),
    }
  }
  case CLEAR_FILTER: {
    return {...state,filtered:null};
  }
   default:
     return state
 }
}
export default dishReducer