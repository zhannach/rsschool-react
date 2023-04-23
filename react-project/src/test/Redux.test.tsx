import formCardsSlice, { addFormCard } from '../client/redux/slices/formCardsSlice';
import searchSlice, { setSearch } from '../client/redux/slices/searchSlice';

const fakeItem = {
  author: 'fake author',
  publishDate: '2018-05-10',
  language: 'English',
  subscribe: ['author'],
  cover: 'softcover',
  img: '',
};

describe('formCardsSlice', () => {
  it('return initial state', () => {
    const result = formCardsSlice(undefined, { type: '' });
    expect(result).toEqual({ formCards: [] });
  });

  it('add formCard', () => {
    const action = { type: addFormCard.type, payload: fakeItem };
    const result = formCardsSlice({ formCards: [] }, action);
    expect(result.formCards).toHaveLength(1);
  });
});

describe('searchSlice', () => {
  it('return initial state', () => {
    const result = searchSlice(undefined, { type: '' });
    expect(result).toEqual({ value: '' });
  });

  it('set searchValue', () => {
    const action = { type: setSearch.type, payload: 'JavaScript' };
    const result = setSearch(action.payload);
    expect(result.payload).toEqual('JavaScript');
  });
});
