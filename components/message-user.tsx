import { Avatar } from "./avatar";
import { MessageContent } from "./message-content";

export function MessageUser({
  className,
  message,
}: {
  className?: string;
  message: string;
}) {
  return (
    <div
      className={`flex justify-end gap-4 animate-slide-in-right ${className}`}
    >
      <div className="shrink-0 w-11">
      </div>
      <div>
        <MessageContent className="bg-rose-700 text-white">
          {message}
        </MessageContent>
      </div>
      <div className="shrink-0">
        <Avatar className="bg-gradient-to-br from-pink-400 via-rose-600 to-rose-800" />
      </div>
    </div>
  );
}
