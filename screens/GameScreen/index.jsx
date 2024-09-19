import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>
        Opponent's guess
      </Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  }
})