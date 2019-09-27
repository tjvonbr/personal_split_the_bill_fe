

function splitTheBill(arr) {
  var total = 0;
  // get total bill
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].price * parseInt(arr[i].plates, 10)
  }

  //find the average
  var average = total / arr.length;
  return average;
}

function spendOnMeal(arr) {
  var total = 0;
  // get total bill
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].price * parseInt(arr[i].plates, 10)
  }

  // assign average to individuals
  return arr.map(function(o) {
    o.price = o.price * parseInt(o.plates, 10)
    return o;
  });
}

export { splitTheBill, spendOnMeal }







// var friends = [
//   {name: 'aquaman', order: 'qqq', plates: '2', price: 22}, 
//   {name: 'mortal', order: 'ques', plates: '1', price: 11}
// ];