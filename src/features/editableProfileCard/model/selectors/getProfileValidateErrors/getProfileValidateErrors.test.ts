// features/editableProfileCard/model/selectors/getProfileValidateErrors.test.ts
import { StateSchema } from '@/app/providers/StoreProvider';

import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from '../getProfileValidateErrors/getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.NO_DATA,
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.SERVER_ERROR,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
