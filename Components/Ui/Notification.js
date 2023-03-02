import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../../store/notificationSlice";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideNotification());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{notification.message}</Text>
      <TouchableOpacity onPress={handleClose}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 16,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  message: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Notification;
