import React from "react";

import successImage from "../../assets/success.svg";
import { CloseButton } from "../CloseButton";

interface Props {
  onResetFeedbackType: () => void;
}

export const FeedbackSuccessStep: React.FC<Props> = ({
  onResetFeedbackType,
}: Props) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImage} alt="Success" />
        <span className="text-xl mt-2">We appreciate the feedback!</span>
        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
          onClick={onResetFeedbackType}
        >
          I want to send a new feedback
        </button>
      </div>
    </>
  );
};
