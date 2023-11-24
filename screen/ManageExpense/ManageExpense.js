import { useContext, useLayoutEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "../../components/UI/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { styles } from "./styles";
import Button from "../../components/UI/Button";
import { ExpenesContext } from "../../store/Expenses-Context/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const expenseContext = useContext(ExpenesContext);
  const editedExpense = route.params?.expenseId;
  const isEditing = !!editedExpense;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelhandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      expenseContext.updateExpense(editedExpense, {
        title: "test",
        amount: 29.99,
        date: new Date("2023-11-24"),
      });
    } else {
      expenseContext.addExpense({
        title: "test",
        amount: 100,
        date: new Date("2023-11-24"),
      });
    }
    navigation.goBack();
  };
  const deleteExpenseHandler = () => {
    expenseContext.deleteExpense(editedExpense);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelhandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;
