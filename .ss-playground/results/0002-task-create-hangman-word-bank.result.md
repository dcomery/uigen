# Result: Task: Create Hangman Word Bank

**Task ID:** 0021
**Step:** 2
**Worker:** moonshotai/Kimi-K2.6
**Tokens:** 2687
**Timestamp:** 2026-06-12T20:22:52.626Z

## Worker Output

 **File to create:** `src/app/hangman/words.ts`

```ts
import { WordEntry } from './types'

export const WORD_BANK: WordEntry[] = [
  // Programming (mixed lengths)
  { word: 'JAVA', hint: 'An island and a popular programming language' },
  { word: 'RUBY', hint: 'A red gemstone and an elegant programming language' },
  { word: 'REACT', hint: 'A library for building user interfaces' },
  { word: 'CODING', hint: 'The act of writing instructions for computers' },
  { word: 'PYTHON', hint: 'A constricting snake and a versatile programming language' },
  { word: 'GITHUB', hint: 'A platform for version control and collaboration' },
  { word: 'JAVASCRIPT', hint: 'A popular web programming language' },
  { word: 'TYPESCRIPT', hint: 'JavaScript with static types' },
  { word: 'COMPUTER', hint: 'An electronic device for processing data' },

  // Animals (mixed lengths)
  { word: 'LION', hint: 'The king of the jungle' },
  { word: 'TIGER', hint: 'A large striped wild cat' },
  { word: 'GIRAFFE', hint: 'A tall African mammal with a long neck' },
  { word: 'ELEPHANT', hint: 'The largest land animal with a trunk' },

  // Countries (mixed lengths)
  { word: 'JAPAN', hint: 'An island nation in East Asia known for sushi' },
  { word: 'FRANCE', hint: 'A European country known for the Eiffel Tower' },
  { word: 'BRAZIL', hint: 'The largest country in South America' },
  { word: 'CANADA', hint: 'A North American country known for maple syrup' },
  { word: 'AUSTRALIA', hint: 'A continent and country surrounded by oceans' },

  // Food (mixed lengths)
  { word: 'PIZZA', hint: 'An Italian dish with cheese and toppings' },
  { word: 'BURGER', hint: 'A sandwich consisting of a cooked patty' },
  { word: 'PANCAKE', hint: 'A flat cake often eaten for breakfast' },
  { word: 'CHOCOLATE', hint: 'A sweet treat made from cacao beans' },

  // Science (mixed lengths)
  { word: 'ATOM', hint: 'The basic unit of a chemical element' },
  { word: 'PLANET', hint: 'A celestial body orbiting a star' },
  { word: 'GALAXY', hint: 'A massive system of stars, gas, and dark matter' },
  { word: 'ECLIPSE', hint: 'An astronomical event that blocks light' },
]

// Returns a random WordEntry from WORD_BANK
export function getRandomWord(): WordEntry {
  const randomIndex = Math.floor(Math.random() * WORD_BANK.length)
  return WORD_BANK[randomIndex]
}
```