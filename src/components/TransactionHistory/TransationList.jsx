import React ,{useContext}from 'react'
import {GlobalContext} from '../GlobalContext/GlobalContext'
import Transaction from './transaction.jsx'

function TransationList() {
  const {transactions}= useContext(GlobalContext)

  return (
    <div  className='w-100 my-3  '>
        <h4>HISTORY</h4>
        <hr />
        <ul className='d-flex list-group '>
          {transactions.map((trans) =>{
            return( <Transaction key={trans.id}  transact = {trans}/>)})}
        </ul>
    </div>
  )
}

export default TransationList