'use client';

import { Navbar } from "@/components/navbar";
import { Input } from "@/components/input";

export default function LandingPage() {
  const handlesend = (text: string) => {
    console.log("Input received on landing page:", text);
  };
  return (
    <div>
      <Navbar />
      <div className="h-dvh pt-14 flex items-center justify-center px-4">
        <div className="flex flex-col gap-4 max-w-3xl w-full items-center">
          <h1 className="text-4xl font-bold">Luma</h1>
          <p className="text-lg text-muted-foreground">
            An AI assistant.
          </p>
          <Input onSend={handlesend} />
        </div>
      </div>
    </div>
  );
}
