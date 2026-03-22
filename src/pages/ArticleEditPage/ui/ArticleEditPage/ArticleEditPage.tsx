// pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage.tsx
import { ArticleCreateForm } from '@/features/articleCreateForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit ? t(`Редактирование статьи с ID = ${id}`) : <ArticleCreateForm />}
    </Page>
  );
});

export default ArticleEditPage;
