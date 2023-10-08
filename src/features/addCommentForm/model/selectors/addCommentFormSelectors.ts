// features/AddCommentForm/model/selectors/addCommentFormSelectors.ts

import { StateSchema } from '@/app/providers/StoreProvider';

// нельзя использовать оператор || если в input мы введем null то он отработает не корректно
// null для js это false значение. В таком случае для null у нас подставится пустая строка
// В таком случае лучше использовать Nullish operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// Пустой строкой state проинициализируется только тогда когда левый операнд у нас null или undefined
export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
