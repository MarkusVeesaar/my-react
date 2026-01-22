import Expenses from './components/Expenses/Expenses';
import Expenseitem from './components/Expenses/Expensitem'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses =[ 
  {
    date : new Date(2024, 10, 12),
    title : "new book",
    price : 30.99
  },
  {
    date : new Date(2024, 10, 12),
    title : "new book 2",
    price : 99.99
  }
];

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}


export default App
