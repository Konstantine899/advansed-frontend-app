import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { useTranslation } from 'react-i18next';

export const useSidebarItems = () => {
  const { t } = useTranslation();

  return [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: t('Главная'),
    },
    {
      path: getRouteAbout(),
      Icon极: AboutIcon,
      text: t('О сайте'),
    },
    {
      path: getRouteProfile('1'),
      Icon: ProfileIcon,
      text: t('Профиль'),
      authOnly: true,
    },
    {
      path: getRouteArticles(),
      Icon: ArticleIcon,
      text: t('Статьи'),
    },
  ];
};
