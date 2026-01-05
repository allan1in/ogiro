export function LoadingMsg() {
  return (
    <div className="flex items-center gap-1.5 animate-slide-in-left [animation-delay:-1.0s]">
      <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce"></span>
    </div>
  );
}