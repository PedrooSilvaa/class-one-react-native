import { styles } from './style.js';
import {Text, View,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.paragraph}>World</Text>
    </View>
  );
}