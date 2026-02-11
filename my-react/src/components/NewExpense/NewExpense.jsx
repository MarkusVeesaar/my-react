import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    resetEditFormHandler()
  };
  
  function resetEditFormHandler() {
  setEditForm(false);
  }

  function setEditFormHandler() {
  setEditForm(true);
  }

  if (editForm) {
      return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={setEditFormHandler}>Add new Expense</button>
      </div>
      )
  }
};

export default NewExpense;
