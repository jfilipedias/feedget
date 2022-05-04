import React from "react";

import { ArrowLeft } from "phosphor-react";

interface Props {
  onClick: () => void;
}

export const BackButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      onClick={onClick}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
};
