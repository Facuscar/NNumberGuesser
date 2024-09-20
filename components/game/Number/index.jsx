import { StyleSheet, Text, View } from "react-native"
import Colors from "../../../constants/colors"

const Number = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  )
}

export default Number;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  }
})