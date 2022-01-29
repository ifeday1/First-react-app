import ExpenseItem from "./components/ExpenseItem";
function App(props) {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
