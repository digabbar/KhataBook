import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ExpenseItem = (props) => {
  const navigatation = useNavigation();
  return (
    <View style={styles.outer}>
      <Pressable
        style={({ pressed }) => {
          return pressed && styles.effect;
        }}
        onPress={() => {
          navigatation.navigate("ManageExpense");
        }}
      >
        <View style={styles.expenseItemContainer}>
          <View style={styles.expenseDetailContainer}>
            <Text style={styles.expenseDetailDescText}>
              {props.expense.description}
            </Text>
            <Text style={styles.expenseDetailDateText}>
              {props.expense.date}
            </Text>
          </View>
          <View style={styles.expenseAmountContainer}>
            <Text style={styles.expenseDetailAmountText}>
              {props.expense.amount}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  outer: {
    borderWidth: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.6,
    borderRadius: 10,
  },
  expenseItemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  expenseDetailDescText: {
    fontSize: 18,
    fontWeight: "600",
  },
  expenseDetailDateText: {
    color: "grey",
    fontWeight: "600",
  },
  expenseAmountContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "38%",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  expenseDetailContainer: {
    width: "60%",
  },
  expenseDetailAmountText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  effect: {
    opacity: 0.5,
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default ExpenseItem;
