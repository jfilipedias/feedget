import React from "react";

import bugImage from "../../assets/images/bug.svg";
import ideaImage from "../../assets/images/idea.svg";
import thoughtImage from "../../assets/images/thought.svg";
import { CloseButton } from "../CloseButton";

const feedbackTypes = {
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

export const Form: React.FC = () => {
  return (
    <div className="bg-zinc-700 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Give your feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        <button />
      </div>

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
