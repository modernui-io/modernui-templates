"use client";

// Next Themes imports
import type { ThemeProviderProps } from "next-themes";

import { Toaster } from "@/components/ui/toast";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";

export function BrowserUIProviders({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="square-playground-theme"
      {...props}
    >
      <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
      <Toaster />
    </NextThemeProvider>
  );
}
