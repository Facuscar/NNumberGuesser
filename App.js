import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StarGameScreen';

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.screen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  }
});
