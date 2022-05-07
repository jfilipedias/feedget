import React from "react";
import { TouchableOpacity } from "react-native";

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
        <Trash size={22} color={theme.colors.text_secondary} weight="fill" />
      ) : (
        <Camera />
      )}
    </TouchableOpacity>
  );
};
