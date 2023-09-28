// pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.tsx
import { useTranslation } from "react-i18next";
import { memo, Suspense, useCallback } from "react";
import { useSelector } from "react-redux";
import { Text, TextSize } from "@/shared/ui/Text";
import { addCommentForArticle, AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Loader } from "@/shared/ui/Loader";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import cls from "../ArticleDetailsPage/ArticleDetailsPage.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

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
        const dispatch = useAppDispatch();

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
            <VStack gap="8" max className={classNames("", {}, [className])}>
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
