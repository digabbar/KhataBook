import { View, Text, StyleSheet } from "react-native";
const Total = (props) => {
  const total = props.data.reduce((acc, cur) => acc + cur.amount, 0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Total Expense</Text>
      </View>
      <View>
        <Text style={styles.text}>$ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "yellow",
    padding: 10,
  },
  text: {
    fontWeight: "600",
    fontSize: 24,
  },
});
export default Total;
