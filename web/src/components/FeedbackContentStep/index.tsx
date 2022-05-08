import React, { FormEvent, useState } from "react";

import { api } from "../../libs/api";
import { BackButton } from "../BackButton";
import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../Form";
import { Loading } from "../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface Props {
  feedbackType: FeedbackType;
  onResetFeedbackType: () => void;
  onSubmitFeedback: () => void;
}

export const FeedbackContentStep: React.FC<Props> = ({
  feedbackType,
  onResetFeedbackType,
  onSubmitFeedback,
}: Props) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const feedbackTypeData = feedbackTypes[feedbackType];

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSubmitting(false);

    onSubmitFeedback();
  };

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

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          placeholder={feedbackTypeData.placeholder}
          className="min-w-[314px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none"
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onTakeScreenshot={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSubmitting}
            className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 items-center justify-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover:bg-brand-500 transition-colors"
          >
            {isSubmitting ? <Loading /> : "Send Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
