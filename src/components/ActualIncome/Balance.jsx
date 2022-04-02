import React,{useContext, useEffect, useState} from 'react';
import { GlobalContext } from './GlobalContext/GlobalContext';


function Balance() {
  const  [indicator , setIndicator ] = useState(0)
  const {transactions}= useContext(GlobalContext)
  const amount = transactions.map((transactions) => transactions.amount)
  const total = amount.reduce((sum,amount) => sum +=amount , 0)

  useEffect(()=>{
    setIndicator(total >= 0 ? 1 : 0)
  },[transactions])

  return (
    <div className= {`my-2 shadow w-100  rounded p-3 ${indicator ? 'bg-success' : 'bg-danger'}`}>
    <h6 >YOUR BALANCE</h6>
    <h2 >${total}</h2>
    </div>
  )
}

export default Balance