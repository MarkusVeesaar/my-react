import Expenseitem from "./Expensitem.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import Card from "../UI/Card.jsx";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    console.log("Year Data in expenses:", selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Expenseitem data={props.items[0]} />
      <Expenseitem data={props.items[1]} />
    </Card>
  );
}

export default Expenses;
