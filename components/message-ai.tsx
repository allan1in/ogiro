import { Avatar } from "./avatar";
import { LoadingMsg } from "./loading-msg";
import { MessageContent } from "./message-content";

export function MessageAI({ className, message }: { className?: string, message?: string }) {
  return (
    <div className={`flex gap-4 max-w-full animate-slide-in-left ${className}`}> 
        <div className="shrink-0">
            <Avatar className="bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-900"/>
        </div>
        {message != "" ? <div>
            <MessageContent className="bg-neutral-800">
              {message}
            </MessageContent>
        </div> : (
          <LoadingMsg/>
        )}
        <div className="shrink-0 w-11">
        </div>
    </div>
  );
}