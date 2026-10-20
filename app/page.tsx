import Link from 'next/link';

export default function Home() {
  const routes = [
    {
      title: '1. Server Component (по умолчанию)',
      path: '/server-demo',
      desc: 'Выполняется на сервере, console.log в терминале, показывает серверное время.',
      type: 'Server Component',
    },
    {
      title: '2. Client Component (\'use client\')',
      path: '/client-demo',
      desc: 'Интерактивный счетчик кликов со стейтом useState, console.log в браузере.',
      type: 'Client Component',
    },
    {
      title: '3. Server Functions / Actions (\'use server\')',
      path: '/greet-demo',
      desc: 'Клиентский компонент вызывает серверную функцию greet() из actions.ts.',
      type: 'Server Action',
    },
    {
      title: '4. Статическая страница',
      path: '/about',
      desc: 'Простая статическая страница «О нас» по фиксированному адресу /about.',
      type: 'Static Route',
    },
    {
      title: '5. Динамический маршрут (SSG)',
      path: '/blog/nextjs-vvedenie',
      desc: 'Динамический сегмент [slug] со статической генерацией generateStaticParams.',
      type: 'Dynamic Route',
    },
    {
      title: '6. Товар 1 — Ноутбук (Кейс)',
      path: '/products/1',
      desc: 'Серверный компонент загружает данные товара, клиентский — кнопка «В корзину».',
      type: 'Server + Client',
    },
    {
      title: '7. Товар 2 — Мышь (Кейс)',
      path: '/products/2',
      desc: 'Проверка динамического маршрута /products/[id] для второго товара.',
      type: 'Server + Client',
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen p-8 sm:p-12 max-w-4xl mx-auto">
      <header className="text-center my-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Лабораторная работа: Next.js App Router
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          Server &amp; Client Components, директивы &apos;use client&apos; и &apos;use server&apos;, статические и динамические маршруты.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {routes.map((r) => (
          <Link
            key={r.path}
            href={r.path}
            className="group block p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all bg-white dark:bg-zinc-900/50 shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {r.type}
              </span>
              <span className="text-xs text-zinc-400 font-mono">{r.path}</span>
            </div>
            <h2 className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {r.title} &rarr;
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              {r.desc}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
