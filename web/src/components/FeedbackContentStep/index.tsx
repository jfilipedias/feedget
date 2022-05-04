import React from "react";

import { ArrowLeft } from "phosphor-react";

import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../Form";

interface Props {
  feedbackType: FeedbackType;
  onResetFeedbackType: () => void;
}

export const FeedbackContentStep: React.FC<Props> = ({
  feedbackType,
  onResetFeedbackType,
}: Props) => {
  const feedbackTypeData = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onResetFeedbackType}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
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
