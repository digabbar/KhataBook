import { View, StyleSheet, TextInput } from "react-native";
import ExpenseInput from "./ExpenseInput";
import Button from "../Ui/Button";
import { useReducer } from "react";
import { ValidateDate } from "../../utils/ValidateDate";
import { AddExpense } from "../../store/expensesAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  amountInput: "",
  dateInput: "",
  descriptionInput: "",
  inputIsValid: {
    amountIsValid: true,
    dateIsValid: true,
    descriptionIsValid: true,
  },
};

const formReducer = (state, action) => {
  if (action.type === "amount") {
    return { ...state, amountInput: action.data };
  } else if (action.type === "date") {
    return { ...state, dateInput: action.data };
  } else if (action.type === "description") {
    return { ...state, descriptionInput: action.data };
  } else if (action.type === "validation") {
    return { ...state, inputIsValid: { ...action.data } };
  } else {
    return initialState;
  }
};

const ExpenseForm = () => {
  const Rdispatch = useDispatch();
  const [state, dispatch] = useReducer(formReducer, initialState);
  const formSubmitHandler = () => {
    const refactordata = {
      amount: +state.amountInput,
      description: state.descriptionInput,
      date: state.dateInput,
    };
    const amountIsValid =
      !isNaN(refactordata.amount) && refactordata.amount > 0;
    const dateIsValid = ValidateDate(refactordata.date);
    const descriptionIsValid = refactordata.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      dispatch({
        type: "validation",
        data: {
          amountIsValid: amountIsValid,
          dateIsValid: dateIsValid,
          descriptionIsValid: descriptionIsValid,
        },
      });
      return;
    }
    dispatch({
      type: "validation",
      data: {
        amountIsValid: amountIsValid,
        dateIsValid: dateIsValid,
        descriptionIsValid: descriptionIsValid,
      },
    });
    Rdispatch(
      AddExpense({
        ...refactordata,
      })
    );
  };
  const inputChangeHandler = (key, enteredValue) => {
    dispatch({ type: key, data: enteredValue });
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.amountDateContainer}>
        <ExpenseInput
          rowFlex={true}
          config={{
            keyboardType: "decimal-pad",
            placeholder: "Amount",
            onChangeText: inputChangeHandler.bind(null, "amount"),
            value: state.amountInput,
            isValid: state.inputIsValid.amountIsValid ? true : false,
          }}
        />
        <ExpenseInput
          rowFlex={true}
          config={{
            placeholder: "YYYY-MM-DD",
            autoCapitalize: "none",
            autoCorrect: false,
            autoCapitalize: "none",
            onChangeText: inputChangeHandler.bind(null, "date"),
            value: state.dateInput,
            isValid: state.inputIsValid.dateIsValid ? true : false,
          }}
        />
      </View>
      <ExpenseInput
        config={{
          autoCapitalize: "none",
          autoCorrect: false,
          multiline: true,
          placeholder: "Description",
          onChangeText: inputChangeHandler.bind(null, "description"),
          value: state.descriptionInput,
          isValid: state.inputIsValid.descriptionIsValid ? true : false,
        }}
      />
      <View style={styles.actionBtn}>
        <View>
          <Button title="Add" onPress={formSubmitHandler} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    width: "95%",
    marginTop: 20,
  },
  amountDateContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  actionBtn: {
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
  },
});

export default ExpenseForm;
