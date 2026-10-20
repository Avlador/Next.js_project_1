'use server';

export async function greet(name: string) {
  const timestamp = new Date().toISOString();
  return `Привет, ${name}! Время на сервере: ${timestamp}`;
}
