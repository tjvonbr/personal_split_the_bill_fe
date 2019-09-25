import React, {useState, useEffect} from 'react';
import './App.css';
import CardMaker from "./components/CardMaker";
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';

function App() {

    const [count, setCount] = useState(0);

    const [contact, setContact] = useState([]);
 
 
 useEffect(
		() => {
			axios
				.get('https://split-the-bill-bw.herokuapp.com/api/user/meal')
				.then((res) => {
					console.log(res);

				})
				.catch((e) => {
					console.log(e);
				}); 
        },
		[]
	);
                                        console.log(contact);
//.then( (res) => setData(res.data.results)
console.log("You made it here")
  return (
  
    <div className="App">
     <button className = "addButton" onClick  = {() => setCount(count +1)}>Add Contact</button>
     <button className = "minButton" onClick  = {() => setCount(count -1)}>Remove Contact</button>
 <p>{count}</p>
{contact.map((data, index) => (
   
  <Card className = "card" color = 'blue'>
  <CardMaker className = "card"
  key = {index}
  name = {data.name}
  email = {data.gender}
  />
  </Card>
))
  }


    
    </div>
  );
  
}

export default App;
