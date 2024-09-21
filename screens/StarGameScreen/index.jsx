import { TextInput, View, StyleSheet, Alert, useWindowDimensions } from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../../constants/colors";
import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import InstructionText from "../../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const { width, height } = useWindowDimensions();
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

  const marginTop = height < 400 ? 30 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop }]}>
      <Title text="Guess my number" />
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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