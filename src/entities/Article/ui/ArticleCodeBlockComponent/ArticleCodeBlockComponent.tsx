import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = (
  props: ArticleCodeBlockComponentProps
) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <div>ArticleCodeBlockComponent</div>
    </div>
  );
};
