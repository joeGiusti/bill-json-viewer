import logo from './logo.svg';
import './App.css';
import billData from "./Data/output_50_bills.json"
import Bill from './Components/Bill';
import { useRef, useState } from 'react';
function App() {

  const [searchWord, setSearchWord] = useState("")
  const [searchId, setSearchId] = useState("")
  const searchWordRef = useRef()
  const searchIdRef = useRef()

  function logData(){
    console.log(billData)
  }

  function filteredBillData(){
    var tempArray = []
    billData.forEach(bill => {
      if(bill.title?.toLowerCase()?.includes(searchWord?.toLowerCase()) )
        tempArray.push(bill)
    })

    var tempArray2 = []
    tempArray.forEach(bill => {
      if(bill.billId?.toLowerCase()?.includes(searchId?.toLowerCase()) )
        tempArray2.push(bill)
    })

    
    return tempArray2
  }

  // Takes in a bill object, returns 3 arrays of names

  return (
    <div className="App">
      <div className='topBox'>
        Welcome to the bill data viewer. Click a bill to expand and view more information about it.
        {/* <button onClick={logData}>Log</button> */}
        <div className="searchBarOuter">
          <div className='searchBar'>
            Search By Name
            <input ref={searchWordRef} onChange={()=>setSearchWord(searchWordRef.current.value)}></input>
          </div>
          <div className='searchBar'>
            Search By Id
            <input ref={searchIdRef} onChange={()=>setSearchId(searchIdRef.current.value)}></input>
          </div>
        </div>
      </div>
      {filteredBillData().map(bill => (
        <Bill bill={bill}></Bill>
      ))}
    </div>
  );
}

export default App;
