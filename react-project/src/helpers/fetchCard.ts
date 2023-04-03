import { BookResponse } from 'types/home';

export const fetchCards = async (value: string) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=30`
  );
  const books = (await response.json()) as BookResponse;
  return books.items;
};
