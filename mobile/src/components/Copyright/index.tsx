import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export const Copyright: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Made with ♥ by Filipe Dias</Text>
    </View>
  );
};
