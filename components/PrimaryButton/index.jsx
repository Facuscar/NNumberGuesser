import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {

  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) => pressed ? [styles.pressed, styles.container] : styles.container}
      >
        <Text style={styles.text}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    backgroundColor:  "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75
  }
})