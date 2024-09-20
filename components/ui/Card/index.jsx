import Colors from "../../../constants/colors";
import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return (
    <View style={styles.cardContainer}>
      {children}
    </View>
  )
}
export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})