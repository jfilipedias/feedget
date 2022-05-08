import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export const Button: React.FC<Props> = ({ isLoading, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Send Feedback</Text>
      )}
    </TouchableOpacity>
  );
};
