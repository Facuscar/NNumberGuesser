import { Image, StyleSheet, View } from "react-native";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>
        Game over!
      </Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/images/success.png")} />
      </View>
      <Text>Your phone needed X rounds to guess the number Y</Text>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})