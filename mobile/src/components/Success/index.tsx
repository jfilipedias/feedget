import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import successImage from "../../assets/success.png";
import { Copyright } from "../Copyright";
import { styles } from "./styles";

export function Success() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={successImage} />

      <Text style={styles.title}>We appreciate the feedback!</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>I want to send a new feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
