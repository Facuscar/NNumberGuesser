import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StarGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  const pickNumberHandler = (pickedNumber) => {
    setPickedNumber(pickedNumber);
  }

  let screen = <StartGameScreen />

  if (pickedNumber) {
    screen = <GameScreen />
  }
  
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.screen}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.screen} imageStyle={styles.backgroundImage}>
        <StartGameScreen onPickNumber={pickNumberHandler} />
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
