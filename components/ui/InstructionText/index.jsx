import Colors from "../../../constants/colors";
import { StyleSheet, Text } from "react-native";

const InstructionText = ({ children }) => {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500
  },
})