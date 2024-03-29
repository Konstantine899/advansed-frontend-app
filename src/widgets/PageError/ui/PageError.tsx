// src/widgets/PageError/ui/PageError.tsx
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload(); // Перезагружаю страницу
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Произошла непредвиденная ошибка')}
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
});
