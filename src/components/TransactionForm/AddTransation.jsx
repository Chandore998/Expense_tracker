import React,{ useContext, useState } from 'react'
import { useEffect } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'

function AddTransation() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [date , setDate] = useState('')
  const [message,setMessage] = useState(false)

  const {addTransaction} = useContext(GlobalContext)
  
 


  const Addtransaction = (e) =>{
    e.preventDefault()
    
   const newTransaction = {
     id: Math.floor(Math.random()*1000000),
     text,
     amount: +amount,
     date
   }


   if(newTransaction.text !== ('' | null | undefined )  && newTransaction.amount !== ('' | null | undefined ) ){
    addTransaction(newTransaction)
    setMessage(true)
   }
   else{
     alert("please enter a text and amount")
     setMessage(true)
   }


  }
  useEffect(()=>{
    if(message === true ){
      setAmount('')
      setText('')
      setDate('')
      setMessage(false)
    }
    
  },[message])
  

  return (
    <div className='d-flex flex-column w-100 py-2 p-1 rounded '>
        <h4> ADD TRANSATION</h4>
        <hr />
        <form onSubmit={Addtransaction}>
            <div className='form-group d-flex flex-column my-2 gap-2'>
                <label>Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text .....' required/>
            </div>
            <div className='form-group d-flex flex-column my-2 gap-2'>
                <label>Amount <br/> (Negative - expenses, Positive - Income) </label>
                <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount .....' required/>
            </div>
            <div className='form-group d-flex flex-column my-2 gap-2'>
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <input type="submit" className='btn btn-secondary my-2 w-100 ' value={"Add Transation"} />
        </form>
        
    </div>
  )
}

export default AddTransation