export async function generateStaticParams() {
  return [
    { slug: 'nextjs-vvedenie' },
    { slug: 'react-osnovy' },
  ];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <article className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-4xl font-bold text-foreground">Статья: {slug}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md text-center">
        Это динамический маршрут. Параметр slug извлечён из URL.
        В Next.js 15+ params — это Promise, который нужно await-ить.
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md text-center">
        При сборке (npm run build) будут заранее сгенерированы страницы
        для slug: &quot;nextjs-vvedenie&quot; и &quot;react-osnovy&quot; (generateStaticParams).
      </p>
    </article>
  );
}
