import { useContext } from "react";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { ExpenesContext } from "../../store/Expenses-Context/expenses-context";
import { getDateMinusDays } from "../../util/date";

const RecentExpense = () => {
  const expensesContext = useContext(ExpenesContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No registered Expenses on Past 7 Days"
    />
  );
};

export default RecentExpense;
