"use client";
import React, { useState } from "react";
import { Checkbox } from "@/Components/ui/Checkbox/Checkbox"; 

export default function CheckboxDemo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="p-10 flex flex-col text-black items-start gap-4 font-sans">
      <Checkbox
        label={isChecked ? "Task is completed!" : "Mark as complete"}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        variant="default"
        size="lg"
        color="#10b981" // A modern emerald green
      />

      <div className="mt-4 p-3 bg-slate-50 rounded-md border border-slate-200 text-sm">
        <strong>Current State:</strong> {isChecked ? "✅ Checked" : "❌ Unchecked"}
      </div>
    </div>
  );
}