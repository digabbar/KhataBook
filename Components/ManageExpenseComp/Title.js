import { View, Text, StyleSheet } from "react-native";
const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.text}>ADD/Update Expense</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 24,
  },
});

export default Title;
