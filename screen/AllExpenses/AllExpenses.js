import { Text, View } from "react-native";
import { styles } from "./styles";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod="Total" />;
};

export default AllExpenses;
