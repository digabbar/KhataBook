import { Text, View, StyleSheet, Button } from "react-native";
import ExpenseForm from "../Components/ManageExpenseComp/ExpenseForm";
import Title from "../Components/ManageExpenseComp/Title";
import { useSelector } from "react-redux";
import { expenseAction } from "../store/expenseSlice";
import { useDispatch } from "react-redux";
const ManageScreen = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.expense);
  const resetHandler = () => {
    dispatch(expenseAction.resetStatus());
  };
  return (
    <View style={styles.root}>
      <Title />
      <ExpenseForm />
      <View style={styles.ido}>
        <Text>{status}</Text>
        <Text>{error}</Text>
        <Button title="reset" onPress={resetHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  ido: {
    borderWidth: 1,
    marginTop: 42,
  },
});
export default ManageScreen;
