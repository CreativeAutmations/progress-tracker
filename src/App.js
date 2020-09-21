import React ,{Component} from 'react';
import './App.css';
import Header from './Components/Navbar';
import Dat from './Components/Date';
import PlannedSlots from './Components/Plannedslots';
import ActualSlots from './Components/Actualslots';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      member:{
        "name":"",
        "previous":{}
      }
    }
  }

  
  render(){
    document.body.style.backgroundImage = "url('./bgimage.jpg')";
  if(this.state.member.name==="")
    {
      var date,actual,planned
      date=<Dat /> ;
      actual=<ActualSlots config={[{"name":"Production","Slots":4},{"name":"Core","Slots":2}]} /> ;
      planned=<PlannedSlots />
      
    }
  return (<div className="App" >
    <Header logo = './skillpill.png' title  = "Progress Tracker"   />
    {date}
    <div className="row ">
     <div className="col-12 col-md-6 parentform">
     {planned}
      </div> 
      <div className="col-12 col-md-6 parentform">
      {actual}
      </div>
    </div>
   </div>   
  );
  }
}

export default App;
