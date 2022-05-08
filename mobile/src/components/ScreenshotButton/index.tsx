import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { Camera, Trash } from "phosphor-react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

interface Props {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
}

export const ScreenshotButton: React.FC<Props> = ({
  screenshot,
  onTakeScreenshot,
  onRemoveScreenshot,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
    >
      {screenshot ? (
        <View style={styles.trashContainer}>
          <Image style={styles.image} source={{ uri: screenshot }} />
          <Trash
            size={20}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.trash}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_primary} weight="bold" />
      )}
    </TouchableOpacity>
  );
};
