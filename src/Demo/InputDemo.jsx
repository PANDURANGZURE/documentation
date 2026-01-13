'use client'
import { useState } from "react";
import {Input} from "@/Components/ui/Input/Input";

export default function InputDemo() {
  const [name, setName] = useState("");

  return (
    <div className="text-black">
      <Input
        label="Name"
        color="#000000"
        size="md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* show data below */}
      <p className="text-black text-sm m-4">Hi! <span className="font-semibold text-orange-500 uppercase">{name}</span> Welcome to Zure UI </p>
    </div>
  );
}
