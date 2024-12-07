import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

import CountBtn from "@/components/custom/count-button";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <main className="font-sans antialiased flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex gap-4 items-center">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="w-32" alt="Vite logo" />
          </a>
          <span className="text-6xl">+</span>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="w-32" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <a
          href="https://ui.shadcn.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Badge variant="outline">shadcn/ui</Badge>
        </a>
        <CountBtn />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </main>
  );
}

export default App;
