import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.component1}>
          <View style={styles.comp1Box1}></View>
          <View style={styles.comp1Box2}></View>
          <View style={styles.comp1Box3}></View>
     </View>
      <View style={styles.component2}>
          <View style={styles.comp2Box1}></View>
          <View style={styles.comp2Box2}></View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  component1: {
    flex: 0.5,
    flexDirection : "row"
  },
  comp1Box1: {
    flex: 3,
    backgroundColor : "green"

  },
  comp1Box2: {
    flex: 2,
    backgroundColor : "red"
  },
  comp1Box3: {
    flex: 1,
    backgroundColor : "blue"
  },

  component2: {
    flex: 0.5,
  },
  comp2Box1: {
    flex: 0.5,
    backgroundColor : "purple",
  },
  comp2Box2: {
    flex: 0.5,
    backgroundColor : "yellow",
  },
});
