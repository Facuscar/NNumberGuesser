import { Image, StyleSheet, View, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import PrimaryButton from "../../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 80
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>
          Game over!
        </Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
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