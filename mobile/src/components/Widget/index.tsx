import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { ChatTeardropDots } from "phosphor-react-native";

import BottomSheet from "@gorhom/bottom-sheet";

import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";
import { Options } from "../Options";
import { Success } from "../Success";
import { styles } from "./styles";

export type FeedbackType = keyof typeof feedbackTypes;

const Widget: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const handleFeedbackReset = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleFeedbackReset} />
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackReset={handleFeedbackReset}
                onFeedbackSubmit={() => setFeedbackSent(true)}
              />
            ) : (
              <Options onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Widget);
