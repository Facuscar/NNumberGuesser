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
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#ddb52f",
    padding: 12,
  }
})