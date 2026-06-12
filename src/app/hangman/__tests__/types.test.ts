import { describe, it, expect } from 'vitest'
import {
  getWrongGuesses,
  getMaskedWord,
  getGameStatus,
  HangmanState,
} from '../types'

function makeState(word: string, guessedLetters: string[], maxWrongGuesses = 6): HangmanState {
  return { word, guessedLetters, maxWrongGuesses }
}

describe('getWrongGuesses', () => {
  it('returns empty array when no letters guessed', () => {
    expect(getWrongGuesses(makeState('CAT', []))).toEqual([])
  })

  it('returns only letters not in the word', () => {
    const wrong = getWrongGuesses(makeState('CAT', ['C', 'X', 'Y']))
    expect(wrong).toEqual(['X', 'Y'])
  })

  it('does not include correct guesses', () => {
    const wrong = getWrongGuesses(makeState('CAT', ['C', 'A', 'T']))
    expect(wrong).toEqual([])
  })

  it('returns all guessed letters when none are in word', () => {
    const wrong = getWrongGuesses(makeState('CAT', ['X', 'Y', 'Z']))
    expect(wrong).toEqual(['X', 'Y', 'Z'])
  })
})

describe('getMaskedWord', () => {
  it('returns all underscores when no letters guessed', () => {
    expect(getMaskedWord(makeState('CAT', []))).toEqual(['_', '_', '_'])
  })

  it('reveals only the guessed letters that appear in the word', () => {
    expect(getMaskedWord(makeState('CAT', ['C']))).toEqual(['C', '_', '_'])
  })

  it('reveals all positions of a repeated letter', () => {
    expect(getMaskedWord(makeState('LEVEL', ['L']))).toEqual(['L', '_', '_', '_', 'L'])
  })

  it('returns the full word revealed when all letters are guessed', () => {
    expect(getMaskedWord(makeState('CAT', ['C', 'A', 'T']))).toEqual(['C', 'A', 'T'])
  })

  it('does not reveal letters from wrong guesses', () => {
    expect(getMaskedWord(makeState('CAT', ['X', 'Y']))).toEqual(['_', '_', '_'])
  })
})

describe('getGameStatus', () => {
  it('returns playing at game start', () => {
    expect(getGameStatus(makeState('CAT', []))).toBe('playing')
  })

  it('returns playing with partial correct guesses', () => {
    expect(getGameStatus(makeState('CAT', ['C', 'A']))).toBe('playing')
  })

  it('returns won when all letters in the word have been guessed', () => {
    expect(getGameStatus(makeState('CAT', ['C', 'A', 'T']))).toBe('won')
  })

  it('returns lost when wrong guesses equal maxWrongGuesses', () => {
    expect(getGameStatus(makeState('CAT', ['X', 'Y', 'Z', 'Q', 'W', 'E']))).toBe('lost')
  })

  it('returns lost when wrong guesses exceed maxWrongGuesses', () => {
    expect(getGameStatus(makeState('CAT', ['X', 'Y', 'Z', 'Q', 'W', 'E', 'R']))).toBe('lost')
  })

  it('returns playing when wrong count is below max', () => {
    expect(getGameStatus(makeState('CAT', ['X', 'Y', 'Z']))).toBe('playing')
  })

  it('returns won even with wrong guesses if all letters revealed', () => {
    // Won takes precedence over lost check
    expect(getGameStatus(makeState('CAT', ['C', 'A', 'T', 'X', 'Y', 'Z', 'Q']))).toBe('won')
  })
})
