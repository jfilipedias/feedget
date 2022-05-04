import React from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../Form";

interface Props {
  feedbackType: FeedbackType;
}

export const FeedbackContentStep: React.FC<Props> = ({
  feedbackType,
}: Props) => {
  const feedbackTypeData = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <span className="text-xl leading-6">
          <img
            src={feedbackTypeData.image.src}
            alt={feedbackTypeData.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeData.title}
        </span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full" />
    </>
  );
};
