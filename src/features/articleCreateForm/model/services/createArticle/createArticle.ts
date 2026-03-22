// features/articleCreateForm/model/services/createArticle/createArticle.ts
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArticleCreateFormSchema } from '../../types/articleCreateForm';

interface CreateArticleProps {
  title: string;
  subtitle: string;
  img: string;
  type: ArticleCreateFormSchema['type'];
  blocks: ArticleCreateFormSchema['blocks'];
}

export const createArticle = createAsyncThunk<
  Article,
  CreateArticleProps,
  ThunkConfig<string>
>('articleCreateForm/createArticle', async (articleData, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const user = getUserAuthData(getState());

  if (!user) {
    return rejectWithValue('Пользователь не авторизован');
  }

  try {
    const response = await extra.api.post<Article>('/articles', {
      ...articleData,
      userId: user.id,
      user: {
        // Добавляем полный объект пользователя для JSON Server
        id: user.id,
        username: user.username,
        avatar: user.avatar,
      },
      createdAt: new Date().toISOString(),
      views: 0,
    });

    if (!response.data) {
      throw new Error('No data in response');
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('Ошибка при создании статьи');
  }
});
