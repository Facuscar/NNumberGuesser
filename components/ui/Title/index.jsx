import { Text, StyleSheet } from "react-native";

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
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    padding: 12,
  }
})