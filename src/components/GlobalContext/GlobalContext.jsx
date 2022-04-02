import React,{createContext, useReducer,useEffect} from 'react'
import Appreducer from './Appreducer.jsx'


// initialState for Globalcontext

const initialState ={
    transactions: []
}


export const GlobalContext = createContext(initialState);


// GlobalProvider will transfer all props  values from top to bottom node

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(Appreducer, initialState,()=>{
        const storeData = localStorage.getItem('transactions')
        return storeData ? JSON.parse(storeData) : initialState
    })

    // for each time state is set on localStorage 

    useEffect(()=>{
        localStorage.setItem('transactions', JSON.stringify(state))
    },[state])



    function addTransaction(transaction){

        dispatch({
            payload: transaction,
            type:'ADD_TRANSACTION'
        })

    }

    function deleteTransaction(id){
        dispatch({
            payload: id,
            type:'DELETE_TRANSACTION'
        })
        
    }

    return (<GlobalContext.Provider value={{ transactions: state.transactions,addTransaction,deleteTransaction }}>
        {children}
    </GlobalContext.Provider>)
}