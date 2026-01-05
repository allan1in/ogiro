"use client";

import { useState } from "react";

export function Input({
  className,
  onSend,
}: {
  className?: string;
  onSend: (text: string, done: () => void) => void;
}) {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || disabled){
      return;
    } 
    setDisabled(true);
    onSend(value, () => setDisabled(false));
    setValue("");
  };

  const textareaPlaceholder = "聊些什么呢？";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`w-full border border-neutral-700 focus-within:border-neutral-600 rounded-2xl p-4 flex flex-col justify-between gap-2 bg-neutral-950 ${className}`}
    >
      <textarea
        className="border-none focus:outline-none w-full resize-none h-30 scrollbar-thin"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={textareaPlaceholder}
        onKeyDown={handleKeyDown}
      />
      <div className="w-full flex flex-row-reverse">
        <button
          onClick={handleSend}
          className={`bg-white text-neutral-950 px-4 py-2 rounded-full ${
            disabled ? "cursor-default opacity-50" : "cursor-pointer"
          }`}
          disabled={disabled}
        >
          发送
        </button>
      </div>
    </div>
  );
}
