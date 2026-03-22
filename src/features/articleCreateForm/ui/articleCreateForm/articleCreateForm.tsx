import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useToast } from '@/shared/lib/hooks/useToast';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createArticle } from '../../model/services/createArticle/createArticle';

interface ArticleCreateFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const ArticleCreateForm = memo((props: ArticleCreateFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [img, setImg] = useState('');
  const [type, setType] = useState<ArticleType>(ArticleType.IT);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleCreate = useCallback(async () => {
    if (!title || !subtitle) {
      const errorMessage = t('Заполните обязательные поля');
      setError(errorMessage);
      showToast(errorMessage, 'warning');
      return;
    }

    setIsLoading(true);
    setError(undefined);

    try {
      await dispatch(
        createArticle({
          title,
          subtitle,
          img:
            img ||
            'https://tekmedia.org/uploads/posts/2021-04/1617791181_39-prikolno-kartinki-s-krasivim-vidom-prirody-42.jpg',
          type: [type],
          blocks: [],
        }),
      ).unwrap();

      const successMessage = t('Статья успешно создана!');
      showToast(successMessage, 'success');

      setTitle('');
      setSubtitle('');
      setImg('');
      setType(ArticleType.IT);
      onSuccess?.();
    } catch (err) {
      const errorMessage = t('Ошибка при создании статьи');
      setError(errorMessage);
      showToast(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  }, [title, subtitle, img, type, t, onSuccess, dispatch, showToast]);

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <Text title={t('Создание новой статьи')} />

        {error && (
          <Text text={error} theme={TextTheme.PRIMARY} size={TextSize.S} />
        )}

        <Input
          placeholder={t('Введите заголовок')}
          value={title}
          onChange={setTitle}
          autoFocus
        />

        <Input
          placeholder={t('Введите подзаголовок')}
          value={subtitle}
          onChange={setSubtitle}
        />

        <Input
          placeholder={t('URL изображения')}
          value={img}
          onChange={setImg}
        />

        <Select
          label={t('Тип статьи')}
          options={[
            { value: ArticleType.ALL, content: t('Все') },
            { value: ArticleType.IT, content: t('IT') },
            { value: ArticleType.SCIENCE, content: t('Наука') },
            { value: ArticleType.ECONOMICS, content: t('Экономика') },
          ]}
          value={type}
          onChange={(value) => setType(value as ArticleType)}
        />

        <Button onClick={handleCreate} disabled={isLoading} fullWidth>
          {isLoading ? t('Создание...') : t('Создать статью')}
        </Button>
      </VStack>
    </Card>
  );
});
