// features/articleRecommendationsList/ui/ArticleRecommendationsList.tsx
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      data: articles,
      isLoading,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) return null;

    return (
      <VStack
        data-testid="ArticleRecommendationList"
        gap="8"
        className={classNames('', {}, [className])}
      >
        <Text size={TextSize.L} text={t('Рекомендуем')} />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    );
  },
);
