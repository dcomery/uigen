// The complete state of a hangman game
export interface HangmanState {
  word: string;           // the secret word (uppercase)
  guessedLetters: string[]; // letters guessed so far (uppercase)
  maxWrongGuesses: number;  // default 6
}

// Derived status — computed from state, not stored
export type GameStatus = 'playing' | 'won' | 'lost';

// A word entry in the word bank
export interface WordEntry {
  word: string;
  hint: string;
}

export function getWrongGuesses(state: HangmanState): string[] {
  return state.guessedLetters.filter(letter => !state.word.includes(letter));
}

export function getMaskedWord(state: HangmanState): string[] {
  return state.word.split('').map(char =>
    state.guessedLetters.includes(char) ? char : '_'
  );
}

export function getGameStatus(state: HangmanState): GameStatus {
  const masked = getMaskedWord(state);
  if (masked.every(char => char !== '_')) {
    return 'won';
  }
  if (getWrongGuesses(state).length >= state.maxWrongGuesses) {
    return 'lost';
  }
  return 'playing';
}
