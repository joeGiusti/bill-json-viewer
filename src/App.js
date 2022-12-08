import logo from './logo.svg';
import './App.css';
import billData from "./Data/output_50_bills.json"
import Bill from './Components/Bill';
function App() {

  function logData(){
    console.log(billData)
  }
  // Takes in a bill object, returns 3 arrays of names

  return (
    <div className="App">
      <div className='topBox'>
        Welcome to the bill data viewer. Click a bill to expand and view more information about it.
        {/* <button onClick={logData}>Log</button> */}
      </div>
      {billData.map(bill => (
        <Bill bill={bill}></Bill>
      ))}
    </div>
  );
}

export default App;
