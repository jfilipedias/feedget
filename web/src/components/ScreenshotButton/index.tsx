import React, { useState } from "react";

import { Camera } from "phosphor-react";

import { Loading } from "../Loading";

export const ScreenshotButton: React.FC = () => {
  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
      onClick={handleScreenshot}
    >
    </button>
  );
};
