import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Pedometer } from "expo-sensors";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: 0,
      isPedometerAvailable: false,
    };
  }
  componentDidMount() {
    this.pedometerPermission();
  }
  pedometerPermission = async () => {
    let isAvailable = await Pedometer.isAvailableAsync();
    this.setState({ isPedometerAvailable: isAvailable });
    console.log(isAvailable);

    if (isAvailable) {
      let isAccessible = await Pedometer.getPermissionsAsync();
      console.log(isAccessible);
      if (isAccessible) {
        let isUsable = await Pedometer.requestPermissionsAsync();
        console.log(isUsable);
        if (isUsable) {
          return Pedometer.watchStepCount((result) => {
            this.setState({ steps: result.steps });
          });
        }
      }
    }
  };
  render() {
    
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header
            placement="left"
            containerStyle={styles.header}
            leftComponent={
              <TouchableOpacity onPress={() => alert("Hello!")}>
                <Ionicons name="menu" size={24} color="#ffffff" />
              </TouchableOpacity>
            }
            centerComponent={{
              text: "My Step Counter App",
              style: {
                color: "#ffffff",
                fontSize: 17,
                fontWeight: "bold",
              },
            }}
          />
          <View style={styles.content}>
            <Text style={styles.text}>Steps: {this.state.steps}</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#167b82",
  },
  header: {
    backgroundColor: "#034a50",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
