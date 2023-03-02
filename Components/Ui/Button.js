import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title = "Save", disabled } = props;

  return (
    <Pressable
      style={({ pressed }) => {
        return [styles.button, pressed && styles.effect];
      }}
      disabled={disabled === "loading"}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "black",
    marginHorizontal: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  effect: {
    opacity: 0.5,
  },
});
