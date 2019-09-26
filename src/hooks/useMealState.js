import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import uuid from "uuid/v4";

export default initialMeals => {
  const [meals, setMeals] =useLocalStorageState('meals', initialMeals);
  return {
    meals,
    addMeal: newMealText => {
      setMeals([...meals, {id: uuid(), }])
    }
  }
}