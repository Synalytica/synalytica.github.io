"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  /**
   * Milliseconds per character. Smaller = faster typing.
   * Defaults to 30 ms.
   */
  speed?: number;
}

/**
 * Simple typewriter-style text animation that reveals the provided text
 * one character at a time. Wraps naturally when it reaches the end of the
 * available width.
 */
export default function TypewriterText({
  text,
  speed = 30,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i += 1;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="typewriter-caret">{displayed}</span>;
}
