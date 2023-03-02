import { View, Text, StyleSheet } from "react-native";
import ExpenseList from "../Components/ExpenseComp/ExpenseList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchExpense } from "../store/expensesAction";
import { useDispatch } from "react-redux";
const AllExpenseScreen = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expense);
  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);
  return (
    <View style={styles.root}>
      <ExpenseList expenses={expenses} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default AllExpenseScreen;
