import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StarGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState([]);

  const [fontsLoaded] = useFonts({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  if (!fontsLoaded) return <AppLoading /> 

  const pickNumberHandler = (pickedNumber) => {    
    setPickedNumber(pickedNumber);
  }

  const startNewGameHandler = () => {
    setPickedNumber(null);
    setGuessRounds([]);
    setIsGameOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} setIsGameOver={setIsGameOver} setGuessRounds={setGuessRounds} guessRounds={guessRounds} />
  }

  if (isGameOver) {
    screen = <GameOverScreen userNumber={pickedNumber} roundsNumber={guessRounds.length} onStartNewGame={startNewGameHandler} />
  }
  
  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.screen}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.screen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.screen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
