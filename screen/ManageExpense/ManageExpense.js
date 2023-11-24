import { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../../components/UI/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { styles } from "./styles";
import Button from "../../components/UI/Button";
import { ExpenesContext } from "../../store/Expenses-Context/expenses-context";
import ExpenseForm from "../../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const expenseContext = useContext(ExpenesContext);
  const editedExpense = route.params?.expenseId;
  const isEditing = !!editedExpense;

  const selectedExpense = expenseContext.expenses.find(
    (expense) => expense.id === editedExpense
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelhandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expenseContext.updateExpense(editedExpense, expenseData);
    } else {
      expenseContext.addExpense(expenseData);
    }
    navigation.goBack();
  };
  const deleteExpenseHandler = () => {
    expenseContext.deleteExpense(editedExpense);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelhandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

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
