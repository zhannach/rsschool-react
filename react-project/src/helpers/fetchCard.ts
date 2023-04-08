import { BookResponse, BookData } from 'types/home';

export const fetchCards = async (value: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value || 'react'}&maxResults=30`
    );
    const books = (await response.json()) as BookResponse;
    if (!books.items || !books.items.length) {
      return [];
    }
    const filterData = books.items.filter((el) => el.volumeInfo.imageLinks);
    return filterData;
  } catch (error) {
    console.error(error);
    throw Error('Something went wrong');
  }
};

export const fetchCard = async (id: string) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const book = (await response.json()) as BookData;
  return book;
};
