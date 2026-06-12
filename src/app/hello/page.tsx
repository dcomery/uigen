import Link from 'next/link'

export const metadata = {
  title: 'Hello World | UIGen',
  description: 'A simple Hello World page',
}

export default function HelloPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hello, World!
        </h1>
        <p className="text-lg text-gray-400 sm:text-xl">
          Welcome to UIGen
        </p>
        <Link
          href="/"
          className="mt-4 text-sm text-gray-400 transition-colors hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
