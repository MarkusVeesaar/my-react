import ExpenseDate from "./Expensdate.jsx";
import Card from "../UI/Card.jsx";
import "./Expensitem.css";
import { useState } from "react";

const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.expensedata.title);

  const ClickHandler = () => {
    console.log("Clicked");
    setTitle(`Updated by click ${title}`);
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expensedata.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.expensedata.amount}</div>
      </div>
      <button onClick={ClickHandler}>Click Me</button>
    </Card>
  );
};

export default Expenseitem;
