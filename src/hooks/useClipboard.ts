import { useEffect, useRef, useState } from "react";

export function useClipboard() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async (text: string) => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setStatus("success");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 4000);
  };
  return { status, copy };
}
