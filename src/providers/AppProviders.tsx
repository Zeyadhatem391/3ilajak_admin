"use client";
import { ReactNode } from "react";
import ReactQueryProvider from "./React-query-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
interface Props {
  children: ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <ReactQueryProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </ReactQueryProvider>
  );
}
