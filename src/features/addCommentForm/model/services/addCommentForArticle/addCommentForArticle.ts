// features/AddCommentForm/model/services/addCommentForArticle/addCommentForArticle.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "@/entities/Comment";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getUserAuthData } from "@/entities/User";
import { getArticleDetailsData } from "@/entities/Article";
import { fetchCommentsByArticleId } from "@/pages/ArticleDetailsPage";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(`articleDetails/addCommentForArticle`, async (text, thunkAPI) => {
  const {
 dispatch, extra, rejectWithValue, getState
} = thunkAPI;
  /* Достаю данные из state */
  const userData = getUserAuthData(getState()); // достаю данные о пользователе
  const article = getArticleDetailsData(getState()); // получаю статью

  if (!userData || !text || !article) {
    return rejectWithValue(`no data`);
  }

  try {
    const response = await extra.api.post<Comment>(`/comments`, {
      articleId: article.id,
      userId: userData.id,
      text,
    });
    /* если данные с сервера не пришли, выбрасываю ошибку */
    if (!response.data) {
      throw new Error();
    }

    /* для обновления interface снова запрашиваю статью */
    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (error) {
    return rejectWithValue(`error`);
  }
});
