import { View, Text, StyleSheet, TextInput } from "react-native";
const ExpenseInput = ({ config, rowFlex }) => {
  const { multiline, isValid } = config;
  const containerStyle = [rowFlex === true ? styles.rowFlex : styles.container];
  const textStyle = [styles.textInput];
  if (multiline) {
    containerStyle.push(styles.multiline);
    textStyle.push(styles.multiline);
  }
  if (!isValid) {
    containerStyle.push(styles.inValid);
  }

  return (
    <View style={containerStyle}>
      <TextInput {...config} style={textStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
  },
  rowFlex: {
    flex: 1,
    borderWidth: 1,
  },
  multiline: {
    minHeight: 100,
  },
  textInput: {
    padding: 5,
    fontSize: 18,
    fontWeight: "400",
  },
  inValid: {
    borderWidth: 1,
    borderColor: "red",
  },
});
export default ExpenseInput;
