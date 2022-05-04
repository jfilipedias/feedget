import React from "react";

import { X } from "phosphor-react";

import { Popover } from "@headlessui/react";

export const CloseButton: React.FC = () => {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Close feedback form"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
};
