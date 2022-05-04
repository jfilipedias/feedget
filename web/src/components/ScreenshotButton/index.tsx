import React, { useState } from "react";

import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";

import { Loading } from "../Loading";

export const ScreenshotButton: React.FC = () => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleScreenshot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");

    setIsTakingScreenshot(false);
  };

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
      onClick={handleScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
