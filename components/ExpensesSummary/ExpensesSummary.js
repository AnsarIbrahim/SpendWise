import { View, Text } from "react-native";
import { styles } from "./styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
