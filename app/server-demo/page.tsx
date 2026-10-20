export default async function ServerDemo() {
  const time = new Date().toISOString();
  console.log('Это сообщение появится в терминале, а не в браузере');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-4xl font-bold text-foreground">Server Component</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Время на сервере: <code className="rounded bg-black/[.06] px-2 py-1 font-mono dark:bg-white/[.08]">{time}</code>
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md text-center">
        Этот компонент выполняется исключительно на сервере. Сообщение из console.log
        появится в терминале (npm run dev), но не в консоли браузера.
      </p>
    </div>
  );
}
