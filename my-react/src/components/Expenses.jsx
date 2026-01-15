import Expenseitem from './Expensitem.jsx'
import './Expenses.css';

function Expenses(props) {
  
  return (
    <div className="expenses">
      <Expenseitem data={props.items[0]} />
      <Expenseitem data={props.items[1]} />
    </div>
  );
}

export default Expenses;