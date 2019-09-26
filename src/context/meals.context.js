import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import mealReducer from "../reducers/meal.reducer";

const defaultMeals = [
  { id: 1, 
    name: 'Anikin Skywalker',
    price: 20,
    plate: 'Pickled Sandwich',
  },
  {
    id: 2, 
    name: 'Luke Skywalker',
    price: 35,
    plate: 'Meatball Sandwich',
  }
];

export const MealsContext = createContext();
export const DispatchContext = createContext();

export default MealsProvider(props) {
  const [meals, dispatch] = useLocalStorageReducer(
    'meals',
    defaultMeals,
    mealReducer
  );
  return (
    <MealsContext.Provider value={meals}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </MealsContext.Provider>
  );
}