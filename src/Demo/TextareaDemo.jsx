"use client";

import { useState } from "react";
import { Textarea } from "@/Components/ui/Textarea";

export default function TextareaDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-black">
      
      {/* Left: Textarea */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">
          Your Message
        </label>

        <Textarea
          placeholder="Type something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-h-[160px]"
        />
      </div>

      {/* Right: Live Output */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">
          Live Preview
        </span>

        <div className="min-h-[160px] rounded-lg border border-dashed border-gray-300 p-3 text-gray-800">
          {value ? value : (
            <span className="text-gray-400">
              Typed content will appear here…
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
