export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-4xl font-bold text-foreground">О нас</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Мы изучаем Next.js.
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md text-center">
        Это статическая страница. Она доступна по фиксированному URL /about.
      </p>
    </main>
  );
}
