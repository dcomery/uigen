import { GameStatus } from './types'

interface HangmanWordDisplayProps {
  maskedWord: string[]
  gameStatus: GameStatus
}

export default function HangmanWordDisplay({ maskedWord, gameStatus }: HangmanWordDisplayProps) {
  const letterColor =
    gameStatus === 'won'
      ? 'text-green-400'
      : gameStatus === 'lost'
      ? 'text-red-400'
      : 'text-white'

  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {maskedWord.map((char, idx) => (
        <span
          key={idx}
          className={`
            font-mono text-4xl uppercase font-bold
            ${char === '_' ? 'text-gray-500 border-b-2 border-gray-500 w-8 inline-block text-center' : letterColor}
          `}
        >
          {char === '_' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}
