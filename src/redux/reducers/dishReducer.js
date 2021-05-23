import {
 ADD_DISH,
 EDIT_DISH,
 DELETE_DISH,
 CLEAR_FILTER,
 FILTER_DISHES
} from "../actions/types"
const initialState = {
  filtered :null,
 dishes:[]
}
const dishReducer=  (state = initialState, action) => {
 switch (action.type) {
   case ADD_DISH: {
     return {
       ...state,
       dishes: [...state.dishes,action.payload]
     }
   }
   case EDIT_DISH: {
    // const foundIndex= initialState.dishes.findIndex((e)=>e.id===id);
    // initialState.dishes[foundIndex]=action.payload
    return {
      ...state,
     dishes: [
       ...state.dishes.map((dish)=>dish.id===action.payload.id?action.payload:dish)
      ]
    }
  }
  case DELETE_DISH: {
    // const foundIndex = initialState.dishes.findIndex((e)=>e.id===action.payload)
    // initialState.dishes.splice(foundIndex,1)
    return {
      ...state,
      dishes: state.dishes.filter((dish) => {
        return dish.id !== action.payload;
      }),
    };
    }
  case FILTER_DISHES: {
    console.log('filter dishes')
    return {
      ...state,
      filtered: state.dishes.filter((dish) => {
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