import { FlatList, View } from "react-native";
import ExpensesItem from "../ExpensesItem/ExpensesItem";
import { styles } from "./styles";

const renderExpenseItem = (itemData) => {
  return <ExpensesItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;
