import React, { useEffect, useState } from 'react'

// Displays information for the given bill
function Bill(props) {

    const [expanded, setExpanded] = useState(false)
    const [groupedVotes, setGroupedVotes] = useState([[],[],[]])
    const [groupedVotes2, setGroupedVotes2] = useState([[],[],[]])

    useEffect(()=>{
        groupVotes(props.bill)
    },[])

    function groupVotes(_bill){
        var yArray = []
        var nArray = []
        var exArray = []
        _bill?.votes[0]?.votes?.forEach(vote => {
            if(vote.vote === "Y")
                yArray.push(vote.voterName)
            if(vote.vote === "N")
                nArray.push(vote.voterName)
            if(vote.vote === "EX")
                exArray.push(vote.voterName)
        })
        // Put it in the corresponding array
        if(_bill?.votes[0]?.chamber === "Senate")
            setGroupedVotes([yArray, nArray, exArray])
        else
            setGroupedVotes2([yArray, nArray, exArray])

        yArray = []
        nArray = []
        exArray = []
        _bill?.votes[1]?.votes?.forEach(vote => {
            if(vote.vote === "Y")
                yArray.push(vote.voterName)
            if(vote.vote === "N")
                nArray.push(vote.voterName)
            if(vote.vote === "EX")
                exArray.push(vote.voterName)
        })

        // // Put it in the corresponding array
        if(_bill?.votes[1]?.chamber === "Senate")
            setGroupedVotes([yArray, nArray, exArray])
        else
            setGroupedVotes2([yArray, nArray, exArray])


    }
      
    function logBill(event){        
        console.log("logging bill")
        event.stopPropagation()
        console.log(props.bill)
    }
    function openLink(event, url){        
        
        event.stopPropagation()
        window.open(url, "_blank")
    }

  return (
    <div className='bill' onClick={()=>setExpanded(!expanded)}>
        {props.bill.title}
        {/* <div><button onClick={(event)=>logBill(event)}>Log Bill</button></div> */}
        <div className='voteCountArea'>
            <div>
                Senate:
                <div className='inlineDiv'>
                    Y: {groupedVotes[0]?.length}        
                </div>
                <div className='inlineDiv'>
                    N: {groupedVotes[1].length}        
                </div>
                <div className='inlineDiv'> 
                    EX: {groupedVotes[2].length}        
                </div>
            </div>
            <div>
                House
                <div className='inlineDiv'>
                    Y: {groupedVotes2[0]?.length}        
                </div>
                <div className='inlineDiv'>
                    N: {groupedVotes2[1].length}        
                </div>
                <div className='inlineDiv'> 
                    EX: {groupedVotes2[2].length}        
                </div>
            </div>
        </div>
        {expanded && 
            <div>
                <div className='voteCountArea'>
                    <div className='marginDiv'>
                        <div>Summary:</div>
                        {props.bill.summary}
                    </div>
                    <div className='marginDiv'>
                        <div>Effective Date:</div>
                        {props.bill.effectiveDate}                        
                    </div>
                    <div className='marginDiv'>
                        <div>ID:</div>
                        {props.bill.billId}
                    </div>
                    <div className='marginDiv'>
                        <div onClick={(event)=>openLink(event, props.bill.billPdf)}>
                            <div>Click to open bill PDF from URL:</div>
                            {props.bill.billPdf}
                        </div>                        
                    </div>
                    <div className='marginDiv'>
                        <div onClick={(event)=>openLink(event, props.bill.billUrl)}>
                            <div>Click to open bill URL:</div>
                            {props.bill.billUrl}
                        </div>                        
                    </div>
                </div>
                <div className='voteCountArea'>
                    <div>
                        Senate
                    </div>
                    <div className='nameColumn'>
                        <div>Yes: {groupedVotes[0]?.length}  </div>
                        {groupedVotes[0]?.map(name => (
                            <div>{name + "name"}</div>
                        ))}  
                    </div>
                    <div className='nameColumn'>
                        <div>No: {groupedVotes[1].length} </div>
                        {groupedVotes[1]?.map(name => (
                            <div>{name + "name"}</div>
                        ))}  
                    </div>
                    <div className='nameColumn'>
                        <div>EX: {groupedVotes[2].length}  </div>
                        {groupedVotes[2]?.map(name => (
                            <div>{name + "name"}</div>
                        ))}  
                    </div>
                </div>  
                <div className='voteCountArea'>
                    <div>
                        House                        
                    </div>
                    <div className='nameColumn'>
                        <div>Yes: {groupedVotes2[0]?.length}  </div>
                        {groupedVotes2[0]?.map(name => (
                            <div>{name + "name"}</div>
                        ))}  
                    </div>
                    <div className='nameColumn'>
                        <div>No: {groupedVotes2[1].length} </div>
                        {groupedVotes2[1]?.map(name => (
                            <div>{name + "name"}</div>
                        ))}  
                    </div>
                    <div className='nameColumn'>
                        <div>EX: {groupedVotes2[2].length}  </div>
                        {groupedVotes2[2]?.map(name => (
                            <div>{name + "name"}</div>
                        ))}  
                    </div>
                </div>  
                            
            </div>
        }


    </div>
  )
}

export default Bill