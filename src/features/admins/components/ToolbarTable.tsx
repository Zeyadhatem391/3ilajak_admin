"use client";

import { ListFilter } from "lucide-react";

type Filter = "All" | "System" | "Clinic";

interface Props {
  value: Filter;
  onChange: (value: Filter) => void;
}

const filters: Filter[] = ["All", "System", "Clinic"];

function ToolbarTable({ value, onChange }: Props) {
  return (
    <div className="flex items-center justify-between rounded-t-xl border border-gray-300 bg-white p-6 shadow">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-bold">Admin Directory</h1>

        <div className="rounded-lg border border-gray-300 bg-blue-100/50 p-1.5">
          <ul className="flex gap-2">
            {filters.map((filter) => (
              <li
                key={filter}
                onClick={() => onChange(filter)}
                className={`cursor-pointer rounded-lg px-3 py-1 font-medium transition-colors ${
                  value === filter
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-gray-600 hover:bg-white/60"
                }`}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="rounded-xl border border-gray-300 p-2 transition hover:bg-gray-100">
        <ListFilter className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ToolbarTable;
