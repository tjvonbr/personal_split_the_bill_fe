import React from "react";
import { List } from "semantic-ui-react";
import {splitTheBill, spendOnMeal} from './Totals';
import 'semantic-ui-css/semantic.min.css'

const TotalComp = props => {
  console.log("this is from totalscomp", props.ordered);

  const { ordered } = props;

  console.log(ordered);

  var average = splitTheBill(ordered);
  var spent = spendOnMeal(ordered)

  return (
    <>
    <List celled>
      {spent.map(people => {
        return (
          
          <List.Item>
            <List.Icon name="user" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header >Split evenly with, {people.name} - {average}</List.Header>
              <List.Description>For the last {people.plates} {people.order} {people.name} spent ${people.price}</List.Description>
            </List.Content>
          </List.Item>
    

        );
      })}
      </List>
    </>
  );
};

export default TotalComp;
