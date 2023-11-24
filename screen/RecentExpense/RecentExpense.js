import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { ExpenesContext } from "../../store/Expenses-Context/expenses-context";
import { getDateMinusDays } from "../../util/date";
import { fetchExpenses } from "../../util/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";

const RecentExpense = () => {
  const expensesContext = useContext(ExpenesContext);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getExpenses = async () => {
      setIsLoading(true);
      try {
        const expenses = await fetchExpenses();
        expensesContext.setExpenses(expenses);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    getExpenses();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isLoading) {
    return <LoadingOverlay visible={isLoading} />;
  }

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
