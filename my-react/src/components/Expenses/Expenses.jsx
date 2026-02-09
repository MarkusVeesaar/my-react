import Expenseitem from "./Expensitem.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import Card from "../UI/Card.jsx";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    console.log("Year Data in expenses:", selectedYear);
    setFilteredYear(selectedYear);
  };

  props.expenses.map((expense) => {
    console.log(expense);
  });

  const filteredExpenses = props.expenses.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}/>
        {
          filteredExpenses.length === 0 && <p>No expenses found.</p>
        }
        {
          filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
            return <Expenseitem key={expense.id} expensedata={expense}/>
          })
        }  
    </Card>
  );
};

export default Expenses;
