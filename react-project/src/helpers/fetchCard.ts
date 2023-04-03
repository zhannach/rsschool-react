import { BookResponse } from 'types/home';

export const fetchCards = async () => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=search&maxResults=30`
  );
  const books = (await response.json()) as BookResponse;
  return books.items;
};
