'use client';

import { useState } from 'react';

export default function ClientDemo() {
  const [count, setCount] = useState(0);

  console.log('Это сообщение появится в консоли браузера');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-4xl font-bold text-foreground">Client Component</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-full bg-foreground text-background px-8 py-3 text-lg font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Кликов: {count}
      </button>
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md text-center">
        Этот компонент помечен директивой &apos;use client&apos;. Он использует useState и onClick,
        которые доступны только в браузере. Сообщение из console.log появится
        в консоли браузера (F12 → Console).
      </p>
    </div>
  );
}
