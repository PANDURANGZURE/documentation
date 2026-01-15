"use client";

import React from "react";
import { Toast as ToastUI, toast } from "@/Components/ui/Toast";

export default function ToastDocsDemo() {
  return (
    <>
      {/* Toast Mount */}
      <ToastUI />

      <div className="p-10 max-w-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Toast Demo
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={() => toast("Default Toast")}
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            Default
          </button>

          <button
            onClick={() => toast.success("Success Toast")}
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
          >
            Success
          </button>

          <button
            onClick={() => toast.error("Error Toast")}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
          >
            Error
          </button>

          <button
            onClick={() => toast.warning("Warning Toast")}
            className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500 transition"
          >
            Warning
          </button>

          <button
            onClick={() => toast.info("Info Toast")}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Info
          </button>
        </div>
      </div>
    </>
  );
}
