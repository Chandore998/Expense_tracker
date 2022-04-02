import React,{createContext, useReducer,useEffect} from 'react'
import Appreducer from './Appreducer.jsx'

const initialState ={
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(Appreducer, initialState,()=>{
        const storeData = localStorage.getItem('transactions')
        return storeData ? JSON.parse(storeData) : initialState
    })

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