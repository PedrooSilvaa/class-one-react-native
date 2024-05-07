
import {Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={{
    display: 'flex', 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    flex: 1,
    backgroundColor: "blue"}}>

      <Text style={{
        fontSize: 80,
        color: "yellow",
        fontWeight: "bold"
      }}>Hello World</Text>

      <Text style={{
        fontSize: 60,
        color: "red",
        fontWeight: "bold"
      }}>Hello World</Text>

      <Text style={{
        fontSize: 40,
        color: "green",
        fontWeight: "bold"
      }}>Hello World</Text>
    </View>
  );
}


