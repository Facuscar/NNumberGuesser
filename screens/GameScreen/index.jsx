import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import Title from "../../components/ui/Title";
import { useEffect, useState } from "react";
import Number from "../../components/game/Number";
import PrimaryButton from "../../components/ui/PrimaryButton";
import InstructionText from "../../components/ui/InstructionText";
import Card from "../../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../../components/game/GuessLogItem";

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

const GameScreen = ({ userNumber, setIsGameOver, setGuessRounds, guessRounds }) => {
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
    setGuessRounds((state) => [newRandomNumber, ...state])
  }
  
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  useEffect(() => {
    if (currentGuess === userNumber) {
      setIsGameOver(true);
    }
  }, [currentGuess, userNumber])

  const guessRoundsLength = guessRounds.length

  return (
    <View style={styles.screen}>
      <Title text="Opponent's guess" />
      <Number>{currentGuess}</Number>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-outline" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
      <FlatList data={guessRounds} renderItem={(item) => <GuessLogItem guess={item.item} roundNumber={guessRoundsLength - item.index} />} keyExtractor={(item) => item} />
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
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
    textAlign: 'center'
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
})