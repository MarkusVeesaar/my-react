import Expenseitem from './Expensitem.jsx'
import Card from './Card.jsx'
import './Expenses.css';

function Expenses(props) {
  
  return (
    <Card className="expenses">
      <Expenseitem data={props.items[0]} />
      <Expenseitem data={props.items[1]} />
    </Card>
  );
}

export default Expenses;