import { useContext } from "react";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { ExpenesContext } from "../../store/Expenses-Context/expenses-context";

const AllExpenses = () => {
  const expenseContext = useContext(ExpenesContext);
  return (
    <ExpensesOutput expenses={expenseContext.expenses} expensesPeriod="Total" />
  );
};

export default AllExpenses;
