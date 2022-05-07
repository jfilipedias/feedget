import React from "react";
import { View, Text } from "react-native";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { Option } from "../Option";
import { styles } from "./styles";

export const Options: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give your feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} title={value.title} image={value.image} />
        ))}
      </View>

      <Copyright />
    </View>
  );
};
