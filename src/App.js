import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "car Insurance",
    amount: 64.92,
    date: new Date(2021, 4, 14),
  },
  {
    id: "e3",
    title: "More Money",
    amount: 100.62,
    date: new Date(2022, 1, 18),
  },
  {
    id: "e4",
    title: "Income",
    amount: 77.62,
    date: new Date(2020, 6, 26),
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
