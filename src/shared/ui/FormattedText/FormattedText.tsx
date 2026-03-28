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

    // Заменяем все возможные варианты переносов строк
    const normalizedText = text
      .replace(/\\\\n/g, '\n') // \\n -> \n
      .replace(/\\n/g, '\n') // \n -> \n
      .replace(/\\r\\n/g, '\n') // \\r\\n -> \n
      .replace(/\\r/g, '\n'); // \\r -> \n

    // Разделяем текст на строки
    const lines = normalizedText.split('\n');

    return lines.map((line, index) => {
      // Пропускаем пустые строки
      if (!line.trim()) return null;

      // Обрабатываем жирный текст **текст**
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // Обрабатываем ссылки [текст](URL)
      formattedLine = formattedLine.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
      );

      // Обрабатываем обычные URL (http/https) - только если они не уже внутри тега <a>
      formattedLine = formattedLine.replace(
        /(https?:\/\/[^\s<]+)(?![^<]*>)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>',
      );

      // Обрабатываем маркированные списки (• элемент) - добавляем отступ
      if (line.trim().startsWith('•')) {
        formattedLine = `<div style="margin-left: 20px;">${formattedLine}</div>`;
      }

      return (
        <div
          key={index}
          className={cls.line}
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    }).filter(Boolean); // Убираем null элементы
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
