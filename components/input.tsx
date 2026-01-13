"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  onSend,
  disabled = false,
}: {
  className?: string;
  onSend: (text: string) => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || disabled){
      return;
    } 
    onSend(value.trim());
    setValue("");
  };

  const textareaPlaceholder = "想聊些什么呢？";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={cn("w-full border border-border focus-within:border-ring rounded-2xl p-4 flex flex-col justify-between gap-2 bg-background", className)}
    >
      <textarea
        className="border-none focus:outline-none w-full resize-none h-30 scrollbar-thin bg-transparent text-foreground placeholder:text-muted-foreground"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={textareaPlaceholder}
        onKeyDown={handleKeyDown}
      />
      <div className="w-full flex flex-row-reverse">
        <button
          onClick={handleSend}
          className={`bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors ${
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
