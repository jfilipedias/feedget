import React, { useState } from "react";

import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import thoughtImage from "../../assets/thought.svg";
import { FeedbackTypeStep } from "../FeedbackTypeStep";

export const feedbackTypes = {
  bug: {
    title: "Bug",
    image: {
      src: bugImage,
      alt: "Image of a bug",
    },
  },
  idea: {
    title: "Idea",
    image: {
      src: ideaImage,
      alt: "Image of a lighted lamp",
    },
  },
  thought: {
    title: "Thought",
    image: {
      src: thoughtImage,
      alt: "Image of a thought cloud",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

export const Form: React.FC = () => {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <p>{feedbackType}</p>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/jfilipedias"
        >
          Filipe Dias
        </a>
      </footer>
    </div>
  );
};
