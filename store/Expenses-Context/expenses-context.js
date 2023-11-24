const { createContext, useReducer } = require("react");
// import DUMMY_EXPENSES from "../../Dummy/Dummy";

export const ExpenesContext = createContext({
  expenses: [],

  addExpense: ({ title, amount, date }) => {},
  setExpenses: (expenses) => {},
  removeExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const invertedExpenses = action.payload.reverse();
      return invertedExpenses;
    case "UPDATE":
      const updatableIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpenses = state[updatableIndex];
      const updatedIem = { ...updatableExpenses, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableIndex] = updatedIem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenesContext.Provider value={value}>{children}</ExpenesContext.Provider>
  );
};

export default ExpensesContextProvider;
