import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetInputHandler = () => {
    setEnteredNumber("");
  }

  const numberInputHandler = (number) => {
    setEnteredNumber(number);
  }

  const confirmInputHandler = () => {
    const chosenNumber = Number(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "The guess has to be a number between 1 and 99",
        [{ text: 'Okay', style: "destructive", onPress: resetInputHandler}]
      );
      return;
    }

    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" value={enteredNumber} onChangeText={numberInputHandler} />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  }
})