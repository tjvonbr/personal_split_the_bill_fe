

export default function splitTheBill(obj) {
  //find the total
  var total = 0;
  Object.keys(obj).forEach(function(key) {
    total += obj[key]
  });
console.log(total)

  //find the average
  var average = total / (Object.keys(obj).length);

  //now do the splitting
  var result = {};
  Object.keys(obj).forEach(function(key) {
    result[key] = average - obj[key]
  });
  
  return result;
}

// console.log(splitTheBill({
//   A: 7,
//   B: 3,
//   C: 2
// }))