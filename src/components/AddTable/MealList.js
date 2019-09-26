import React, { useContext } from 'react';
 
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";


import MealsContext from '../../context/meals.context';
import Meal from './Meal';

function MealList() {
  const meals = useContext(MealsContext);

  if (meals.length) {
    return(
      <Paper>
        <List>
          {meals.map((meal, i) =>(
            <React.Fragment key={i}>
              <Meal {...meal} key={meal.id} />
              {i < meals.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    )
  }
  return null;
}


export default MealList;