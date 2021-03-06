import Header from './components/ActualIncome/Header.jsx'
import Balance from './components/ActualIncome/Balance.jsx'
import Expensesincome from './components/ActualIncome/Expensesincome';
import TransationList from './components/TransactionHistory/TransationList.jsx';
import AddTransation from './components/TransactionForm/AddTransation';

import {GlobalProvider} from './components/GlobalContext/GlobalContext.jsx';

function App() {
  return (
    <div className="d-flex flex-column align-items-center Colour ">
      <GlobalProvider>
      <Header />
      <div className='d-flex flex-column align-items-start'>
            <Balance/>
            <Expensesincome/>
            <TransationList/>
            <AddTransation/>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

