import React, { useState } from "react";

import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";

import { Loading } from "../Loading";

interface Props {
  screenshot: string | null;
  onTakeScreenshot: (screenshot: string | null) => void;
}

export const ScreenshotButton: React.FC<Props> = ({
  screenshot,
  onTakeScreenshot,
}: Props) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleScreenshot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");
    onTakeScreenshot(base64Image);

    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex items-end justify-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
        onClick={() => onTakeScreenshot(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

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
