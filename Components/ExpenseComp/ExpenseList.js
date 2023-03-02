import { FlatList, View, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";
import Total from "../Total";
const renderItem = ({ item }) => {
  return <ExpenseItem expense={item} />;
};
const ExpenseList = (props) => {
  return (
    <View style={styles.container}>
      <Total data={props.expenses} />
      <FlatList
        data={props.expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.FlatList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  FlatList: {
    width: "95%",
  },
});

export default ExpenseList;
