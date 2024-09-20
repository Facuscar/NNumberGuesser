import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ text }) => {
  return (
    <Text style={styles.title}>
      {text}
  </Text>
  )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.accent500,
    padding: 12,
  }
})