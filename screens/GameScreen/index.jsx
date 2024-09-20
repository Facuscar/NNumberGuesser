import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../../components/ui/Title";
import { useEffect, useState } from "react";
import Number from "../../components/game/Number";
import PrimaryButton from "../../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, setIsGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      direction === 'lower' && currentGuess < userNumber
      || direction === 'greater' && currentGuess > userNumber
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
  }
  
  useEffect(() => {
    if (currentGuess === userNumber) {
      setIsGameOver(true);
    }
  }, [currentGuess, userNumber])

  return (
    <View style={styles.screen}>
      <Title text="Opponent's guess" />
      <Number>{currentGuess}</Number>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>+</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>-</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
})