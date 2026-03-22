import ArticleErrorFallbackEN from '@/shared/assets/icons/fallbacks/article-error-fallback-en.svg';
import ArticleErrorFallbackRU from '@/shared/assets/icons/fallbacks/article-error-fallback-ru.svg';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageFallback.module.scss';

export interface ArticleImageFallbackProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  svgWidth?: number; // Явный размер для SVG
  svgHeight?: number; // Явный размер для SVG
}

export const ArticleImageFallback = memo((props: ArticleImageFallbackProps) => {
  const {
    className,
    width = '100%',
    height = '100%',
    svgWidth = 120,
    svgHeight = 120,
  } = props;

  const { i18n } = useTranslation();
  const FallbackSVG =
    i18n.language === 'ru' ? ArticleErrorFallbackRU : ArticleErrorFallbackEN;

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`${cls.container} ${className || ''}`}
      style={containerStyle}
    >
      <FallbackSVG className={cls.svg} width={svgWidth} height={svgHeight} />
    </div>
  );
});
