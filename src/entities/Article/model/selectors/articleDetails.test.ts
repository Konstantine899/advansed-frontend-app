// entities/Article/model/selectors/articleDetails.test.ts

import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsIsError,
  getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test.ts', () => {
  test('should return data', () => {
    const data = { id: '1', title: 'subtitle' };
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: true },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: 'error' },
    };
    expect(getArticleDetailsIsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsError(state as StateSchema)).toEqual(undefined);
  });
});
