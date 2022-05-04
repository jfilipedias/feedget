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

      <form className="my-4 w-full">
        <textarea
          placeholder={feedbackTypeData.placeholder}
          className="min-w-[314px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
        />
      </form>
    </>
  );
};
