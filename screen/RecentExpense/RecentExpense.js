import { Text, View } from "react-native";
import { styles } from "./styles";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";

const RecentExpense = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

export default RecentExpense;
