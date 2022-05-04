import React from "react";

import { BackButton } from "../BackButton";
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
        <BackButton onClick={onResetFeedbackType} />

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

        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
          >
            <Camera className="w-6 h-6" />
          </button>

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 items-center justify-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
          >
            Send Feedback
          </button>
        </footer>
      </form>
    </>
  );
};
