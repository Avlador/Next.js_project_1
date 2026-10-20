'use client';

import { useState } from 'react';

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => setAdded(true)}
      disabled={added}
      className={`rounded-full px-8 py-3 text-lg font-medium transition-colors ${
        added
          ? 'bg-green-600 text-white cursor-not-allowed'
          : 'bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]'
      }`}
    >
      {added ? '✓ Добавлено!' : 'В корзину'}
    </button>
  );
}
