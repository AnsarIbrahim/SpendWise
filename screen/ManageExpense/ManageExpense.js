import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "../../components/UI/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { styles } from "./styles";
import Button from "../../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
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
    navigation.goBack();
  };
  const deleteExpenseHandler = () => {
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
