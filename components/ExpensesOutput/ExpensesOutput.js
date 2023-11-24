import { View, Text } from "react-native";
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import ExpensesList from "../ExpensesList/ExpensesList";
import { styles } from "./styles";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;
