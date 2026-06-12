# Result: Task: Create Hangman SVG Drawing Component

**Task ID:** 0022
**Step:** 3
**Worker:** moonshotai/Kimi-K2.6
**Tokens:** 3510
**Timestamp:** 2026-06-12T20:25:49.127Z

## Worker Output

 ```tsx
// src/app/hangman/HangmanDrawing.tsx
interface HangmanDrawingProps {
  wrongGuessCount: number; // 0–6
}

export default function HangmanDrawing({ wrongGuessCount }: HangmanDrawingProps) {
  return (
    <div className="flex justify-center">
      <svg width="200" height="250" viewBox="0 0 200 250">
        {/* Gallows — always visible */}
        <line x1="10" y1="240" x2="130" y2="240" stroke="#e5e7eb" strokeWidth="4" />
        <line x1="40" y1="240" x2="40" y2="20" stroke="#e5e7eb" strokeWidth="4" />
        <line x1="40" y1="20" x2="140" y2="20" stroke="#e5e7eb" strokeWidth="4" />
        <line x1="140" y1="20" x2="140" y2="50" stroke="#e5e7eb" strokeWidth="4" />

        {/* Head */}
        {wrongGuessCount >= 1 && (
          <circle cx="140" cy="65" r="15" stroke="#e5e7eb" strokeWidth="4" fill="none" />
        )}

        {/* Body */}
        {wrongGuessCount >= 2 && (
          <line x1="140" y1="80" x2="140" y2="140" stroke="#e5e7eb" strokeWidth="4" />
        )}

        {/* Left arm */}
        {wrongGuessCount >= 3 && (
          <line x1="140" y1="90" x2="110" y2="120" stroke="#e5e7eb" strokeWidth="4" />
        )}

        {/* Right arm */}
        {wrongGuessCount >= 4 && (
          <line x1="140" y1="90" x2="170" y2="120" stroke="#e5e7eb" strokeWidth="4" />
        )}

        {/* Left leg */}
        {wrongGuessCount >= 5 && (
          <line x1="140" y1="140" x2="110" y2="190" stroke="#e5e7eb" strokeWidth="4" />
        )}

        {/* Right leg */}
        {wrongGuessCount >= 6 && (
          <line x1="140" y1="140" x2="170" y2="190" stroke="#e5e7eb" strokeWidth="4" />
        )}
      </svg>
    </div>
  );
}
```