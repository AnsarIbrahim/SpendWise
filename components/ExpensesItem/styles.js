import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  textTitle: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  textDate: {
    fontSize: 12,
    fontWeight: "regular",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontSize: 14,
    fontWeight: "bold",
  },
});
