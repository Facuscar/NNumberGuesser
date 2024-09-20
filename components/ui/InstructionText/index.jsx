import Colors from "../../../constants/colors";
import { StyleSheet, Text } from "react-native";

const InstructionText = ({ children, style }) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500
  },
})