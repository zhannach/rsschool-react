export type Book = {
  authors: string[];
  categories: string[];
  country: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  pageCount: number;
  title: string;
  publishedDate: number;
  infoLink: string;
  description: string;
};

export type BookResponse = {
  items: BookData[];
  kind: string;
  totalItems: number;
};

export type BookData = {
  id: string;
  volumeInfo: Book;
};
