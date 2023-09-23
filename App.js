import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
      placement='left'
        containerStyle={styles.header}
        leftComponent={
          <TouchableOpacity onPress={() => alert('Hello!')}>
            
          </TouchableOpacity>
        }
        centerComponent={
          {
            text: 'My App',
            style: {
              color: '#ffffff',
              fontSize: 17,
              fontWeight: 'bold',
            }
          }
        }
      />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to my app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#167b82',
  },
  header: {
    backgroundColor: '#034a50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
