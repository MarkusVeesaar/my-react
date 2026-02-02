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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {
        props.expenses.map((expense) => {
          return <Expenseitem key={expense.id} expensedata={expense}/> 
        })
      } 
    </Card>
  );
};

export default Expenses;
