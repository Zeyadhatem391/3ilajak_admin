"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const placeholders = {
  user: "Search by user...",
  doctor: "Search by doctor...",
  clinic: "Search by clinic...",
  prescription: "Search by prescription...",
};

export default function AppointmentToolbar() {
  const [searchType, setSearchType] =
    useState<keyof typeof placeholders>("user");

  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
      <div className="relative min-w-[320px] flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <Input
          placeholder={placeholders[searchType]}
          className="
            h-11
            rounded-xl
            border-0
            bg-gray-50
            pl-11
            shadow-none
            ring-0
            focus-visible:ring-2
            focus-visible:ring-emerald-500
          "
        />
      </div>

      <Select
        value={searchType}
        onValueChange={(value) =>
          setSearchType(value as keyof typeof placeholders)
        }
      >
        <SelectTrigger
          className="
            h-11
            w-[180px]
            rounded-xl
            border-0
            bg-gray-50
            shadow-none
            focus:ring-2
            focus:ring-emerald-500
          "
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="rounded-xl border-0 shadow-xl bg-white">
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="doctor">Doctor</SelectItem>
          <SelectItem value="clinic">Clinic</SelectItem>
          <SelectItem value="prescription">
            Prescription
          </SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex h-11 w-[180px] items-center justify-between rounded-xl bg-gray-50 px-4 text-sm transition hover:bg-gray-100",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : "Select date"}

            <CalendarIcon className="h-4 w-4 opacity-60" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="w-auto rounded-xl p-0 shadow-xl bg-white"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}