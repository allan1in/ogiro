export function ErrorBox({ message }: { message: string }) {
  return (
    <div className="mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300 whitespace-pre-wrap break-all">
      Error: {message}
    </div>
  );
}
