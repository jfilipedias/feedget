import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { captureScreen } from "react-native-view-shot";

import * as FileSystem from "expo-file-system";
import { ArrowLeft } from "phosphor-react-native";

import { api } from "../../libs/api";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Button } from "../Button";
import { ScreenshotButton } from "../ScreenshotButton";
import { FeedbackType } from "../Widget";
import { styles } from "./styles";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackReset: () => void;
  onFeedbackSubmit: () => void;
}

export const Form: React.FC<Props> = ({
  feedbackType,
  onFeedbackReset,
  onFeedbackSubmit,
}: Props) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [comment, setComment] = useState("");

  const feedbackData = feedbackTypes[feedbackType];

  const handleScreenshot = async () => {
    const uri = await captureScreen({
      format: "jpg",
      quality: 0.8,
    });

    setScreenshot(uri);
  };

  const handleSubmit = async () => {
    if (isSubmittingFeedback) {
      return;
    }

    setIsSubmittingFeedback(true);

    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
      });

      onFeedbackSubmit();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackReset}>
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
        onChangeText={setComment}
        autoCorrect={false}
        multiline
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeScreenshot={handleScreenshot}
          onRemoveScreenshot={() => setScreenshot(null)}
        />
        <Button isLoading={isSubmittingFeedback} onPress={handleSubmit} />
      </View>
    </View>
  );
};
