import Expenses from './components/Expenses/Expenses';
import Expenseitem from './components/Expenses/Expensitem'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const DYMMY_expenses =[ 
  {
    id: 1,
    date : new Date(2024, 10, 12),
    title : "new book",
    amount : 30.99
  },
  {
    id: 2,
    date : new Date(2024, 10, 12),
    title : "new book 2",
    amount : 99.99
  },
  {
    id: 3,
    date : new Date(2024, 11, 12),
    title : "new book 3",
    amount : 199.99
  }
  ];

  const addExpenseHandler = (expense) => {
    console.log('In app.jsx')
    console.log(expense)
  }     

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={DYMMY_expenses} />
    </div>
  );
}


export default App
