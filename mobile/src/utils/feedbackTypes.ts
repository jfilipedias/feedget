import bugImage from "../assets/bug.png";
import ideaImage from "../assets/idea.png";
import thoughtImage from "../assets/thought.png";

export const feedbackTypes = {
  bug: {
    title: "Bug",
    image: bugImage,
    placeholder:
      "Is something not working properly? We want to fix it. Tell us in detail what's going on.",
  },
  idea: {
    title: "Idea",
    image: ideaImage,
    placeholder: "Got an idea for improvement or a new feature? Tell us!",
  },
  thought: {
    title: "Thought",
    image: thoughtImage,
    placeholder: "We want to hear from you. What would you like to tell us?",
  },
};
