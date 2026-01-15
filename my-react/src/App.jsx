import Expenseitem from './components/Expensitem'

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
] 

  return (
    <div className="App">
      <Expenseitem data={expenses[0]}/>
      <Expenseitem data={expenses[1]}/>
    </div>
  )
}


export default App
