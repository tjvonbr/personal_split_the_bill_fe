import uuid from '../utils/uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, 
        {id: uuid(), 
        name: action.name,
        price: action.price,
        plate: action.plate,
        }];
    case 'REMOVE':
      return state.filter(meal => meal.id !== action.id);
    case 'EDIT':
      return state.map(meal => meal.id === action.id ? {
        ...meal, 
        name: action.newName,
        price: action.newPrice,
        plate: action.newPlate
      } : meal)
  
    default:
      return state;
  }
}

export default reducer;