import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";
import { styles } from "./styles";

interface Props {
  feedbackType: FeedbackType;
}

export const Form: React.FC<Props> = ({ feedbackType }: Props) => {
  const feedbackData = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image style={styles.image} source={feedbackData.image} />
          <Text style={styles.title}>{feedbackData.title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder={feedbackData.placeholder}
        placeholderTextColor={theme.colors.text_secondary}
        multiline
      />
    </View>
  );
};
