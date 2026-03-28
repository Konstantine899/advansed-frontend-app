// src/shared/ui/FormattedText/FormattedText.tsx
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './FormattedText.module.scss';

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface FormattedTextProps {
  className?: string;
  content?: string;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

export const FormattedText = memo((props: FormattedTextProps) => {
  const {
    className,
    content,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'FormattedText',
  } = props;

  const mods = {
    [cls[align]]: true,
    [cls[size]]: true,
  };

  const additional = [className];

  // Функция для форматирования текста с поддержкой **жирного текста**, [ссылок] и переносов строк
  const formatContent = (text: string) => {
    if (!text) return null;

    // Разделяем текст на строки
    const lines = text.split('\\n');

    return lines.map((line, index) => {
      // Обрабатываем жирный текст **текст**
      let formattedLine = line.replace(
        /\\*\\*(.*?)\\*\\*/g,
        '<strong>$1</strong>',
      );

      // Обрабатываем ссылки [текст](URL)
      formattedLine = formattedLine.replace(
        /\\[(.*?)\\]\\((.*?)\\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
      );

      return (
        <div
          key={index}
          className={cls.line}
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  return (
    <div
      className={classNames(cls.FormattedText, mods, additional)}
      data-testid={dataTestId}
    >
      {content && formatContent(content)}
    </div>
  );
});

FormattedText.displayName = 'FormattedText';
