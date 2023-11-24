import axios from "axios";
const BaseURL =
  "https://react-native-bcb8a-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BaseURL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${BaseURL}/expenses.json`);
  const expenses = [];
  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      title: response.data[key].title,
    };
    expenses.push(expenseObject);
  }
  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(`${BaseURL}/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(`${BaseURL}/expenses/${id}.json`);
};
