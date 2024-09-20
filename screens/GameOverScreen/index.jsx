import { Image, StyleSheet, View, Text } from "react-native";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import PrimaryButton from "../../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>
        Game over!
      </Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>
          {roundsNumber}
        </Text> 
        {" "}rounds to guess the number{" "}
        <Text style={styles.highlight}>
          {userNumber}
        </Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
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
  },
  summaryText: {
    fontSize: 24,
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})