import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Text as RNText } from "react-native";

import { cva } from "class-variance-authority";

import * as Slot from "@rn-primitives/slot";
import type { SlottableTextProps, TextRef } from "@rn-primitives/types";

import { cn } from "@/lib/utils";

const TextClassContext = React.createContext<string | undefined>(undefined);

const textVariants = cva("text-foreground", {
  variants: {
    level: {
      lgTitle: "text-4xl font-semibold leading-9",
      baseTitle: "text-3xl font-semibold leading-9",
      mdTitle: "text-2xl font-semibold leading-8",
      smTitle: "text-xl leading-8",
      xsTitle: "text-lg leading-8",
      sub: "text-lg leading-8 tracking-wide text-muted-foreground",
      xlTall: "text-xl leading-8",
      xl: "text-xl leading-7",
      lgTall: "text-lg leading-8",
      lg: "text-lg leading-7",
      baseTall: "text-base leading-7",
      base: "text-base leading-6",
      mdTall: "text-md leading-6",
      md: "text-md leading-4",
      smTall: "text-sm leading-4",
      sm: "text-sm leading-3",
      xs: "text-xs leading-3",
    },
  },
  defaultVariants: {
    level: "base",
  },
});

export interface TextProps
  extends SlottableTextProps,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<TextRef, TextProps>(
  ({ className, level, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "text-base text-foreground web:select-text",
          textClass,
          level && textVariants({ level: level }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

const Typography = Text;

export { Typography, Text, TextClassContext };
