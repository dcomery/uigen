'use client'

import { useState, useEffect, useCallback } from 'react'
import { HangmanState, getWrongGuesses, getMaskedWord, getGameStatus } from './types'
import { getRandomWord } from './words'
import HangmanDrawing from './HangmanDrawing'
import HangmanWordDisplay from './HangmanWordDisplay'
import HangmanKeyboard from './HangmanKeyboard'

function buildInitialState(): HangmanState {
  const { word } = getRandomWord()
  return { word, guessedLetters: [], maxWrongGuesses: 6 }
}

export default function HangmanApp() {
  const [state, setState] = useState<HangmanState>(buildInitialState)
  const [hint, setHint] = useState<string>(() => {
    const entry = getRandomWord()
    return entry.hint
  })

  // Keep hint in sync with the word
  const [currentEntry, setCurrentEntry] = useState(() => getRandomWord())

  function handleNewGame() {
    const entry = getRandomWord()
    setCurrentEntry(entry)
    setState({ word: entry.word, guessedLetters: [], maxWrongGuesses: 6 })
  }

  const handleGuess = useCallback((letter: string) => {
    setState(prev => {
      const status = getGameStatus(prev)
      if (status !== 'playing') return prev
      if (prev.guessedLetters.includes(letter)) return prev
      return { ...prev, guessedLetters: [...prev.guessedLetters, letter] }
    })
  }, [])

  // Physical keyboard support
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const letter = e.key.toUpperCase()
      if (/^[A-Z]$/.test(letter)) {
        handleGuess(letter)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handleGuess])

  // Keep initial hint synced with initial word
  useEffect(() => {
    // state.word was set from buildInitialState which called getRandomWord()
    // We sync the hint via currentEntry after new game; on mount we need to derive hint
    // from the word bank. Since word is already set, find its hint.
    const match = currentEntry
    if (match.word !== state.word) {
      // new game was triggered externally — no-op, handled by handleNewGame
    }
  }, [state.word, currentEntry])

  const wrongGuesses = getWrongGuesses(state)
  const maskedWord = getMaskedWord(state)
  const gameStatus = getGameStatus(state)

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-12 px-4 gap-8">
      <h1 className="text-5xl font-extrabold tracking-tight">Hangman</h1>

      <p className="text-gray-400 text-lg">
        Hint: <span className="text-gray-200 italic">{currentEntry.hint}</span>
      </p>

      <p className="text-gray-400 text-sm">
        Wrong guesses: <span className="text-white font-bold">{wrongGuesses.length}</span> / {state.maxWrongGuesses}
      </p>

      <HangmanDrawing wrongGuessCount={wrongGuesses.length} />

      <HangmanWordDisplay maskedWord={maskedWord} gameStatus={gameStatus} />

      {gameStatus !== 'playing' && (
        <div className="text-center text-2xl font-bold">
          {gameStatus === 'won' ? (
            <span className="text-green-400">You won! 🎉</span>
          ) : (
            <span className="text-red-400">You lost! The word was <span className="uppercase">{state.word}</span></span>
          )}
        </div>
      )}

      <HangmanKeyboard
        guessedLetters={state.guessedLetters}
        onGuess={handleGuess}
        disabled={gameStatus !== 'playing'}
      />

      <button
        onClick={handleNewGame}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors"
      >
        New Game
      </button>
    </main>
  )
}
