import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenseScreen from "./Screens/AllExpenseScreen";
import ManageScreen from "./Screens/ManageScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
const Tab = createBottomTabNavigator();
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useSelector } from "react-redux";
import Notification from "./Components/Ui/Notification";
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "KhataBook",
      }}
    >
      <Tab.Screen
        name="ManageExpense"
        component={ManageScreen}
        options={{
          title: "Manage Expense",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "pencil" : "pencil-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AllExpense"
        component={AllExpenseScreen}
        options={{
          title: "All Expense",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
function App() {
  const notification = useSelector((state) => state.notification);

  return (
    <>
      <StatusBar style="dark" />
      {notification.message && (
        <View style={styles.notificationContainer}>
          <Notification />
        </View>
      )}
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
export default AppWrapper;
const styles = StyleSheet.create({
  notificationContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
});
