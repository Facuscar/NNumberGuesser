import { View, Text, StyleSheet } from "react-native";
import Title from "../../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title text={"Opponent's guess"} />
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
  },
})