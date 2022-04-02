import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext';

function Expensesincome() {

  const {transactions}= useContext(GlobalContext)
  const amount = transactions.map((transactions) => transactions.amount)
  const Income = amount.filter((amount) => amount > 0).reduce((sum,amount) => sum +=amount,0).toFixed(2)
  const expenses = amount.filter((amount) => amount < 0).reduce((sum,amount) => sum +=amount,0).toFixed(2) * -1
  
  return (
    <>
    <div className='d-flex p-1 rounded-2 ' >
    <div className='shadow p-3 bg-dark '>
        <h3 className='text-white'>INCOME</h3>
        <p className='text-success'>{Income}</p>
    </div>
    <div className='shadow mx-2 p-3  bg-white'>
        <h3 >EXPENSES</h3>
        <p className='text-danger'>{expenses}</p>
    </div>
    </div>
    </>
  )
}

export default Expensesincome