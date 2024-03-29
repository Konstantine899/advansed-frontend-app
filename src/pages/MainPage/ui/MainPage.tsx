// src/pages/MainPage.tsx
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <Counter />
      <div>{t('Главная страница')}</div>
    </Page>
  );
});

export default MainPage;
