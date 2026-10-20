'use client';

import { useState } from 'react';
import { greet } from '../actions';

export default function GreetDemo() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-4xl font-bold text-foreground">Server Function Demo</h1>
      <button
        onClick={async () => setMessage(await greet('Студент'))}
        className="rounded-full bg-foreground text-background px-8 py-3 text-lg font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Поздороваться
      </button>
      {message && (
        <p className="text-lg text-zinc-600 dark:text-zinc-400 bg-black/[.04] dark:bg-white/[.06] rounded-lg px-6 py-4">
          {message}
        </p>
      )}
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md text-center">
        Функция greet выполняется на сервере (директива &apos;use server&apos;), но вызывается
        из клиентского компонента. Next.js автоматически создаёт сетевой запрос.
      </p>
    </div>
  );
}
