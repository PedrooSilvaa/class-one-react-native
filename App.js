
import {Text, View, StyleSheet, Platform} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.paragraph}>World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "android" ? "blue" : "yellow"
  },
  title: {
    color: "green",
    fontSize: 100,
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: 60,
    color: "yellow",
    fontWeight: "bold"
  }
})