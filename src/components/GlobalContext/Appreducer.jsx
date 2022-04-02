const Appreducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TRANSACTION':
            return { ...state, transactions:[action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            console.log('hi')
            return {...state, transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)}
            
        default:
            return state;

    }
}
export default  Appreducer;