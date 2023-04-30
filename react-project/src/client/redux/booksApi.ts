import { BookData, BookResponse } from './../types/home';
import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes' }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (fetchArg: { value: string; maxResults: number; startIndex: number }) => ({
        url: `https://www.googleapis.com/books/v1/volumes?q=${
          fetchArg.value || 'react'
        }&maxResults=${fetchArg.maxResults}&startIndex=${fetchArg.startIndex}`,
      }),
      transformResponse: (response: BookResponse) => {
        const items = response.items
          ? response.items.filter((el: BookData) => el.volumeInfo.imageLinks)
          : [];
        return { cards: items, totalCards: response.totalItems };
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
