

export default function splitTheBill(arr) {
  var total = 0;
  // get total bill
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].price;
  }

  //find the average
  var average = total / arr.length;
  // assign average to individuals
  return arr.map(function(o) {
    o.price = average;
    return o;
  })
}

// var friends = [
//   {name: 'aquaman', order: 'qqq', plates: '2', price: 22}, 
//   {name: 'mortal', order: 'ques', plates: '1', price: 11}
// ];