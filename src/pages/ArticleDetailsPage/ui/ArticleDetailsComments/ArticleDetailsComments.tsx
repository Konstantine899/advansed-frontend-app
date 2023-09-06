// pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx
import { useTranslation } from "react-i18next";
import { memo, Suspense, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import AddCommentForm from "@/features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import { CommentList } from "@/entities/Comment";
import { addCommentForArticle } from "@/features/addCommentForm/model/services/addCommentForArticle/addCommentForArticle";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Loader } from "@/shared/ui/Loader/Loader";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import cls from "../ArticleDetailsPage/ArticleDetailsPage.module.scss";

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useDispatch();

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    return (
      <VStack gap="8" max className={classNames("", {}, [])}>
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          text={t("Комментарии")}
        />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </VStack>
    );
  }
);
