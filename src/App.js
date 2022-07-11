// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
  
//     </div>
//   );
// }

// export default App;

import React from "react"
import Card from "./components/Card"
import data from "./components/data"

export default function App() {
  const dataElements = data.map(card=>{
    return <Card img={card.img} Location={card.Location} LocationUrl={card.LocationUrl} Name={card.Name} Date={card.Date} Description={card.Description}/>
  })

  return (
    <div>
        {dataElements}
    </div>
)
}
