import { useContext, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import IconButton from "../../components/UI/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { styles } from "./styles";
import { ExpenesContext } from "../../store/Expenses-Context/expenses-context";
import ExpenseForm from "../../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../../util/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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

  const confirmHandler = async (expenseData) => {
    setIsLoading(true);
    try {
      if (isEditing) {
        expenseContext.updateExpense(editedExpense, expenseData);
        await updateExpense(editedExpense, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseContext.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  const deleteExpenseHandler = async () => {
    setIsLoading(true);
    try {
      await deleteExpense(editedExpense);
      expenseContext.deleteExpense(editedExpense);
      navigation.goBack();
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isLoading) {
    return <LoadingOverlay visible={isLoading} />;
  }

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
