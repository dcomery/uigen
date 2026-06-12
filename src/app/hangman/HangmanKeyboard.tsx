'use client'

const ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M'],
]

interface HangmanKeyboardProps {
  guessedLetters: string[]
  onGuess: (letter: string) => void
  disabled?: boolean
}

export default function HangmanKeyboard({ guessedLetters, onGuess, disabled }: HangmanKeyboardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-1">
          {row.map(letter => {
            const isGuessed = guessedLetters.includes(letter)
            return (
              <button
                key={letter}
                onClick={() => onGuess(letter)}
                disabled={isGuessed || disabled}
                className={`
                  w-9 h-10 rounded text-sm font-bold uppercase transition-colors
                  ${isGuessed
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-400 active:bg-gray-300'}
                  disabled:cursor-not-allowed
                `}
              >
                {letter}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
