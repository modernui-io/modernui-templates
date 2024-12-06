import type { Config } from "tailwindcss";

import containerQueriesPlugin from "@tailwindcss/container-queries";
import typographyPlugin from "@tailwindcss/typography";
import scrollbarPlugin from "tailwind-scrollbar";
import animatePlugin from "tailwindcss-animate";

import base from "./base";

import { boltColors } from "./boltstyles";

export default {
  content: base.content,
  presets: [base],
  plugins: [
    typographyPlugin,
    scrollbarPlugin,
    animatePlugin,
    containerQueriesPlugin,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xs: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
      screens: {
        xxs: "380px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        accent: boltColors.accent,
        alpha: boltColors.alpha,
        bolt: {
          elements: boltColors.elements,
        },
      },
      fontSize: {
        md: [".9rem", "1.35rem"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "16": "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
        example: "repeat(auto-fill, minmax(200px, 1fr))",
        actions:
          "minmax(max-content,1fr) minmax(max-content,auto) minmax(130px,1fr)",
      },
      keyframes: {
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
        moveUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
        moveUpSmall: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        expand: {
          "0%": {
            opacity: "0",
            transform: "scale(1)",
          },
          "30%": {
            opacity: "1",
          },
          "80%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(30)",
            opacity: "0",
          },
        },
        "expand-large": {
          "0%": {
            opacity: "0",
            transform: "scale(1)",
          },
          "30%": {
            opacity: "1",
          },
          "80%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(96)",
            opacity: "0",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(0.2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translate(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
        fadeOutLeft: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        wiggle: {
          "0%": { transform: "rotate(10deg)" },
          "25%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(20deg)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        flip: {
          to: { rotate: "360deg" },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        line: {
          "0%": { "mask-position-x": "0%" },
          "100%": { "mask-position-x": "100%" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
          "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        bounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1.4s infinite both;",
        "move-up": "moveUp 500ms infinite alternate",
        "move-up-small": "moveUpSmall 500ms infinite alternate",
        "scale-up": "scaleUp 500ms infinite alternate",
        "drip-expand": "expand 500ms ease-in forwards",
        "drip-expand-large": "expand-large 600ms ease-in forwards",
        "toast-enter": "fadeInRight 300ms ease-out",
        "toast-leave": "fadeOutLeft 300ms ease-in forwards",
        "fade-in-up": "fadeInUp 300ms cubic-bezier(0.15, 1, 0.3, 1) forwards",
        wiggle: "wiggle .5s ease-in-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        gradient: "gradient 8s linear infinite",
        meteor: "meteor 5s linear infinite",
        grid: "grid 15s linear infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        flip: "flip calc(var(--spark) * 2) infinite steps(2, end)",
        rotate: "rotate var(--spark) linear infinite both",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        "slide-in-from-left":
          "slideInFromLeft 0.3s cubic-bezier(0.15, 1, 0.3, 1) forwards",
        ripple: "ripple 3400ms ease infinite",
        line: "line 2s linear infinite",
        shimmer: "shimmer 8s infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        "background-position-spin":
          "background-position-spin 3000ms infinite alternate",
        shine: "shine var(--duration) infinite linear",
        pulse: "pulse var(--duration) ease-out infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        "bounce-custom": "bounce 1.3s cubic-bezier(0, 0, 1, 1) infinite",
      },
      transitionTimingFunction: {
        "curve-standard": "cubic-bezier(0.2,0,0,1)",
        "curve-enter": "cubic-bezier(0.1,0.9,0.2,1)",
        "curve-exit": "cubic-bezier(0.4,0,1,1)",
        "curve-linear": "cubic-bezier(0,0,1,1)", // mostly used for opacity transitions
        "curve-magnetic": "cubic-bezier(1,0,0.86,1)",
        "curve-elastic": "cubic-bezier(0,0,0.1,1)",
        "curve-organic": "cubic-bezier(0.35,0,0.65,1)",
      },
    },
    // tremor
    safelist: [
      {
        pattern:
          /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ["hover", "ui-selected"],
      },
      {
        pattern:
          /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ["hover", "ui-selected"],
      },
      {
        pattern:
          /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ["hover", "ui-selected"],
      },
      {
        pattern:
          /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
    ],
  },
} satisfies Config;
