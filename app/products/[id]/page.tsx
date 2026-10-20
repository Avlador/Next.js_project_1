import AddToCartButton from './add-to-cart-button';

async function getProduct(id: string) {
  const products: Record<string, { name: string; price: number }> = {
    '1': { name: 'Ноутбук', price: 75000 },
    '2': { name: 'Мышь', price: 1500 },
  };
  return products[id] || null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
        <h1 className="text-4xl font-bold text-red-500">Товар не найден</h1>
        <p className="text-zinc-500">Товар с id &quot;{id}&quot; не существует в базе данных.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-4xl font-bold text-foreground">{product.name}</h1>
      <p className="text-2xl text-zinc-600 dark:text-zinc-400">
        Цена: {product.price.toLocaleString('ru-RU')} ₽
      </p>
      <AddToCartButton />
      <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-md text-center">
        Server Component получает данные о товаре, а Client Component (кнопка)
        обеспечивает интерактивность. Это паттерн разделения серверной и клиентской логики.
      </p>
    </div>
  );
}
