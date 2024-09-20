import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StarGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  const pickNumberHandler = (pickedNumber) => {
    console.log(pickedNumber);
    
    setPickedNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} setIsGameOver={setIsGameOver} />
  }

  if (isGameOver) {
    screen = <GameOverScreen />
  }
  
  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.screen}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.screen} imageStyle={styles.backgroundImage}>
        {screen}
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
