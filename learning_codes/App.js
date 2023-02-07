import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FlatListDemo from '../learning_codes/src/FlatListDemo';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}>Hello World!!!</Text>
      <StatusBar style="auto" />
      <FlatListDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'red',
  },
});
