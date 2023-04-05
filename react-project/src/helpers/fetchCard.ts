import { BookResponse, BookData } from 'types/home';

export const fetchCards = async (value: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value || 'javascript'}&maxResults=30`
    );
    const books = (await response.json()) as BookResponse;
    const filterData = books.items.filter((el) => el.volumeInfo.imageLinks);
    return filterData;
  } catch (error) {
    throw Error('something went wrong');
  }
};

export const fetchCard = async (id: string) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const book = (await response.json()) as BookData;
    return book;
  } catch (error) {
    throw Error('something went wrong');
  }
};
