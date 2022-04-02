import React,{useContext} from 'react';
import { GlobalContext } from './GlobalContext';

const Transaction = ({transact}) =>{
     const {deleteTransaction}= useContext(GlobalContext)
     const date = new Date(transact.date) 
    return (
        <div className='d-flex w-100'>
        <li className='list-group-item h-50 w-100 d-flex justify-content-between'>{transact.text}<span>{date.toLocaleDateString()}</span><span className='badge badge-danger text-dark '>{(transact.amount > 0 ) ?  "+ $"+(transact.amount):"- $"+Math.abs((transact.amount))}</span></li>
         <div className={transact.amount > 0 ? 'bg-success text-success':'bg-danger text-danger'}>.</div>
         <button  onClick={() => deleteTransaction(transact.id)} className='btn'>X</button>
         </div>
         
    )
}

export default Transaction