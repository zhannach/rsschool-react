import { rest } from 'msw';

export const handlers = [
  rest.get('https://www.googleapis.com/books/v1/volumes/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 'euweEAAAQBAJ',
        volumeInfo: {
          title: 'JavaScript с нуля',
          imageLinks: {
            thumbnail: '',
          },
          language: 'en',
          authors: ['Adam Freeman'],
          categories: ['Computers'],
          pageCount: 750,
        },
      })
    );
  }),
  rest.get('https://www.googleapis.com/books/v1/volumes', (req, res, ctx) => {
    const q = req.url.searchParams.get('q');
    let items = [
      {
        id: 'euweEAAAQBAJ',
        volumeInfo: {
          title: `React в действии`,
          imageLinks: {
            thumbnail: '',
          },
        },
      },
      {
        id: 'VmGLDwAAQBAJ',
        volumeInfo: {
          title: `Introduction to React`,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=zNedDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
        },
      },
    ];
    if (q === 'JavaScript') {
      items = [
        {
          id: '',
          volumeInfo: {
            title: 'Coding with JavaScript For Dummies',
            imageLinks: {
              thumbnail: '',
            },
          },
        },
      ];
    }

    return res(
      ctx.status(200),
      ctx.json({
        items,
      })
    );
  }),
];

export const errorHandler = [
  rest.get('https://www.googleapis.com/books/v1/volumes', (req, res, ctx) => {
    return res(
      ctx.json({
        items: [],
        totalCards: 0,
      })
    );
  }),
];
