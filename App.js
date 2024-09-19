import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StartGameScreen from './screens/StarGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  }
});
