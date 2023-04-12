import { BookData, BookResponse } from './../types/home';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes' }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (value) => ({
        url: `https://www.googleapis.com/books/v1/volumes?q=${value || 'react'}&maxResults=30`,
      }),
      transformResponse: (response: BookResponse) => {
        const filterData = response.items.filter((el: BookData) => el.volumeInfo.imageLinks);
        return filterData;
      },
    }),
    getCard: builder.query({
      query: (id) => ({
        url: `https://www.googleapis.com/books/v1/volumes/${id}`,
      }),
      transformResponse: (response: BookData) => {
        return response.volumeInfo;
      },
    }),
  }),
});

export const { useGetCardsQuery, useGetCardQuery } = booksApi;
