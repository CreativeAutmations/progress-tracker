import React from 'react';
import './App.css';
import Header from './Components/Navbar';
import Dat from './Components/Date';
import PlannedSlots from './Components/Plannedslots';
import ActualSlots from './Components/Actualslots';
import Login from './Components/Loginform';
function App() {
  return (<div className="App">
   <Header logo = './skillpill.png' title  = "progress tracker"  name = "Ritik"  />
  
   <Dat />
    <Login />
   <ActualSlots config={[{"name":"production","Slots":4},{"name":"core","Slots":2}]} />
   <PlannedSlots />
   
   </div>   
  );
}

export default App;
